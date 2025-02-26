<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->

<template>
  <div
    ref="select"
    class="tiny-select"
    v-popover:popover
    :class="[
      state.selectSize ? 'tiny-select--' + state.selectSize : '',
      state.collapseTags ? 'tiny-select__collapse-tags' : '',
      filterable ? 'tiny-select__filterable' : '',
      multiple ? 'tiny-select__multiple' : '',
      (state.inputHovering || state.visible) && !clickExpand ? 'is-hover' : '',
      state.isDisplayOnly ? 'is-display-only' : '',
      hoverExpand ? 'is-hover-expand' : '',
      clickExpand ? 'is-click-expand' : '',
      state.showCollapseTag ? 'collapse-tag-clicked' : '',
      state.isDisabled ? 'is-disabled' : '',
      inputBoxType === 'underline' ? 'tiny-select__underline' : ''
    ]"
    @mouseleave.self="
      () => {
        state.selectHover = false
        state.inputHovering = false
      }
    "
    @mouseenter.self="
      () => {
        state.selectHover = true
        state.inputHovering = true
      }
    "
    @click="toggleMenu"
    v-clickoutside="handleClose"
  >
    <div
      ref="tagsGroup"
      :style="state.selectFiexd"
      :class="['tiny-select__tags-group', { 'is-expand': state.isExpand }]"
      :title="
        multiple && !state.selectDisabled && state.selected.length
          ? state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join('; ')
          : !multiple && state.selectDisabled
            ? state.selectedLabel
            : ''
      "
    >
      <slot name="reference">
        <tiny-filter-box
          v-if="shape === 'filter'"
          ref="reference"
          @click="toggleMenu"
          :show-close="clearable"
          :placeholder="placeholder"
          :disabled="state.selectDisabled"
          :label="label"
          :tip="tip"
          :value="
            multiple
              ? state.selected.map((item) => (item.state ? item.state.currentLabel : item.currentLabel)).join('; ')
              : state.selectedLabel
          "
          :drop-down-visible="state.visible"
          :blank="blank"
        >
        </tiny-filter-box>
        <div
          ref="tags"
          :class="[
            'tiny-select__tags',
            { 'is-showicon': slots.prefix, 'not-selected': !state.selected.length },
            { 'is-show-tag': !state.isShowTagText }
          ]"
          v-if="multiple && !state.isDisplayOnly && !shape"
          :style="state.tagsStyle"
        >
          <span v-if="!state.isShowTagText">
            <span v-if="collapseTags && state.selected.length">
              <!-- 显示第1个标签 + 数字 -->
              <tiny-tag
                :class="{ 'is-required': state.selected[0].required }"
                :closable="isTagClosable(state.selected[0])"
                :size="state.collapseTagSize"
                :hit="state.selected[0].state ? state.selected[0].state.hitState : state.selected[0].hitState"
                :key="state.key"
                :disabled="state.selected[0].disabled"
                :type="state.getTagType"
                @close="deleteTag($event, state.selected[0])"
                disable-transitions
              >
                <tiny-tooltip
                  :effect="tooltipConfig.effect || 'light'"
                  :placement="tooltipConfig.placement || 'top'"
                  :popper-class="tooltipConfig.popperClass || ''"
                  @mouseenter.native="handleEnterTag($event, getValueKey(state.selected[0]))"
                >
                  <span class="tiny-select__tags-text">
                    <slot name="label" :item="getLabelSlotValue(state.selected[0])">{{
                      state.selected[0].state ? state.selected[0].state.currentLabel : state.selected[0].currentLabel
                    }}</slot>
                  </span>
                  <template #content>
                    <span v-if="state.tooltipContent[getValueKey(state.selected[0])]">
                      <slot name="label" :item="getLabelSlotValue(state.selected[0])">
                        {{
                          state.selected[0].state
                            ? state.selected[0].state.currentLabel
                            : state.selected[0].currentLabel
                        }}
                      </slot>
                    </span>
                  </template>
                </tiny-tooltip>
              </tiny-tag>
              <tiny-tag
                v-if="state.selected.length > 1"
                :closable="false"
                :size="state.collapseTagSize"
                :type="state.getTagType"
                disable-transitions
                class="tiny-select__tags-number"
              >
                <span class="tiny-select__tags-text">+ {{ state.selected.length - 1 }}</span>
              </tiny-tag>
            </span>
            <!-- 显示所有标签的循环 -->
            <span ref="tags-content" v-if="!collapseTags">
              <!-- 当 showAllTextTag 时， 用all-text属性做为tag。 xdesign规范 -->
              <tiny-tag
                v-if="showAllTextTag && state.selectCls === 'checked-sur'"
                :type="state.getTagType"
                key="tags-all-text-tag"
                data-tag="tags-all-text-tag"
                :disabled="state.isDisabled"
                :closable="true"
                :size="state.collapseTagSize"
                @close="toggleCheckAll(false)"
              >
                {{ allText || t('ui.base.all') }}
              </tiny-tag>
              <!-- 当非 showAllTextTag 时，原来的模式渲染 -->
              <template v-else>
                <tiny-tag
                  v-if="hoverExpand || clickExpand"
                  :class="['tiny-select__tags-collapse', { 'is-hidden': state.isHidden }]"
                  :type="state.getTagType"
                  key="tags-collapse"
                  data-tag="tags-collapse"
                  :closable="false"
                  :size="state.collapseTagSize"
                  @click="onClickCollapseTag($event)"
                >
                  <template v-if="hoverExpand"> + {{ state.collapseTagsLength }} </template>
                  <icon-ellipsis v-else></icon-ellipsis>
                </tiny-tag>
                <tiny-tag
                  v-for="(item, index) in state.selected"
                  :key="getValueKey(item)"
                  :class="{
                    'not-visible': state.toHideIndex <= index && !state.isExpand,
                    'is-required': item.required
                  }"
                  :closable="isTagClosable(item)"
                  :disabled="state.isDisabled || item.disabled"
                  :size="state.collapseTagSize"
                  :hit="item.state ? item.state.hitState : item.hitState"
                  :type="state.getTagType"
                  @close="deleteTag($event, item)"
                  disable-transitions
                >
                  <tiny-tooltip
                    :effect="tooltipConfig.effect || 'light'"
                    :placement="tooltipConfig.placement || 'top'"
                    :popper-class="tooltipConfig.popperClass || ''"
                    @mouseenter.native="handleEnterTag($event, getValueKey(item))"
                  >
                    <span v-if="!state.visible && state.overflow === index" class="tiny-select__tags-text">
                      {{ item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... ' }}
                    </span>
                    <span v-else class="tiny-select__tags-text">
                      <slot name="label" :item="getLabelSlotValue(item)">
                        {{ item.state ? item.state.currentLabel : item.currentLabel }}
                      </slot>
                    </span>
                    <template v-if="state.tooltipContent[getValueKey(item)]" #content>
                      <span v-if="!state.visible && state.overflow === index">
                        {{ item.state ? item.state.currentLabel + '... ' : item.currentLabel + '... ' }}
                      </span>
                      <span v-else>
                        <slot name="label" :item="getLabelSlotValue(item)">
                          {{ item.state ? item.state.currentLabel : item.currentLabel }}
                        </slot>
                      </span>
                    </template>
                  </tiny-tooltip>
                </tiny-tag>

                <!-- 收起按钮 -->
                <span
                  v-if="clickExpand && state.showCollapseTag"
                  class="tiny-select__collapse-text"
                  @click="onClickCollapseTag($event)"
                >
                  {{ t('ui.select.collapse') }}
                  <icon-chevron-up></icon-chevron-up>
                </span>
              </template>
            </span>
          </span>

          <span v-else :class="['tiny-select__tags-text', 'is-display-only', { 'is-disabled': state.isDisabled }]">
            <tiny-tooltip
              :effect="tooltipConfig.effect || 'light'"
              :placement="tooltipConfig.placement || 'top'"
              :popper-class="tooltipConfig.popperClass || ''"
              :disabled="!showTips"
            >
              <span>
                <span v-for="item in state.selected" :key="item.value">
                  <slot name="label" :item="item">{{ item.state ? item.state.currentLabel : item.currentLabel }}</slot
                  >;
                </span>
              </span>

              <template #content>
                <div :class="[state.showTips && 'tiny-select__show-tips', 'tiny-select__show-common']">
                  <span v-if="slots.label">
                    <span v-for="item in state.selected" :key="getValueKey(item)">
                      <slot name="label" :item="item"></slot>
                    </span>
                  </span>
                  <span v-else>{{ disabledTooltipContent || state.disabledTooltipContent }}</span>
                </div>
              </template>
            </tiny-tooltip>
          </span>
          <!-- tiny 新增：searchable时, 这里不显示 state.query -->
          <input
            ref="input"
            v-show="filterable && !searchable && !state.selectDisabled"
            v-model="state.query"
            type="text"
            class="tiny-select__input"
            :class="[state.selectSize ? `is-${state.selectSize}` : '']"
            :disabled="state.selectDisabled"
            :autocomplete="autocomplete"
            @focus="handleFocus"
            @blur="handleBlur"
            @keyup="managePlaceholder"
            @keydown="resetInputState"
            @keydown.down.prevent="navigateOptions('next')"
            @keydown.up.prevent="navigateOptions('prev')"
            @keydown.enter.prevent="selectOption"
            @keydown.esc.stop.prevent="state.visible = false"
            @keydown.delete="deletePrevTag"
            @keydown.tab="state.visible = false"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
            @input="debouncedQueryChange"
            :style="{
              'flex-grow': '1',
              width: state.inputLength / (state.inputWidth - 32) + '%',
              'max-width': state.inputWidth - 42 + 'px',
              height: 'auto'
            }"
          />
        </div>
        <tiny-input
          tiny_mode="pc"
          v-if="!shape"
          ref="reference"
          v-model="state.selectedLabel"
          type="text"
          :placeholder="state.currentPlaceholder"
          :name="name"
          :id="id"
          :autocomplete="autocomplete"
          :size="state.selectSize"
          :disabled="state.selectDisabled"
          :readonly="state.readonly"
          :display-only="state.isDisplayOnly"
          :display-only-content="state.displayOnlyContent"
          :unselectable="state.readonly ? 'on' : 'off'"
          :validate-event="false"
          :class="{
            'is-focus': state.visible,
            overflow: state.overflow,
            'is-show-close': state.showClose
          }"
          :tabindex="multiple && filterable ? '-1' : tabindex"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup="debouncedOnInputChange"
          @keydown.down.stop.prevent="navigateOptions('next')"
          @keydown.up.stop.prevent="navigateOptions('prev')"
          @keydown.enter.prevent="selectOption"
          @keydown.esc.stop.prevent="state.visible = false"
          @keydown.tab="state.visible = false"
          @paste="debouncedOnInputChange"
          @mouseenter="onMouseenterNative"
          @mouseleave="onMouseleaveNative"
          @compositionend.native="handleComposition"
        >
          <template #prefix v-if="slots.prefix">
            <slot name="prefix"></slot>
          </template>
          <template #suffix>
            <slot name="suffix"></slot>
            <!-- tiny 新增：xdesign 规范 ：多选限制数量时，在后缀显示 "选中/最大限制项" 计数的提示文字  -->
            <span v-if="showLimitText && multiple && multipleLimit" class="tiny-select__limit-txt">
              {{ state.selected.length }}/{{ multipleLimit }}
            </span>
            <!-- tiny 新增：xdesign 规范 ： 显示比例时，在后缀显示 "选中/全部项" 计数的提示文字  -->
            <span
              v-else-if="showProportion && state.selected.length > 0 && state.options.length > 1"
              class="tiny-select__proportion-txt"
            >
              {{ state.selected.length + '/' + state.options.length }}
            </span>
            <span v-if="state.showCopy" class="tiny-select__copy" @click.stop="handleCopyClick">
              <icon-copy class="tiny-svg-size tiny-select__caret"></icon-copy>
            </span>

            <icon-close
              v-if="state.showClose"
              class="tiny-svg-size tiny-select__caret icon-close"
              @click="handleClearClick"
              @mouseenter="state.inputHovering = true"
            ></icon-close>
            <!-- tiny 新增 自定义getIcon .
              tiny 的 autoHideDownIcon=true, 显示 close时， 不显示向下的箭头。
              aui是同时显示2个。 -->
            <component
              v-show="
                state.autoHideDownIcon
                  ? !state.showClose && !(remote && filterable && !remoteConfig.showIcon)
                  : !(remote && filterable && !remoteConfig.showIcon)
              "
              :is="state.getIcon.icon"
              :class="[
                'tiny-svg-size',
                'tiny-select__caret',
                state.iconClass,
                { 'is-reverse': !state.visible && state.getIcon.isDefault },
                { 'not-reverse': !state.getIcon.isDefault }
              ]"
              @click="handleDropdownClick"
            ></component>
          </template>
        </tiny-input>
      </slot>
      <transition name="tiny-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="doDestroy">
        <tiny-select-dropdown
          ref="popper"
          :is-drop-inherit-width="isDropInheritWidth"
          :placement="placement"
          :append-to-body="popperAppendToBody"
          v-show="!onCopying() && !hideDrop && state.visible && state.emptyText !== false"
          :style="dropStyle"
          :popper-options="popperOptions"
        >
          <div
            v-if="shape && filterable"
            class="tiny-select__filter-input"
            :class="[remote && !state.options.length ? 'tiny-select__remote-input' : '']"
          >
            <tiny-input
              ref="input"
              type="text"
              v-model="state.query"
              :placeholder="placeholder"
              @input="debouncedQueryChange"
              @focus="handleFocus"
              autofocus
            ></tiny-input>
          </div>
          <div v-if="topCreate" class="tiny-select__top-create">
            <div @click="$emit('top-create-click', $event)">
              <icon-plus></icon-plus>
              <span>{{ topCreateText }}</span>
            </div>
          </div>
          <tiny-grid
            v-if="renderType === 'grid'"
            auto-resize
            :row-id="valueField"
            :select-config="buildSelectConfig()"
            :radio-config="buildRadioConfig()"
            ref="selectGrid"
            :highlight-current-row="true"
            :columns="gridOp.columns"
            :data="state.gridData"
            @select-all="selectChange"
            @select-change="selectChange"
            @radio-change="radioChange"
            @mousedown.stop
            v-bind="gridOp"
          ></tiny-grid>

          <tiny-tree
            v-if="renderType === 'tree'"
            :filter-node-method="filterMethod"
            :props="{ label: textField, isLeaf: 'isLeaf', ...treeOp.props }"
            :expand-on-click-node="false"
            :icon-trigger-click-node="false"
            :node-key="valueField"
            :default-expand-all="state.isExpandAll"
            :check-strictly="treeOp.checkStrictly"
            :default-checked-keys="multiple ? state.defaultCheckedKeys : treeOp.defaultCheckedKeys || []"
            ref="selectTree"
            :current-node-key="!multiple ? state.currentKey : ''"
            :show-checkbox="multiple"
            @load-data="loadTreeData"
            @node-collapse="nodeCollapse"
            @node-expand="nodeExpand"
            @check="nodeCheckClick"
            @node-click="treeNodeClick"
            v-bind="treeOp"
          ></tiny-tree>
          <!-- tiny 新增 可搜索的输入框 -->
          <tiny-input
            v-if="searchable"
            v-model="state.query"
            :placeholder="t('ui.search.placeholder')"
            class="tiny-select-dropdown__search"
            @update:modelValue="handleQueryChange(state.query)"
          >
            <template #prefix>
              <!-- tiny 为适配smb，增加前置的放大镜 -->
              <icon-search class="tiny-select-dropdown__search-prefix"></icon-search>
            </template>
            <template #suffix>
              <span v-show="state.query" class="tiny-icon-close">
                <icon-close @click="clearSearchText"></icon-close>
              </span>
              <icon-search class="tiny-select-dropdown__search-suffix"></icon-search>
            </template>
          </tiny-input>

          <template v-if="optimization && !~['grid', 'tree'].indexOf(renderType)">
            <div :style="{ height: `${state.optimizeStore.recycleScrollerHeight}px` }">
              <tiny-recycle-scroller
                ref="scrollbar"
                style="height: 100%"
                :key="state.magicKey"
                :key-field="valueField"
                :list-class="['tiny-select-dropdown__wrap']"
                :item-class="['tiny-select-dropdown__item-view']"
                :items="state.datas"
                :item-size="state.optimizeOpts.optionHeight"
                v-show="!state.emptyFlag && !loading"
              >
                <template #before>
                  <tiny-option :value="state.query" created v-if="state.showNewOption"> </tiny-option>
                </template>
                <template #default="{ item }">
                  <slot :item="item">
                    <tiny-option
                      :key="`${item[valueField]}`"
                      :label="item[textField]"
                      :value="item[valueField]"
                      :disabled="item.disabled"
                      :required="item.required"
                      :highlight-class="item._highlightClass"
                      :events="item.events"
                      :icon="item.icon"
                      @mousedown.stop
                    >
                    </tiny-option>
                  </slot>
                </template>
              </tiny-recycle-scroller>
            </div>
          </template>
          <tiny-scrollbar
            v-if="!optimization && !~['grid', 'tree'].indexOf(renderType)"
            ref="scrollbar"
            show
            tag="ul"
            :wrap-class="['tiny-select-dropdown__wrap']"
            :view-class="['tiny-select-dropdown__list']"
            @mousedown.stop
            :class="{
              'is-empty': !allowCreate && state.query && state.filteredOptionsCount === 0
            }"
            v-show="state.options.length > 0 && !loading"
          >
            <slot name="dropdown"></slot>
            <li
              v-if="multiple && showCheck && showAlloption && !state.multipleLimit && !state.query && !remote"
              class="tiny-option tiny-select-dropdown__item"
              data-tag="tiny-select-dropdown-item"
              :class="[
                {
                  hover: state.hoverIndex === -9 && state.selectCls !== 'checked-sur'
                },
                { 'selected': state.selectCls === 'checked-sur' }
              ]"
              @click.stop="toggleCheckAll(false)"
              @mousedown.stop
              @mouseenter="state.hoverIndex = -9"
            >
              <component :is="`icon-${state.selectCls}`" :class="['tiny-svg-size', state.selectCls]" />
              <span>{{ allText || t('ui.base.all') }}</span>
            </li>
            <li
              v-if="
                multiple &&
                showCheck &&
                showAlloption &&
                !state.multipleLimit &&
                state.query &&
                !state.emptyText &&
                !remote
              "
              class="tiny-option tiny-select-dropdown__item"
              data-tag="tiny-select-dropdown-item"
              :class="[
                {
                  hover: state.hoverIndex === -9 && state.filteredSelectCls !== 'checked-sur'
                },
                { 'selected': state.filteredSelectCls === 'checked-sur' }
              ]"
              @click.stop="toggleCheckAll(true)"
              @mousedown.stop
              @mouseenter="state.hoverIndex = -9"
            >
              <component :is="`icon-${state.filteredSelectCls}`" :class="['tiny-svg-size', state.filteredSelectCls]" />
              <span>{{ allText || t('ui.base.all') }}</span>
            </li>
            <tiny-option :value="state.query" created v-if="state.showNewOption"> </tiny-option>
            <slot>
              <tiny-option
                v-for="item in state.datas"
                :key="`${item[valueField]}`"
                :label="item[textField]"
                :value="item[valueField]"
                :disabled="item.disabled"
                :required="item.required"
                :highlight-class="item._highlightClass"
                :events="item.events"
                @mousedown.stop
                :icon="item.icon"
              >
              </tiny-option>
            </slot>
          </tiny-scrollbar>
          <template
            v-if="
              renderType !== 'grid' &&
              renderType !== 'tree' &&
              state.emptyText &&
              (!allowCreate || loading || (allowCreate && state.emptyFlag))
            "
          >
            <!-- tiny 新增 showEmptyImage功能 -->
            <div v-if="loadingText || slots.empty">
              <slot name="empty" v-if="slots.empty"></slot>
              <span v-else-if="showEmptyImage" class="tiny-select-dropdown__empty-images"></span>
              <p class="tiny-select-dropdown__empty" v-else>
                {{ state.emptyText }}
              </p>
            </div>
            <div v-else class="tiny-select-dropdown__loading">
              <template v-if="!loading">
                <span v-if="showEmptyImage" class="tiny-select-dropdown__empty-images"></span>
                <span v-else class="tiny-select-dropdown__empty"> {{ state.emptyText }}</span>
              </template>
              <svg v-else class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="24" fill="none" />
              </svg>
            </div>
          </template>
          <!-- tiny 新增 footer插槽 -->
          <slot name="footer"></slot>
        </tiny-select-dropdown>
      </transition>
    </div>
    <div v-if="hoverExpand && !state.isDisplayOnly" class="tiny-select__placeholder">
      <input class="tiny-input__inner" disabled />
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/select/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import TinyTag from '@opentiny/vue-tag'
import TinyInput from '@opentiny/vue-input'
import TinyOption from '@opentiny/vue-option'
import TinyScrollbar from '@opentiny/vue-scrollbar'
import TinySelectDropdown from '@opentiny/vue-select-dropdown'
import TinyButton from '@opentiny/vue-button'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import {
  IconClose,
  IconHalfselect,
  IconCheck,
  IconCheckedSur,
  IconCopy,
  IconPlus,
  IconDeltaDown,
  IconSearch,
  IconEllipsis,
  IconChevronUp
} from '@opentiny/vue-icon'
import Grid from '@opentiny/vue-grid'
import Tree from '@opentiny/vue-tree'
import TinyTooltip from '@opentiny/vue-tooltip'
import FilterBox from '@opentiny/vue-filter-box'
import RecycleScroller from '@opentiny/vue-recycle-scroller'
import '@opentiny/vue-theme/select/index.less'

