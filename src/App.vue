<template>
<Header />
<!--pass media as a bound prop to the router-->
<RouterView :media="media" />
</template>
<script>
//import axios
import axios from 'axios';
//importing routerview
import { RouterView } from 'vue-router';
//import components
import Header from './components/Header.vue';
export default {
  components: {
      Header: Header,
      RouterView: RouterView,
    },
  data: function (){
    return {
      //setting an empty array for the data object from axios
      media : [],
    };
  },//end of data
  computed: {
    
  },//end of computed
  methods: {
  },//end of methods
  created: function () {
    //adding the lifecycle method to fetch the data when its rendered
    axios.get("./data.json").then((response) => {
    //telling it where to get the data, axios needs a promise thats a function
    this.media = response.data.media;
    });
  },
}



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Open+Sans&display=swap');
body {
  background-color: #FDFFF6;
  color: #040403;
  font-family:'Open Sans', sans-serif;
}


</style>

