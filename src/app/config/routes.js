import Client from "app/modules/ClientModules";
import Admin from "app/modules/AdminModules";
import CourseOnline from "app/modules/CourseOnlineModules";
import { MEDIA_PATH_CLIENT } from "./routes-coursemedia";
import { OFFLINE_PATH_CLIENT } from "./routes-coursesoffline";
import { ONLINE_PATH_CLIENT } from "./routes-coursesonline";

// PATH FOR MODULES CLIENT
export const URL_PATH_CLIENT = {
  HOME: "/",
  HOMECLIENTV2: "/v2",
  LOGIN: "/dang-nhap",
  REGISTER: "/dang-ky",
  ACCOUNT_DETAIL: "/thong-tin-tai-khoan/:screen",
  MRVAS: "/lpe/mr-vas",
  MSLAHAGIANGTHANH: "/lpe/ms-la-ha-giang-thanh",
  VISIONANDMISSION: "/lpe/tam-nhin-su-menh-lpe",
  RULES: "/lpe/noi-quy-quy-dinh",
  COURSE: "/chuong-trinh-huan-luyen",
  COURSEMEDIA: "/chuong-trinh-huan-luyen/media",
  RECRUITMENT: "/lpe/tuyen-dung",
  CONFIRMREGISTER: "/xac-nhan-dang-ky/:token",
  CONFIRMFORGOTPASSWORD: "/xac-nhan-quen-mat-khau/:token",
  FORGOTPASSWORD: "/quen-mat-khau",
  BLOG_LIST: "/tram-doc-cam",
  BLOG_DETAIL: "/tram-doc-cam/:url",
  LIFE_MAP: "/life-map",
  PERFORMANCE: "/hop-tac/toi-uu-thanh-tich",
  CORPORATION: "/hop-tac/huan-luyen-doanh-nghiep",
  EDUCATION: "/hop-tac/dao-tao-the-he-tre",
  COACH: "/hop-tac/tu-van-tri-lieu-ca-nhan",
  DEMO: "/demo",
};

// PATH FOR MODULES ADMIN
export const URL_PATH_ADMIN = {
  HOME: "/",
  USER_MANAGER: "/quan-ly-nguoi-dung",
  PRODUCT_MANAGER: "/quan-ly-san-pham",
  ADD_USER: "/them-nguoi-dung",
  BLOG_EDIT: "/sua-bai/:id",
  ADD_POST: "/them-bai-viet",
  BLOG_MANAGER: "/quan-ly-bai-viet",
  STUDENT_MANAGER: "/quan-ly-hoc-vien",
  COURSE_MANAGER: "/quan-ly-khoa-hoc",
  COURSE_ONLINE_MANAGER: "/quan-ly-khoa-hoc-truc-tuyen",
  COURSE_ONLINE_MANAGER_DETAIL:
    "/quan-ly-khoa-hoc-truc-tuyen/chi-tiet-khoa-hoc",
  SCHEDULE_COURSE_ONLINE_MANAGER: "/quan-ly-lich-hoc",
  EDIT_SCHEDULE_COURSE_ONLINE_MANAGER: "/quan-ly-lich-hoc/chinh-sua-lich-hoc",
  QUESTION_MANAGER: "/quan-ly-cau-hoi",
  VIDEO_MANAGER: "/quan-ly-video",
};

