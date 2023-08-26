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
            background: "#614bc3",
            textDecoration: "none",
            color: "#fff",
            fontSize: "25px",
            width: "100%",
            borderRadius: "50%",
            padding: "2px",
          }}
          to={`/game?t=${route}`}
        >
          {value}
        </Link>
      </Button>
    </>
  );
};

export default LinkCom;
