<script>
    export default {
        props: ['action', 'method', ''],
    }
</script>
<template>
    <form :action="action" :method="method">
        <div class="space-y-4 w-full">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-6">
                <slot></slot>
            </div>
        </div>
    </form>
</template>