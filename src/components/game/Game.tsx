import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Game = () => {
  const [gameRound, setGameRound] = useState(1);
  return (
    <>
      <Button>
        <Link to="/menu">Back</Link>
      </Button>
      {gameRound <= 10 ? (
        <Box>
          <div>round {gameRound}</div>
          <Button
            onClick={() => setGameRound((curr) => curr + 1)}
          >{`=>`}</Button>
        </Box>
      ) : (
        <>
          <p>done</p>
        </>
      )}
    </>
  );
};

export default Game;
