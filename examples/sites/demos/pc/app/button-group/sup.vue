<template>
  <div class="demo-button">
    <p>原生及插槽</p>
    <div class="sup">
      <tiny-button-group :data="groupData" v-model="checkedVal">
        <template #button4="{ sup }">
          <icon-plus-circle></icon-plus-circle>
          <span>
            {{ sup.text }}
          </span>
        </template>
      </tiny-button-group>
    </div>
    <p>插槽引用tag角标</p>
    <div class="tag">
      <tiny-button-group :data="groupData2" v-model="checkedVal">
        <template #btn="{ sup }">
          <tiny-tag type="warning" class="tiny-only-icon" size="small">
            <component :is="sup.icon"></component>
            {{ sup.text }}
          </tiny-tag>
        </template>
      </tiny-button-group>
    </div>
  </div>
</template>

<script>
import { ButtonGroup } from '@opentiny/vue'
import { Tag } from '@opentiny/vue'
import { iconSearch, iconPlusCircle } from '@opentiny/vue-icon'

const IconPlusCircle = iconPlusCircle()
export default {
  components: {
    TinyTag: Tag,
    TinyButtonGroup: ButtonGroup,
    IconPlusCircle
  },
  data() {
    return {
      checkedVal: 'Button1',
      groupData: [
        {
          text: '文字',
          value: 'Button1',
          sup: {
            class: ['success-bg'],
            text: '特惠'
          }
        },
        {
          text: '图标',
          value: 'Button2',
          sup: {
            class: 'sup-icon',
            icon: iconSearch()
          }
        },
        {
          text: '文字',
          value: 'Button3',
          sup: {
            class: 'sup-text',
            text: '8折'
          }
        },
        {
          text: '组合',
          value: 'Button4',
          sup: {
            slot: 'button4',
            class: 'sup-slot',
            text: '8折'
          }
        }
      ],
      groupData2: [
        {
          text: '文本',
          value: 'Button1',
          sup: {
            slot: 'btn',
            class: 'sup-tag',
            text: '特惠'
          }
        },
        {
          text: '图标',
          value: 'Button2',
          sup: {
            slot: 'btn',
            class: 'sup-tag',
            icon: iconSearch()
          }
        },
        {
          text: '图标',
          value: 'Button3',
          sup: {
            slot: 'btn',
            class: 'sup-tag',
            icon: iconPlusCircle()
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.tiny-button-group :deep(.success-bg) {
  background-color: #52c41a;
}

.tiny-button-group :deep(.sup-slot) {
  line-height: 1;
  padding: 0 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.tiny-button-group :deep(.sup-slot) .tiny-svg {
  margin-right: 4px;
  vertical-align: middle;
  fill: #fff;
}
.tiny-button-group :deep(.sup-slot) span {
  vertical-align: middle;
}
</style>

<style>
.demo-button p {
  margin: 16px 0 8px 0;
}
.demo-button .sup button {
  width: 96px;
}
.demo-button .sup li:nth-of-type(4) button {
  width: 124px;
}
.demo-button .tag button {
  width: 84px;
}
.demo-button .tag li:first-child button {
  width: 100px;
}
.tiny-only-icon {
  border-radius: 0px 6px;
}
</style>
