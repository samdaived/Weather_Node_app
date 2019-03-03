const axios =require('axios');

// this function is providing the geo data of the provided city
const geocode = (name,callback)=>{

        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?access_token=pk.eyJ1Ijoic2FtZGFpdmVkIiwiYSI6ImNqc3JyYXJkbjExdjc0M216ZmNldTV3M2QifQ.oTXISjc8ro8VQeEj4q-1rA`;
        return axios.get(url)
        // if the response is positive e return the data
        .then(({data})=>{
           // we check if the data in not empty
            if(data.features.length>0){callback(undefined,
            {name: data.features[0].place_name,
            lon:data.features[0].center[0],
            lat:data.features[00].center[1]})
            }else{
                callback({error:"sorry we cant find the place"})
            }
    })
        .catch(error=>{callback({error:'Sorry, the server can"t be reached'},undefined)
        });
    
};


module.exports={geocode}
