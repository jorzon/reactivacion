import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = ({ children, to, className, anchor }) => {
  return (
    <Fragment>
      {anchor ? (
        <a
          className={className}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link className={className} to={to}>
          {children}
        </Link>
      )}
    </Fragment>
  );
};

Card.defaultProps = {
  children: "",
  to: "/",
  className: "",
};

export default Card;
