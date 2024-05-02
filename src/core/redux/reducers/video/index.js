import cloneDeep from "lodash/cloneDeep";
import {
  GET_VIDEO_DETAIL,
  VIDEO_CREATE,
  VIDEO_UPDATE_IN_LIST,
  // VIDEO_LOADED,
  // VIDEO_LOADING,
  VIDEO_DELETE,
  FETCH_VIDEO_REQUESTING,
  FETCH_VIDEO_SUCCESS,
  // FETCH_MORE_VIDEO_SUCCESS,
  // FETCH_VIDEO_FAILED,
} from "core/redux/constant/videoConstant";

const initialState = {
  videoList: [],
  videoDetail: {},
  records: 0,
  hasMoreItems: false,
  loading: false,
  error: null,
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO_REQUESTING: {
      return { ...state, loading: true };
    }

    case GET_VIDEO_DETAIL: {
      console.log("GET_VIDEO_DETAIL:", action.payload);
      return {
        ...state,
        loading: false,
        videoDetail: action.payload.data,
      };
    }

    case FETCH_VIDEO_SUCCESS: {
      console.log("FETCH_VIDEO_SUCCESS:", action.payload);
      let hasMoreItems = action.payload.total > action.payload.data?.length;
      return {
        ...state,
        loading: false,
        videoList: action.payload,
        records: action.payload.total,
        hasMoreItems,
      };
    }
    case VIDEO_CREATE: {
      const list = cloneDeep(state.videoList);
      list.data.push(action.payload.data);
      return { ...state, videoList: list, loading: false };
    }
    case VIDEO_DELETE: {
      const list = cloneDeep(state.videoList);
      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload.data._id
      );
      if (itemIndex !== -1) {
        list.data.splice(itemIndex, 1);
      }

      return { ...state, videoList: list, loading: false };
    }
    case VIDEO_UPDATE_IN_LIST: {
      const list = cloneDeep(state.videoList);
      const itemIndex = list.data.findIndex(
        (y) => y._id === action.payload.data._id
      );

      if (itemIndex !== -1) {
        list.data[itemIndex] = {
          ...list.data[itemIndex],
          ...action.payload.data,
        };
      }
      return { ...state, videoList: list, loading: false };
    }

    default: {
      return { ...state };
    }
  }
};
