import cloneDeep from "lodash/cloneDeep";
import {
  SCHEDULE_COURSE_CREATE,
  SCHEDULE_COURSE_UPDATE_IN_LIST,
  SCHEDULE_COURSE_LOADED,
  SCHEDULE_COURSE_LOADING,
  SCHEDULE_COURSE_DELETE,
  FETCH_SCHEDULE_COURSE_REQUESTING,
  FETCH_SCHEDULE_COURSE_SUCCESS,
  FETCH_MORE_SCHEDULE_COURSE_SUCCESS,
  FETCH_SCHEDULE_COURSE_FAILED,
} from "core/redux/constant/scheduleCourseConstant";

const initialState = {
  scheduleCourseList: [],
  records: 0,
  hasMoreItems: false,
  loading: false,
  error: null,
};

export const scheduleCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEDULE_COURSE_REQUESTING: {
      return { ...state, loading: true };
    }
    case FETCH_SCHEDULE_COURSE_SUCCESS: {
      let hasMoreItems = action.payload.total > action.payload.data?.length;
      return {
        ...state,
        loading: false,
        scheduleCourseList: action.payload.data,
        records: action.payload.total,
        hasMoreItems,
      };
    }
    case FETCH_SCHEDULE_COURSE_FAILED: {
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
