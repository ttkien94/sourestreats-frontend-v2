import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getScheduleCourseAction } from "core/redux/actions/scheduleCourseAction";
function SchedulaCourseManager() {
  const [data, setData] = useState([]);
  const { loading, scheduleCourseList } = useSelector(
    (state) => state.scheduleCourse
  );

  const dispatch = useDispatch();
  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    console.log("scheduleCourseList", scheduleCourseList);
  }, [scheduleCourseList]);

  const loadData = () => {
    dispatch(getScheduleCourseAction());
  };
  return <div>SchedulaCourse</div>;
}

export default SchedulaCourseManager;
