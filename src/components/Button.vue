<script>
    export default {
        props: ['type']
    }
</script>

<template>
    <button :type="type" class="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-md inline-flex items-center justify-center transition min-w-[120px]">
        <slot></slot>
    </button>
</template>