// Public Pages for HOME Template
export const publicRoutes = [
  {
    component: Client.Home,
    exact: true,
    path: URL_PATH_CLIENT.HOME,
  },
  // The Origin Online
  // {
  //   component: Client.CourseOnlineSelfMastery,
  //   exact: true,
  //   path: URL_PATH_CLIENT.HOME,
  // },
  {
    component: Client.Demo,
    exact: true,
    path: URL_PATH_CLIENT.DEMO,
  },
  {
    component: Client.AccountDetail,
    exact: true,
    path: URL_PATH_CLIENT.ACCOUNT_DETAIL,
  },

  {
    component: Client.HomeClientV2,
    exact: true,
    path: URL_PATH_CLIENT.HOMECLIENTV2,
  },
  {
    component: Client.Login,
    exact: true,
    path: URL_PATH_CLIENT.LOGIN,
  },
  {
    component: Client.MrVas,
    exact: true,
    path: URL_PATH_CLIENT.MRVAS,
  },
  {
    component: Client.MsLaHaGiangThanh,
    exact: true,
    path: URL_PATH_CLIENT.MSLAHAGIANGTHANH,
  },
  {
    component: Client.VisionPage,
    exact: true,
    path: URL_PATH_CLIENT.VISIONANDMISSION,
  },
  {
    component: Client.Rules,
    exact: true,
    path: URL_PATH_CLIENT.RULES,
  },
  {
    component: Client.Course,
    exact: true,
    path: URL_PATH_CLIENT.COURSE,
  },
  {
    component: Client.CourseOffline,
    exact: true,
    path: OFFLINE_PATH_CLIENT.COURSEOFFLINE,
  },
  {
    component: Client.CourseOfflinePP,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa1,
  },
  {
    component: Client.CourseOfffLineTheFirstStep,
    exact: true,
    path: OFFLINE_PATH_CLIENT.theFirstStep,
  },
  {
    component: Client.CourseOfflineSM,
    exact: true,
    path: OFFLINE_PATH_CLIENT.SM,
  },
  {
    component: Client.CourseOfflineUM,
    exact: true,
    path: OFFLINE_PATH_CLIENT.UM,
  },
  {
    component: Client.CourseOfflinePR,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa2,
  },
  {
    component: Client.CourseOfflineIYL,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa3,
  },
  {
    component: Client.CourseOfflinePH,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa4,
  },
  {
    component: Client.CourseOfflineMOE,
    exact: true,
    path: OFFLINE_PATH_CLIENT.khoa5,
  },
  {
    component: Client.CourseOfflineICPC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.ICPC,
  },

  {
    component: Client.CourseOfflineGRADUATE,
    exact: true,
    path: OFFLINE_PATH_CLIENT.gol,
  },
  {
    component: Client.CourseOfflineOAC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.OAC,
  },
  {
    component: Client.CourseOfflineLTC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.LTC,
  },
  {
    component: Client.CourseOfflineIMCPC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.IMCPC,
  },
  {
    component: Client.CourseOfflineITTC,
    exact: true,
    path: OFFLINE_PATH_CLIENT.ITTC,
  },

  {
    component: Client.CourseMedia,
    exact: true,
    path: URL_PATH_CLIENT.COURSEMEDIA,
  },
  {
    component: Client.ComboCourseMedia1,
    exact: true,
    path: MEDIA_PATH_CLIENT.COMBO1,
  },
  {
    component: Client.Tower1,
    exact: true,
    path: MEDIA_PATH_CLIENT.TOWER1,
  },
  {
    component: Client.VideoStreaming,
    exact: true,
    path: MEDIA_PATH_CLIENT.VIDEOSTREAMING,
  },
  {
    component: Client.Register,
    exact: true,
    path: URL_PATH_CLIENT.REGISTER,
  },

  {
    component: Client.Recruitment,
    exact: true,
    path: URL_PATH_CLIENT.RECRUITMENT,
  },
  {
    component: Client.ConfirmRegister,
    exact: true,
    path: URL_PATH_CLIENT.CONFIRMREGISTER,
  },
  {
    component: Client.VerifyForgotPassword,
    exact: true,
    path: URL_PATH_CLIENT.CONFIRMFORGOTPASSWORD,
  },
  {
    component: Client.ForgotPassword,
    exact: true,
    path: URL_PATH_CLIENT.FORGOTPASSWORD,
  },
  {
    component: Client.BlogList,
    exact: true,
    path: URL_PATH_CLIENT.BLOG_LIST,
  },
  {
    component: Client.BlogDetail,
    exact: true,
    path: URL_PATH_CLIENT.BLOG_DETAIL,
  },
  {
    component: Client.LifeMap,
    exact: true,
    path: URL_PATH_CLIENT.LIFE_MAP,
  },
  {
    component: Client.Coach,
    exact: true,
    path: URL_PATH_CLIENT.COACH,
  },
  {
    component: Client.Performance,
    exact: true,
    path: URL_PATH_CLIENT.PERFORMANCE,
  },
  {
    component: Client.Education,
    exact: true,
    path: URL_PATH_CLIENT.EDUCATION,
  },
  {
    component: Client.Corporation,
    exact: true,
    path: URL_PATH_CLIENT.CORPORATION,
  },
];
// public pages for Course Online Template

export const courseOnlineRoutes = [
  {
    component: Client.CourseOnlineSelfMastery,
    exact: true,
    path: ONLINE_PATH_CLIENT.SELFMASTERY,
  },
  {
    component: Client.CourseOnlineTower,
    exact: true,
    path: ONLINE_PATH_CLIENT.TOWER,
  },

  // {
  //   component: CourseOnline.CourseOnlineHome,
  //   exact: true,
  //   path: ONLINE_PATH_CLIENT.COURSEONLINEHOME,
  //   title: "home_page",
  // },
  {
    component: CourseOnline.CourseOnlineDetails.TowerOne,
    exact: true,
    path: ONLINE_PATH_CLIENT.TOWERONE,
    title: "Tháp 1",
  },
];
// Only for Admin Pages
export const adminRoutes = [
  {
    component: Admin.Home,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.HOME,
  },
  {
    component: Admin.UserManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.USER_MANAGER,
  },
  {
    component: Admin.ProductsManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.PRODUCT_MANAGER,
  },
  {
    component: Admin.AddUser,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.ADD_USER,
  },
  {
    component: Admin.AddPost,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.ADD_POST,
  },
  {
    component: Admin.BlogsManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.BLOG_MANAGER,
  },
  {
    component: Admin.EditPost,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.BLOG_EDIT,
  },
  {
    component: Admin.Student,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.STUDENT_MANAGER,
  },
  {
    component: Admin.Course,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.COURSE_MANAGER,
  },

  {
    component: Admin.CourseOnlineManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.COURSE_ONLINE_MANAGER,
  },
  {
    component: Admin.CreateCourseOnline,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.COURSE_ONLINE_MANAGER_DETAIL,
  },
  {
    component: Admin.ScheduleCourseOnlineManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.SCHEDULE_COURSE_ONLINE_MANAGER,
  },
  {
    component: Admin.EditScheduleCourseOnlineManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.EDIT_SCHEDULE_COURSE_ONLINE_MANAGER,
  },

  {
    component: Admin.VideoManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.VIDEO_MANAGER,
  },
  {
    component: Admin.QuestionManager,
    exact: true,
    path: "/admin" + URL_PATH_ADMIN.QUESTION_MANAGER,
  },
];
