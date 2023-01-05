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
        contact: {
          name: "",
          email: "",
          phone: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
          },
          isFav: false,
        },
      }
    },
    computed: {
      ...mapState(useContactStore, {
        prevContact: 'contact'
      }),
      isCreate(){
        return this.$route.path === '/create';
      },
      isEdit(){
        return this.$route.path === '/edit';
      }
    },
    methods: {
      createContact(){
        useContactStore().createContact(this.contact);
        this.$router.push({ name: 'home' });
      },
      handleUpdate(){
        useContactStore().updateContact(this.contact);
        this.$router.push({ name: 'home' });
      },
      handleFormSubmit(){
        if(this.isCreate){
          this.createContact();
        }
        if(this.isEdit){
          this.handleUpdate()
        }
      }
    },
    mounted(){
      this.contact = this.prevContact;
    }
  }
</script>
<template>
  <div class="container max-w-5xl">
    <div class="mx-auto mt-6 md:mt-8 px-4 md:px-8 xl:px-12 py-8 md:py-12 xl:py-16 bg-white rounded-2xl shadow w-full border-t border-gray-100">
      <Form @submit.prevent="handleFormSubmit" method="post">
        <InputGroup>
          <Label labelFor="name" text="Name" />
          <input type="text" id="name" name="name" class="input-field" v-model="contact.name" required/>
        </InputGroup>
        <InputGroup>
          <Label labelFor="email" text="Email" />
          <input type="email" id="email" name="email" class="input-field" v-model="contact.email" required/>
        </InputGroup>
        <InputGroup>
          <Label labelFor="phone" text="Phone" />
          <input type="text" id="phone" name="phone" class="input-field" v-model="contact.phone" required/>
        </InputGroup>
        <InputGroup>
          <Label labelFor="street" text="Street" />
          <input type="text" id="street" name="street" class="input-field" v-model="contact.address.street" />
        </InputGroup>
        <div class="grid lg:grid-cols-3 flex-wrap gap-y-4 md:gap-8 col-span-2">
          <InputGroup>
            <Label labelFor="suite" text="Suite" />
            <input type="text" id="suit" name="suit" class="input-field" v-model="contact.address.suite" />
          </InputGroup>
          <InputGroup>
            <Label labelFor="city" text="City" />
            <input type="text" id="city" name="city" class="input-field" v-model="contact.address.city" />
          </InputGroup>
          <InputGroup>
            <Label labelFor="zipcode" text="Zipcode" />
            <input type="text" id="zipcode" name="zipcode" class="input-field" v-model="contact.address.zipcode" />
          </InputGroup>
        </div>
        <div class="pt-4">
          <Button v-if="this.$route.path == '/create'" type="submit">Create</Button>
          <Button v-if="this.$route.path == '/edit'" type="submit">Update</Button>
        </div>
      </Form>
    </div>
  </div>
</template>