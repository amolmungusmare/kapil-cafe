import Image from 'next/image';
import React from 'react';
import styles from './review.module.css'

const Review = () => {
  return (
    <section className={styles.review} id="review">

      <h1 className="heading"> {`customer's`} <span>review</span> </h1>

      <div className={styles.boxContainer}>

        <div className={styles.box}>
          <Image src="/asset/images/quote-img.png" alt="" className={styles.quote} height={43} width={58} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
          <Image src="/asset/images/pic-1.png" className={styles.user} alt="" height={70} width={70} />
          <h3>john doe</h3>
          <div className={styles.stars}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>

        <div className={styles.box}>
          <Image src="/asset/images/quote-img.png" alt="" className={styles.quote} height={43} width={58} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
          <Image src="/asset/images/pic-2.png" className={styles.user} alt="" height={70} width={70} />
          <h3>john doe</h3>
          <div className={styles.stars}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>

        <div className={styles.box}>
          <Image src="/asset/images/quote-img.png" alt="" className={styles.quote} height={43} width={58} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
          <Image src="/asset/images/pic-3.png" className={styles.user} alt="" height={70} width={70} />
          <h3>john doe</h3>
          <div className={styles.stars}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Review;