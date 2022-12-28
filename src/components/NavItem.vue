<script>
  import { RouterLink } from 'vue-router';
  export default {
      props: {
        href: {
            type: String,
            required: true,
        },
      },
  }
</script>

<template>
    <li>
      <RouterLink
        :to="href"
        :class="['block px-3 py-2 rounded-md', $route.path == href ? 'bg-sky-500 text-white' : 'bg-slate-50']"
      >
        <slot></slot>
      </RouterLink>
    </li>
</template>
  