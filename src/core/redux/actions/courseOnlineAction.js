import axios from "axios";

import {
  API_GET_DETAIL_COURSE_ONLINE,
  API_COURSE_ONLINE_CREATE,
  // API_COURSE_ONLINE_CREATE_ARRAY,
  API_ENDPOINT,
  API_GET_COURSE_ONLINE,
  API_COURSE_ONLINE_UPDATE,
  API_COURSE_ONLINE_DELETE,
} from "app/const/Api";

import {
  COURSE_ONLINE_DETAIL,
  COURSE_ONLINE_CREATE,
  COURSE_ONLINE_UPDATE_IN_LIST,
  // COURSE_ONLINE_LOADED,
  // COURSE_ONLINE_LOADING,
  COURSE_ONLINE_DELETE,
  FETCH_COURSE_ONLINE_FAILED,
  FETCH_COURSE_ONLINE_REQUESTING,
  FETCH_COURSE_ONLINE_SUCCESS,
  // FETCH_MORE_COURSE_ONLINE_SUCCESS,
} from "../constant/courseOnlineConstant";
import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";
import axiosClient from "app/const/Instance";

const token = localStorage.getItem(KEY_TOKEN);

export const getDetailCourseOnlineAction = (_id) => {
  console.log("_id", _id);
  return async (dispatch) => {
    dispatch({
      type: FETCH_COURSE_ONLINE_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_GET_DETAIL_COURSE_ONLINE + _id,
        method: "GET",
      }).then((res) => {
        console.log("FETCH_DETAIL_COURSE_ONLINE_REQUESTING success", res);
        dispatch({
          type: COURSE_ONLINE_DETAIL,
          payload: res.data,
        });
      });
    } catch (error) {
      dispatch({
        type: FETCH_COURSE_ONLINE_FAILED,
        payload: error,
      });
    }
  };
};

export const getCourseOnlineAction = (parameter) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  return async (dispatch) => {
    dispatch({
      type: FETCH_COURSE_ONLINE_REQUESTING,
    });
    try {
      axiosClient
        .get(API_GET_COURSE_ONLINE + `?page=1&limit=${10}${checkParameter}`)
        .then((response) => {
          dispatch({
            type: FETCH_COURSE_ONLINE_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_COURSE_ONLINE_FAILED,
        payload: error,
      });
    }
  };
};

export const getAllCourseAction = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_COURSE_ONLINE_REQUESTING,
    });
    try {
      axiosClient.get(API_GET_COURSE_ONLINE).then((response) => {
        dispatch({
          type: FETCH_COURSE_ONLINE_SUCCESS,
          payload: response,
        });
      });
    } catch (error) {
      dispatch({
        type: FETCH_COURSE_ONLINE_FAILED,
        payload: error,
      });
    }
  };
};

export const createCourseOnlineAction = (courseOnline) => {
  console.log("courseOnline", courseOnline);

  return async (dispatch) => {
    dispatch({
      type: FETCH_COURSE_ONLINE_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_COURSE_ONLINE_CREATE,
        method: "POST",
        data: courseOnline,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("COURSE_ONLINE_CREATE success", res);
          dispatch({
            type: COURSE_ONLINE_CREATE,
            payload: res.data,
          });

          showToast("success", "Thêm khóa học thành công", {
            timeout: 5000,
          });
        })
        .catch((error) => {
          showToast("error", "Thêm khóa học thất bại", {
            timeout: 5000,
          });
          dispatch({
            type: FETCH_COURSE_ONLINE_FAILED,
            payload: error,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_COURSE_ONLINE_FAILED,
        payload: error,
      });
    }
  };
};
export const deleteCourseOnlineAction = (courseOnline_id) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_COURSE_ONLINE_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_COURSE_ONLINE_DELETE + courseOnline_id,
        method: "DELETE",
        headers: {
          token: `${token}`,
        },
      })
        .then((response) => {
          dispatch({
            type: COURSE_ONLINE_DELETE,
            payload: response,
          });
          showToast("success", "Xóa khóa học thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          showToast("error", "Xóa khóa học thất bại", {
            timeout: 5000,
          });
          dispatch({
            type: FETCH_COURSE_ONLINE_FAILED,
            payload: err,
          });
        });
    } catch (err) {
      showToast("error", "Xóa khóa học thất bại", {
        timeout: 5000,
      });
      dispatch({
        type: FETCH_COURSE_ONLINE_FAILED,
        payload: err,
      });
    }
  };
};

export const editCourseOnlineAction = (_id, courseOnline) => {
  console.log("courseOnline", courseOnline);
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + API_COURSE_ONLINE_UPDATE + `${_id}`,
        method: "PUT",
        data: courseOnline,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          // On Redux
          dispatch({
            type: COURSE_ONLINE_UPDATE_IN_LIST,
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
