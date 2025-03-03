// import { useState, useEffect } from "react";

// const useFetchById = (id) => {
//   const [pokemonData, setPokemonData] = useState(null);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         if (!response.ok) throw new Error("Failed to fetch Pokémon data");
//         const data = await response.json();
//         setPokemonData({
//           id: data.id,
//           name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
//           sprites: data.sprites,
//         });
//         setError(false);
//       } catch (err) {
//         console.error(err.message);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPokemonData();
//   }, [id]);

//   return { pokemonData, error, loading };
// };

// Simple fetch function that doesn't use hooks (for use outside components)
const fetchPokemonById = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) throw new Error("Failed to fetch Pokémon data");
    const data = await response.json();
    return {
      id: data.id,
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      sprites: data.sprites,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchPokemonById };
