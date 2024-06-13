import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoAction,
  deleteVideoAction,
} from "core/redux/actions/videoAction";
import IsLoadingSkeleton from "app/components/loadingSkeleton";
import AdminTable from "share/adminTable";
import { Button } from "@mui/material";
import LPEDrawer from "app/components/drawer";
import CreateVideoManager from "./components/createVideoManager";
import AlertDialog from "share/alertDialog";
function VideoManager(props) {
  const LIMIT = 10;
  const headCells = [
    { id: "STT", label: "STT" },
    { id: "name", label: "Name" },
    { id: "url", label: "Url" },
    { id: "questionList", label: "QuestionList" },
    { id: "action", label: "Thao tác" },
  ];
  const [video, setVideo] = useState([]);
  // const [isFiltered, setIsFiltered] = useState(false);
  // const [dataFilter, setDataFilter] = useState({});
  const { loading, videoList } = useSelector((state) => state.video);
  const [videoDeleteId, setvideoDeleteId] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = (page = 1, dataFilter, isFiltered) => {
    dispatch(getVideoAction());
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const handleOpenDrawer = (data) => {
    setVideo(data);
    setOpenDrawer(true);
  };
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  // const onChangePage = (page) => {
  //   loadData(page, dataFilter);
  // };

  // const handleFilter = (filter) => {
  //   setIsFiltered(true);
  //   loadData(1, filter, true);
  //   setDataFilter(filter);
  // };

  const handleDeleteVideo = (video_id) => {
    setOpenAlertDialog(true);
    setvideoDeleteId(video_id);
  };
  const renderNoData = () => {
    return <div>Khong co du lieu</div>;
  };
  const renderData = () => {
    return (
      <>
        <AdminTable
          tableHead={headCells}
          tableData={videoList.data}
          view="video"
          type="video"
          onHandleDelete={(video_id) => handleDeleteVideo(video_id)}
          handleOpenDrawer={(data) => {
            handleOpenDrawer(data);
          }}
          {...props}
        />
      </>
    );
  };
  return loading ? (
    <IsLoadingSkeleton count={LIMIT + 1} />
  ) : (
    <>
      <div className="mb-3">
        <Button
          onClick={() => {
            handleOpenDrawer();
          }}
          variant="contained"
        >
          Thêm Video
        </Button>
      </div>
      {videoList && videoList.data && videoList.data.length > 0
        ? renderData()
        : renderNoData()}
      {/* Drawer edit screen here */}
      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <CreateVideoManager onToggleDrawer={toggleDrawer} onEdit={video} />
      </LPEDrawer>
      <AlertDialog
        handleAction={() => {
          dispatch(deleteVideoAction(videoDeleteId));
          setOpenAlertDialog(false);
        }}
        openAlertDialog={openAlertDialog}
        setOpenAlertDialog={setOpenAlertDialog}
      />
    </>
  );
}

export default VideoManager;
