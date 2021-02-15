<template>
  <Drag
    v-bind="$attrs"
    handle=".drag-icon"
    class="drag-structure drag-row mb-3"
  >
    <div class="is-flex">
      <div class="drag-icon">
        <b-icon icon="drag"></b-icon>
      </div>
      <div class="is-flex-grow-1">
        <slot></slot>
      </div>
    </div>
  </Drag>
</template>

<script>
import { Drag } from 'vue-easy-dnd';
export default {
  components: {
    Drag,
  },
};
</script>

<style lang="scss" scoped>
.drag-row {
  border: 1px solid white;
  .drag-icon {
    border-right: 1px solid white;
  }
}
.drag-structure {
  span.icon {
    height: 100%;
  }
}
</style>
