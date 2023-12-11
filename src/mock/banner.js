import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      midImg: "/img/bg/1_mid.jpg",
      bigImg: "/img/bg/1_big.jpg",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: "/img/bg/2_mid.jpg",
      bigImg: "/img/bg/2_big.jpg",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: "/img/bg/3_mid.jpg",
      bigImg: "/img/bg/3_big.jpg",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});