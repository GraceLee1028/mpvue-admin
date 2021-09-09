<template>
  <div class="container">
    <div class="login-logo"></div>

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
.login-logo {
  width: 301px;
  height: 244px;
  margin: 0 auto {
    top: calc(127px -64px);
  }
  // color: $primary-color;
  @include bg-image-set('/static/login/image_loginillust');
}
</style>