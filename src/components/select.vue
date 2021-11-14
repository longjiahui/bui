<template>
    <div class="bui-select">
        <div class="select-value">
            <template v-if="!$slots.default">
                {{value}}
            </template>
            <slot v-else></slot>
        </div>
        <div class="select-options">
            <div
                @click="value = valueGetter && valueGetter(option) || ''"
                class="option"
                v-for="(option, i) in options">
                <slot v-if="$slots.option" name="option" :option="option" :i="i"></slot>
                <span v-else>{{labelGetter && labelGetter(option) || ''}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    value: String,
    valueGetter: {
        type: Function,
        default: d=>d && d.value || ''
    },
    labelGetter: {
        type: Function,
        default: d=>d && d.label || d.value || ''
    },
    options: {
        type: Array,
        default: ()=>([])
    }
})
</script>

<style lang="scss" scoped>
.bui-select{
    position: relative;
    &:hover{
        .select-options{
            visibility: visible;
            pointer-events: auto;
        }
    }

    .select-options{
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        max-height: 400px;

        pointer-events: none;
        visibility: hidden;
    }
}
</style>