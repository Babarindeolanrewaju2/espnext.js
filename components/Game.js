import Image from "next/image";

const game = ({ games }) => {
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="row">
      {games.map((game, index) => (
        <div className="col-md-6" key={index}>
          <div className="single-game">
            <div className="game-image">
              <Image
                src={game?.background || game?.icon_2 || game?.icon_3}
                width="300"
                height="200"
              />
            </div>
            <div className="title">
              <p>{game?.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default game;
