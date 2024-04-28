import React, { useEffect, useState } from "react";
import SoulRetreatsBanner from "app/components/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Scrollbar, Navigation } from "swiper";
import CourseItemOffline from "./components/courseItem";
import useSiteTitle from "core/hooks/useSiteTitle";

import { otherCourse, ICTA, combo_phoenix, combo_dragon } from "./const.js";

import banner from "assets/images/source/banner/khoa-hoc-offline-banner.jpg";

import "./styles/styles.scss";
import Loading from "share/loading";

// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);

function CourseOffline() {
  useSiteTitle("offline_page");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="courseOffline-page">
      <SoulRetreatsBanner
        bannerImg={banner}
        headText="Khóa học Offline"
        subText="THE ORIGINS có các khóa học trực tiếp nhằm cung cấp trải nghiệm học tốt nhất cho học viên."
      />

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">THE ORIGINS - COMBO PHOENIX</h3>
          <p className="heading-desc">
            Combo Phoenix thuộc chuỗi THE ORIGINS sẽ giúp cho bạn hiểu cảm xúc
            bên trong của chính mình, từ đó lý giải được các vấn đề xung quanh
            đang tác động trực tiếp để rồi tìm ra hướng giải quyết chúng.
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper my-3"
          breakpoints={{
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerColumn: 2,
              slidesPerColumnFill: "row",
            },
          }}
          navigation={true}
        >
          {combo_phoenix.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">THE ORIGINS - COMBO DRAGON</h3>
          <p className="heading-desc">
            Combo Dragon thuộc chuỗi THE ORIGINS, có chứa các khóa nằm trong
            Combo Phoenix. Không dừng lại về các vấn đề bản thân, giờ đây với
            chuỗi combo Dragon, bạn sẽ có cái nhìn toàn diện hơn về cách mà vũ
            trụ vận hành. Bạn sẽ xây dựng được cho bản thân Dự án cuộc đời nhằm
            cống hiến xã hội, mang trên mình tầm vóc lớn lao hơn.
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper my-3"
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {combo_dragon.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container">
        <div className="heading">
          <h3 className="heading-text">Các khóa Offline khác</h3>
          <p className="heading-desc">
            Bao gồm nhiều khóa lẻ, dành cho nhiều độ tuổi khác nhau và đạt được
            những thành tựu khác nhau.
          </p>
        </div>

        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="other-course my-3"
          breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {otherCourse.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/**
      <div className="container">
           <div className="heading">
          <h3 className="heading-text">
            INTERNATIONAL COACHING and TRAINING ALLIANCE
          </h3>
          <h5 className="heading-text pt-0">
            HIỆP HỘI HUẤN LUYỆN VÀ ĐÀO TẠO QUỐC TẾ
          </h5>
          <p className="heading-desc">
            Phù hợp với anh/chị có định hướng theo đuổi sự nghiệp coaching, diễn
            giả NLP, người truyền cảm hứng... Ngoài ra, khóa học cũng đồng thời
            giúp anh/chị xây dựng thêm kỹ năng coach cho chính bản thân để từ đó
            làm chủ các vấn đề trong cuộc sống.
          </p>
        </div> 
        <Swiper
          scrollbar={{
            hide: true,
          }}
          className="mySwiper my-3"
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
        >
          {ICTA.map((y) => {
            return (
              <SwiperSlide key={y.id}>
                <CourseItemOffline
                  name={y.name}
                  title={y.title}
                  bgCourse={y.bgCourse}
                  textColor={y.textColor}
                  link={y.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
         */}
    </div>
  );
}

export default CourseOffline;
