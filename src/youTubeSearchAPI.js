//import axios
import axios from "axios";
//set the API end point to a variable called URL
const URL = "https://www.googleapis.com/youtube/v3/search";

//start of the function it takes two parameters the options (from the API) and the callback function that will call axios to store and receive the data
function youTubeSearchAPI(options, callback) {
    //setting the parameters
    const params = {
        key: options.key,
        q: options.searchTerm,
        part: 'snippet',
        type: 'video'
    }
//axios using a get method as the call back function, axios takes in the URL and the parameters from above and using a async promise to return the data 
    axios.get(URL, {params: params})
    .then(function(response){
        callback(response.data.items);
    })
}

export default youTubeSearchAPI;