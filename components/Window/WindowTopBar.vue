<template>
  <div class="window-top-bar px-3 is-flex">
    <div class="size-selector"></div>
    <div class="dots">
      <span></span><span></span><span></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/cyborg/_variables.scss";

.window-top-bar {
  min-height: 3rem;
  border-bottom: 1px solid $border;
  background: $black;
  .dots {
    margin-left: auto;
    display: flex;
    span {
      display: inline-block;
      width: 16px;
      height: 15px;
      border-radius: 50%;
      margin: auto 8px;
      background-color: $white;
    }
  }
  .size-selector {
    margin-left: auto;
  }
}
</style>
