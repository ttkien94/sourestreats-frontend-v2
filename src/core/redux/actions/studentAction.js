import axios from "axios";

import {
  API_STUDENT_CREATE,
  API_ENDPOINT,
  API_GET_STUDENT,
  API_STUDENT_UPDATE,
  API_STUDENT_DELETE,
} from "app/const/Api";

import {
  STUDENT_CREATE,
  STUDENT_UPDATE_IN_LIST,
  STUDENT_LOADED,
  STUDENT_LOADING,
  STUDENT_DELETE,
  FETCH_STUDENT_FAILED,
  FETCH_STUDENT_REQUESTING,
  FETCH_STUDENT_SUCCESS,
  FETCH_MORE_STUDENT_SUCCESS,
} from "../constant/studentConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

import axiosClient from "app/const/Instance";

export const getStudentsAction = (parameter) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  return async (dispatch) => {
    dispatch({
      type: FETCH_STUDENT_REQUESTING,
    });
    try {
      axiosClient
        .get(API_GET_STUDENT + `?page=1&limit=${10}${checkParameter}`)
        .then((response) => {
          dispatch({
            type: FETCH_STUDENT_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_STUDENT_FAILED,
        payload: error,
      });
    }
  };
};

export const getMoreStudentsAction = (parameter, page, limit) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  let checkLimit = limit || 10;
  let skip = page === 1 ? 0 : (page - 1) * limit;
  console.log("getMoreStudentsAction page", skip);
  return async (dispatch) => {
    dispatch({
      type: FETCH_STUDENT_REQUESTING,
    });
    try {
      axiosClient
        .get(
          API_GET_STUDENT + `?skip=${skip}&limit=${checkLimit}${checkParameter}`
        )
        .then((response) => {
          dispatch({
            type: FETCH_MORE_STUDENT_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_STUDENT_FAILED,
        payload: error,
      });
    }
  };
};

export const createStudentAction = (studentInfo) => {
  console.log("createStudentAction:", studentInfo);
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    dispatch({
      type: STUDENT_LOADING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_STUDENT_CREATE,
        method: "POST",
        data: studentInfo,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("res:", res);
          dispatch({
            type: STUDENT_CREATE,
            payload: res.data,
          });

          showToast("success", "Thêm thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          console.error("error:", err);
          dispatch({
            type: STUDENT_LOADED,
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

export const updateStudentAction = (studentInfo) => {
  console.log("updateStudentAction:");
  const token = localStorage.getItem(KEY_TOKEN);
  return async (dispatch) => {
    dispatch({
      type: STUDENT_LOADING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_STUDENT_UPDATE + studentInfo._id,
        method: "PUT",
        data: studentInfo,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          dispatch({
            type: STUDENT_UPDATE_IN_LIST,
            payload: res.data,
          });
          showToast("success", "Cập nhật thành công", {
            timeout: 5000,
          });
        })
        .catch((error) => {
          console.error("error:", error);
          dispatch({
            type: STUDENT_LOADED,
          });
          showToast("error", "Cập nhật thất bại (cccd đã tồn tại)", {
            timeout: 5000,
          });
        });
    } catch (error) {}
  };
};

export const deleteStudentAction = (studentInfo) => {
  const token = localStorage.getItem(KEY_TOKEN);

  console.log("studentInfo", studentInfo);
  return async (dispatch) => {
    dispatch({
      type: STUDENT_LOADING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_STUDENT_DELETE + studentInfo._id,
        method: "delete",
        data: studentInfo,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("res.config.data:", res);
          dispatch({
            type: STUDENT_DELETE,
            payload: res.data,
          });
          showToast("success", "Cập nhật thành công", {
            timeout: 5000,
          });
        })
        .catch((error) => {
          console.error("error:", error);
          dispatch({
            type: STUDENT_LOADED,
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
