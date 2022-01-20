<template>
  <th v-bind="$attrs" :key="attrProps.key" v-ant-ref="onantRef" :width="col.width" :class="attrProps.class" class="resize-table-th">
    <slot name="default"></slot>
    <vue-draggable-resizable
        :key="col.key"
        class="table-draggable-handle"
        :w="10"
        :x="draggingState[col.key] || col.width"
        :z="1"
        axis="x"
        :draggable="true"
        :resizable="false"
        @dragging="onDrag"
        @dragstop="onDragstop">
    </vue-draggable-resizable>
  </th>
</template>

<script>
import Vue from "vue";

export default {
  name: "ResizableCol",
  props: ["attrProps", "col", "onDrag", "onDragstop","draggingState", "antRef"],
  computed:{},
  methods: {
    onantRef(h) {
      this.antRef(h)
    }
  }
};
</script>

<style>
.resize-table-th {
  position: relative;
}
.resize-table-th .table-draggable-handle {
  left: auto !important;
  right: -5px;
  height: 100%!important;
  bottom: 0;
  cursor: col-resize;
  touch-action: none;
  position: absolute;
  top: 0px;
  z-index: 1;
  transform: none !important;
}
</style>
