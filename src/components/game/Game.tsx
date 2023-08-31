import { Button } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Quiz from "./Quiz";
import { useSelector } from "react-redux";

const Game = () => {
  const [searchParams] = useSearchParams();

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function plusGame(level: number | null) {
    level ? "" : "";
    searchParams ? "" : "";

    // if (level && level <= 3) {
    //   const i = getRandomInt(1, 5);
    //   const j = getRandomInt(0, 0);
    //   const k = getRandomInt(0, 0);
    //   const r = getRandomInt(1, 10 - i);
    //   const s = getRandomInt(0, 0);
    //   const q = getRandomInt(0, 0);
    //   const x = i + j + k;
    //   const y = r + s + q;
    //   return {
    //     xy: { x: x, y: y },
    //   };
    // } else if (level && level <= 6) {
    //   const i = getRandomInt(1, 7);
    //   const j = getRandomInt(0, 0);
    //   const k = getRandomInt(0, 0);
    //   const r = getRandomInt(1, 10 - i);
    //   const s = getRandomInt(0, 0);
    //   const q = getRandomInt(0, 0);
    //   const x = i + j + k;
    //   const y = r + s + q;
    //   return {
    //     xy: { x: x, y: y },
    //   };
    // } else if (level && level <= 10) {
    //   const i = getRandomInt(1, 9);
    //   const j = getRandomInt(0, 0);
    //   const k = getRandomInt(0, 0);
    //   const r = getRandomInt(1, 10 - i);
    //   const s = getRandomInt(0, 0);
    //   const q = getRandomInt(0, 0);
    //   const x = i + j + k;
    //   const y = r + s + q;
    //   return {
    //     xy: { x: x, y: y },
    //   };
    // }

    const i = getRandomInt(1, 5);
    const j = getRandomInt(0, 0);
    const k = getRandomInt(0, 0);
    const r = getRandomInt(1, 10 - i);
    const s = getRandomInt(0, 0);
    const q = getRandomInt(0, 0);
    const x = i + j + k;
    const y = r + s + q;
    return {
      xy: { x: x, y: y },
    };
  }

  const gameRound = useSelector((state: any) => state.gameRound.gameRound);

  return (
    <div className="game-container">
      <Link to="/menu">
        <Button className="back">
          <KeyboardBackspaceOutlinedIcon />
        </Button>
      </Link>

      {gameRound ? <Quiz values={plusGame(gameRound).xy} /> : ""}
    </div>
  );
};

export default Game;
