<script>
    export default {
        props: ['type', 'name', 'value', 'isRequired'],
        methods: {
            handleOnChange (event) {
                value = event.target.value;
            }
        }
    
    }
</script>
<template>
    <input :type="type" :id="name" :name="name" class="w-full px-2 py-1 border border-gray-200 rounded bg-gray-50" :required="isRequired" :value="value" />
</template>