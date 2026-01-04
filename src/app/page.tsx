import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./component/HomePage/Hero/Hero";
import About from "./component/HomePage/About/About";
import Review from "./component/HomePage/Review/Review";
import Footer from "./component/HomePage/Footer/Footer";

export default function Home() {
  return (
    <div>
      <main>
        {/* <NavBar key={'amol'}/> */}
        <Hero key='hero'/>
        <About key={'about'}/>
        {/* <Products key={'products'}/> */}
        {/* <Menu key={'menu'}/> */}
        <Review key={'review'}/>
        {/* <Contact key={''}/> */}
        {/* <Blogs blogs={blogs} /> */}
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}
