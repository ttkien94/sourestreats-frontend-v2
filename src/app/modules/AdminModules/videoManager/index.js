import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoAction,
  deleteVideoAction,
} from "core/redux/actions/videoAction";
import IsLoadingSkeleton from "app/components/loadingSkeleton";
import AdminTable from "share/adminTable";
function VideoManager(props) {
  const LIMIT = 10;
  const headCells = [
    { id: "STT", label: "STT" },
    { id: "name", label: "Name" },
    { id: "url", label: "Url" },
    { id: "questionList", label: "QuestionList" },
    { id: "action", label: "Thao tác" },
  ];
  const [data, setData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [dataFilter, setDataFilter] = useState({});
  const { loading, videoList } = useSelector((state) => state.video);

  const dispatch = useDispatch();
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log("videoList", videoList, loading);
  }, [videoList]);

  const loadData = (page = 1, dataFilter, isFiltered) => {
    dispatch(getVideoAction());
  };

  const onChangePage = (page) => {
    loadData(page, dataFilter);
  };

  const handleFilter = (filter) => {
    setIsFiltered(true);
    loadData(1, filter, true);
    setDataFilter(filter);
  };

  const handleDelete = (video_id) => {
    dispatch(deleteVideoAction(video_id));
  };
  return loading ? (
    <IsLoadingSkeleton count={LIMIT + 1} />
  ) : (
    <AdminTable
      tableHead={headCells}
      tableData={videoList}
      view="video"
      onHandleDelete={handleDelete}
      {...props}
    />
  );
}

export default VideoManager;
