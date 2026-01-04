import Image from 'next/image';
import React, { useContext } from 'react';
import { getAbsoluteImagePath } from '../../../helpers/image-utils';
import { MenuItem } from '../../../model/Menu';
import styles from './menu.module.css'
import { MenuItems } from '../../../../../asset/dummyData/menu-items';

export const MENU_ITEMS_IMGS_DIRECTORY = 'images/menu-items'

const Menu = () => {

  return (
    <section className={styles.menu} id="menu">

      <h1 className="heading"> our <span>menu</span> </h1>

      <div className={styles.boxContainer}>
        {MenuItems.map(item => {
          const imagePath = getAbsoluteImagePath(item.imagePath, MENU_ITEMS_IMGS_DIRECTORY);

          return (
            <div key={item._id} className={styles.box}>
              <Image height={100} width={100} src={imagePath} alt="coffee menu items" />
              <h3>{item.name}</h3>
              <div className={styles.price}>{`$${item.currentPrice}`} <span>{`$${item.originalPrice}`}</span></div>
              <a href="#menu" className="btn" onClick={() => {
                // addItemToCart(item)
              }}>add to cart</a>
            </div>
          )
        }
        )}
      </div>

    </section>
  );
};

export default Menu;