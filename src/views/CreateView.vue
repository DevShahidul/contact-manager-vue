<script>
  import Button from '../components/Button.vue';
import Form from '../components/Form.vue';
import InputField from '../components/InputField.vue';
import InputGroup from '../components/InputGroup.vue';
import Label from '../components/Label.vue';
  export default {
    components: {
      Form,
      Label,
      Button,
      InputField,
      InputGroup,
    },
    data() {
      return {
        contact:{
          name: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
              lat: "",
              lng: ""
            }
          },
          phone: "",
        }
      }
    },
  }
</script>
<template>
  <div class="container max-w-5xl">
    <div class="mx-auto mt-6 md:mt-8 px-4 md:px-8 xl:px-12 py-8 md:py-12 xl:py-16 bg-white rounded-2xl shadow w-full border-t border-gray-100">
      <Form action="home" method="post">
        <InputGroup>
          <Label labelFor="name" text="Name" />
          <InputField type="text" name="name" :value="contact.name" isRequired="true" />
        </InputGroup>
        <InputGroup>
          <Label labelFor="email" text="Email" />
          <InputField type="email" name="email" :value="contact.email" isRequired="true" />
        </InputGroup>
        <InputGroup>
          <Label labelFor="phone" text="Phone" />
          <InputField type="text" name="phone" :value="contact.phone" isRequired="true" />
        </InputGroup>
        <InputGroup>
          <Label labelFor="street" text="Street" />
          <InputField type="text" name="street" :value="contact.address.street" isRequired="true" />
        </InputGroup>
        <div class="grid lg:grid-cols-3 flex-wrap gap-y-4 md:gap-8 col-span-2">
          <InputGroup>
            <Label labelFor="suite" text="Suite" />
            <InputField type="text" name="suite" :value="contact.address.suite" isRequired="true" />
          </InputGroup>
          <InputGroup>
            <Label labelFor="city" text="City" />
            <InputField type="text" name="city" :value="contact.address.city" isRequired="true" />
          </InputGroup>
          <InputGroup>
            <Label labelFor="zipcode" text="Zipcode" />
            <InputField type="text" name="zipcode" :value="contact.address.zipcode" isRequired="true" />
          </InputGroup>
        </div>
        <div class="pt-4">
          <Button type="submit">Create</Button>
        </div>
      </Form>
    </div>
  </div>
</template>
