<template>
  <div>
    <ul class="lea-list clearfix">
      <li>
        基础组件
        <ul>
          <li>scroll-view</li>
          <li>swiper、swiper-item</li>
          <li>view</li>
        </ul>
      </li>
    </ul>
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
    this.$WxRouter.redirectTo('/pages/login/main')
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
