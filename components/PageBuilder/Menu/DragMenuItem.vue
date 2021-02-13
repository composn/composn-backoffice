<template>
  <Drag
    class="drag-menu-item"
    :data="structure"
    :type="type"
    handle=".drag-icon"
    @dragstart="onDragStart"
  >
    <div class="is-flex">
      <div>
        <slot></slot>
      </div>
      <div class="drag-icon">
        <b-icon icon="drag-horizontal"></b-icon>
      </div>
    </div>
  </Drag>
</template>

<script>
import { Drag } from 'vue-easy-dnd';
import PageStructure from '~/utils/PageStructure';

export default {
  components: {
    Drag,
  },
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      structure: new PageStructure({ type: this.type }),
    };
  },
  methods: {
    onDragStart() {
      this.structure = new PageStructure({ type: this.type });
    },
  },
};
</script>
<style lang="scss" scoped>
@import '~/assets/css/cyborg/_variables.scss';

.menu-list {
  .drag-menu-item {
    //background: $black-bis;
    border-radius: $radius-small;
    color: $white;
    display: block;
    padding: 0.5em 0.75em;
    &:hover {
      background-color: $background;
      color: $white-ter;
    }
    .drag-icon {
      cursor: grab;
      margin-left: auto;
      /deep/ .icon {
        height: 20px;
        vertical-align: text-top;
      }
    }
  }
}
</style>
