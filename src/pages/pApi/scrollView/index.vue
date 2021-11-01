<template>
  <div class="container gray block">
    <header id="headerOne" class="lea-list-title">scroll-view</header>
    <main :style="{height:mainH}">
      <p v-for="i in number" :key="i">测试文本{{i}}</p>
    </main>
    <footer id="footerOne"><input v-model.lazy="name" :adjust-position="false" @keyboardheightchange='changeKeyboard'><button @tap="addText">底部</button></footer>
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
    return {
      name: '',
      number: 1,
      mainH: undefined,
      h2: 0,
    }
  },
  methods: {
    getHeight(arr) {
      return new Promise((resolve) => {
        let h = 0
        const query = wx.createSelectorQuery()
        arr.map((id) => {
          query.select(id).boundingClientRect()
        })
        query.exec(function (res) {
          console.log(res)
          res.map((style) => {
            h += Number(style.height)
          })
          console.log(h, '============高度')
          resolve(h)
        })
      })
    },
    addText() {
      this.number += 1
    },
    async changeKeyboard(e) {
      console.log(e)
      let h = e.mp.detail.height
      this.h2 =
        this.h2 === 0
          ? await this.getHeight(['#headerOne', '#footerOne'])
          : this.h2
      let hAll = h + this.h2
      console.log(hAll)
      this.mainH = `calc(100vh - ${hAll}px)`
    },
  },
}
</script>
<style scoped lang="scss">
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
  height: 70px;
  font-size: 0;
  overflow: hidden;
}
p {
  line-height: 40px;
}
</style>