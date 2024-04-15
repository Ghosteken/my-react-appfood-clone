import styles from "./Header.module.css";
import logo from "../../assets/images/heyfoodlogo2.png";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../assets/Themes/Theme";
import buttonStyles from "../../assets/ButtonStyle/ButtonStyle";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img src={logo} className={styles.brandLogo} alt="HeyFoods logo" />
        </div>
        <nav className={styles.signBtns}>
          <ThemeProvider theme={theme}>
            <Button
              variant="text"
              color="secondary"
              className={`${styles.button} ${styles.signIn}`}
              sx={buttonStyles}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              disableElevation
              color="primary"
              sx={buttonStyles}
              className={`${styles.button} ${styles.signUp}`}
            >
              Sign Up
            </Button>
          </ThemeProvider>
        </nav>
      </header>
    </div>
  );
};

export default Header;
