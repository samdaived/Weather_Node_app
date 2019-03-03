const axios = require('axios');
const validate =require('validator')

// this function is getting an object of data about the weathr of the provided city
const weather= ({lat,lon,name},callcack)=>{
    console.log(lat,lon);
    
    //check that the data is not empty
    if(lat && lon){
        
        const url =`https://api.darksky.net/forecast/b23066061ca701028598a5386126a823/${lat},${lon}`;
        axios.get(url)
        .then(({data})=>{

            callcack(undefined,{
                temperature: Math.floor(((data.currently.temperature - 32)* 5/9)),
                summary:data.currently.summary
            })
        })
        .catch(error=>callcack({error:`Sorry, we couldn't reach weather data for ${name}`},undefined))
    }
};

module.exports={weather}