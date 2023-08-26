import {
  Button,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFormController from "../hook/useFormController";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

const LoginPage = () => {
  const [audio, setAudio] = useState(new Audio("./assets/life.mp3"));
  const [isPlaying, setIsPlaying] = useState(0);
  const { formik } = useFormController();

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        <Button
          onClick={() => {
            isPlaying === 0
              ? (audio.play(), setIsPlaying(1))
              : (audio.pause(), setIsPlaying(0));
          }}
        >
          {isPlaying ? <MusicOffIcon /> : <MusicNoteIcon />}
        </Button>
        <Button
          onClick={() => {
            setAudio(new Audio("./assets/life.mp3"));
            return audio.pause();
          }}
        ></Button>
      </Box>

      <div>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            m: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
          style={{ width: "30%", maxWidth: 400, minWidth: 320, padding: 20 }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          {/* ----- Gender Input ----- */}
          <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Gender
            </InputLabel>
            <Select
              label="Gender"
              style={{ width: "100%" }}
              type={"text"}
              name="gender"
              id="signup-gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
            >
              <MenuItem value={"boy"}>Boy</MenuItem>
              <MenuItem value={"girl"}>Girl</MenuItem>
            </Select>
          </FormControl>

          {/* ----- Lang Input ----- */}
          <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Language
            </InputLabel>
            <Select
              label="Language"
              style={{ width: "100%" }}
              name="lang"
              value={formik.values.lang}
              onChange={formik.handleChange}
              error={formik.touched.lang && Boolean(formik.errors.lang)}
            >
              <MenuItem value={"pr"}>Persian</MenuItem>
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"ar"}>Arabic</MenuItem>
              <MenuItem value={"fr"}>French</MenuItem>
              <MenuItem value={"gr"}>German</MenuItem>
              <MenuItem value={"tr"}>Turkish</MenuItem>
              <MenuItem value={"kr"}>Korean</MenuItem>
              <MenuItem value={"ch"}>Chinease</MenuItem>
              <MenuItem value={"in"}>Indean</MenuItem>
              <MenuItem value={"ru"}>Russian</MenuItem>
              <MenuItem value={"sp"}>Spanish</MenuItem>
              <MenuItem value={"pu"}>Portuguese</MenuItem>
              <MenuItem value={"jp"}>Japenease</MenuItem>
              <MenuItem value={"it"}>Italian</MenuItem>
            </Select>
          </FormControl>

          {/* ----- Start Action Button ----- */}
          <Button variant="contained" type="submit" id="signup-submit">
            Start Game
          </Button>
        </Box>
        <Button>
          <Link to="/menu">Menu</Link>
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
