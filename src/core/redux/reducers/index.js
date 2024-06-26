import { appReducer } from "./app";
import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./user";
import { topicReducer } from "./topic";
import { blogReducer } from "./blog";
import { studentReducer } from "./student";
import { courseReducer } from "./course";
import { courseOnlineReducer } from "./courseOnline";
import { scheduleCourseOnlineReducer } from "./scheduleCourseOnline";
// import { scheduleCourseReducer } from "./scheduleCourseOnline";
import { questionReducer } from "./question";
import { videoReducer } from "./video";
export default combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  topic: topicReducer,
  blog: blogReducer,
  student: studentReducer,
  course: courseReducer,
  courseOnline: courseOnlineReducer,
  scheduleCourseOnline: scheduleCourseOnlineReducer,
  question: questionReducer,
  video: videoReducer,
});
