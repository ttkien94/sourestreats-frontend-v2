import cloneDeep from "lodash/cloneDeep";
import {
  QUESTION_CREATE,
  QUESTION_UPDATE_IN_LIST,
  // QUESTION_LOADED,
  // QUESTION_LOADING,
  QUESTION_DELETE,
  FETCH_QUESTION_REQUESTING,
  GET_QUESTION_SUCCESS,
  // FETCH_MORE_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILED,
} from "core/redux/constant/questionConstant";

const initialState = {
  questionList: [],
  records: 0,
  hasMoreItems: false,
  loading: false,
  error: null,
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_REQUESTING: {
      return { ...state, loading: true };
    }
    case GET_QUESTION_SUCCESS: {
      console.log("GET_QUESTION_SUCCESS:", action.payload);
      let hasMoreItems = action.payload.total > action.payload.data?.length;
      return {
        ...state,
        loading: false,
        questionList: action.payload,
        records: action.payload.total,
        hasMoreItems,
      };
    }
    case QUESTION_CREATE: {
      const list = cloneDeep(state.questionList);
      list.data.push(action.payload.data);
      return { ...state, questionList: list, loading: false };
    }
    case QUESTION_DELETE: {
      const list = cloneDeep(state.questionList);
      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload.data._id
      );
      if (itemIndex !== -1) {
        list.data.splice(itemIndex, 1);
      }

      return { ...state, questionList: list, loading: false };
    }
    case QUESTION_UPDATE_IN_LIST: {
      const list = cloneDeep(state.questionList);
      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload.data._id
      );

      if (itemIndex !== -1) {
        list.data[itemIndex] = {
          ...list.data[itemIndex],
          ...action.payload.data,
        };
      }
      return { ...state, questionList: list, loading: false };
    }
    case FETCH_QUESTION_FAILED: {
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
