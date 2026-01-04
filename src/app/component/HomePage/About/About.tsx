import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className={styles.about} id="about">
      <h1 className={"heading"}>
        {" "}
        <span>about</span> us{" "}
      </h1>

      <div className={styles.row}>
        <div className={styles.image}>
          <Image src="/asset/images/about-img.jpeg" alt="" width={802} height={572} />
        </div>

        <div className={styles.content}>
          <h3>what makes our coffee special?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
            ratione a officiis id temporibus autem? Quod nemo facilis
            cupiditate. Ex, vel?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet
            enim quod veritatis, nihil voluptas culpa! Neque consectetur
            obcaecati sapiente?
          </p>
          <a href="#" className={styles.btn}>
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
