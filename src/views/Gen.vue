<template>
<h1>ANI-GENERATOR</h1>
<div class="container">
    <div class="genCard" v-if="currentItem">
        <div class="genCard-column-right">
            <!--setting the image src to the current image-->
            <img  :src="currentItem.image" />
        </div>
            
        <div class="genCard-column-left">
            <!--setting the currentItem attirbutes-->
            <h2>{{ currentItem.title }}</h2>
            <p>{{ currentItem.year }}</p>
            <p>{{ currentItem.description }}</p>
            <button class="watch-button" @click="goToSecondPage(currentItem.title)">WATCH</button>
            <!--set the event function on the generate button-->
            <button class="generate-button" @click="generateRandomItem">GENERATE</button>
        </div>
    </div>
    <div v-else>
      Loading...
    </div>
</div>

</template>
<script>
export default {
  components: {
      
    },
    //registering the props
  props: ["media"],
  data: function (){
    return {
        //set the current item initialy to null
      currentItem: null,
      
    };
  },//end of data
  computed: {
    
  },//end of computed
  methods: {
    //generate Random Item Method
    generateRandomItem() {
        //set the random index
        const randomIndex = Math.floor(Math.random() * this.media.length);
        //set the current item to the random index
        this.currentItem = this.media[randomIndex];
    },
    goToSecondPage(title) {
      //trigger the navigation to the watch path, pass the name of the page and the props to go with it
      this.$router.push({name: 'watch', query: { title }});
    }
  },//end of methods
  created() {
    //call the function when the app is created
    this.generateRandomItem();
  }//end of lifecycle method
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Open+Sans&display=swap');

h1 {
    font-family: 'Koulen', cursive;
    text-align: center;
    font-size: 48pt;
    letter-spacing: .25rem;
}
.container{
    display: flex;
    justify-content: center;
    padding-bottom: 20%;
    width: 100vw;
}
.genCard {
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #C3E8BD;
    width: 70%;
    min-width: 50%;
    padding: 2.5% 0;
    border-radius: 22px;
    font-weight: 600;
}
.genCard-column-right {
    border-radius: 10px;
}
.genCard-column-left {
    display: flex;
    flex-direction: column;
    width: 40%;
}
.generate-button{
    margin-top: 35%;
    width: 300px;
}


button {
    margin: 5% auto;
    display: block;
    width: 175px;
    background-color: #5B7553;
    font-family: 'Koulen', cursive;
    padding: 1px 15px;
    border-radius: 10px;
    border: 1px solid #040403;
    font-size: 16pt;
    box-shadow: -4px 3px 30px 6px rgba(157,219,173,0.61);
}



img {
   max-width: 100%;
   min-width: 300px;
   border-radius: 10px;
}


</style>