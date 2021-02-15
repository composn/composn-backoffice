<template>
  <div class="window-body p-3">
    <drop-list
      :items="structures"
      row
      style="min-height: inherit"
      type="row"
      @insert="onInsert"
      @reorder="onReorder"
    >
      <template #item="{ item }">
        <DragStructure :key="item.key" :data="item">
          <div class="p-3">
            <div class="" style="background: red">
              {{ item.type }}
            </div>
          </div>
        </DragStructure>
      </template>
      <template #feedback="{data}">
        <div :key="data.key" class="feedback"/>
      </template>
<!--      <template #reordering-feedback="{item}">-->
<!--        <div key="feedback" class="reordering-feedback"/>-->
<!--      </template>-->
    </drop-list>
  </div>
</template>

<script>
import { Drag, DropList } from 'vue-easy-dnd';

export default {
  components: {
    Drag,
    DropList,
  },
  props: {
    structures: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onInsert(event) {
      this.structures.splice(event.index, 0, event.data);
    },
    onReorder(event) {
      event.apply(this.structures);
    },
    remove(item) {
      const index = this.structures.indexOf(item);
      this.structures.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.window-body {
  min-height: 500px;
  overflow-y: scroll;
}
.drag-image {
  background-color: orangered;
  width: 75px;
  height: 75px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reordering-feedback,
.feedback {
  flex: 0 0 0;
  outline: 1px solid white;
  align-self: stretch;
}

.drag-source {
  outline: 2px dashed white;
}
</style>
