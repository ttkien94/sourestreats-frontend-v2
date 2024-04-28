import React, { useRef, useState } from "react";
import useSiteTitle from "core/hooks/useSiteTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import ModalVideo from "react-modal-video";
import ServiceItem from "./components/serviceItem";
import Title from "./components/title";
import TestimonialCard from "./components/testimonialCart";
import BannerCarousel from "./components/bannerCarousel";
import { LPELightBox } from "app/components/lightBox";
import { getIdVideo } from "core/utils/videoLinkUtil";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

// import media file
import hinh01 from "assets/images/source/hinh01.jpg";
import hinh02 from "assets/images/source/hinh02.jpg";
import hinh03 from "assets/images/source/hinh03.jpg";
import hinh04 from "assets/images/source/hinh04.jpg";
import Video from "assets/video-demo.mp4";
import khanhvy from "assets/images/source/khanh-my.png";
import nguyentuanvu from "assets/images/source/nguyen-tuan-vu.png";
import hoanhai from "assets/images/source/hoan-hai.png";

import vasVideo from "assets/images/source/banner-video.jpg";
import personalTest from "assets/images/source/personal-test.jpg";

import catelogy01 from "assets/images/source/homepage/catelogy01.png";
import catelogy02 from "assets/images/source/homepage/catelogy02.png";
import catelogy03 from "assets/images/source/homepage/catelogy03.png";
import catelogy04 from "assets/images/source/homepage/catelogy04.png";
import catelogy05 from "assets/images/source/homepage/catelogy05.png";
import catelogy06 from "assets/images/source/homepage/catelogy06.png";

import "./styles/styles.scss";
import WrapperImg from "share/wrapperImg";
import { useEffect } from "react";

