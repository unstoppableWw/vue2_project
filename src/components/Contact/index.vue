<template>
  <ul class="contact-container">
    <li>
      <a href="tencent://message/?Menu=yes&uin=190559573&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon type="qq"/>
        </div>
        <span>190559573</span>
      </a>
      <div class="pop">
        <img src="/img/qq.png" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="wechat"/>
        </div>
        <span>Super_WweiI</span>
      </a>
      <div class="pop">
        <img src="/img/wechat.jpg" alt="">
      </div>
    </li>
    <li>
      <a href="https://github.com/unstoppableWw">
        <div class="icon">
          <Icon type="github"/>
        </div>
        <span>unstoppableWw</span>
      </a>
      <!-- <div class="pop">
        <img src="/img/wechat.jpg" alt="">
      </div> -->
    </li>
    <li>
      <a href="mailto:jinweiz@m.scnu.edu.cn">
        <div class="icon">
          <Icon type="mail"/>
        </div>
        <span>jinweiz@m.scnu.edu.cn</span>
      </a>
      <!-- <div class="pop">
        <img src="/img/wechat.jpg" alt="">
      </div> -->
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  components:{
    Icon,
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
@itemHeight :30px;
.contact-container{
  width: 100%;
  height: 100%;
  padding: 20px;
  list-style: none;
  color: @gray;
  li{
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    a{
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon{
        font-size: 26px;
        width: 36px;
      }

    }
    &:hover{
        .pop{
          transform: scaleY(1);
        }
      }
    .pop{
      position: absolute;
      left: 0;
      bottom: @itemHeight+5px;
      padding: 10px 15px;
      background: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      &::after{
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        background: #fff;
        width: 8px;
        height: 8px;
        bottom: -4px;
      }
      img{
        width: 150px;
        height: 150px;
        object-fit: contain;
      }
    } 
  }
}
</style>