import {
  STUDENT_CREATE,
  STUDENT_UPDATE_IN_LIST,
  STUDENT_LOADED,
  STUDENT_LOADING,
  STUDENT_DELETE,
  FETCH_STUDENT_REQUESTING,
  FETCH_STUDENT_SUCCESS,
  FETCH_MORE_STUDENT_SUCCESS,
  FETCH_STUDENT_FAILED,
} from "core/redux/constant/studentConstant";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  studentList: [],
  hasMoreItems: false,
  loading: false,
  error: null,
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH ALL USER LIST
    // case STUDENT_GET: {
    //   state.studentList = action.data;
    //   return { ...state };
    // }

    case STUDENT_LOADING: {
      console.log("STUDENT_LOADING", state);
      return { ...state, loading: true };
    }
    case STUDENT_LOADED: {
      return { ...state, loading: false };
    }

    case STUDENT_CREATE: {
      const list =
        state.studentList.total > 0 ? cloneDeep(state.studentList) : [];
      console.log("student_create action:", state, action.payload, list);

      list.data.push(action.payload);
      state.loading = false;
      state.studentList = list;
      return { ...state };
    }

    case STUDENT_UPDATE_IN_LIST: {
      console.log("student_update_in_list action", state);
      const list =
        state.studentList.total > 0 ? cloneDeep(state.studentList) : [];

      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload._id
      );
      if (itemIndex !== -1) {
        list.data[itemIndex] = { ...action.payload };
      }
      state.loading = false;
      state.studentList = list;
      return { ...state };
    }

    case STUDENT_DELETE: {
      const list =
        state.studentList.total > 0 ? cloneDeep(state.studentList) : [];
      console.log("STUDENT_DELETE list:", list);
      console.log("student delete action", action.payload);
      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload._id
      );
      if (itemIndex !== -1) {
        list.data.splice(itemIndex, 1);
      }
      state.loading = false;
      state.studentList = list;
      return { ...state };
    }
    // DEMO NEW REDUX
    case FETCH_STUDENT_REQUESTING: {
      return { ...state, loading: true };
    }

    case FETCH_STUDENT_SUCCESS: {
      let hasMoreItems = action.payload.total > action.payload.data.length;
      return {
        ...state,
        loading: false,
        studentList: action.payload,
        hasMoreItems,
      };
    }
    case FETCH_MORE_STUDENT_SUCCESS: {
      let studentOld = state.studentList;
      studentOld.data = studentOld.data.concat(action.payload.data);
      let hasMoreItems = action.payload.total > studentOld.data.length;
      return {
        ...state,
        loading: false,
        studentList: studentOld,
        hasMoreItems,
      };
    }
    case FETCH_STUDENT_FAILED: {
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
