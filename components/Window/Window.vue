<template>
  <div class="window">
    <WindowTopBar></WindowTopBar>
    <WindowBody></WindowBody>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/css/cyborg/_variables.scss';

.window {
  border: 1px solid $border;
}
</style>
