import { Button, LinearProgress } from "@mui/material";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const Game = () => {
  const [gameRound, setGameRound] = useState(1);
  const [corrects, setCorrects] = useState(0);
  const [searchParams] = useSearchParams();

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function plusGame(level: number | null) {
    console.log(level);
    let i, j, k, r, s, q, x, y;
    i = getRandomInt(1, 5);
    j = getRandomInt(0, 0);
    k = getRandomInt(0, 0);
    x = i + j + k;
    r = getRandomInt(1, 10 - i);
    s = getRandomInt(0, 0);
    q = getRandomInt(0, 0);
    y = r + s + q;

    return {
      quiz: `${x} + ${y}`,
      options: {
        1: x + y,
        2: x + y + 5,
        3: x + y - 5,
        4: x - y,
      },
    };
  }

  return (
    <div className="game-container">
      <Button className="back">
        <Link to="/menu">
          <KeyboardBackspaceOutlinedIcon />
        </Link>
      </Button>
      <div className="quiz-box">
        {gameRound <= 10 ? (
          <>
            <div>round {gameRound}</div>
            <p>{`${plusGame(gameRound).quiz}`}</p>
          </>
        ) : (
          <>
            <p>done</p>
          </>
        )}
      </div>
      <div className="options-box">
        {gameRound <= 10 ? (
          <>
            <Button
              onClick={() => {
                setGameRound((curr) => curr + 1);
                setCorrects((curr) => curr + 1);
              }}
            >
              {plusGame(gameRound).options[1]}
            </Button>
            <Button onClick={() => setGameRound((curr) => curr + 1)}>
              {plusGame(gameRound).options[2]}
            </Button>
            <Button onClick={() => setGameRound((curr) => curr + 1)}>
              {plusGame(gameRound).options[3]}
            </Button>
            <Button onClick={() => setGameRound((curr) => curr + 1)}>
              {plusGame(gameRound).options[4]}
            </Button>
          </>
        ) : (
          <>
            <p>Correct Answears : {corrects}</p>
          </>
        )}
      </div>

      {gameRound <= 10 ? (
        <div className="progress">
          <LinearProgress
            sx={{ width: "80%", borderRadius: "13px" }}
            color="inherit"
            variant="determinate"
            value={gameRound * 10}
          />
          <p>{gameRound}/10</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
