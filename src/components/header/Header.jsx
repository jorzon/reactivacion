import React, { Fragment } from "react";
import styles from "./header.module.scss";
import LogoSingle from "assets/img/ytqp-2.png";
import { Link } from "react-router-dom";

const Header = ({ children, single }) => {
  return (
    <Fragment>
      {single ? (
        <nav className={styles.wrapper_single}>
          <div className={styles.container_single}>
            {children}
            <Link to="/">
              <img
                className={styles.logo_single}
                src={LogoSingle}
                alt="ytuqueplanes-logo"
              />
            </Link>
          </div>
        </nav>
      ) : ('')}
    </Fragment>
  );
};

Header.defaultProps = {
  children: "",
  single: false
};

export default Header;
