import cloneDeep from "lodash/cloneDeep";
import {
  SCHEDULE_COURSE_ONLINE_CREATE,
  SCHEDULE_COURSE_ONLINE_UPDATE_IN_LIST,
  // SCHEDULE_COURSE_ONLINE_LOADED,
  // SCHEDULE_COURSE_ONLINE_LOADING,
  SCHEDULE_COURSE_ONLINE_DELETE,
  FETCH_SCHEDULE_COURSE_ONLINE_REQUESTING,
  FETCH_SCHEDULE_COURSE_ONLINE_SUCCESS,
  // FETCH_MORE_SCHEDULE_COURSE_ONLINE_SUCCESS,
  FETCH_SCHEDULE_COURSE_ONLINE_FAILED,
  FETCH_DETAILS_SCHEDULE_COURSE_ONLINE_SUCCESS,
  FETCH_DETAILS_SCHEDULE_COURSE_ONLINE_FAILED,
} from "core/redux/constant/scheduleCourseOnlineConstant";

const initialState = {
  scheduleCourseOnlineList: [],
  detailScheduleCourseOnline: {},
  records: 0,
  hasMoreItems: false,
  loading: true,
  error: null,
};

export const scheduleCourseOnlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEDULE_COURSE_ONLINE_REQUESTING: {
      return { ...state, loading: true };
    }
    case FETCH_SCHEDULE_COURSE_ONLINE_SUCCESS: {
      let hasMoreItems = action.payload.total > action.payload.data?.length;
      return {
        ...state,
        loading: false,
        scheduleCourseOnlineList: action.payload,
        records: action.payload.total,
        hasMoreItems,
      };
    }
    case FETCH_SCHEDULE_COURSE_ONLINE_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case FETCH_DETAILS_SCHEDULE_COURSE_ONLINE_SUCCESS: {
      console.log("action.payload", action.payload);
      return {
        ...state,
        loading: false,
        detailScheduleCourseOnline: action.payload.data[0],
      };
    }
    case FETCH_DETAILS_SCHEDULE_COURSE_ONLINE_FAILED: {
      return {
        ...state,
        loading: false,
        detailScheduleCourseOnline: {},
      };
    }
    case SCHEDULE_COURSE_ONLINE_CREATE: {
      const list = cloneDeep(state.scheduleCourseOnlineList);
      list.data.push(action.payload.data);
      return { ...state, scheduleCourseOnlineList: list, loading: false };
    }
    case SCHEDULE_COURSE_ONLINE_DELETE: {
      const list = cloneDeep(state.scheduleCourseOnlineList);
      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload.data._id
      );
      if (itemIndex !== -1) {
        list.data.splice(itemIndex, 1);
      }

      return { ...state, scheduleCourseOnlineList: list, loading: false };
    }
    case SCHEDULE_COURSE_ONLINE_UPDATE_IN_LIST: {
      const list = cloneDeep(state.scheduleCourseOnlineList);
      if (list && list.length > 0) {
        const itemIndex = list.data.findIndex(
          (y) => y._id === action.payload.data._id
        );

        if (itemIndex !== -1) {
          list.data[itemIndex] = {
            ...list.data[itemIndex],
            ...action.payload.data,
          };
        }
        return {
          ...state,
          scheduleCourseOnlineList: list,
          loading: false,
          detailScheduleCourseOnline: action.payload.data,
        };
      } else {
        return {
          ...state,
          loading: false,
          detailScheduleCourseOnline: action.payload.data,
        };
      }
    }

    default: {
      return { ...state };
    }
  }
};
