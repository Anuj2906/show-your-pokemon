import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PokemonBreifCard from './PokemonBreifCard';
import { setSelectedPokemon } from './slices/pokemonSlice';
import { clearAuth } from './slices/auth';
import './PokemonCollection.css';

const PokemonCollection = () => {
  const [pokemons, setPokemons] = useState([]);
  const [apiOffset, setApiOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();

  // fetches array of pokemons
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8&offset=${apiOffset}`);
      if (response.data.results) setPokemons(response.data.results);
      else {
        throw new Error('Failed to fetch data');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokemons data:', error);
      setError('Error fetching Pokemons data.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  });

  const handlePageChange = (newOffset) => {
    setApiOffset(newOffset);
  };

  // handler for card click
  const handleCardClick = async (pokemon) => {
    try {
      const response = await axios.get(pokemon.url);
      dispatch(setSelectedPokemon(response.data));
      navigate(`/auth/${username}/${pokemon.name}`);
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  };
  // logout handler
  const handleLogout = () => {
    dispatch(clearAuth());
    navigate('/login');
  };

  return (
    <Container className="pokemon-collection-container mt-5">
      <Button variant="danger" onClick={handleLogout} className="mb-4">
        Logout
      </Button>
      {loading ? (
        <div className="d-flex justify-content-center">
          <span className="spinner-border" role="status" aria-hidden="true"></span>
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          {error && <p className="text-danger">{error}</p>}
          <Row>
            {pokemons.map((pokemon) => (
              <Col key={pokemon.name} sm={12} md={6} lg={4} xl={3} className="mb-4">
                <div onClick={() => handleCardClick(pokemon)}>
                  <PokemonBreifCard pokemon={pokemon} />
                </div>
              </Col>
            ))}
          </Row>
          <div className="pagination-buttons text-center">
            <Button
              variant="primary"
              onClick={() => handlePageChange(apiOffset - 8)}
              disabled={apiOffset === 0}
              className="m-2"
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={() => handlePageChange(apiOffset + 8)}
              className="m-2"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default PokemonCollection;
