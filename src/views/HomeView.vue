<script>
import { mapState } from 'pinia';
import List from '../components/List.vue';
import ListItem from '../components/ListItem.vue';
import { useContactStore } from '../stores/ContactStore';

  export default {
    components: {
      List,
      ListItem,
    },
    computed: {
      ...mapState(useContactStore, {
        allContacts: 'contacts',
        totalContacts: 'totalContacts',
        totalFavourites: 'totalFavourites',
        totalDeletedContacts : 'totalDeletedContacts'
      }),
      // ...mapGetters(useContactStore, ['totalContacts', 'totalFavourites', 'totalDeletedContacts'])
    },
  }
</script>

<template>
  <div class="container max-w-7xl">
    <div class="divide-y divide-slate-100">
      <div class="space-y-3 py-6">
        <h2 class="text-2xl text-gray-700">
          <span class="font-bold">Total contacts:</span> {{ totalContacts }}
        </h2>
        <h2 class="text-2xl text-gray-700">
          <span class="font-bold">Favourite contacts:</span> {{ totalFavourites }}
        </h2>
        <h2 class="text-2xl text-gray-700">
          <span class="font-bold">Deleted contacts:</span> {{ totalDeletedContacts }}
        </h2>
      </div>
      <List>
        <ListItem v-for="contact in allContacts" :key="contact.id" :contact="contact" />
      </List>
    </div>
  </div>
</template>