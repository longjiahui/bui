<template>
    <teleport to="body">
        <div :class="['popup', name]">
            <slot></slot>
        </div>
    </teleport>
</template>

<script setup>
let props = defineProps({
    // for animation
    name: String,
    visible: Boolean,
})
</script>

<style lang="scss" scoped>
.popup{
    position: absolute;
}
</style>