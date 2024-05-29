import React from "react";
import SoulRetreatsBanner from "app/components/banner";
import useSiteTitle from "core/hooks/useSiteTitle";
import banner from "assets/images/source/banner/chuong-trinh-dao-tao.jpg";
import courseBanner from "assets/images/source/course-media/banner-course.png";
import courseBanner2 from "assets/images/source/course-media/banner-course2.png";
import "./styles/styles.scss";
import SearchBar from "share/searchBar";
import FilterBar from "share/filterBar";
import { Button } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";
function CourseMedia() {
  useSiteTitle("media_course");
  const allCourse = [
    { id: 1, value: "Seft Matery" },
    { id: 2, value: "Universal Matery" },
    { id: 3, value: "LTC" },
  ];
  const course = [
    {
      id: 1,
      title: "Title of the bundle",
      img: courseBanner2,
      students: 12010,
      during: 220,
      price: 23.99,
    },
    {
      id: 2,
      title: "Title of the bundle",
      img: courseBanner2,
      students: 12010,
      during: 220,
      price: 23.99,
    },
    {
      id: 3,
      title: "Title of the bundle",
      img: courseBanner2,
      students: 12010,
      during: 220,
      price: 23.99,
    },
    {
      id: 4,
      title: "Title of the bundle",
      img: courseBanner2,
      students: 12010,
      during: 220,
      price: 23.99,
    },
    {
      id: 5,
      title: "Title of the bundle",
      img: courseBanner2,
      students: 12010,
      during: 220,
      price: 23.99,
    },
    {
      id: 6,
      title: "Title of the bundle",
      img: courseBanner2,
      students: 12010,
      during: 220,
      price: 23.99,
    },
  ];
  const combo = [
    {
      id: 1,
      title: "Title of the bundle",
      img: courseBanner,
      students: 12010,
      totalCourse: 4,
      lession: 125,
      during: 220,
      price: 23.99,
      saveMoney: 12.99,
    },
    {
      id: 2,
      title: "Title of the bundle",
      img: courseBanner,
      students: 12010,
      totalCourse: 4,
      lession: 125,
      during: 220,
      price: 23.99,
      saveMoney: 12.99,
    },
  ];
  const handleFilter = () => {};
  const handleSearch = (text) => {};
  const renderCourse = (item, type) => {
    return (
      <div className="course-media-box">
        <div className="banner">
          <Link
            to={type === "combo" ? `combo1` : `tower1`}
            className="text-white"
          >
            <img src={item.img} alt="error" width="100%" />
          </Link>
        </div>
        <div className="content">
          <div className="d-flex justify-content-between">
            <span>{item.students} students</span>
            <span>
              {item.totalCourse && (
                <span>
                  {item.totalCourse} course
                  <FiberManualRecordIcon sx={{ fontSize: 6, m: 1 }} />
                </span>
              )}
              {item.lesson && (
                <span>
                  {item.lesson} lesson
                  <FiberManualRecordIcon sx={{ fontSize: 6, m: 1 }} />
                </span>
              )}
              {item.during}
            </span>
          </div>
          <h3 className="mt-2">{item.title}</h3>
          <div className="d-flex align-items-center mt-2">
            <Button
              variant="contained"
              sx={{
                backgroundColor: type === "combo" ? "white" : "blue",
                color: type === "combo" ? "#0D3A6D" : "white",
                borderRadius: 20,
              }}
            >
              ${item.price}
            </Button>
            {item.saveMoney && (
              <span className="ml-2"> Save ${item.saveMoney}</span>
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="course-media-page">
      <SoulRetreatsBanner
        bannerImg={banner}
        headText="Khóa học MEDIA"
        subText="THE ORIGINS có các khóa học trực tuyến nhằm cung cấp trải nghiệm học tốt nhất cho học viên."
      />
      <div className="container pb-5">
        <div className="course-media-combo">
          <div className="heading">
            <h3 className="heading-text">Bundles</h3>
            <p className="heading-desc">
              A collection of curated classes designed to help you reach a
              specific goal
            </p>
          </div>
          <div className="d-flex ">
            <div className="search mr-5">
              <SearchBar handleDebouceSearch={(text) => handleSearch(text)} />
            </div>
            <div className="filter">
              <FilterBar data={allCourse} />
            </div>
          </div>
          <div className="row mt-3">
            {combo.map((idx) => {
              return (
                <div className="col-6" key={idx.id}>
                  {renderCourse(idx, "combo")}
                </div>
              );
            })}
          </div>
        </div>
        <div className="course-media-single mt-5 ">
          <div className="heading">
            <h3 className="heading-text">All Courses </h3>
            <p className="heading-desc">Lesson that stay with you for life.</p>
          </div>
          <div className="d-flex ">
            <div className="search mr-5">
              <SearchBar handleDebouceSearch={(text) => handleSearch(text)} />
            </div>
            <div className="filter">
              <FilterBar data={allCourse} />
            </div>
          </div>
          <div className="row mt-3 ">
            {course.map((idx) => {
              return (
                <div className="col-4 mt-3" key={idx.id}>
                  {renderCourse(idx, "single")}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseMedia;
