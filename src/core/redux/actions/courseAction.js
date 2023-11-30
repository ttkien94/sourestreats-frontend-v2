import axios from "axios";

import {
  API_COURSE_CREATE,
  API_COURSE_CREATE_ARRAY,
  API_ENDPOINT,
  API_GET_COURSE,
  API_COURSE_UPDATE,
  API_COURSE_DELETE,
} from "app/const/Api";

import {
  COURSE_CREATE,
  COURSE_UPDATE_IN_LIST,
  COURSE_LOADED,
  COURSE_LOADING,
  COURSE_DELETE,
  FETCH_COURSE_FAILED,
  FETCH_COURSE_REQUESTING,
  FETCH_COURSE_SUCCESS,
  FETCH_MORE_COURSE_SUCCESS,
} from "../constant/courseConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

import axiosClient from "app/const/Instance";

export const getCourseAction = (parameter) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  return async (dispatch) => {
    dispatch({
      type: FETCH_COURSE_REQUESTING,
    });
    try {
      axiosClient
        .get(API_GET_COURSE + `?page=1&limit=${10}${checkParameter}`)
        .then((response) => {
          dispatch({
            type: FETCH_COURSE_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_COURSE_FAILED,
        payload: error,
      });
    }
  };
};

export const getAllCourseAction = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_COURSE_REQUESTING,
    });
    try {
      axiosClient.get(API_GET_COURSE).then((response) => {
        dispatch({
          type: FETCH_COURSE_SUCCESS,
          payload: response,
        });
      });
    } catch (error) {
      dispatch({
        type: FETCH_COURSE_FAILED,
        payload: error,
      });
    }
  };
};

export const getMoreCourseAction = (parameter, page, limit) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  let checkLimit = limit || 10;
  let skip = page === 1 ? 0 : (page - 1) * limit;
  console.log("getMoreCoursesAction page", skip);
  return async (dispatch) => {
    dispatch({
      type: FETCH_COURSE_REQUESTING,
    });
    try {
      axiosClient
        .get(
          API_GET_COURSE + `?skip=${skip}&limit=${checkLimit}${checkParameter}`
        )
        .then((response) => {
          dispatch({
            type: FETCH_MORE_COURSE_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_COURSE_FAILED,
        payload: error,
      });
    }
  };
};

export const createArrayCourseAction = (courseInfo) => {
  console.log("createArrayCourseAction:", courseInfo);
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    dispatch({
      type: COURSE_LOADING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_COURSE_CREATE_ARRAY,
        method: "POST",
        data: courseInfo,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("res:", res);
          dispatch({
            type: COURSE_CREATE,
            payload: res.data,
          });

          showToast("success", "Thêm thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error("error:", err);
          dispatch({
            type: COURSE_LOADED,
          });
          showToast("error", "Thêm thất bại (cccd đã tồn tại)", {
            timeout: 5000,
          });
        });
    } catch (error) {
      console.log("error", error);
      showToast("error", "Thêm thất bại", {
        timeout: 5000,
      });
    }
  };
};

export const createCourseAction = (courseInfo) => {
  console.log("createCourseAction:", courseInfo);
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    dispatch({
      type: COURSE_LOADING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_COURSE_CREATE,
        method: "POST",
        data: courseInfo,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("res:", res);
          dispatch({
            type: COURSE_CREATE,
            payload: res.data,
          });

          showToast("success", "Thêm thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error("error:", err.response.status);
          dispatch({
            type: COURSE_LOADED,
          });
          if (err.response.status === 409) {
            showToast("error", "Thêm thất bại (Mã khóa học đã tồn tại)", {
              timeout: 5000,
            });
          } else {
            showToast("error", "Thêm thất bại (Lỗi không xác định)", {
              timeout: 5000,
            });
          }
        });
    } catch (error) {
      console.log("error", error);
      showToast("error", "Thêm thất bại", {
        timeout: 5000,
      });
    }
  };
};

export const updateCourseAction = (courseInfo) => {
  console.log("updateCourseAction:");
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    dispatch({
      type: COURSE_LOADING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_COURSE_UPDATE + courseInfo._id,
        method: "PUT",
        data: courseInfo,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: COURSE_UPDATE_IN_LIST,
            payload: res.data,
          });
          showToast("success", "Cập nhật thành công", {
            timeout: 5000,
          });
        })
        .catch((error) => {
          console.error("error:", error);
          dispatch({
            type: COURSE_LOADED,
          });
          showToast("error", "Cập nhật thất bại (cccd đã tồn tại)", {
            timeout: 5000,
          });
        });
    } catch (error) {}
  };
};

export const deleteCourseAction = (courseInfo) => {
  const token = localStorage.getItem(KEY_TOKEN);

  console.log("courseInfo", courseInfo);
  return async (dispatch) => {
    dispatch({
      type: COURSE_LOADING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_COURSE_DELETE + courseInfo._id,
        method: "delete",
        data: courseInfo,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("res.config.data:", res);
          dispatch({
            type: COURSE_DELETE,
            payload: res.data,
          });
          showToast("success", "Cập nhật thành công", {
            timeout: 5000,
          });
        })
        .catch((error) => {
          console.error("error:", error);
          dispatch({
            type: COURSE_LOADED,
          });
          showToast("error", "Xoá thất bại", {
            timeout: 5000,
          });
        });
    } catch (error) {
      console.log("error", error);
    }
  };
};
