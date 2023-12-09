<template>
  <div class="siteaside-container">
    <Avatar :url="'https://avatars.githubusercontent.com/u/54825623?v=4'" :size="150" class="avatar-container" />
    <h1 class="title">我真的不会修电脑</h1>
    <Menu />
    <Contact />
    <p class="footer">
      粤ICP备XXXXXXXX号
    </p>

  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import Menu from "./Menu"
import Contact from "./Contact"
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.siteaside-container {
  padding: 20px 0;
  width: 100%;
  height: 100%;
  background: @dark;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 14px;
}
.title {
  margin-top: 20px;
  font-size: 1em;
  color: #fff;
  text-align: center;
}
</style>