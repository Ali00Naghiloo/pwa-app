import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type types = {
  value: string;
  route: string;
};

const LinkCom = ({ value, route }: types) => {
  return (
    <>
      <Button
        sx={{
          borderRadius: "50%",
          "&:hover": "",
        }}
      >
        <Link
          style={{
            background: "#40F8FF",
            textDecoration: "none",
            color: "#111",
            fontSize: "25px",
            width: "100%",
            borderRadius: "50%",
          }}
          to={`/game?${route}`}
        >
          {value}
        </Link>
      </Button>
    </>
  );
};

export default LinkCom;
