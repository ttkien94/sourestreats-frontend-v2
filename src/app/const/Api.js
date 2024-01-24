export const API_VERSION = "/v1";

export const API_ENDPOINT =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BACKEND_URL
    : process.env.REACT_APP_BACKEND_URL_ONLINE;
export const SIGN_IN = "/auth/sign-in";
export const SIGN_UP = "/auth/sign-up";
export const FORGOT_PASSWORD = "/auth/forgot-password";
export const VERIFY_REGISTER = "/auth/verify-sign-up";
export const GET_USER_WITH_TOKEN = "/auth/fetch-with-token";
export const VERIFY_FORGET_PASSWORD = "/auth/verify-forgot-password";
export const CHANGE_PASSWORD = "/auth/change-password";
export const CATEGORY = "/category";

//core

// users
export const USERS = "/users/";
export const USERS_SEARCH = "/users/search/";
export const USER_UPDATE = "/users/client/";
export const USER_SENDFORMCONTACT = "/users/send-form-contact/";
export const ADMIN_UPDATE = "/users/admin/";
export const UPLOAD_AVATAR = "/users/upload-avatar";
export const REMOVE_AVATAR = "/users/delete-avatar";

//  admin STUDENT
export const API_GET_STUDENT = "/student/";
export const API_STUDENT_CREATE = "/student/create/";
export const API_STUDENT_CREATE_ARRAY = "/student/create-array/";
export const API_STUDENT_SEARCH = "/student/search/";
export const API_STUDENT_UPDATE = "/student/update/";
export const API_STUDENT_DELETE = "/student/delete/";

// admin course
export const API_GET_COURSE = "/course/";
export const API_COURSE_CREATE = "/course/create/";
export const API_COURSE_CREATE_ARRAY = "/course/create-array/";
export const API_COURSE_SEARCH = "/course/search/";
export const API_COURSE_UPDATE = "/course/update/";
export const API_COURSE_DELETE = "/course/delete/";

// admin courseOnline
export const API_GET_COURSE_ONLINE = "/course-online/";
export const API_COURSE_ONLINE_CREATE = "/course-online/create/";
export const API_COURSE_ONLINE_CREATE_ARRAY = "/course-online/create-array/";
export const API_COURSE_ONLINE_SEARCH = "/course-online/search/";
export const API_COURSE_ONLINE_UPDATE = "/course-online/update/";
export const API_COURSE_ONLINE_DELETE = "/course-online/delete/";

// admin scheduleCourse

export const API_GET_SCHEDULE_COURSE = "/schedule-course/";
export const API_SCHEDULE_COURSE_CREATE = "/schedule-course/create/";
export const API_SCHEDULE_COURSE_CREATE_ARRAY =
  "/schedule-course/create-array/";
export const API_SCHEDULE_COURSE_SEARCH = "/schedule-course/search/";
export const API_SCHEDULE_COURSE_UPDATE = "/schedule-course/update/";
export const API_SCHEDULE_COURSE_DELETE = "/schedule-course/delete/";

// admin question

export const API_GET_QUESTION = "/question/";
export const API_QUESTION_CREATE = "/question/create/";
export const API_QUESTION_CREATE_ARRAY = "/question/create-array/";
export const API_QUESTION_SEARCH = "/question/search/";
export const API_QUESTION_UPDATE = "/question/update/";
export const API_QUESTION_DELETE = "/question/delete/";

// admin Video
export const API_GET_VIDEO_DETAILS = "/video/details/";
export const API_GET_VIDEO = "/video/";
export const API_VIDEO_CREATE = "/video/create/";
export const API_VIDEO_CREATE_ARRAY = "/video/create-array/";
export const API_VIDEO_SEARCH = "/video/search/";
export const API_VIDEO_UPDATE = "/video/update/";
export const API_VIDEO_DELETE = "/video/delete/";

// BLOG
export const UPLOAD_IMAGE_BLOG = "/blog/upload-image-blog";

// TOPIC
export const TOPIC = "/topic/";

// Blog
export const BLOG = "/blog/";
export const CREATE_BLOG = "/blog/create-post";

// Code status
export const CODE_SUCCESS = 200;
export const CODE_FAIL = 202;
export const CODE_FAILURE = 403;
export const CODE_FAILURE_AUTHENTICATION = 404;
