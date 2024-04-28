// ------------------- Big island -------------------
import bigIsLandPo from "./assets/img/bigIsLandPo.png";
import bigIsLandIcpc from "./assets/img/bigIsLandIcpc.png";
import bigIsLandImcpc from "./assets/img/bigIsLandImcpc.png";
import bigIsLandGol from "./assets/img/bigIsLandGol.png";
import signPo from "./assets/img/signPo.png";
import signIcpc from "./assets/img/signIcpc.png";
import signImcpc from "./assets/img/signImcpc.png";
import signGol from "./assets/img/signGol.png";

// ------------------- Small island -------------------
import smallIslandSm from "./assets/img/smallIslandSm.png";
import signSm from "./assets/img/signSm.png";
import smallIslandUm from "./assets/img/smallIslandUm.png";
import signUm from "./assets/img/signUm.png";
import smallIslandOac from "./assets/img/smallIslandOac.png";
import signOac from "./assets/img/signOac.png";
import smallIslandLtc from "./assets/img/smallIslandLtc.png";
import signLtc from "./assets/img/signLtc.png";

// import signUm from "./assets/img/smallisland3.png";
// import SmallIslandSign3 from "./assets/img/smallislandsign3.png";
// import SmallIsland4 from "./assets/img/smallisland4.png";
// import SmallIslandSign4 from "./assets/img/smallislandsign4.png";
// import SmallIsland5 from "./assets/img/smallisland5.png";
// import SmallIslandSign5 from "./assets/img/smallislandsign5.png";
// import SmallIsland6 from "./assets/img/smallisland6.png";
// import SmallIslandSign6 from "./assets/img/smallislandsign6.png";
// import SmallIsland7 from "./assets/img/smallisland7.png";
// import SmallIslandSign7 from "./assets/img/smallislandsign7.png";
// import SmallIsland8 from "./assets/img/smallisland8.png";
// import SmallIslandSign8 from "./assets/img/smallislandsign8.png";
// import SmallIsland9 from "./assets/img/smallisland9.png";
// import SmallIslandSign9 from "./assets/img/smallislandsign9.png";
// import SmallIsland10 from "./assets/img/smallisland10.png";
// import SmallIslandSign10 from "./assets/img/smallislandsign10.png";

export const big_island = [
  {
    id: 1,
    island: bigIsLandPo,
    className: "startIsland",
    sign: signPo,
    position: {
      x: "2%",
      y: "5%",
    },
    detail: [
      {
        text: "the_first_step",
        type: "heading",
      },

      {
        type: "text",
        text: "Khơi dậy KHÁT VỌNG THÀNH CÔNG cháy bỏng ẩn chứa trong bạn - Xác định LẼ SỐNG ý nghĩa để theo đuổi trong cuộc đời",
      },
    ],
    link: "/chuong-trinh-huan-luyen/offline/tim-lai-le-song-va-khat-vong-thanh-cong",
    contentPosition: "start",
  },
  {
    id: 2,
    island: bigIsLandIcpc,
    className: "bigIsland1",
    sign: signIcpc,
    position: {
      x: "22%",
      y: "65%",
    },
    detail: [
      {
        text: "icpc",
        type: "heading",
      },
      {
        text: "Xây dựng ước mơ huấn luyện giúp đỡ những người khác có được sự rõ ràng và tập trung trong cuộc sống của họ, giải quyết những thách thức cá nhân và nghề nghiệp, và xây dựng một cuộc sống viên mãn hơn.",
        type: "description",
      },
    ],
    contentPosition: "icpc",
    link: "/chuong-trinh-huan-luyen/offline/dao-tao-tu-van-tri-lieu-nlp-dat-chuan-quoc-te",
  },
  {
    id: 3,
    island: bigIsLandImcpc,
    className: "bigIsland2",
    sign: signImcpc,
    position: {
      x: "46%",
      y: "12%",
    },
    detail: [
      {
        text: "imcpc",
        type: "heading",
      },
      {
        text: "Thực hiện Bước đầu tiên Hướng tới Sự nghiệp trở thành nhà tư vấn và nhận khách hàng bất kỳ đâu trên toàn quốc. Tận dụng phương pháp đã được chứng minh của ICPC để trở thành nhà huấn luyện thành công",
        type: "description",
      },
    ],
    contentPosition: "imcpc",
    link: "/chuong-trinh-huan-luyen/offline/dao-tao-tu-van-tri-lieu-nlp-dat-chuan-quoc-te",
  },
  {
    id: 4,
    island: bigIsLandGol,
    className: "bigIsland3",
    sign: signGol,
    position: {
      x: "75%",
      y: "60%",
    },
    detail: [
      {
        text: "gol",
        type: "heading",
      },
      {
        text: "Chinh phục tâm trí và cơ thể của bạn và làm chủ cuộc đời của một Master NLP",
        type: "description",
      },
    ],
    contentPosition: "ittc",
    link: "chuong-trinh-huan-luyen/offline/chinh-phuc-tam-tri-co-the-cua-ban-than-va-lam-chu-cuoc-doi",
  },
];

