<template>
  <b-sidebar
    fullheight
    open
    type="is-black"
    position="static"
  >
    <div class="p-2 sticked">
      <b-menu>
        <b-menu-list>
          <b-menu-item tag="nuxt-link" label="Pages" to="/pages" :expanded="isActive('/pages')">
            <li><DragMenuItem type="row">Row</DragMenuItem></li>
            <li><DragMenuItem type="column">Column</DragMenuItem></li>
            <b-menu-item class="is-submenu">
              <template #label="props">
                Blocks
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
              </template>
              <li><a>Rich Text</a></li>
              <li><a>Content List</a></li>
              <li><a>Content Detail</a></li>
              <li><a>Image</a></li>
            </b-menu-item>
          </b-menu-item>
        </b-menu-list>
        <b-menu-list label="Actions">
          <b-menu-item icon="logout" label="Logout"></b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
  </b-sidebar>
</template>
<script>
export default {
  methods: {
    isActive(link) {
      return link === this.$route.path;
    },
  }
}
</script>
<style scoped lang="scss">
@import "~/assets/css/cyborg/_variables.scss";

.sticked {
  position: fixed;
  width: inherit;
  height: 100vh;
}
.b-sidebar {
  min-height: 100vh;
}
.menu-list /deep/ a.is-active {
  background: $link;
}
.is-submenu /deep/ > a.is-active {
  background: $grey-accent;
}
</style>
