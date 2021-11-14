<template>
    <div :disabled="disabled" class="bui-input h h-xs">
        <div v-if="$slots.prepend" class="prepend">
            <slot name="prepend"></slot>
        </div>
        <input v-bind="props" :disabled="disabled" @input="e=>$emit('update:value', e.target.value)" class="grow" type="text">
        <div v-if="$slots.append" class="append">
            <slot name="append"></slot>
        </div>
        <div class="outline"></div>
    </div>
</template>

<script setup>
let props = defineProps({
    disabled: Boolean,
    value: String,
    placeholder: String,
})
</script>

<style lang="scss" scoped>
.bui-input{
    position: relative;
    font-size: 1em;
    input{
        font-size: 1em;
        line-height: 1em;
        // border: none;
        border: none;
        background: transparent;
        &:focus{
            outline: none;
        }
    }
    .outline{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        margin-left: 0;
    }
    .prepend, .append{
        font-size: 1em;
        line-height: 1em;
    }
}
</style>