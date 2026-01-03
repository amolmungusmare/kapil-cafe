import Image from "next/image";
import styles from "./page.module.css";
import { About, Blogs, Contact, Footer, Hero, Menu, Products, Review } from "./component/HomePage";

export default function Home() {
  return (
    <div>
      <main>
        {/* <NavBar key={'amol'}/> */}
        <Hero key='hero'/>
        {/* <About key={'alka'}/> */}
        {/* <Products key={'products'}/> */}
        {/* <Menu key={'menu'}/> */}
        {/* <Review key={'review'}/> */}
        {/* <Contact key={''}/> */}
        {/* <Blogs blogs={blogs} /> */}
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}
