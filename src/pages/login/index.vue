<template>
  <div class="container">
    <div class="login-logo"></div>
    <section class="login-body">
      <div class="login-body-title">你好，欢迎你的加入</div>
      <button class="lbt-button" plain>微信登陆</button>
      <button class="lbt-button" plain>账号登陆</button>
    </section>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    console.log('1,beforeCreate')
  },
  created() {
    console.log('2,created')
  },
  onLoad() {
    console.log('3,onLoad监听页面加载')
  },
  onShow() {
    console.log('4,onShow')
  },
  onReady() {
    console.log('5,onReady监听页面初次渲染完成')
  },
  beforeMount() {
    console.log('6,beforeMount')
  },
  mounted() {
    console.log('7,mounted')
  },
}
</script>
<style lang="scss" scoped>
@import '@/css/_mixin.scss';
$width: 301px;
.login-logo {
  width: $width;
  height: 244px;
  margin: 0 auto {
    top: 63px;
    bottom: 32px;
  }
  // color: $primary-color;
  @include bg-image-set(
    'https://raw.githubusercontent.com/lifengand1992/mpvue-admin/689001a9d01cd0df2f32afae357aa8b49591ecce/static/login/image_loginillust'
  );
}
.login-body {
  width: $width;
  font-size: 16px;
  color: var(--primary-color);
}
.login-body-title {
  line-height: 22px;
  margin-bottom: 15px;
  text-indent: 8px;
  &::after {
    display: inline-block;
    $wh: 11px;
    width: $wh;
    height: $wh;
    border: 1px solid var(--primary-color);
    border-left: 0;
    border-bottom: 0;
    transform: skew(45deg);
  }
}
.lbt-input {
}
.lbt-button {
  border: 1px solid var(--primary-color);
  $h: 63px;
  height: $h;
  line-height: $h;
  border-radius: $h;
  font-size: 16px;
  color: var(--primary-color);
  &:first-child {
    margin-bottom: 15px;
  }
}
</style>