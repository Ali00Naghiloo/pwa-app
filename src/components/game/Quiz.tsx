import { useEffect, useState } from "react";
import { Button, LinearProgress } from "@mui/material";
import {
  nextGameRound,
  setGameRound,
} from "../../../reducers/gameRoundReducer";
import { useSelector, useDispatch } from "react-redux";
import { initReactI18next, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import i18next from "i18next";

type propType = {
  values: {
    x: number;
    y: number;
  };
};
type options = { content: number; isCorrect: boolean }[];

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          en: "good job!",
          pr: "!آفرین",
          ar: "!أحسنت",
          fr: "bon travail!",
          gr: "Gut gemacht!",
          tr: "aferin!",
          kr: "잘했어요",
          ch: "好工作",
          in: "kerja bagus",
          ru: "хорошая работа",
          sp: "buen trabajo",
          pu: "bom trabalho",
          jp: "よくできた",
          it: "buon lavoro",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const Quiz = ({ values }: propType) => {
  const navigate = useNavigate();
  const [options, setOptions] = useState<options>([]);
  const [corrects, setCorrects] = useState(0);
  const [wrongs, setWrongs] = useState(0);
  const [result, setResult] = useState(0);
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang");
  // const gender = localStorage.getItem("gender");

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
        isCorrect: false,
      },
      {
        content: values.x + values.y + 3,
        isCorrect: false,
      },
      {
        content: values.x + 5 + values.y,
        isCorrect: false,
      },
    ]);

    if (corrects === 3) {
      toast.success(t(lang ? lang : ""));
      setResult((current) => current + 3);
      setCorrects(0);
    }
    if (wrongs === 3) {
      toast.warn(t(lang ? lang : ""));
      setWrongs(0);
    }
    if (gameRound > 10) {
      setResult((current) => current + corrects);
    }
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="quiz-box">
        {gameRound <= 10 ? (
          <>
            <div>round {gameRound}</div>
            <p>{`${values.x} + ${values.y} = ?`}</p>
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
                  option.isCorrect
                    ? setCorrects((current) => current + 1)
                    : setWrongs((current) => current + 1);
                }}
              >
                {option.content}
              </Button>
            </>
          ))
        ) : (
          <>
            <p>Correct Answears : {result}</p>
            <Button
              onClick={() => {
                dispatch(setGameRound(1));
                setCorrects(0);
                setWrongs(0);
                setResult(0);
                navigate("/game");
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
