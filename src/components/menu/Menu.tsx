import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LinkCom from "./Link";
import { useTranslation } from "react-i18next";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Menu = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang");
  const gender = localStorage.getItem("gender");

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          p: "2px",
        }}
      >
        <p>{gender}</p>
        <p>{lang}</p>
        <p>{t(lang ? lang : "")}</p>
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
        <Box sx={{ position: "absolute", left: "20px", bottom: "20px" }}>
          <Link to="/">
            <Button style={{ padding: "0" }}>
              <SettingsOutlinedIcon />
            </Button>
          </Link>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
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
      </Box>
    </>
  );
};

export default Menu;
