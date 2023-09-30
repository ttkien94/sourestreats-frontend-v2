export const API_VERSION = "/v1";

export const API_ENDPOINT = process.env.REACT_APP_BACKEND_URL;
export const SIGN_IN = "/auth/sign-in";
export const SIGN_UP = "/auth/sign-up";
export const FORGOT_PASSWORD = "/auth/forgot-password";
export const VERIFY_REGISTER = "/auth/verify-sign-up";
export const GET_USER_WITH_TOKEN = "/auth/fetch-with-token";
export const VERIFY_FORGET_PASSWORD = "/auth/verify-forgot-password";
export const CHANGE_PASSWORD = "/auth/change-password";
export const CATEGORY = "/category";

// users
export const USERS = "/users/";
export const USERS_SEARCH = "/users/search/";
export const USER_UPDATE = "/users/client/";
export const ADMIN_UPDATE = "/users/admin/";
export const UPLOAD_AVATAR = "/users/upload-avatar";
export const REMOVE_AVATAR = "/users/delete-avatar";

// BLOG
export const UPLOAD_IMAGE_BLOG = "/blog/upload-image-blog";

// TOPIC
export const TOPIC = "/topic/";

// Blog
export const BLOG = "/blog/";
export const CREATE_BLOG = "/blog/create-post";

// Code status
export const CODE_SUCCESS = 200;
export const CODE_FAILURE = 403;
export const CODE_FAILURE_AUTHENTICATION = 404;
