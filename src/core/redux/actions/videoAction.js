import axios from "axios";

import {
  API_VIDEO_CREATE,
  // API_VIDEO_CREATE_ARRAY,
  API_ENDPOINT,
  // API_GET_QUESTION,
  API_VIDEO_UPDATE,
  API_VIDEO_DELETE,
  API_GET_VIDEO,
  API_GET_VIDEO_DETAILS,
} from "app/const/Api";

import {
  GET_VIDEO_DETAIL,
  VIDEO_CREATE,
  VIDEO_UPDATE_IN_LIST,
  // VIDEO_LOADED,
  // VIDEO_LOADING,
  VIDEO_DELETE,
  FETCH_VIDEO_FAILED,
  FETCH_VIDEO_REQUESTING,
  FETCH_VIDEO_SUCCESS,
  // FETCH_VIDEO_DETAIL_SUCCESS,
  // FETCH_MORE_VIDEO_SUCCESS,
} from "../constant/videoConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";
import axiosClient from "app/const/Instance";
const token = localStorage.getItem(KEY_TOKEN);

export const getVideoDetail = (video_id) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_VIDEO_REQUESTING,
    });
    try {
      axiosClient.get(API_GET_VIDEO_DETAILS + video_id).then((response) => {
        dispatch({
          type: GET_VIDEO_DETAIL,
          payload: response,
        });
      });
    } catch (error) {
      dispatch({
        type: FETCH_VIDEO_FAILED,
        payload: error,
      });
    }
  };
};

export const getVideoAction = (parameter) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  return async (dispatch) => {
    dispatch({
      type: FETCH_VIDEO_REQUESTING,
    });
    try {
      axiosClient
        .get(API_GET_VIDEO + `?page=1&limit=${10}${checkParameter}`)
        .then((response) => {
          dispatch({
            type: FETCH_VIDEO_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_VIDEO_FAILED,
        payload: error,
      });
    }
  };
};

export const createVideoAction = (video) => {
  console.log("video", video);

  return async (dispatch) => {
    dispatch({
      type: FETCH_VIDEO_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_VIDEO_CREATE,
        method: "POST",
        data: video,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("VIDEO_CREATE success", res);
          dispatch({
            type: VIDEO_CREATE,
            payload: res.data,
          });

          showToast("success", "Thêm video thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          showToast("error", "Thêm video thất bại", {
            timeout: 5000,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_VIDEO_FAILED,
        payload: error,
      });
    }
  };
};
export const deleteVideoAction = (video_id) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_VIDEO_REQUESTING,
    });
    try {
      await axios({
        url: API_ENDPOINT + API_VIDEO_DELETE + video_id,
        method: "DELETE",
        headers: {
          token: `${token}`,
        },
      })
        .then((response) => {
          dispatch({
            type: VIDEO_DELETE,
            payload: response,
          });
          showToast("success", "Xóa video thành công", {
            timeout: 5000,
          });
        })
        .catch((err) => {
          showToast("error", "Xóa video thất bại", {
            timeout: 5000,
          });
          dispatch({
            type: FETCH_VIDEO_FAILED,
            payload: err,
          });
        });
    } catch (err) {
      showToast("error", "Xóa video thất bại", {
        timeout: 5000,
      });
      dispatch({
        type: FETCH_VIDEO_FAILED,
        payload: err,
      });
    }
  };
};

export const editVideoAction = (_id, video) => {
  return async (dispatch) => {
    try {
      await axios({
        url: API_ENDPOINT + API_VIDEO_UPDATE + `${_id}`,
        method: "PUT",
        data: video,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          // On Redux
          dispatch({
            type: VIDEO_UPDATE_IN_LIST,
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
