import Home from "./home";
import HomeClientV2 from "./homeClientV2";
// Auth
import Login from "./login";
import AccountDetail from "./accountDetail";
import ConfirmRegister from "./confirmRegister";
import ForgotPassword from "./forgotPassword";
import VerifyForgotPassword from "./confirmForgotPassword";
// Course
import Course from "./courses/summary";
import CourseOnline from "./courses/courseOnline";
import CourseOffline from "./courses/courseOffline";
import CourseMedia from "./courses/courseMedia";
// course offline combo 10
import CourseOfflinePP from "./courses/courseOffline/pp";
import CourseOfflineSM from "./courses/courseOffline/sm";
import CourseOfflineUM from "./courses/courseOffline/um";

import CourseOfflinePR from "./courses/courseOffline/pr";
import CourseOfflineIYL from "./courses/courseOffline/iyl";
import CourseOfflinePH from "./courses/courseOffline/ph";
import CourseOfflineMOE from "./courses/courseOffline/moe";
import CourseOfflineICPC from "./courses/courseOffline/icpc";
import CourseOfflineBAV from "./courses/courseOffline/bav";
import CourseOfflineLEADERSHIP from "./courses/courseOffline/leadership";
import CourseOfflineIDENTITY from "./courses/courseOffline/identity";
import CourseOfflineGRADUATE from "./courses/courseOffline/graduate";

// 3 khóa khác
import CourseOfflineOAC from "./courses/courseOffline/oac";
import CourseOfflineLTC from "./courses/courseOffline/ltc";
import CourseOfflinePAR from "./courses/courseOffline/par";

// ICTA
import CourseOfflineIMCPC from "./courses/courseOffline/imcpc";
import CourseOfflineITTC from "./courses/courseOffline/ittc";
// course online
import CourseOnlineTower from "./courses/courseOnline/tower";
import CourseOnlineSelfMastery from "./courses/courseOnline/selfMastery";
import CourseOnlineRUNFASTER from "./courses/courseOnline/runFaster";
import CourseOnlineRFREGISTER from "./courses/courseOnline/runFaster/register";
import CourseOnlineCCS from "./courses/courseOnline/ccs";
import CourseOnlineBFW from "./courses/courseOnline/bfw";
import CourseOnlineVL from "./courses/courseOnline/visionaryLeadership";
// LPE
import MrVas from "./lpe/mrVas";
import MsLaHaGiangThanh from "./lpe/msLaHaGiangThanh";
import VisionPage from "./lpe/visionAndMissionLPE";
import Rules from "./lpe/rules";
import Recruitment from "./lpe/recruitment";

// Blog
import BlogList from "./blogList";
import BlogDetail from "./blogDetail";

// Map
import LifeMap from "./lifeMap";

import Register from "./register";

// Demo
import Demo from "./demo";

// Corperate

import { Education, Performance, Corporation, Coach } from "./cooperate";

const Client = {
  Home,
  HomeClientV2,
  Login,
  AccountDetail,
  MrVas,
  MsLaHaGiangThanh,
  VisionPage,
  Rules,
  Course,
  CourseOnline,
  CourseOffline,
  CourseMedia,
  CourseOfflinePP,
  CourseOfflineSM,
  CourseOfflineUM,
  CourseOfflinePR,
  CourseOfflineIYL,
  CourseOfflinePH,
  CourseOfflineMOE,
  CourseOfflineICPC,
  CourseOfflineBAV,
  CourseOfflineLEADERSHIP,
  CourseOfflineIDENTITY,
  CourseOfflineGRADUATE,
  CourseOfflineOAC,
  CourseOfflineLTC,
  CourseOfflinePAR,
  CourseOfflineIMCPC,
  CourseOfflineITTC,
  CourseOnlineSelfMastery,
  CourseOnlineRUNFASTER,
  CourseOnlineRFREGISTER,
  CourseOnlineBFW,
  CourseOnlineCCS,
  CourseOnlineVL,
  CourseOnlineTower,
  Register,
  Recruitment,
  ConfirmRegister,
  ForgotPassword,
  VerifyForgotPassword,
  BlogList,
  BlogDetail,
  LifeMap,
  Demo,
  Performance,
  Education,
  Corporation,
  Coach,
};

export default Client;
