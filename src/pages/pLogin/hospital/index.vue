<template>
  <div class="container block">
    <section class="page-list-select">
      <lea-picker type-class="one" :range="city" v-model="form.city" text="请选择所在城市" @change="changeCity">
      </lea-picker>
    </section>
    <section class="page-list-select" @tap="tapHospital">
      <lea-picker type-class="one" :range="hospital.data" :disabled="hospital.disabled" v-model="form.hospital" text="请选择医院" @change="changeHospital">
      </lea-picker>
    </section>
    <button class="lbt-button" plain @tap="select()">选好了</button>

  </div>
</template>

<script>
import LeaPicker from '@/components/LeaPicker.vue'
import { getUrlStringByObj } from '@/utils/wy.data'
export default {
  components: { LeaPicker },
  data() {
    return {
      city: [
        { value: '1', text: '深圳' },
        { value: '2', text: '广州' },
      ],
      hospital: {
        disabled: true,
        data: [],
      },
      form: { city: '', hospital: '', hospitalText: '' },
    }
  },
  mounted() {},
  methods: {
    //城市
    changeCity(item) {
      console.log('city change=========')
      this.hospital.disabled = false
      this.form.hospital = ''
      this.form.hospitalText = ''
      console.log(this.form)
      this.form.city === '1' &&
        (this.hospital.data = [
          { value: '1', text: '测试医院' },
          { value: '2', text: '深圳医院' },
        ])
      this.form.city === '2' &&
        (this.hospital.data = [
          { value: '1', text: '测试医院' },
          { value: '2', text: '广州第一人民区级测试医院' },
        ])
    },
    //未选择地区前，进行提示
    tapHospital() {
      console.log(this.form)
      if (this.form.city === '') {
        this.hospital.disabled = true
        this.$WxMessagebox.showToast({ title: '请先选择地区' })
        return
      } else {
      }
    },
    //选择医院
    changeHospital(item) {
      this.form.hospitalText = item.text
    },
    select() {
      console.log(this.form)
      let formStr = getUrlStringByObj(this.form)
      this.$WxRouter.reLaunch('/pages/pLogin/login/main' + formStr)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/css/_mixin.scss';
.lbt-button {
  width: 289px;
  @include abs-pos(auto, 0, 20px, 0);
}
</style>