export const small_island = [
  {
    id: 1,
    island: smallIslandSm,
    className: "smallIsland",
    sign: signSm,
    position: {
      x: "2%",
      y: "45%",
    },
    detail: [
      {
        type: "heading",
        text: "Self Mastery (Làm Chủ Chính Mình)",
      },
      {
        type: "text",
        text: "Chương trình học nhằm đưa học viên vào một hành trình toàn diện, nhằm giúp họ chữa lành mối quan hệ với chính bản thân mình và những mối quan hệ xung quanh, đồng thời xây dựng lối sống lành mạnh và tích cực.",
      },
    ],
    link: "/chuong-trinh-huan-luyen/offline/seft-mastery",
  },
  {
    id: 2,
    island: smallIslandUm,
    className: "smallIsland",
    sign: signUm,
    position: {
      x: "8%",
      y: "70%",
    },
    detail: [
      {
        type: "heading",
        text: "Universal Mastery (Làm Chủ Cuộc Đời Bạn)",
      },
      {
        type: "text",
        text: "Chương trình sẽ giúp bạn THIẾT LẬP và HÀNH XỬ 23 TƯ DUY của những người xuất chúng trên thế giới này, vượt qua nỗi sợ hãi để biến cuộc đời trở thành kiệt tác.",
      },
    ],
    link: "/chuong-trinh-huan-luyen/offline/universal-mastery",
  },
  {
    id: 3,
    island: smallIslandOac,
    className: "smallIsland",
    sign: signOac,
    position: {
      x: "25%",
      y: "35%",
    },
    detail: [
      {
        type: "heading",
        text: "OAC",
      },
      {
        type: "description",
        text: "Trại Thiếu Niên Xuất Chúng (Chương trình dành cho thanh thiếu niên)",
      },
      {
        type: "text",
        text: "Khi con cái chúng ta bước vào tuổi vị thành niên, các đang trong giai đoạn tìm tòi, khám phá và bỡ ngỡ trước mọi thứ. Và chương trình là một cơ hội để các em bứt ra khỏi vùng an toàn hằng ngày để trải nghiệm những tình huống, kiến thức hoàn toàn mới mẻ. Để trở nên vững vàng trước những vấn đề tương lai.",
      },
    ],
    link: "/chuong-trinh-huan-luyen/offline/trai-thieu-nien-xuat-chung",
  },
  {
    id: 4,
    island: smallIslandLtc,
    className: "smallIsland",
    sign: signLtc,
    position: {
      x: "65%",
      y: "40%",
    },
    detail: [
      {
        type: "heading",
        text: "Trại huấn luyện lãnh đạo (Chương trình học dành cho lãnh đạo)",
      },
      {
        type: "text",
        text: "Hội trại Lãnh đạo là một triết lý và là môi trường học khắc nghiệt giúp tăng cường nhận thức và khiến nhà lãnh đạo bộc phát được tài năng bên trong bản thân. Chúng tôi dựa trên thực tiễn này trong bối cảnh công việc, cho dù đó là với các công ty khởi nghiệp, chính phủ, tổ chức phi lợi nhuận, giáo dục, chuyển đổi nghề nghiệp, hoặc hơn thế nữa.",
      },
    ],
    link: "/chuong-trinh-huan-luyen/offline/trai-huan-luyen-lanh-dao",
  },
  //   {
  //     id: 5,
  //     island: SmallIsland5,
  //     className: "smallIsland",
  //     sign: SmallIslandSign5,
  //     position: {
  //       x: "43%",
  //       y: "60%",
  //     },
  //     detail: [
  //       {
  //         type: "heading",
  //         text: "Love and belove (khóa học dành cho phụ nữ)",
  //       },
  //       {
  //         type: "description",
  //         text: "Lv2 Yêu Và Được Yêu",
  //       },
  //       {
  //         type: "text",
  //         text: "Chúng ta không thể mong cầu tình yêu thương từ người khác nếu bản thân chưa hiểu, chưa biết cách thực hành tình yêu chân thành với chính mình. Bất kỳ ai cũng xứng đáng ở bên cạnh một người dành cho mình tình yêu trọn vẹn, bất kỳ ai cũng có quyền xinh đẹp, được yêu & viên mãn.",
  //       },
  //     ],
  //     link: "/chuong-trinh-huan-luyen/online/beauty-from-within",
  //   },
  // {
  //   id: 7,
  //   island: SmallIsland7,
  //   className: "smallIsland",
  //   sign: SmallIslandSign7,
  //   position: {
  //     x: "37%",
  //     y: "60%",
  //   },
  //   detail: [
  //     {
  //       type: "heading",
  //       text: "Sách Obsessed (Chương trình học phát triển cá nhân)",
  //     },
  //     {
  //       type: "text",
  //       text: "Tham gia vào một cuộc phiêu lưu thông qua hành trình đọc sách và trải nghiệm thực tế cuốn sách trong 108 ngày. Áp dụng, thực hành và thuần thục để trở thành người xuất chúng và thành công mai sau.",
  //     },
  //   ],
  // },

  // {
  //   id: 9,
  //   island: SmallIsland9,
  //   className: "smallIsland",
  //   sign: SmallIslandSign9,
  //   position: {
  //     x: "70%",
  //     y: "20%",
  //   },
  //   detail: [
  //     {
  //       type: "heading",
  //       text: "Vision leadership (khóa học dành cho lãnh đạo)",
  //     },
  //     {
  //       type: "text",
  //       text: "Làm thế nào để đẩy doanh nghiệp phát triển tốt ở giai đoạn khủng hoảng? Ở giai đoạn khủng hoảng hiện tại, bạn có thể có rất nhiều kiến thức chuyên môn, nhưng thứ sẽ giúp bạn vẫn phát triển tốt lại chính là một Tầm nhìn đủ lớn rộng & những cách thức áp dụng Tâm lý học vào việc kinh doanh.",
  //     },
  //   ],
  //   link: "/chuong-trinh-huan-luyen/online/visionary-leadership",
  //   contentPosition: "vl",
  // },
  // {
  //   id: 10,
  //   island: SmallIsland10,
  //   className: "smallIsland",
  //   sign: SmallIslandSign10,
  //   position: {
  //     x: "80%",
  //     y: "35%",
  //   },
  //   detail: [
  //     {
  //       type: "heading",
  //       text: "Parenting (dành cho các bậc phụ huynh)",
  //     },
  //     {
  //       type: "description",
  //       text: "Nghệ Thuật Nuôi Dạy Con Xuất Chúng",
  //     },
  //     {
  //       type: "text",
  //       text: "Tất cả chúng ta đều làm cha, làm mẹ lần đầu tiên. Chúng ta chưa hề được định hướng hoặc có kinh nghiệm trong việc đó. Và tại đây bạn sẽ học được cách giao tiếp, định hướng, và hoà giải phù hợp với con cái mình, đồng thời hiểu hơn về căn nguyên sâu xa của những vấn đề đó.",
  //     },
  //   ],
  //   contentPosition: "pa",
  //   link: "/chuong-trinh-huan-luyen/offline/nghe-thuat-truyen-cam-hung-nuoi-day-con-xuat-chung",
  // },
  // {
  //   id: 1,
  //   island: SmallIsland1,
  //   className: "smallIsland",
  //   sign: SmallIslandSign1,
  //   position: {
  //     x: "10%",
  //     y: "50%",
  //   },
  //   detail: [
  //     {
  //       type: "heading",
  //       text: "Lv1 Discover your genius inside (Chương trình dành cho thanh thiếu niên)",
  //     },
  //     {
  //       type: "description",
  //       text: "Khám Phá Thiên Tài Trong Bạn",
  //     },
  //     {
  //       type: "text",
  //       text: 'Khác với người lớn, trẻ em như những tờ giấy trắng tinh có thể bị vấy bẩn nếu không được đào tạo và hướng dẫn đúng đắn. Khi cha mẹ trao cho con những định hướng và điều kiện phát triển phù hợp, con cái sẽ bước ra khỏi vùng "ngỗ nghịch" của độ tuổi thanh thiếu niên và dần dần hình thành "cái tôi đầy tài năng" bên trong mình.',
  //     },
  //   ],
  //   contentPosition: "top",
  // },
  // {
  //   id: 2,
  //   island: SmallIsland2,
  //   className: "smallIsland",
  //   sign: SmallIslandSign2,
  //   position: {
  //     x: "29%",
  //     y: "29%",
  //   },
  //   detail: [
  //     {
  //       type: "heading",
  //       text: "Lv2 Shine your future (Chương trình dành cho thanh thiếu niên)",
  //     },
  //     {
  //       type: "description",
  //       text: "Thắp Sáng Tương Lai",
  //     },
  //     {
  //       type: "text",
  //       text: "Nuôi dưỡng khả năng sáng tạo sẽ giúp trẻ sản sinh ra khí chất thiên tài, thậm chí vượt xa cả sự mong đợi từ cha mẹ. Sẽ thế nào khi các em hiểu được bản thân mình muốn trở thành ai trong tương lai và luôn học tập, phấn đấu vì mục tiêu của chính mình đặt ra?",
  //     },
  //   ],
  //   contentPosition: "bottom",
  // },
];

