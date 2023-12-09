<template>
  <ul class="menu-container">
    <li v-for="(item, index) in items" :key="index">
      <RouterLink :exact="item.exact"  :to="{ name: item.name }"
        active-class="selected" exact-active-class="">
        <div class="icon">
          <Icon :type="item.icon" />
        </div>
        <span>{{ item.title }}</span>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "article",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "project",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },

}
</script>

<style scoped lang="less">
@import "~@/style/var.less";

.menu-container {
  color: @gray;
  margin: 24px 0;

  a {
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    font-size: 18px;

    .icon {
      width: 24px;
    }

    &:hover {
      color: #fff;
    }
  }
}

.selected {
  background: darken(@words, 3%);

}
</style>