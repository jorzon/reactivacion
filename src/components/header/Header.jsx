import React from "react";
import styles from "./header.module.scss";
import Logo from "assets/img/ytqp-logo.png";
import { Link } from "react-router-dom";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";

const Header = () => {
  return (
    <LimitWrapper>
      <nav className={styles.wrapper}>
        <Link to="/">
          <img src={Logo} alt="ytuqueplanes-logo" />
        </Link>
      </nav>
    </LimitWrapper>
  );
};

export default Header;
