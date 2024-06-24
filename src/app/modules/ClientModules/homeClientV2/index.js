import useSiteTitle from "core/hooks/useSiteTitle";
import React from "react";
import { useTranslation } from "react-i18next";
import LazyLoad from "react-lazyload";

import Course01 from "assets/images/source/homepage/catelogy06.png";

import HomeClientTitle from "./components/homeClientTitle";
import HomeClientCourseItem from "./components/homeClientCourseItem";
// import HomeClientTestimonialCard from "./components/homeClientTestimonialCart";
function HomeClientV2() {
  useSiteTitle("Trang Chủ - Soul Retreats");
  const { t } = useTranslation("common");

  const course_list = [
    {
      img: Course01,
      cat_icon: <i className="fal fa-building"></i>,
      totalHour: "330h",
      title: t("performance"),
      description: "RM RM RM RM",
      link: "/chuong-trinh-huan-luyen/online/self-mastery",
      defaultPrice: 149,
      promoPrice: 25,
      tag: "New",
    },
    {
      img: Course01,
      cat_icon: <i className="fal fa-chart-bar"></i>,
      totalHour: "12h",
      title: t("corporation"),
      description:
        "Become the best coder you can be with unlimited access to all the existing and future courses",
      link: "/hop-tac/huan-luyen-doanh-nghiep",
      defaultPrice: 149,
      promoPrice: 25,
      tag: "New",
    },
    {
      img: Course01,
      cat_icon: <i className="fal fa-user-graduate"></i>,
      totalHour: "12h",
      title: t("education"),
      description:
        "Become the best coder you can be with unlimited access to all the existing and future courses",
      link: "/hop-tac/dao-tao-the-he-tre",
      defaultPrice: 149,
      promoPrice: 25,
      tag: "New",
    },
    {
      img: Course01,
      cat_icon: <i className="fal fa-users"></i>,
      totalHour: "12h",
      title: t("coach"),
      description:
        "Become the best coder you can be with unlimited access to all the existing and future courses",
      link: "/hop-tac/tu-van-tri-lieu-ca-nhan",
      defaultPrice: 149,
      promoPrice: 25,
      tag: "New",
    },
    {
      img: Course01,
      cat_icon: <i className="fal fa-book-reader"></i>,
      totalHour: "12h",
      title: t("individual"),
      description:
        "Become the best coder you can be with unlimited access to all the existing and future courses",
      link: "/chuong-trinh-huan-luyen",
      defaultPrice: 149,
      promoPrice: 25,
      tag: "New",
    },
    {
      img: Course01,
      cat_icon: <i className="fal fa-newspaper"></i>,
      totalHour: "12h",
      title: t("sr_adventure_club"),
      description:
        "Become the best coder you can be with unlimited access to all the existing and future courses",
      link: "#",
      defaultPrice: 149,
      promoPrice: 25,
      tag: "New",
    },
  ];

  return (
    <div className="home-page-client">
      <LazyLoad offset={100}>
        <section className="container course mb-5">
          <div className="course-caption py-4 text-center ">
            <HomeClientTitle
              title={t("activities")}
              description={t("activities_desc")}
              textAlign="center"
            />
          </div>
          <div className="row ">
            {course_list.map((course, index) => {
              return <HomeClientCourseItem course={course} key={index} />;
            })}
          </div>
        </section>

        <section className="container testimonials mb-5">
          <HomeClientTitle
            title={t("testimonials")}
            description={t("testimonials_desc")}
            textAlign="center"
          />
        </section>
      </LazyLoad>
    </div>
  );
}

export default HomeClientV2;
