<template>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <label>Search</label>
</template>

<script>
export default {
    props: ["modelValue"],
    emits: ['update:modelValue']
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Open+Sans&display=swap');
label {
    background-color: #5B7553;
    font-family: 'Koulen', cursive;
    padding: 1px 15px;
    border-radius: 10px;
    border: 2px solid #040403;
    font-size: 16pt;
    margin-left: 25px;
}

input {
    height: 2rem;
    width: 50%;
    background-color: #FDFFF6;
    border-radius: 10px;
}

</style>

