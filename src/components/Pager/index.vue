<template>
  <div class="pager-container" v-if="pageNumber>1">
    <a @click="handleClick(1)" :class="{disabled:current===1}">首页</a>
    <a @click="handleClick(current-1)" :class="{disabled:current===1}">上一页</a>
    <a @click="handleClick(item)" v-for="(item) in numbers" :class="{active:current===item}" :key="item">{{ item }}</a>

    <a @click="handleClick(current+1)" :class="{disabled:current===pageNumber}">下一页</a>
    <a @click="handleClick(pageNumber)" :class="{disabled:current===pageNumber}">尾页</a>
  </div>
</template>

<script>
export default {

  props: {
    current: {
      type:Number,
      default:1,
    },
    total: {
      type:Number,
      default:100,
    },
    limit: {
      type:Number,
      default:10,
    },
    visibleNumber: {
      type:Number,
      default:10,
    },
  },
  computed:{
    //总页数
    pageNumber(){
      return Math.ceil(this.total / this.limit)
    },
    //显示最小的页码
    visibleMin(){
      let min =this.current-Math.floor(this.visibleNumber/2);
      return min<1?1:min;
    }, 
    visibleMax(){
      let max =this.visibleMin+this.visibleNumber-1;
      return max>this.pageNumber?this.pageNumber:max;
    },
    numbers(){
      let nums=[];
      for(let i=this.visibleMin;i<=this.visibleMax;i++){
        nums.push(i);
      }
      return nums;
    }
  },
  methods:{
    handleClick(newpage){
      newpage=newpage<1?1:newpage;
      newpage=newpage>this.pageNumber?this.pageNumber:newpage;
      this.$emit("pageChange",newpage)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 10px;
    cursor: pointer;
    &.active {
      color: @words;
      cursor: text;
    }

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

  }
}</style>