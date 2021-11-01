<template>
  <picker class="lea-picker" :disabled="disabled" :class="typeClass" mode="selector" :range="range" :range-key="rangeKey" @change="pickerChange">
    <span class="text">{{text}}</span>
    <span class="label">{{label}}</span>
    <span class="iconfont icon-right" v-show="showIcon"></span>
  </picker>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    typeClass: {
      type: String,
      validator(value) {
        return ['one'].indexOf(value) > -1
      },
    },
    value: {
      type: [Number, String],
      required: true,
    },
    text: {
      type: String,
      default: '请选择',
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    range: {
      type: Array,
      required: true,
      default() {
        return [
          { value: 1, text: '选项一' },
          { value: 2, text: '选项二' },
          { value: 3, text: '选项三' },
        ]
      },
    },
    rangeKey: {
      //选项展示时的字段
      type: String,
      default: 'text',
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    label() {
      if (!this.value && typeof this.value !== 'number') {
        return ''
      } else {
        let matchedItem = this.range.filter((item) => {
          return item[this.valueKey] === this.value
        })
        console.log(matchedItem)
        return matchedItem.length > 0 ? matchedItem[0][this.rangeKey] : ''
      }
    },
  },
  methods: {
    pickerChange(e) {
      let index = e.mp.detail.value
      let item = this.range[index]
      if (this.value !== item[this.valueKey]) {
        //值改变时才执行change事件
        console.log(item[this.valueKey], '==========value')
        this.$emit('input', item[this.valueKey])
        this.$emit('change', item)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/css/_mixin.scss';
.lea-picker {
  width: 100%;
  display: block;
  box-sizing: border-box;
  span {
    display: inline-block;
  }
  .text {
    width: 40%;
    color: var(--layout-color);
  }
  .label {
    width: calc(60% - 11px);
    color: var(--layout-color--light);
    text-align: right;
    @include singleline-ellipsis();
  }
  .iconfont {
    width: 11px;
    height: 11px;
    color: var(--layout-color--light);
  }
  &.one {
    $h: 50px;
    height: $h;
    line-height: $h;
    padding: 0 16px 0 21px;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
