<template>
    <div ref="select"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        :class="['bui-select', isHover?'is-hover':'', isShow?'is-show':'']">
        <div class="select-value" @click="isShow = !isShow">
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
    <teleport to="body">
        <div class="bui-mask"></div>
    </teleport>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'
import timeoutUtils from '@scripts/timeout'

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
let isHover = ref(false)
let isShow = ref(false)
let select = ref(null)
let timeout = timeoutUtils.createTimeout()

const handleClickDocument = e=>{
    let target = e.target
    let item = target
    while((item = item.parentNode) != null){
        if(item === select.value){
            // 找到了不隐藏了
            return
        }
    }
    isShow.value = false
}
document.addEventListener('click', handleClickDocument, { capture: true })
onUnmounted(()=>document.removeEventListener('click', handleClickDocument))

</script>

<style lang="scss" scoped>
.bui-select{
    position: relative;
    &.is-show{
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