const getReference = (el, binding, vnode) => {
  const _ref = binding.expression ? binding.value : binding.arg
  const popper = vnode.context.$refs[_ref]

  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el
    } else {
      popper.$refs.reference = el
    }
  }
}

export default defineComponent({
  emits: [
    'update:modelValue',
    'change',
    'focus',
    'blur',
    'clear',
    'remove-tag',
    'visible-change',
    'handleDropdownClick',
    'dropdown-click',
    'top-create-click'
  ],
  directives: directive({
    Clickoutside,
    popover: {
      bind(el, binding, vnode) {
        getReference(el, binding, vnode)
      },
      inserted(el, binding, vnode) {
        getReference(el, binding, vnode)
      }
    }
  }),
  components: {
    TinyTag,
    TinyInput,
    TinyOption,
    TinyGrid: Grid,
    TinyTree: Tree,
    TinyButton,
    IconClose: IconClose(),
    TinyScrollbar,
    IconCopy: IconCopy(),
    IconPlus: IconPlus(),
    TinySelectDropdown,
    IconHalfselect: IconHalfselect(),
    IconCheck: IconCheck(),
    IconCheckedSur: IconCheckedSur(),
    TinyFilterBox: FilterBox,
    TinyTooltip,
    TinyRecycleScroller: RecycleScroller,
    // tiny 新增，
    IconSearch: IconSearch(),
    IconDeltaDown: IconDeltaDown(), // 默认下拉图标
    IconEllipsis: IconEllipsis(),
    IconChevronUp: IconChevronUp()
  },
  props: [
    ...props,
    'id',
    'multiple',
    'name',
    'dataset',
    'readonly',
    'tabindex',
    'dropStyle',
    'valueField',
    'textField',
    'copyable',
    'size',
    'options',
    'showCheck',
    'showAlloption',
    'hideDrop',
    'modelValue',
    'showOverflowTooltip',
    'remote',
    'remoteConfig',
    'placement',
    'loading',
    'disabled',
    'valueKey',
    'clearable',
    'noDataText',
    'filterable',
    'loadingText',
    'noMatchText',
    'popperClass',
    'allowCreate',
    'placeholder',
    'remoteMethod',
    'filterMethod',
    'collapseTags',
    'autocomplete',
    'multipleLimit',
    'reserveKeyword',
    'automaticDropdown',
    'defaultFirstOption',
    'popperAppendToBody',
    'showDropdown',
    'expandTags',
    'renderType',
    'gridOp',
    'treeOp',
    'delay',
    'cacheOp',
    'isDropInheritWidth',
    'tagSelectable',
    'selectConfig',
    'radioConfig',
    'allowCopy',
    'textSplit',
    'autoClose',
    'queryDebounce',
    'ignoreEnter',
    'dropdownIcon',
    'disabledTooltipContent',
    'hoverExpand',
    'optimization',
    'displayOnly',
    'initQuery',
    'extraQueryParams',
    'shape',
    'label',
    'tip',
    'updateDelay',
    'showTips',
    'popperOptions',
    'trim',
    'topCreate',
    'topCreateText',
    'keepFocus',
    'initLabel',
    'blank',
    'tooltipConfig',
    // 以下为 tiny 新增
    'searchable',
    'showEmptyImage',
    'inputBoxType',
    'tagType',
    'clearNoMatchValue',
    'showLimitText',
    'showProportion',
    'clickExpand',
    'maxVisibleRows',
    'showAllTextTag',
    'allText'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
