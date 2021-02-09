<template>
  <b-navbar fixed-top type="is-dark" wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Composn
      </b-navbar-item>
    </template>
    <template #start></template>

    <template #end> </template>
  </b-navbar>
</template>
