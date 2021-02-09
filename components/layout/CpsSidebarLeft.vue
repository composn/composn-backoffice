<template>
  <section>
    <b-sidebar
      fullheight
      open
      type="is-black"
    >
      <div class="p-2">
        <b-menu>
          <b-menu-list>
            <b-menu-item tag="nuxt-link" label="Pages" to="/pages"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item icon="logout" label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>
