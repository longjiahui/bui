<template>
    <div @click="$emit('update:value', !value)" :class="['bui-check h h-s', value?'is-checked':'']">
        <div class="indicator">
            <slot name="indicator"></slot>
        </div>
        <div class="grow">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    value: Boolean,
})
</script>