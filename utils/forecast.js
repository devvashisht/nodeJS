const request = require('request')
const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=90e50391e7caa91fd424c03797cf8876&query=${latitude},${longitude}&units=f`
request({url:url,json:true}, (error,response)=>{
if(error){
 callback('unable to connect to weather service',undefined)
}else if (response.body.error){
callback('unable to find locatino', undefined)
} else {
    console.log('----------',response.body.current.temperature)
 callback(undefined,' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip+ '% chance of rain.')
}
})
}

module.exports = forecast