export default function Home() {
  useSiteTitle("home_page");
  const { t } = useTranslation("common");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const studentPicRef = useRef();
  const [video, setVideo] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const catelogyImg = [
    {
      img: catelogy01,
      title: t("sr_adventure_club"),
      link: "",
    },
    {
      img: catelogy02,
      title: t("corporation"),
      link: "/hop-tac/huan-luyen-doanh-nghiep",
    },
    {
      img: catelogy03,
      title: t("performance"),
      link: "/hop-tac/toi-uu-thanh-tich",
    },
    {
      img: catelogy04,
      title: t("coach"),
      link: "/hop-tac/tu-van-tri-lieu-ca-nhan",
    },
    {
      img: catelogy05,
      title: t("individual"),
      link: "/chuong-trinh-huan-luyen",
    },
    {
      img: catelogy06,
      title: t("education"),
      link: "/hop-tac/dao-tao-the-he-tre",
    },
  ];

  // const service_list = [
  //   {
  //     cat_icon: <i className="fal fa-building"></i>,
  //     title: t("performance"),
  //     link: "/hop-tac/toi-uu-thanh-tich",
  //   },
  //   {
  //     cat_icon: <i className="fal fa-chart-bar"></i>,
  //     title: t("corporation"),
  //     link: "/hop-tac/huan-luyen-doanh-nghiep",
  //   },
  //   {
  //     cat_icon: <i className="fal fa-user-graduate"></i>,
  //     title: t("education"),
  //     link: "/hop-tac/dao-tao-the-he-tre",
  //   },
  //   {
  //     cat_icon: <i className="fal fa-users"></i>,
  //     title: t("coach"),
  //     link: "/hop-tac/tu-van-tri-lieu-ca-nhan",
  //   },
  //   {
  //     cat_icon: <i className="fal fa-book-reader"></i>,
  //     title: t("individual"),
  //     link: "/chuong-trinh-huan-luyen",
  //   },
  //   {
  //     cat_icon: <i className="fal fa-newspaper"></i>,
  //     title: t("sr_adventure_club"),
  //     description: "Sắp ra mắt",
  //     link: "",
  //   },
  // ];

  const swiperStudentPic = [
    {
      imgSrc: hinh01,
    },
    {
      imgSrc: hinh02,
    },
    {
      imgSrc: hinh03,
    },
    {
      imgSrc: hinh04,
    },
  ];

  const arrayTestimonials = [
    // {
    //   id: 1,
    //   rating: 5,
    //   hero: t("chair_man_talk"),
    //   name: `${t("ms")} Nguyễn Khánh Vy`,
    //   // job: `(${t("chair_man")}  Deloitte Việt Nam)`,
    //   ava: khanhvy,
    // },
    {
      id: 2,
      rating: 4,
      hero: t("ceo_talk"),
      name: `${t("mr")} Nguyễn Tuấn Vũ`,
      // job: `(${t("ceo")} Vietphulabel)`,
      ava: nguyentuanvu,
    },
    {
      id: 4,
      rating: 4,
      hero: t("ceo_talk"),
      name: `${t("mr")} Nguyễn Tuấn Vũ`,
      // job: `(${t("ceo")} Vietphulabel)`,
      ava: nguyentuanvu,
    },
    {
      id: 3,
      rating: 5,
      hero: t("project_consultant_talk"),
      name: `${t("ms")} Phạm Thị Hoàng Hải`,
      // job: t("project_consultant"),
      ava: hoanhai,
    },
  ];

  const handleOpenLightBox = (index) => {
    studentPicRef.current.handleOpen(index);
  };

  const handleOpenVideo = (link) => {
    setVideo(getIdVideo(link));
    setIsVisible(!isVisible);
  };

  return (
    <div className="home-page">
      <BannerCarousel />
      <LazyLoad offset={100}>
        <div className="container services">
          <section className="row">
            {/* {service_list.map((service, index) => {
              return <ServiceItem service={service} key={index} />;
            })} */}
            <WrapperImg
              catelogyImg={catelogyImg}
              title={t("activities")}
              description={t("activities_desc")}
              description2={t("activities_desc2")}
              textAlign="center"
            />
          </section>
        </div>
      </LazyLoad>

      <section>
        <div className="py-5 text-center">
          <Title
            title={t("video_title")}
            // description={t("video_desc")}
            textAlign="center"
          />
          <div
            className="paralax-video"
            // style={{
            //   backgroundImage: `url(${vasVideo})`,
            // }}
          >
            <video width="100%" height="100%" muted loop autoPlay playsInline>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className="btn-playVideo"
              onClick={() => {
                handleOpenVideo(
                  "https://www.youtube.com/watch?v=LlMtFVAU-9Q&ab_channel=LifeUniVN"
                );
              }}
            >
              <i className="fal fa-play"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="container testimonials">
        <Title
          title={t("testimonials")}
          description={t("testimonials_desc")}
          textAlign="center"
        />

        <div className="row mt-5">
          {arrayTestimonials.map((info, index) => {
            return (
              <TestimonialCard
                rating={info.rating}
                hero={info.hero}
                name={info.name}
                job={info.job}
                ava={info.ava}
                key={index}
              />
            );
          })}
        </div>
      </section>

      <section
        className="person-test mt-5"
        style={{
          backgroundImage: `url(${personalTest})`,
        }}
      >
        <div className="wrapper-content_person">
          <h2 className="text-uppercase">{t("life_map")}</h2>

          <p>
            Hành trình cuộc đời là tấm bản đồ giúp cho bạn hiểu rõ hơn về chặng
            đường học tại THE ORIGINS. Từ đó, bạn có thể hiểu được khóa học nào
            là phù hợp và thiết lập được cho mình một lộ trình phát triển tốt
            nhất cho chính mình.
          </p>

          <Link to="/life-map" className="btn btn-success px-5 py-3">
            <b>Xem Thêm</b>
          </Link>
        </div>
      </section>
      <section className="student-pic">
        <div className="student-caption py-5 text-center">
          <Title
            title={t("gallery")}
            description={t("gallery_desc")}
            textAlign="center"
          />
        </div>

        <Swiper
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {swiperStudentPic.map((item, index) => {
            return (
              <SwiperSlide className="item-swiper" key={index}>
                <div
                  className="wrapper-slick"
                  onClick={() => {
                    handleOpenLightBox(index);
                  }}
                >
                  <img
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    className="img-fluid"
                  />

                  <div className="overlay"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section className="mt-5">
        <Title title={t("map")} textAlign="center" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3920.250410579772!2d106.73281380487556!3d10.71515894075498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3175255b170b3269%3A0x8c4a1e757c2e7640!2zNDUgxJDGsOG7nW5nIHPhu5EgMiwgUGjDuiBN4bu5LCBRdeG6rW4gNywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!3m2!1d10.7145914!2d106.73358499999999!5e0!3m2!1svi!2s!4v1703063799072!5m2!1svi!2s"
          width="100%"
          height="450px"
          title="googlemap"
          style={{
            border: "none",
            marginTop: "20px",
          }}
        ></iframe>
      </section>

      <LPELightBox
        ref={studentPicRef}
        listImage={swiperStudentPic.map((v) => v.imgSrc)}
      />

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVisible}
        videoId={video}
        onClose={() => setIsVisible(false)}
      />
    </div>
  );
}
