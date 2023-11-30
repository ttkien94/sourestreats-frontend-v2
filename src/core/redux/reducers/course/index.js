import {
  COURSE_CREATE,
  COURSE_UPDATE_IN_LIST,
  COURSE_LOADED,
  COURSE_LOADING,
  COURSE_DELETE,
  FETCH_COURSE_REQUESTING,
  FETCH_COURSE_SUCCESS,
  FETCH_MORE_COURSE_SUCCESS,
  FETCH_COURSE_FAILED,
} from "core/redux/constant/courseConstant";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  courseList: [],
  hasMoreItems: false,
  loading: false,
  error: null,
};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH ALL USER LIST
    // case COURSE_GET: {
    //   state.courseList = action.data;
    //   return { ...state };
    // }

    case COURSE_LOADING: {
      console.log("COURSE_LOADING", state);
      return { ...state, loading: true };
    }
    case COURSE_LOADED: {
      return { ...state, loading: false };
    }

    case COURSE_CREATE: {
      const list =
        state.courseList.total > 0
          ? cloneDeep(state.courseList)
          : { data: [], total: 0 };
      console.log("COURSE_create action:", state, action.payload, list);

      list.data.push(action.payload);
      state.loading = false;
      state.courseList = list;
      return { ...state };
    }

    case COURSE_UPDATE_IN_LIST: {
      console.log("COURSE_update_in_list action", state);
      const list =
        state.courseList.total > 0 ? cloneDeep(state.courseList) : [];

      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload._id
      );
      if (itemIndex !== -1) {
        list.data[itemIndex] = { ...action.payload };
      }
      state.loading = false;
      state.courseList = list;
      return { ...state };
    }

    case COURSE_DELETE: {
      const list =
        state.courseList.total > 0 ? cloneDeep(state.courseList) : [];
      console.log("COURSE_DELETE list:", list);
      console.log("COURSE delete action", action.payload);
      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload._id
      );
      if (itemIndex !== -1) {
        list.data.splice(itemIndex, 1);
      }
      state.loading = false;
      state.courseList = list;
      return { ...state };
    }
    // DEMO NEW REDUX
    case FETCH_COURSE_REQUESTING: {
      return { ...state, loading: true };
    }

    case FETCH_COURSE_SUCCESS: {
      let hasMoreItems = action.payload.total > action.payload.data.length;
      return {
        ...state,
        loading: false,
        courseList: action.payload,
        hasMoreItems,
      };
    }
    case FETCH_MORE_COURSE_SUCCESS: {
      let courseOld = state.courseList;
      courseOld.data = courseOld.data.concat(action.payload.data);
      let hasMoreItems = action.payload.total > courseOld.data.length;
      return {
        ...state,
        loading: false,
        courseList: courseOld,
        hasMoreItems,
      };
    }
    case FETCH_COURSE_FAILED: {
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
