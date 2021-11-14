<script setup>
import { ref } from "@vue/reactivity";

let check = ref(false)
let input = ref('hello world')
</script>

<template>
<h1>BUI</h1>
<h2>按钮</h2>
<div class="h">
<bui-button>hello</bui-button>
</div>

<h2>checkbox</h2>
<div class="h">
  <bui-check v-model:value="check">
    hello</bui-check>
</div>

<h2>input</h2>
<div class="h h-s">
  <bui-input placeholder="hello"></bui-input>
  <bui-input v-model:value="input">
    <template #prepend>tel:</template>
    <template #append>5662</template>
  </bui-input>
  <bui-input disabled></bui-input>
</div>

<h3>Select</h3>
<div class="h">
  <bui-select
    v-model:value="input"
    :options="[{
      value: 'hello',
    }, {value: 'world'}]"></bui-select>
</div>

</template>

<style lang="scss">
@import '@styles/main.scss';

.bui-button{
  padding: 4px 8px;
  border-radius: 3px;
  border: 1px solid lightgray;
  cursor: pointer;
  transition: all .3s;

  &:hover{
    box-shadow: rgba(0, 0, 0, .1) 0 0 24px;
  }
}
.bui-check{
  color: #666;
  cursor: pointer;

  &:hover{
    .indicator{
      box-shadow: rgba(0, 0, 0, .5) 0 0 8px;
    }
  }

  &.is-checked{
    color: #333;

    .indicator{
      background: gray;
      border-color: dimgray;
      transform: scale(1.4);
      margin-right: 4px;
    }
  }

  .indicator{
    width: 8px;
    height: 8px;
    border: 1px solid lightgray;
    border-radius: 100%;
    background: whitesmoke;
    transition: all .3s;
  }
}

.bui-input{
  padding: 4px 8px;
  transition: all .3s;

  &[disabled=true]{
      opacity: .4;
      cursor: not-allowed;
  };

  .outline{
    background: whitesmoke;
    border: 1px solid lightgray;
    border-radius: 3px;
    transition: all .3s;
  }

  & input:focus ~ .outline{
    box-shadow: rgba(0, 0, 0, .1) 0 0 24px;
  }
}

.bui-select{
  background: whitesmoke;
  border-radius: 3px;
  border: 1px solid lightgray;
  padding: 4px 8px;

  .select-options{
    opacity: 0;
    transition: all .3s;
    transform: translate(0, 10px);
  }
  &:hover .select-options{
    opacity: 1;
    transform: none;
  }
}
</style>
