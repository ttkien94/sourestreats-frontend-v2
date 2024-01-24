import axios from "axios";

import {
  API_COURSE_ONLINE_CREATE,
  API_COURSE_ONLINE_CREATE_ARRAY,
  API_ENDPOINT,
  API_GET_COURSE_ONLINE,
  API_COURSE_ONLINE_UPDATE,
  API_COURSE_ONLINE_DELETE,
} from "app/const/Api";

import {
  COURSE_ONLINE_CREATE,
  COURSE_ONLINE_UPDATE_IN_LIST,
  COURSE_ONLINE_LOADED,
  COURSE_ONLINE_LOADING,
  COURSE_ONLINE_DELETE,
  FETCH_COURSE_ONLINE_FAILED,
  FETCH_COURSE_ONLINE_REQUESTING,
  FETCH_COURSE_ONLINE_SUCCESS,
  FETCH_MORE_COURSE_ONLINE_SUCCESS,
} from "../constant/courseOnlineConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

import axiosClient from "app/const/Instance";

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
