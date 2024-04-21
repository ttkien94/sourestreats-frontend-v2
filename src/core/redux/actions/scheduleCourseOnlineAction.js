import axios from "axios";

import {
  API_SCHEDULE_COURSE_ONLINE_CREATE,
  API_SCHEDULE_COURSE_ONLINE_CREATE_ARRAY,
  API_ENDPOINT,
  API_GET_DETAILS_SCHEDULE_COURSE_ONLINE,
  API_GET_SCHEDULE_COURSE_ONLINE,
  API_SCHEDULE_COURSE_ONLINE_UPDATE,
  API_SCHEDULE_COURSE_ONLINE_DELETE,
  API_SCHEDULE_COURSE_ONLINE_HANDLE_USER,
} from "app/const/Api";

import {
  SCHEDULE_COURSE_ONLINE_CREATE,
  SCHEDULE_COURSE_ONLINE_UPDATE_IN_LIST,
  SCHEDULE_COURSE_ONLINE_LOADED,
  SCHEDULE_COURSE_ONLINE_LOADING,
  SCHEDULE_COURSE_ONLINE_DELETE,
  FETCH_SCHEDULE_COURSE_ONLINE_FAILED,
  FETCH_SCHEDULE_COURSE_ONLINE_REQUESTING,
  FETCH_SCHEDULE_COURSE_ONLINE_SUCCESS,
  FETCH_MORE_SCHEDULE_COURSE_ONLINE_SUCCESS,
  FETCH_DETAILS_SCHEDULE_COURSE_ONLINE_SUCCESS,
  FETCH_DETAILS_SCHEDULE_COURSE_ONLINE_FAILED,
} from "../constant/scheduleCourseOnlineConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

import axiosClient from "app/const/Instance";
const token = localStorage.getItem(KEY_TOKEN);

export const getScheduleCourseOnlineAction = (parameter) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  return async (dispatch) => {
    dispatch({
      type: FETCH_SCHEDULE_COURSE_ONLINE_REQUESTING,
    });
    try {
      axiosClient
        .get(
          API_GET_SCHEDULE_COURSE_ONLINE +
            `?page=1&limit=${10}${checkParameter}`
        )
        .then((response) => {
          dispatch({
            type: FETCH_SCHEDULE_COURSE_ONLINE_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_SCHEDULE_COURSE_ONLINE_FAILED,
        payload: error,
      });
    }
  };
};
export const getDetailScheduleCourseOnlineAction = (_id) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SCHEDULE_COURSE_ONLINE_REQUESTING,
    });
    try {
      axiosClient
        .get(API_GET_DETAILS_SCHEDULE_COURSE_ONLINE + _id)
        .then((response) => {
          dispatch({
            type: FETCH_DETAILS_SCHEDULE_COURSE_ONLINE_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_DETAILS_SCHEDULE_COURSE_ONLINE_FAILED,
        payload: error,
      });
    }
  };
};
export const createScheduleCourseOnlineAction = (data) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SCHEDULE_COURSE_ONLINE_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_SCHEDULE_COURSE_ONLINE_CREATE,
        method: "POST",
        data: data,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("SCHEDULE_COURSE_ONLINE_CREATE success", res);
          dispatch({
            type: SCHEDULE_COURSE_ONLINE_CREATE,
            payload: res.data,
          });

          showToast("success", "Thêm Lịch Học thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          showToast("error", "Thêm Lịch Học thất bại", {
            timeout: 5000,
          });
          dispatch({
            type: FETCH_SCHEDULE_COURSE_ONLINE_FAILED,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_SCHEDULE_COURSE_ONLINE_FAILED,
        payload: error,
      });
    }
  };
};
export const deleteScheduleCourseOnlineAction = (_id) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SCHEDULE_COURSE_ONLINE_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_SCHEDULE_COURSE_ONLINE_DELETE + _id,
        method: "DELETE",
        headers: {
          token: `${token}`,
        },
      })
        .then((response) => {
          dispatch({
            type: SCHEDULE_COURSE_ONLINE_DELETE,
            payload: response,
          });
          showToast("success", "Xóa Lịch Học thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          showToast("error", "Xóa Lịch Học thất bại", {
            timeout: 5000,
          });
          dispatch({
            type: FETCH_SCHEDULE_COURSE_ONLINE_FAILED,
            payload: err,
          });
        });
    } catch (err) {
      showToast("error", "Xóa Lịch Học thất bại", {
        timeout: 5000,
      });
      dispatch({
        type: FETCH_SCHEDULE_COURSE_ONLINE_FAILED,
        payload: err,
      });
    }
  };
};

export const editScheduleCourseOnlineAction = (_id, data) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + API_SCHEDULE_COURSE_ONLINE_UPDATE + `${_id}`,
        method: "PUT",
        data: data,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          // On Redux
          dispatch({
            type: SCHEDULE_COURSE_ONLINE_UPDATE_IN_LIST,
            payload: res,
          });
          showToast("success", "Cập nhật thông tin thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    } catch (error) {
      console.log("error", error);
      showToast("error", "Cập nhật thông tin thất bại", {
        timeout: 5000,
      });
    }
  };
};

export const handleStudentToScheduleCourseOnline = (_id, studentList) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + API_SCHEDULE_COURSE_ONLINE_HANDLE_USER + _id,
        method: "PUT",
        data: studentList,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          // On Redux
          dispatch({
            type: SCHEDULE_COURSE_ONLINE_UPDATE_IN_LIST,
            payload: res,
          });
          showToast("success", "Cập nhật thông tin thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    } catch (error) {
      console.log("error", error);
      showToast("error", "Cập nhật thông tin thất bại", {
        timeout: 5000,
      });
    }
  };
};
