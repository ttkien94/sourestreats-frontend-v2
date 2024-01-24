import cloneDeep from "lodash/cloneDeep";
import {
  COURSE_ONLINE_CREATE,
  COURSE_ONLINE_UPDATE_IN_LIST,
  COURSE_ONLINE_LOADED,
  COURSE_ONLINE_LOADING,
  COURSE_ONLINE_DELETE,
  FETCH_COURSE_ONLINE_REQUESTING,
  FETCH_COURSE_ONLINE_SUCCESS,
  FETCH_MORE_COURSE_ONLINE_SUCCESS,
  FETCH_COURSE_ONLINE_FAILED,
} from "core/redux/constant/courseOnlineConstant";

const initialState = {
  courseOnlineList: [],
  records: 0,
  hasMoreItems: false,
  loading: false,
  error: null,
};

export const courseOnlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_ONLINE_REQUESTING: {
      return { ...state, loading: true };
    }
    case FETCH_COURSE_ONLINE_SUCCESS: {
      let hasMoreItems = action.payload.total > action.payload.data.length;
      return {
        ...state,
        loading: false,
        courseOnlineList: action.payload.data,
        records: action.payload.total,
        hasMoreItems,
      };
    }
    case FETCH_COURSE_ONLINE_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};
