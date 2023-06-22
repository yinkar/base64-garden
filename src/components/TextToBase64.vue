<script setup>
import { ref, watch } from 'vue';
import Navbar from './Navbar.vue';

const input = ref('');
const output = ref('');

watch(input, async(newOutput, oldOutput) => {
    output.value = btoa(newOutput);
});
</script>

<template>
    <h1>Text to Base64</h1>

    <Navbar/>

    <section class="converter-container">
        <section class="input-container">
            <textarea class="input" id="text-input" cols="30" rows="5" v-model="input"></textarea>
        </section>
        <section classs="output-container">
            <textarea class="output" id="base64-output" cols="30" rows="5" :value="output"></textarea>
        </section>
    </section>
</template>

<style scoped>

</style>
