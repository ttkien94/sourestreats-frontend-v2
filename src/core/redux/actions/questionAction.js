import axios from "axios";

import {
  API_QUESTION_CREATE,
  API_QUESTION_CREATE_ARRAY,
  API_ENDPOINT,
  API_GET_QUESTION,
  API_QUESTION_UPDATE,
  API_QUESTION_DELETE,
} from "app/const/Api";

import {
  QUESTION_CREATE,
  QUESTION_UPDATE_IN_LIST,
  QUESTION_LOADED,
  QUESTION_LOADING,
  QUESTION_DELETE,
  FETCH_QUESTION_FAILED,
  FETCH_QUESTION_REQUESTING,
  GET_QUESTION_SUCCESS,
  FETCH_MORE_QUESTION_SUCCESS,
} from "../constant/questionConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

import axiosClient from "app/const/Instance";
const token = localStorage.getItem(KEY_TOKEN);
export const getQuestionAction = (parameter) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  return async (dispatch) => {
    dispatch({
      type: FETCH_QUESTION_REQUESTING,
    });
    try {
      axiosClient
        .get(API_GET_QUESTION + `?page=1&limit=${10}${checkParameter}`)
        .then((response) => {
          dispatch({
            type: GET_QUESTION_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_QUESTION_FAILED,
        payload: error,
      });
    }
  };
};

export const createQuestionAction = (question) => {
  console.log("question", question);

  return async (dispatch) => {
    dispatch({
      type: FETCH_QUESTION_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_QUESTION_CREATE,
        method: "POST",
        data: question,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("QUESTION_CREATE success", res);
          dispatch({
            type: QUESTION_CREATE,
            payload: res.data,
          });

          showToast("success", "Thêm câu hỏi thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          showToast("error", "Thêm câu hỏi thất bại", {
            timeout: 5000,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_QUESTION_FAILED,
        payload: error,
      });
    }
  };
};
export const deleteQuestionAction = (question_id) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_QUESTION_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_QUESTION_DELETE + question_id,
        method: "DELETE",
        headers: {
          token: `${token}`,
        },
      })
        .then((response) => {
          dispatch({
            type: QUESTION_DELETE,
            payload: response,
          });
          showToast("success", "Xóa câu hỏi thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          showToast("error", "Xóa câu hỏi thất bại", {
            timeout: 5000,
          });
          dispatch({
            type: FETCH_QUESTION_FAILED,
            payload: err,
          });
        });
    } catch (err) {
      showToast("error", "Xóa câu hỏi thất bại", {
        timeout: 5000,
      });
      dispatch({
        type: FETCH_QUESTION_FAILED,
        payload: err,
      });
    }
  };
};

export const editQuestionAction = (_id, question) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + API_QUESTION_UPDATE + `${_id}`,
        method: "PUT",
        data: question,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          // On Redux
          dispatch({
            type: QUESTION_UPDATE_IN_LIST,
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