export const big_island_mobile = [
  {
    id: 1,
    island: bigIsLandPo,
    className: "startIsland",
    sign: signPo,
    position: {
      x: "2%",
    },
    detail: [
      {
        text: "the_first_step",
        type: "heading",
      },

      {
        type: "text",
        text: "Khơi dậy KHÁT VỌNG THÀNH CÔNG cháy bỏng ẩn chứa trong bạn - Xác định LẼ SỐNG ý nghĩa để theo đuổi trong cuộc đời",
      },
      {
        type: "link",
        link: "/chuong-trinh-huan-luyen/offline/tim-lai-le-song-va-khat-vong-thanh-cong",
      },
    ],
  },
  {
    id: 2,
    island: bigIsLandIcpc,
    className: "bigIsland1",
    sign: signIcpc,
    position: {
      x: "42%",
    },
    detail: [
      {
        text: "icpc",
        type: "heading",
      },
      {
        text: "Xây dựng ước mơ huấn luyện giúp đỡ những người khác có được sự rõ ràng và tập trung trong cuộc sống của họ, giải quyết những thách thức cá nhân và nghề nghiệp, và xây dựng một cuộc sống viên mãn hơn.",
        type: "description",
      },

      {
        type: "link",
        link: "/chuong-trinh-huan-luyen/offline/dao-tao-tu-van-tri-lieu-nlp-dat-chuan-quoc-te",
      },
    ],
  },
  {
    id: 3,
    island: bigIsLandImcpc,
    className: "bigIsland2",
    sign: signImcpc,
    position: {
      x: "60%",
    },
    detail: [
      {
        text: "imcpc",
        type: "heading",
      },
      {
        text: "Thực hiện Bước đầu tiên Hướng tới Sự nghiệp trở thành nhà tư vấn và nhận khách hàng bất kỳ đâu trên toàn quốc. Tận dụng phương pháp đã được chứng minh của ICPC để trở thành nhà huấn luyện thành công",
        type: "description",
      },
      {
        type: "link",
        link: "/chuong-trinh-huan-luyen/offline/dao-tao-tu-van-tri-lieu-nlp-dat-chuan-quoc-te",
      },
    ],
  },
  {
    id: 4,
    island: bigIsLandGol,
    className: "bigIsland3",
    sign: signGol,
    position: {
      x: "80%",
    },
    detail: [
      {
        type: "heading",
        text: "gol",
      },
      {
        type: "description",
        text: "Chinh phục tâm trí và cơ thể của bạn và làm chủ cuộc đời của một Master NLP",
      },
      {
        type: "link",
        link: "/chuong-trinh-huan-luyen/offline/nguoi-thua-ke-dai-hoc-cuoc-doi",
      },
    ],
  },
];

