<template>
        <h1>WATCH</h1>
    <!--page container-->
    <div class="pageContainer">
        
    <!--setting up video over lay container-->
        <div class="container">
            <div class="overlay"></div>
            <div class="iframe-container">
                <Video :video="video" />
            </div>
        </div>
        <div class="outputContainer">
            <SearchBar v-model="searchTerm" />
            <VideoList :videos="videos" @switchMainVideo="showMainVideo" />
        </div>
      </div>
    
  
  </template>

  <script>
//import Watch page components
import youTubeSearchAPI from '../youTubeSearchAPI.js';
import SearchBar from '../components/WatchComponents/SearchBar.vue';
import Video from '../components/WatchComponents/Video.vue';
import VideoList from '../components/WatchComponents/VideoList.vue';
//import api key
import config from '../config';


export default {
  //register components
  components: {
    SearchBar: SearchBar,
    Video: Video,
    VideoList: VideoList
  },
  //data function
  data: function() {
    return {
      searchTerm: "Top Anime 2023",
      videos: [],
      video: null
    }
  },//data ends here
  created: function(){
    //setting the ititial search term before passing over the query from the watch button function
    this.searchTerm = this.$route.query.title || "Top Anime 2023";
    this.fetchVideoAPI();
  },//end of created
  methods: {
    //start of fectch API function
      fetchVideoAPI: function() {
        //using the imported youtube search api function
        //set api key, search term
        youTubeSearchAPI({
          key: config.apiKey,
          searchTerm: this.searchTerm,
          //setting the results to this object
        }, (results) => {
          this.videos = results;
          this.video = results[0];
        });
      },
      //show main video function sets this.video to the video
      showMainVideo: function(video) {
        this.video = video;
      },
      search() {
        //search function event
        this.fetchVideoAPI();
      }
  },
  //calling the fecth when the app is mounted
  watch: {
    searchTerm: function() {
      this.fetchVideoAPI();
    }
  }
}
</script>

<style scoped>
/*importing  fonts */
@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Open+Sans&display=swap');
h1 {
    font-family: 'Koulen', cursive;
    text-align: center;
    font-size: 48pt;
    letter-spacing: .25rem;
}

.pageContainer {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 20%;
    justify-content: space-around;
}
.container {
  position: relative;
  width: 50vw;
  height: 80vh;
  margin-left: 50px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/overlay.png');
  background-size: cover;
  background-position: center; 
  z-index: 1; /* Updated z-index to place the overlay above the iframe */
  border-radius: 22px;
  box-shadow: -4px 3px 30px 6px rgba(157,219,173,0.61);
}

.iframe-container {
  position: relative;
  z-index: 2; /* Updated z-index to place the iframe behind the overlay */
  width: 58%;
  height: 50%;
  margin-left: 20%;
  padding-top: 60px;
}

.iframe-container iframe {
  width: 100%;
  height: 100%;
}


.outputContainer{
    background-color: #C3E8BD;
    border-radius: 22px;
    margin-left: 200px;
    width: 30vw;
    padding: 2rem;
    text-align: center;
}
</style>