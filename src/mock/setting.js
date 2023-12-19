import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "",
    siteTitle: "我的个人空间",
    github: "https://github.com/unstoppableWw",
    qq: "190559573",
    qqQrCode:
      "",
    weixin: "Super_WweiI",
    weixinQrCode:
      "",
    mail: "jinweiz@m.scnu.edu.cn",
    icp: "粤ICP备XXXXXX号",
    githubName: "unstoppableWw",
    favicon: "",
  },
});