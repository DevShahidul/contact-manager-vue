<script>
    export default {
        props: ['lableFor', 'text']
    }
</script>
<template>
    <label :for="lableFor" class="capitalize text-sm font-bold text-gray-600 mb-0">{{ text }}</label>
</template>