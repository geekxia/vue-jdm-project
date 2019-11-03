<template>
<div class="user_login">
  <div class="ul_username">
    <input type="text" name="" value="" placeholder="请输入用户名">
  </div>
  <div class="ul_password">
    <input type="text" name="" value="" placeholder="请输入密码">
  </div>
  <div class="ul_login_btn ul_login_btn1">登录</div>
  <div class="ul_login_btn ul_login_btn2">一键登录</div>
  <div class="ul_login_more">
    <span>短信验证码登录</span>
    <span>手机快速注册</span>
  </div>
  <!-- <div class="ul_login_other">
    <div>其它登录方式</div>
    <div class="ul_login_tencent">
      <div>
        <img src="../../assets/test.png" alt="">
        <span>QQ</span>
      </div>
      <div>
        <img src="../../assets/test.png" alt="">
        <span>微信</span>
      </div>
    </div>
    <div class="ul_login_tip">登录即代表您已同意<span>京东隐私政策</span></div>
  </div> -->
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.user_login {
  box-sizing: border-box;
  padding: 0 0.5rem;
  background-color: white;
  input {
    border: none;
    outline: none;
    line-height: 1.33rem;
  }
  .ul_username, .ul_password {
    line-height: 1.33rem;
    border-bottom: 1px solid #eee;
    // margin-top: .53rem;
  }
  .ul_login_btn {
    height: 1.33rem;
    line-height: 1.33rem;
    text-align: center;
    font-size: .4rem;
    border: 1px solid rgb(255, 49, 9);
    border-radius: .67rem;
    margin-top: .53rem;
    color: rgb(255, 49, 9);
  }
  .ul_login_btn1 {
    background-color: rgb(255, 49, 9);
    color: white;
  }
  .ul_login_more {
    color: rgba(0,0,0,0.4);
    font-size: .37rem;
    line-height: 1.33rem;
    height: 1.33rem;
    overflow: hidden;
    > span:first-child {
      float: left;
    }
    > span:last-child {
      float: right;
    }
  }
}
</style>
