import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { clearSelectedPokemon } from './slices/pokemonSlice';
import './PokemonDetailedCard.css';
import { clearAuth } from './slices/auth';

const PokemonDetailedCard = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleClose = () => {
    dispatch(clearSelectedPokemon());
    navigate(-1);
  };

  const handleLogout = () => {
    dispatch(clearAuth());
    navigate('/login');
  };

  if (!selectedPokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="pokemon-detailed-container mt-5">
      <Button variant="danger" onClick={handleLogout} className="mb-4">
        Logout
      </Button>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="pokemon-detailed-card shadow-lg">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title className="pokemon-name mb-0" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                {selectedPokemon.name}
              </Card.Title>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Card.Header>
            <Card.Img variant="top" src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            <Card.Body>
              <Card.Text><strong>Weight:</strong> {selectedPokemon.weight}</Card.Text>
              <Card.Text><strong>Height:</strong> {selectedPokemon.height}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PokemonDetailedCard;
