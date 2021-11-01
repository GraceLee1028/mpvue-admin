<template>
  <div class="container">
    <p class="lea-list-title">微信基础组件</p>
    <ul class="lea-list clearfix">
      <li @tap="toDetail('/pages/pApi/scrollView/main')">scroll-view</li>
      <li>swiper、swiper-item</li>
      <li>view</li>
    </ul>

    <ul class="lea-list clearfix">
      <li @tap="toDetail('/pages/pApi/textarea/main')">textarea</li>
    </ul>
  </div>
</template>
<script>
export default {
  onLoad() {
    console.log('onLoad监听页面加载')
  },
  onShow() {
    console.log('onShow')
  },
  data() {
    return {}
  },
  methods: {
    toDetail(url) {
      this.$WxRouter.navigateTo(url)
    },
  },
}
</script>
