<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  down:"icon-xiangxia",
  home:"icon-home",
  wechat:"icon-weixin-copy",
  project:"icon-xiangmu",
  mail:"icon-youxiang",
  github:"icon-github-fill",
  qq:"icon-QQ-circle-fill",
  article:"icon-wodewenzhang",
  about:"icon-guanyu",
  chat:"icon-liuyanban-05",
  empty:"icon-wenjianjiashanchu",
  info:"icon-info",
  success:"icon-success",
  error:"icon-cuowu",
  arrowdown:"icon-xiangxiajiantou",
  arrowup:"icon-xiangshangjiantou",
  bilibili:"icon-icon_bilibili-circle"
}
export default {
  props:{
    type:{
      type:String,
      required:true,
    },
  },
  computed:{
    fontClass(){
      return classMap[this.type];
    }
  }
}
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/c/font_4363356_josfcyfx4q.css';
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>