<script setup>
import { ref, watch } from 'vue';
import Navbar from './Navbar.vue';

const input = ref('');
const output = ref('');

watch(input, async(newOutput, oldOutput) => {
    output.value = btoa(newOutput);
});

const loadFile = e => {
    var reader = new FileReader();
    reader.readAsDataURL(e.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
        var fileContent = reader.result;
        input.value = fileContent;
    }
};
</script>

<template>
    <h1>Image to Base64</h1>

    <Navbar/>

    <section class="converter-container">
        <section class="input-container">
            <input type="file" id="input_file" @input="loadFile">
        </section>
        <section classs="output-container">
            <textarea class="output" id="base64-output" cols="30" rows="5" :value="output"></textarea>
        </section>
    </section>
</template>

<style scoped>

</style>