export const small_island_mobile = [
  {
    id: 1,
    island: smallIslandSm,
    className: "smallIsland",
    sign: signSm,
    position: {
      x: "20%",
      y: "37%",
    },
    detail: [
      {
        type: "heading",
        text: "Self Mastery (Làm Chủ Chính Mình)",
      },
      {
        type: "text",
        text: "Chương trình học nhằm đưa học viên vào một hành trình toàn diện, nhằm giúp họ chữa lành mối quan hệ với chính bản thân mình và những mối quan hệ xung quanh, đồng thời xây dựng lối sống lành mạnh và tích cực.",
      },
      {
        type: "link",
        link: "/chuong-trinh-huan-luyen/offline/seft-mastery",
      },
    ],
  },
  {
    id: 2,
    island: smallIslandUm,
    className: "smallIsland",
    sign: signUm,
    position: {
      x: "26%",
      y: "65%",
    },
    detail: [
      {
        type: "heading",
        text: "OAC",
      },
      {
        type: "description",
        text: "Trại Thiếu Niên Xuất Chúng (Chương trình dành cho thanh thiếu niên)",
      },
      {
        type: "text",
        text: "Khi con cái chúng ta bước vào tuổi vị thành niên, các đang trong giai đoạn tìm tòi, khám phá và bỡ ngỡ trước mọi thứ. Và chương trình là một cơ hội để các em bứt ra khỏi vùng an toàn hằng ngày để trải nghiệm những tình huống, kiến thức hoàn toàn mới mẻ. Để trở nên vững vàng trước những vấn đề tương lai.",
      },
      {
        type: "link",
        link: "/chuong-trinh-huan-luyen/offline/trai-thieu-nien-xuat-chung",
      },
    ],
  },
  {
    id: 3,
    island: smallIslandOac,
    className: "smallIsland",
    sign: signOac,
    position: {
      x: "32%",
      y: "37%",
    },
    detail: [
      {
        type: "heading",
        text: "Universal Mastery (Làm Chủ Cuộc Đời Bạn)",
      },
      {
        type: "text",
        text: "Chương trình sẽ giúp bạn THIẾT LẬP và HÀNH XỬ 23 TƯ DUY của những người xuất chúng trên thế giới này, vượt qua nỗi sợ hãi để biến cuộc đời trở thành kiệt tác.",
      },
      {
        type: "link",
        link: "/chuong-trinh-huan-luyen/offline/universal-mastery",
      },
    ],
  },

  {
    id: 4,
    island: smallIslandLtc,
    className: "smallIsland",
    sign: signLtc,
    position: {
      x: "53%",
      y: "12%",
    },
    detail: [
      {
        type: "heading",
        text: "Trại huấn luyện lãnh đạo (Chương trình học dành cho lãnh đạo)",
      },
      {
        type: "text",
        text: "Hội trại Lãnh đạo là một triết lý và là môi trường học khắc nghiệt giúp tăng cường nhận thức và khiến nhà lãnh đạo bộc phát được tài năng bên trong bản thân. Chúng tôi dựa trên thực tiễn này trong bối cảnh công việc, cho dù đó là với các công ty khởi nghiệp, chính phủ, tổ chức phi lợi nhuận, giáo dục, chuyển đổi nghề nghiệp, hoặc hơn thế nữa.",
      },
      {
        type: "link",
        link: "/chuong-trinh-huan-luyen/offline/trai-huan-luyen-lanh-dao",
      },
    ],
  },
  //   {
  //     id: 5,
  //     island: SmallIsland5,
  //     className: "smallIsland",
  //     sign: SmallIslandSign5,
  //     position: {
  //       x: "33%",
  //       y: "62%",
  //     },
  //     detail: [
  //       {
  //         type: "heading",
  //         text: "Love and belove (khóa học dành cho phụ nữ)",
  //       },
  //       {
  //         type: "description",
  //         text: "Lv2 Yêu Và Được Yêu",
  //       },
  //       {
  //         type: "text",
  //         text: "Chúng ta không thể mong cầu tình yêu thương từ người khác nếu bản thân chưa hiểu, chưa biết cách thực hành tình yêu chân thành với chính mình. Bất kỳ ai cũng xứng đáng ở bên cạnh một người dành cho mình tình yêu trọn vẹn, bất kỳ ai cũng có quyền xinh đẹp, được yêu & viên mãn.",
  //       },
  //       {
  //         type: "link",
  //         link: "/chuong-trinh-huan-luyen/online/beauty-from-within",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     island: SmallIsland6,
  //     className: "smallIsland",
  //     sign: SmallIslandSign6,
  //     position: {
  //       x: "31%",
  //       y: "10%",
  //     },
  //     detail: [
  //       {
  //         type: "heading",
  //         text: "Crisis Conqqueror Series (Chương trình học phát triển cá nhân)",
  //       },
  //       {
  //         type: "description",
  //         text: "Chuỗi khóa học chinh phục khủng hoảng",
  //       },
  //       {
  //         type: "text",
  //         text: "Đây là chuỗi 5 khóa học với những công cụ sắc bén giúp đánh thức nguồn lực từ bên trong bạn. Mỗi người sẽ có sự thay đổi vượt bậc trong tư duy, thiết lập kế hoạch mới và thực hiện những quy trình đầy sức mạnh để chúng ta thoát khỏi tình trạng hiện tại. Đổi mối cách bạn sống cuộc đời này, đảm bảo, linh hoạt và sẵn sàng trước mọi biến cố có thể đến. Kể cả là Covid.",
  //       },
  //       {
  //         type: "link",
  //         link: "/chuong-trinh-huan-luyen/online/ccs",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     island: SmallIsland7,
  //     className: "smallIsland",
  //     sign: SmallIslandSign7,
  //     position: {
  //       x: "38%",
  //       y: "20%",
  //     },
  //     detail: [
  //       {
  //         type: "heading",
  //         text: "Sách Obsessed (Chương trình học phát triển cá nhân)",
  //       },
  //       {
  //         type: "text",
  //         text: "Tham gia vào một cuộc phiêu lưu thông qua hành trình đọc sách và trải nghiệm thực tế cuốn sách trong 108 ngày. Áp dụng, thực hành và thuần thục để trở thành người xuất chúng và thành công mai sau.",
  //       },
  //     ],
  //   },

  //   {
  //     id: 9,
  //     island: SmallIsland9,
  //     className: "smallIsland",
  //     sign: SmallIslandSign9,
  //     position: {
  //       x: "68%",
  //       y: "16%",
  //     },
  //     detail: [
  //       {
  //         type: "heading",
  //         text: "Vision leadership (khóa học dành cho lãnh đạo)",
  //       },
  //       {
  //         type: "text",
  //         text: "Làm thế nào để đẩy doanh nghiệp phát triển tốt ở giai đoạn khủng hoảng? Ở giai đoạn khủng hoảng hiện tại, bạn có thể có rất nhiều kiến thức chuyên môn, nhưng thứ sẽ giúp bạn vẫn phát triển tốt lại chính là một Tầm nhìn đủ lớn rộng & những cách thức áp dụng Tâm lý học vào việc kinh doanh.",
  //       },
  //       {
  //         type: "link",
  //         link: "/chuong-trinh-huan-luyen/online/visionary-leadership",
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     island: SmallIsland10,
  //     className: "smallIsland",
  //     sign: SmallIslandSign10,
  //     position: {
  //       x: "70%",
  //       y: "60%",
  //     },
  //     detail: [
  //       {
  //         type: "heading",
  //         text: "Parenting (dành cho các bậc phụ huynh)",
  //       },
  //       {
  //         type: "description",
  //         text: "Nghệ Thuật Nuôi Dạy Con Xuất Chúng",
  //       },
  //       {
  //         type: "text",
  //         text: "Tất cả chúng ta đều làm cha, làm mẹ lần đầu tiên. Chúng ta chưa hề được định hướng hoặc có kinh nghiệm trong việc đó. Và tại đây bạn sẽ học được cách giao tiếp, định hướng, và hoà giải phù hợp với con cái mình, đồng thời hiểu hơn về căn nguyên sâu xa của những vấn đề đó.",
  //       },
  //       {
  //         type: "link",
  //         link: "/chuong-trinh-huan-luyen/offline/nghe-thuat-truyen-cam-hung-nuoi-day-con-xuat-chung",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     island: SmallIsland4,
  //     className: "smallIsland",
  //     sign: SmallIslandSign4,
  //     position: {
  //       x: "17%",
  //       y: "20%",
  //     },
  //     detail: [
  //       {
  //         type: "heading",
  //         text: "Beauty from within (Khóa học dành cho phụ nữ)",
  //       },
  //       {
  //         type: "description",
  //         text: "Lv1 Đẹp Từ Bên Trong",
  //       },
  //       {
  //         type: "text",
  //         text: 'Phụ nữ luôn mang trên vai những gánh nặng khác nhau trong cuộc sống. Họ thường chỉ quan tâm đến việc chăm lo cho người khác và quên đi chính bản thân mình. Nhưng, "sự tự tin" mới chính là vẻ đẹp vốn có của người phụ nữ. Và mỗi người cần học cách để "tìm lại" vẻ đẹp vốn có từ bên trong mình.',
  //       },
  //       {
  //         type: "link",
  //         link: "/chuong-trinh-huan-luyen/online/beauty-from-within",
  //       },
  //     ],
  //   },
];
