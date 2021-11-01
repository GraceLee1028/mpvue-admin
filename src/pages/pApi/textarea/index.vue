<template>
  <div class="container gray block">
    <header id="headerOne" class="lea-list-title">scroll-view</header>
    <main :style="{height:mainH}">

    </main>
    <footer id="footerOne">
      <textarea placeholder="sxx是猪" class="textarea" auto-height="true" maxlength="-1" @focus="focus" @blur="bindblur" @keyboardheightchange='bindkeyboardheightchange' :adjust-position="true"
                :show-confirm-bar="false" disable-default-padding="true" v-model="iputText"></textarea><button @tap="addText">底部</button>
    </footer>
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
    return { iputText: '' }
  },
  methods: {
    bindkeyboardheightchange() {},
    bindblur() {},
    focus() {},
  },
}
</script>
<style scoped lang="scss">
.textarea {
  border: 1px solid #ddd;
  line-height: 22px;
  font-size: 14px;
  color: #777;
  width: 100%;
  background-color: #fff;
  border: 10px solid #fff;
}
header {
  text-align: center;
  height: 40px;
  box-sizing: border-box;
}
main {
  background-color: rgb(249, 255, 255);
  height: calc(100vh - 110px);
  overflow-y: auto;
}
input {
  width: 100%;
  height: 30px;
  font-size: 16px;
  background-color: #fff;
}
button {
  height: 40px;
  font-size: 16px;
}
footer {
  height: 40pxpx;
  font-size: 0;
  overflow: hidden;
  width: 100%;
  border: 1px solid #ddd;
  display: flex;
  textarea {
    flex: 1;
  }
  button {
    width: 60px;
  }
}
</style>