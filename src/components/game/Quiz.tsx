import { useEffect, useState } from "react";
import { Button, LinearProgress } from "@mui/material";
import {
  nextGameRound,
  setGameRound,
} from "../../../reducers/gameRoundReducer";
import { useSelector, useDispatch } from "react-redux";

type propType = {
  values: {
    x: number;
    y: number;
  };
};
type options = { content: number; isCorrect: boolean }[];

const Quiz = ({ values }: propType) => {
  const [options, setOptions] = useState<options>([]);
  const [corrects, setCorrects] = useState(0);

  const gameRound = useSelector((state: any) => state.gameRound.gameRound);
  const dispatch = useDispatch();

  useEffect(() => {
    setOptions([
      {
        content: values.x + values.y,
        isCorrect: true,
      },
      {
        content: values.x + 2 + values.y,
        isCorrect: true,
      },
      {
        content: values.x + values.y + 3,
        isCorrect: true,
      },
      {
        content: values.x + 5 + values.y,
        isCorrect: false,
      },
    ]);
  }, [gameRound]);

  function shuffleArray(array: any) {
    const newArray = [...array]; // Create a copy of the original array

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index

      // Swap elements at indices i and j
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }

  return (
    <>
      <div className="quiz-box">
        {gameRound <= 10 ? (
          <>
            <div>round {gameRound}</div>
            <p>{`${values.x} + ${values.y}`}</p>
          </>
        ) : (
          <>
            <p>done</p>
          </>
        )}
      </div>

      <div className="options-box">
        {gameRound <= 10 ? (
          shuffleArray(options).map((option: any) => (
            <>
              <Button
                key={Math.random() * 1000}
                onClick={() => {
                  dispatch(nextGameRound());
                  option.isCorrect ? setCorrects((current) => current + 1) : "";
                }}
              >
                {option.content}
              </Button>
            </>
          ))
        ) : (
          <>
            <p>Correct Answears : {corrects}</p>
            <Button
              onClick={() => {
                dispatch(setGameRound(0));
              }}
            >
              Repeat
            </Button>
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
    </>
  );
};

export default Quiz;