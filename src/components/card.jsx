import "../styles/Card.css";

function PokemonCard({ name, imageUrl, onClick }) {
  return (
    <div
      className="pokemon-card flex flex-col hover:transform hover:scale-105 duration-500 hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="card-header flex justify-center items-center">
        <h2 className="font-bold text-gray-900 text-3xl">{name}</h2>
      </div>
      <div className="h-full m-4 border-gray-900 border-3 rounded-lg flex">
        <img
          src={imageUrl}
          alt={name}
          className="pokemon-image"
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
}

export { PokemonCard };
