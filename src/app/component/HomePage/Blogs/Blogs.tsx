import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getAbsoluteImagePath } from '../../../helpers/image-utils';
import { Blog } from '../../../model/Blog';
import styles from './blogs.module.css'


interface BlogsProps {
  blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps) => {
  return (
    <section className={styles.blogs} id="blogs">

      <h1 className="heading"> our <span>blogs</span> </h1>

      <div className={styles.boxContainer}>
        {
          blogs.map(blog => {

            const { slug, excerpt, title, date, author, content } = blog;
            const parseDate = moment(date, 'YYYY-MM-DD')
            const imagePath = getAbsoluteImagePath(`/${slug}.jpeg`, `images/blogs/${slug}`)

            return (

              <div key={blog.slug} className={styles.box}>
                <div className={styles.image}>
                  <Image width={536} height={250} src={imagePath} layout="responsive" alt="blog image" />
                </div>
                <div className={styles.content}>
                  <a href={`/blog/${slug}`} className={styles.title}>{title}</a>
                  <span>{`by ${author} / ${parseDate.format('Do MMM, YYYY')}`}</span>
                  <p>{excerpt}</p>
                  <Link href={`/blog/${slug}`} className="btn">
                    <a>read more</a>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  );
};

export default Blogs;