import React from "react";
import styles from "./hero.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <h3>Bairesta Cafe</h3>
        <p>
          The best cafe in the nagpur
        </p>
      </div>
    </section>
  );
};

export default Hero;