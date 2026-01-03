import React from "react";
import classes from "./hero.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={classes.home} id="home">
      <div className={classes.content}>
        <h3>Vaishu's Cafe</h3>
        <p>
          The best cafe in the nagpur
        </p>
      </div>
    </section>
  );
};

export default Hero;
