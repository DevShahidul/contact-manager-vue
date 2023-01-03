<script>
  import { useContactStore } from '../stores/ContactStore';
    export default {
        props: ['contact'],
        methods: {
          handleFav(){
            useContactStore().toggleFav(this.contact.id);
          },
          handleDelete(){
            useContactStore().deleteContact(this.contact.id);
          },
          handleEdit(){
            useContactStore().editContact(this.contact);
            this.$router.push({ name: 'create' });
          }
        },
    }
</script>

<template>
    <article class="flex items-start space-x-6 py-6">
      <!-- <img :src="contact.image" alt="" width="60" height="88" class="flex-none rounded-md bg-slate-100" /> -->
      <figure class="user-card-image"> Image</figure>
      <div class="min-w-0 relative flex-auto">
        <h2 class="font-semibold text-slate-900 truncate pr-20">{{ contact.name }}</h2>
        <dl class="mt-3 flex flex-col text-sm leading-6 font-medium">
          <div class="absolute top-0 right-0 flex items-center space-x-3">
            <!-- <dd>{{ contact.isFav ? 'Favourite' : '' }}</dd> -->
            <button @click="handleFav()" :class="[ 'cursor-pointer border-0 transition', contact.isFav ? 'text-sky-500' : 'text-gray-500']">
              <span class="sr-only">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
              </svg>
            </button>
            <button @click="handleEdit()" class="px-1 py-1 flex items-center justify-center border-b-2 border-gray-500 text-gray-500 font-bold hover:text-sky-500 hover:border-sky-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </button>
            <button @click="handleDelete()" class="text-red-500 hover:text-red-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
          <div class="flex space-x-2">
            <dt class="font-bold w-28">Email</dt>
            <dd>{{ contact.email }}</dd>
          </div>
          <div class="flex space-x-2">
            <dt class="font-bold w-28">Phone</dt>
            <dd>{{ contact.phone }}</dd>
          </div>
          <div class="flex space-x-2">
            <dt class="font-bold w-28">Address</dt>
            <dd class="text-slate-400">{{ contact.address.street }}, {{ contact.address.suite }}, {{ contact.address.city }}, {{ contact.address.zipcode }}</dd>
          </div>
        </dl>
      </div>
    </article>
  </template>