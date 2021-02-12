<template>
  <b-navbar  type="is-dark" wrapper-class="">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Composn
      </b-navbar-item>
    </template>
    <template #start></template>

    <template #end> </template>
  </b-navbar>
</template>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
}
</style>
