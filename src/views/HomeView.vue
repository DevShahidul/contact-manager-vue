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
      <div class="space-x-3 py-6 flex">
        <h2 class="text-2xl text-gray-700">
          <span class="font-bold">Contacts:</span> {{ totalContacts }}
        </h2>
        <h2 class="text-2xl text-gray-700">
          <span class="font-bold">{{totalFavourites > 1 ? 'Favourites' : 'Favourite'}}:</span> {{ totalFavourites }}
        </h2>
        <h2 class="text-2xl text-gray-700">
          <span class="font-bold">Deleted:</span> {{ totalDeletedContacts }}
        </h2>
      </div>
      <List>
        <ListItem v-for="contact in allContacts" :key="contact.id" :contact="contact" />
      </List>
    </div>
  </div>
</template>