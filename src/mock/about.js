import Mock from "mockjs";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://unstoppableww.github.io/zjw-gulu/#/",
});