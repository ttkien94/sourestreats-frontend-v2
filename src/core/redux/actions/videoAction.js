import axios from "axios";

import {
  API_VIDEO_CREATE,
  API_VIDEO_CREATE_ARRAY,
  API_ENDPOINT,
  API_GET_QUESTION,
  API_VIDEO_UPDATE,
  API_VIDEO_DELETE,
  API_GET_VIDEO,
  API_GET_VIDEO_DETAILS,
} from "app/const/Api";

import {
  GET_VIDEO_DETAIL,
  VIDEO_CREATE,
  VIDEO_UPDATE_IN_LIST,
  VIDEO_LOADED,
  VIDEO_LOADING,
  VIDEO_DELETE,
  FETCH_VIDEO_FAILED,
  FETCH_VIDEO_REQUESTING,
  FETCH_VIDEO_SUCCESS,
  FETCH_VIDEO_DETAIL_SUCCESS,
  FETCH_MORE_VIDEO_SUCCESS,
} from "../constant/videoConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

import axiosClient from "app/const/Instance";

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

export const deleteVideoAction = (video_id) => {};
