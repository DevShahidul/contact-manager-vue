<script>
  import { mapState } from 'pinia';
import List from '../components/List.vue';
import ListItem from '../components/ListItem.vue';
import { useContactStore } from '../stores/ContactStore';

  export default {
    components:{
      List,
      ListItem,
    },
    computed: {
      ...mapState(useContactStore, ['deletedContacts', 'totalDeletedContacts']),
    },
  }
</script>

<template>
  <div class="container max-w-7xl">
    <div class="divide-y divide-slate-100">
      <List v-if="totalDeletedContacts !== 0">
        <ListItem v-for="contact in deletedContacts" :key="contact.id" :contact="contact" />
      </List>
      <h2 class="text-2xl" v-else>Not deleted items found!</h2>
    </div>
  </div>
</template>
