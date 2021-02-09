<template>
  <div class="window-top-bar px-3 is-flex">
    <div class="dots">
      <span></span><span></span><span></span>
    </div>
    <div class="size-selector"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/cyborg/_variables.scss";
@import "~bulma/sass/utilities/initial-variables";

.window-top-bar {
  min-height: 3rem;
  border-bottom: 1px solid $border;
  background: $black;
  .dots {
    margin-right: auto;
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
