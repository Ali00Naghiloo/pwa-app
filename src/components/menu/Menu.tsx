import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LinkCom from "./Link";

const Menu = () => {
  return (
    <>
      <Box sx={{ position: "absolute", left: "0", top: "0" }}>
        <p>{localStorage.getItem("gender")}</p>
        <p>{localStorage.getItem("lang")}</p>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Button>
          <Link to="/">Logout</Link>
        </Button>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <LinkCom value="+" route="plus" />
          <LinkCom value="-" route="minus" />
          <LinkCom value="×" route="multipy" />
          <LinkCom value="÷" route="division" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <LinkCom value="+-" route="pm" />
          <LinkCom value="×÷" route="md" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <LinkCom value="+-×÷" route="all" />
        </Box>
      </Box>
    </>
  );
};

export default Menu;
