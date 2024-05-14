import styles from "./New.module.css";
import { BiHeart } from "react-icons/bi";
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
import new4 from "../../assets/new4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function New() {
  return (
    <section className={`container ${styles.new_section}`}>
      <h2>New Gifts</h2>

      <div className={styles.new_container}>
        <Swiper
          centeredSlides={true}
          spaceBetween={8}
          slidesPerView={"auto"}
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          loop
          className="mySwiper"
        >
          <SwiperSlide>
            <article className={styles.new_card}>
              <div className={styles.new_overlay}></div>

              <img src={new1} alt="" />
              <h3>$95</h3>
              <span>Reindeer</span>
              <button className="button">
                <BiHeart />
              </button>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className={styles.new_card}>
              <div className={styles.new_overlay}></div>

              <img src={new2} alt="" />
              <h3>$20</h3>
              <span>Snow Globe</span>
              <button className="button">
                <BiHeart />
              </button>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className={styles.new_card}>
              <div className={styles.new_overlay}></div>

              <img src={new3} alt="" />
              <h3>$75</h3>
              <span>Sledge</span>
              <button className="button">
                <BiHeart />
              </button>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className={styles.new_card}>
              <div className={styles.new_overlay}></div>

              <img src={new4} alt="" />
              <h3>$15</h3>
              <span>Christmas Wreath</span>
              <button className="button">
                <BiHeart />
              </button>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
