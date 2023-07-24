<template>
    
    <ul>
        <li v-for="video in videos" :key="video.etag">
            <button @click="$emit('switchMainVideo', video)">
                {{video.snippet.title}}
            </button>
        </li>
    </ul>
   
</template>



<script>
export default {
    name: "VideoList",
    props: ["videos"]
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Open+Sans&display=swap');
ul {
    list-style-type: none;
}

li {
    background-color: #FDFFF6;
    padding: 10px;
    border-radius: 10px;
    margin: 10px auto;
}

button {
    background-color: #FDFFF6;
    font-family:'Open Sans', sans-serif;
    padding: 10px;
    cursor: pointer;
}


</style>