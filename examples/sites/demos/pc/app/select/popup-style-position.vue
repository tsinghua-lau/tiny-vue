<template>
  <tiny-select v-model="value" popper-class="drop" :popper-append-to-body="false" placement="top">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '北京' },
        { value: '选项2', label: '上海' },
        { value: '选项3', label: '天津' },
        { value: '选项4', label: '重庆' }
      ],
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
  margin-top: 30px;
}
</style>

<style>
.drop {
  background-color: #d5e8ff;
}
</style>
