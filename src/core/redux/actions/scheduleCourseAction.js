import axios from "axios";

import {
  API_SCHEDULE_COURSE_CREATE,
  API_SCHEDULE_COURSE_CREATE_ARRAY,
  API_ENDPOINT,
  API_GET_SCHEDULE_COURSE,
  API_SCHEDULE_COURSE_UPDATE,
  API_SCHEDULE_COURSE_DELETE,
} from "app/const/Api";

import {
  SCHEDULE_COURSE_CREATE,
  SCHEDULE_COURSE_UPDATE_IN_LIST,
  SCHEDULE_COURSE_LOADED,
  SCHEDULE_COURSE_LOADING,
  SCHEDULE_COURSE_DELETE,
  FETCH_SCHEDULE_COURSE_FAILED,
  FETCH_SCHEDULE_COURSE_REQUESTING,
  FETCH_SCHEDULE_COURSE_SUCCESS,
  FETCH_MORE_SCHEDULE_COURSE_SUCCESS,
} from "../constant/scheduleCourseConstant";

import { showToast } from "core/utils/toastUtil";
import { KEY_TOKEN } from "app/const/App";

import axiosClient from "app/const/Instance";

export const getScheduleCourseAction = (parameter) => {
  let checkParameter = parameter ? `&${parameter}` : "";
  return async (dispatch) => {
    dispatch({
      type: FETCH_SCHEDULE_COURSE_REQUESTING,
    });
    try {
      axiosClient
        .get(API_GET_SCHEDULE_COURSE + `?page=1&limit=${10}${checkParameter}`)
        .then((response) => {
          dispatch({
            type: FETCH_SCHEDULE_COURSE_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: FETCH_SCHEDULE_COURSE_FAILED,
        payload: error,
      });
    }
  };
};
