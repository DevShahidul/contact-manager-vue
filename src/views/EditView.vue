<script>
import { mapState } from 'pinia';
import Button from '../components/Button.vue';
import Form from '../components/Form.vue';
import InputGroup from '../components/InputGroup.vue';
import Label from '../components/Label.vue';
import { useContactStore } from '../stores/ContactStore';
  export default {
    components: {
      Form,
      Label,
      Button,
      InputGroup,
    },
    data(){
      return {
        updatedContact: {
          name: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
          },
          phone: "",
          isFav: false,
        },
      }
    },
    computed: {
      ...mapState(useContactStore, ['contact']),
    },
    methods: {
      handleUpdate(){
        useContactStore().updateContact(this.updatedContact);
        this.$router.push({ name: 'home' });
      }
    },
    mounted(){
      this.updatedContact = this.contact;
    }
  }
</script>
<template>
  <div class="container max-w-5xl">
    <div class="mx-auto mt-6 md:mt-8 px-4 md:px-8 xl:px-12 py-8 md:py-12 xl:py-16 bg-white rounded-2xl shadow w-full border-t border-gray-100">
      <Form @submit.prevent="handleUpdate()" method="post">
        <InputGroup>
          <Label labelFor="name" text="Name" />
          <input class="input-field" type="text" name="name" v-model="updatedContact.name" isRequired="true" />
        </InputGroup>
        <InputGroup>
          <Label labelFor="email" text="Email" />
          <input class="input-field" type="email" name="email" v-model="updatedContact.email" isRequired="true" />
        </InputGroup>
        <InputGroup>
          <Label labelFor="phone" text="Phone" />
          <input class="input-field" type="text" name="phone" v-model="updatedContact.phone" isRequired="true" />
        </InputGroup>
        <InputGroup>
          <Label labelFor="street" text="Street" />
          <input class="input-field" type="text" name="street" v-model="updatedContact.address.street" isRequired="true" />
        </InputGroup>
        <div class="grid lg:grid-cols-3 flex-wrap gap-y-4 md:gap-8 col-span-2">
          <InputGroup>
            <Label labelFor="suite" text="Suite" />
            <input class="input-field" type="text" name="suite" v-model="updatedContact.address.suite" isRequired="true" />
          </InputGroup>
          <InputGroup>
            <Label labelFor="city" text="City" />
            <input class="input-field" type="text" name="city" v-model="updatedContact.address.city" isRequired="true" />
          </InputGroup>
          <InputGroup>
            <Label labelFor="zipcode" text="Zipcode" />
            <input class="input-field" type="text" name="zipcode" v-model="updatedContact.address.zipcode" isRequired="true" />
          </InputGroup>
        </div>
        <div class="pt-4">
          <Button type="submit">Update</Button>
        </div>
      </Form>
    </div>
  </div>
</template>