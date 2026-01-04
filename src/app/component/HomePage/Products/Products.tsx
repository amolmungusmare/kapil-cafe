import Image from 'next/image';
import React from 'react';
import styles from './products.module.css'

const Products = () => {
  return (
    <section className={styles.products} id="products">

      <h1 className="heading"> our <span>products</span> </h1>

      <div className={styles.boxContainer}>

        <div className={styles.box}>
          <div className={styles.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={styles.image}>
            <Image height={250} width={160} src="/asset/images/product-1.png" alt="" />
          </div>
          <div className={styles.content}>
            <h3>fresh coffee</h3>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className={styles.price}>$15.99 <span>$20.99</span></div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={styles.image}>
            <Image height={250} width={160} src="/asset/images/product-2.png" alt="" />
          </div>
          <div className={styles.content}>
            <h3>fresh coffee</h3>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className={styles.price}>$15.99 <span>$20.99</span></div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.icons}>
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
          </div>
          <div className={styles.image}>
            <Image height={250} width={160} src="/asset/images/product-3.png" alt="" />
          </div>
          <div className={styles.content}>
            <h3>fresh coffee</h3>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className={styles.price}>$15.99 <span>$20.99</span></div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Products;