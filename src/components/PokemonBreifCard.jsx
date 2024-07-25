import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './PokemonBreifCard.css';

function PokemonBreifCard({ pokemon, onClick }) {
  const [pokemonSpec, setPokemonSpec] = useState(null);

  const fetchPokemonSpec = async () => {
    try {
      const response = await axios.get(pokemon.url);
      setPokemonSpec(response.data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  useEffect(() => {
    fetchPokemonSpec();
  }, [pokemon.url]);

  if (!pokemonSpec) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="pokemon-card shadow-sm" onClick={onClick}>
      <Card.Img variant="top" src={pokemonSpec.sprites.front_default} alt={pokemon.name} />
      <Card.Body>
        <Card.Title className="pokemon-name" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
          {pokemon.name}
        </Card.Title>
        <Card.Text>Weight: {pokemonSpec.weight}</Card.Text>
        <Card.Text>Height: {pokemonSpec.height}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PokemonBreifCard;
