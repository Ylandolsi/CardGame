import React, { useState, useEffect } from "react";
import { PokemonCard } from "../components/card";
import { fetchPokemonById } from "../hooks/useFetch";

function ListCards(props) {
  const [idschoosen, setidschoosen] = useState([]);
  const [idsPokemon, setIdsPokemon] = useState(
    Array.from({ length: 12 }, () => Math.floor(Math.random() * 900) + 1)
  );
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const addtoidschoosen = (id) => {
    setidschoosen([...idschoosen, id]);
  };

  const emptyidschoosen = () => {
    setidschoosen([]);
  };

  const generateRandomIds = () => {
    setIdsPokemon([]);
    let randomIds = [];
    let ok = true;
    let unique = false;
    while (ok) {
      randomIds = Array.from({ length: 12 }, () =>
        Math.min(15, Math.floor(Math.random() * 15) + 1)
      );
      randomIds.forEach((id) => {
        if (!idsPokemon.includes(id)) {
          ok = false;
        }
      });
      if (!ok) {
        unique = [...new Set(randomIds)].length === randomIds.length;
        if (!unique) {
          ok = true;
        }
      }
    }
    setIdsPokemon(randomIds);
  };

  const handleCardClick = (id) => {
    if (idschoosen.includes(id)) {
      alert("You lost");
      props.setMaxScore(Math.max(props.ActualScore, props.MaxScore));
      props.setActualScore(0);

      emptyidschoosen();
    } else {
      addtoidschoosen(id);
      if (idschoosen.length == 12) {
        alert("You win");
        props.setMaxScore(12);
        props.setActualScore(0);
        emptyidschoosen();
      } else props.setActualScore(props.ActualScore + 1);
    }
    generateRandomIds();
  };

  // Fetch data for multiple Pokémon IDs
  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        setLoading(true);
        // same code with await :
        // const results = await Promise.all(
        //   ids.map((id) => fetchPokemonById(id))
        // );
        // setPokemonData(results);
        // setError(false);

        // chaining with promoise
        Promise.all(idsPokemon.map((id) => fetchPokemonById(id)))
          .then((results) => setPokemonData(results)) // Pass a function reference
          .catch(() => setError(false)); // Pass a function reference
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPokemon();
  }, [idsPokemon]);

  if (loading)
    return <div className="text-center py-4">Loading Pokémon...</div>;
  if (error)
    return (
      <div className="text-center py-4 text-red-500">
        Error loading Pokémon!
      </div>
    );

  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-5 mds:grid-cols-3 sm:grid-cols-1   grid-rows-2 gap-4 place-items-center">
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.sprites.front_default}
          onClick={() => handleCardClick(pokemon.id)}
        />
      ))}
    </div>
  );
}

export { ListCards };
