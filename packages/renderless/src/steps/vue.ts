import { updateStartIndex, isVisibleHandler, computedRightNodePos } from './index'

export const api = ['state', 'isVisibleHandler']

export const renderless = (props, { reactive, watch, computed }) => {
  const state = reactive({
    startIndex: 0,
    endIndex: computed(() => state.startIndex + props.visibleNum),
    rightNodePositions: computed(() => api.computedRightNodePos())
  })

  const api = {
    updateStartIndex: updateStartIndex({ state, props }),
    isVisibleHandler: isVisibleHandler({ state, props }),
    computedRightNodePos: computedRightNodePos({ state, props })
  }

  watch(() => props.active, api.updateStartIndex, { immediate: true })

  return Object.assign(api, { state })
}