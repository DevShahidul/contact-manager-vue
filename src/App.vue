<script>
import { RouterLink, RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
import NavItem from './components/NavItem.vue';
export default {
  components: {
    Nav,
    NavItem,
  },
}
</script>

<template>
  <main>
    <header>
      <div class="container mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <Nav>
          <NavItem href="/">All</NavItem>
          <NavItem href="/favourites">Favourites</NavItem>
          <NavItem href="/deleted">Deleted</NavItem>

          <template #buttons>
            <RouterLink to="create" class="bg-sky-500 hover:bg-sky-600 text-white px-3 md:px-6 py-2 rounded-md inline-flex items-center justify-center transition">Create New</RouterLink>
          </template>
        </Nav>
      </div>
    </header>
    <RouterView />
  </main>
</template>