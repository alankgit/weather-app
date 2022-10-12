const request = require("request")


const forecast = (lat, lon,callback)=>{

    const url = "http://api.weatherstack.com/current?access_key=68d09e5d81ed52bd026b32b0d8a2eef3&query="+lat+","+lon
   

    request({url, json:true},(error,{body})=>{

        if(error){
            callback("No internet Connection", undefined)

        } else if(body.error){
            callback("No location Found",undefined)
        } 
        else{
callback(undefined,"The temperature is " + body.current.temperature + " it feels like "+ body.current.feelslike + " temperature " + body.current.weather_descriptions[0])          
        }
    })
}


module.exports = forecast