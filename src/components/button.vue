<template>
    <div :disabled="disabled" class="bui-button h h-xs">
        <div v-if="$slots.prepend" class="prepend">
            <slot name="prepend"></slot>
        </div>
        <div class="grow">
            <slot></slot>
        </div>
        <div v-if="$slots.append" class="append">
            <slot name="append"></slot>
        </div>
    </div>
    <bui-popup></bui-popup>
</template>

<script setup>
const props = defineProps({
    disabled: Boolean,
})
</script>