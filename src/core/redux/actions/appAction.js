/**
 * Author: Mạnh Đạt
 * Action: App Action can auto fetch userInfo by Token localStorage
 */
import axios from "axios";

import { KEY_TOKEN } from "app/const/App";
import { API_ENDPOINT, CODE_SUCCESS, GET_USER_WITH_TOKEN } from "app/const/Api";

import { LOGIN_SUCCESS } from "../constant/authConstant";

import {
  APP_LOADING,
  APP_LOADING_FAILED,
  APP_LOADING_SUCCESS,
} from "core/redux/constant/appConstant";

const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    const accessToken = localStorage.getItem(KEY_TOKEN);
    const isLogin = Boolean(accessToken);

    if (isLogin) {
      axios({
        url: API_ENDPOINT + GET_USER_WITH_TOKEN,
        method: "POST",
        data: {
          token: accessToken,
        },
      })
        .then((response) => {
          if (response.status === CODE_SUCCESS) {
            resolve(response.data.data);
          } else {
            reject(new Error("Failed to fetch user data"));
          }
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      reject(new Error("User not logged in"));
    }
  });
};
export const appAction = () => {
  console.log("appAction");
  return async (dispatch) => {
    dispatch({
      type: APP_LOADING,
    });

    try {
      const userData = await fetchUserData(); // Corrected: call fetchUserData()
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userData, // return info user
      });

      dispatch({
        type: APP_LOADING_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: APP_LOADING_FAILED,
        payload: error,
      });
      console.log("error", error);
    }
    // Promise.all([fetchUserData()])
    //   .then((response) => {
    //     dispatch({
    //       type: LOGIN_SUCCESS,
    //       payload: response[0], // return info user
    //     });

    //     dispatch({
    //       type: APP_LOADING_SUCCESS,
    //     });
    //   })
    //   .catch((error) => {
    //     dispatch({
    //       type: APP_LOADING_FAILED,
    //       payload: error,
    //     });

    //     console.log("error", error);
    //   });
  };
};
