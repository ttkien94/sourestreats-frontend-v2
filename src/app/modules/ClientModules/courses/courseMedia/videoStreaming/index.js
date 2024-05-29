import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import useSiteTitle from "core/hooks/useSiteTitle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Film from "assets/images/source/course-media/film.png";
// Component
// import IsLoading from "app/components/loading";
import Appbar from "./components/appBar";
import AdminDrawer from "./components/drawer";

// const and action
import { KEY_TOKEN } from "app/const/App";
import { appAction } from "core/redux/actions/appAction";
import { isEmpty } from "core/utils/isEmpty";
import Vimeo from "@u-wave/react-vimeo";
import "./styles/styles.scss";
import { getDetailCourseOnlineAction } from "core/redux/actions/courseOnlineAction";
import Loading from "share/loading";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const VideoStreaming = (props) => {
  useSiteTitle("video_streaming");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detailCourseOnline, loading } = useSelector(
    (state) => state.courseOnline
  );
  console.log("detailCourseOnline", detailCourseOnline);
  const { userInfo } = useSelector((state) => state.auth);
  const [video, setVideo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  //   const accessToken = localStorage.getItem(KEY_TOKEN);
  const checkPermission = userInfo?.courseMedia?.find((e) => e === "tower1");
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);
  useEffect(() => {
    !!detailCourseOnline?.videoList &&
      setVideo(detailCourseOnline?.videoList[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailCourseOnline]);
  // Fetch Table Data
  console.log(
    "location.state.detailCourseOnline._id",
    location.state.detailCourseOnline._id
  );
  const loadData = () => {
    dispatch(
      getDetailCourseOnlineAction(location.state.detailCourseOnline._id)
    );
  };

  var indents = [];
  for (var i = 1; i < 4; i++) {
    let num = 0;
    indents.push(
      <div className="mt-4 row">
        <div style={{ color: "#0463C3" }}>Phần {i}</div>
        <div className="title-h3 d-flex justify-content-between">
          {/* {item.title} */}
          {/* <ExpandMoreIcon style={{ fontSize: 32, color: "gray" }} /> */}
        </div>
        {detailCourseOnline?.videoList?.map((item2, idx2) => {
          const hours = Math.floor(item2.duration / 3600);
          const minutes = Math.floor((item2.duration % 3600) / 60);
          const second = (item2.duration % 3600) % 60;
          num = num + 1;
          return (
            item2.floor === "Tầng " + i && (
              <div
                className={
                  "p-3 d-flex justify-content-between pointer " +
                  (item2.name === video.name && "isLearning")
                }
                onClick={() => {
                  handleVideo(item2);
                }}
              >
                <div className="d-flex " style={{ color: "#D1D1D1" }}>
                  <img
                    src={Film}
                    alt={Film}
                    className="mr-2"
                    style={{ maxHeight: 24 }}
                  />
                  Bài học
                  {" " + num + ": " + item2.name}
                </div>
                <div
                  className=""
                  style={{ minWidth: 70, textAlign: "end", color: "#D1D1D1" }}
                >
                  ({!!hours && hours + ":"}
                  {!!minutes && minutes + ":"}
                  {!!second && +second})
                </div>
              </div>
            )
          );
        })}
      </div>
    );
  }

  const handleVideo = (data) => {
    setVideo(data);
  };
  const handleLearned = () => {};
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const redirect = () => {
    navigate("/dang-nhap");
  };
  return !loading ? (
    checkPermission ? (
      <Box sx={{ display: "flex" }} className="video-streaming">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-3 col-md-4 col-sm-12 col-xs-12 p-3 align-items-center d-flex"
              style={{
                borderRight: "1px solid gray",
                borderBottom: "1px solid gray",
              }}
            >
              <ArrowBackIcon
                sx={{ color: "gray" }}
                className="pointer"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </div>

            <div
              className="col-lg-9 col-md-8 col-sm-12 col-xs-12 p-3"
              style={{
                borderBottom: "1px solid gray",
                color: "rgba(4, 99, 195, 1)",
              }}
            >
              {video?.floor === "Tầng 1" && (
                <div>
                  <p style={{ marginBottom: 0 }}>Phần 1</p>
                  <p
                    className="title-h2 "
                    style={{ marginBottom: 0, color: "white" }}
                  >
                    Personal Growth
                  </p>
                </div>
              )}
              {video?.floor === "Tầng 2" && (
                <div>
                  <p style={{ marginBottom: 0 }}>Phần 2</p>
                  <p
                    className="title-h2 "
                    style={{ marginBottom: 0, color: "white" }}
                  >
                    Finalcial Planning Mindset
                  </p>
                </div>
              )}
              {video?.floor === "Tầng 3" && (
                <div>
                  <p style={{ marginBottom: 0 }}>Phần 2</p>
                  <p
                    className="title-h2 "
                    style={{ marginBottom: 0, color: "white" }}
                  >
                    Story of the Rabit
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-4 col-sm-12 col-xs-12 py-3"
              style={{
                borderRight: "1px solid gray",
                borderBottom: "1px solid gray",
              }}
            >
              {indents}
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <Vimeo
                video={video?.url}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Mối quan hệ hoàn hảo"
                frameborder="0"
                //   paused={paused}
                onEnd={(e) => {
                  // if (document.webkitCancelFullScreen) {
                  //   document.webkitCancelFullScreen();
                  // }
                  // !isLearned && setShowModal(true);
                }}
                onPlay={() => console.log("onPlay")}
                onPlaying={() => console.log("onPlaying")}
                onPause={() => console.log("onPause")}
                onSeeked={() => {
                  console.log("onSeeked");
                }}
                className="box p-4"
                onTimeUpdate={(e) => {
                  // console.log("onTimeUpdate", e.seconds, video.testAt);
                  // e.seconds >= video.testAt && setShowModal(true);
                }}
                responsive
              />
            </div>
          </div>
        </div>
      </Box>
    ) : (
      <Navigate to="/dang-nhap" state={{ from: location }} />
    )
  ) : (
    <Loading count={11} />
  );
};

export default VideoStreaming;
