var request = require("request")

var funk1 = function(){
json = 
{
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "forecast": 1
  }
	}
		,
	"forecast":{
		"txt_forecast": {
		"date":"10:03 (EEST)",
		"forecastday": [
		{
		"period":0,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Torstai",
		"fcttext":"Enimmäkseen selkeää. Ylin lämpötila 75ºF. Tuuli S, nopeus 5−10 mph.",
		"fcttext_metric":"Enimmäkseen selkeää. Ylin lämpötila 24ºC. Tuuli S, nopeus 10−15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":1,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Torstaiyö",
		"fcttext":"Enimmäkseen selkeää. Alin lämpötila 61ºF. Tuuli SW, nopeus 5−10 mph.",
		"fcttext_metric":"Enimmäkseen selkeää. Alin lämpötila 16ºC. Tuuli SW, nopeus 10−15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":2,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Perjantai",
		"fcttext":"Enimmäkseen selkeää. Ylin lämpötila 79ºF. Tuuli WSW, nopeus 10−20 mph.",
		"fcttext_metric":"Enimmäkseen selkeää. Ylin lämpötila 26ºC. Tuuli WSW, nopeus 15−30 km/h.",
		"pop":"0"
		}
		,
		{
		"period":3,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Perjantaiyö",
		"fcttext":"Enimmäkseen selkeää. Alin lämpötila 61ºF. Tuuli WSW, nopeus 10−20 mph.",
		"fcttext_metric":"Enimmäkseen selkeää. Alin lämpötila 16ºC. Tuuli WSW, nopeus 15−30 km/h.",
		"pop":"0"
		}
		,
		{
		"period":4,
		"icon":"chancerain",
		"icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
		"title":"Lauantai",
		"fcttext":"Iltapäivällä sadekuuroja. Ylin lämpötila 77ºF. Tuuli WNW, nopeus 5−10 mph. Sateen mahd: 30%.",
		"fcttext_metric":"Iltapäivällä sadekuuroja. Ylin lämpötila 25ºC. Tuuli NW, nopeus 10−15 km/h. Sateen mahd: 30%.",
		"pop":"30"
		}
		,
		{
		"period":5,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Lauantaiyö",
		"fcttext":"Osittain pilvistä. Alin lämpötila 55ºF. Tuuli NNW, nopeus 5−10 mph.",
		"fcttext_metric":"Osittain pilvistä. Alin lämpötila 12ºC. Tuuli NNW, nopeus 10−15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":6,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Sunnuntai",
		"fcttext":"Enimmäkseen selkeää. Ylin lämpötila 78ºF. Tuuli N, nopeus 5−10 mph.",
		"fcttext_metric":"Enimmäkseen selkeää. Ylin lämpötila 26ºC. Tuuli N, nopeus 10−15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":7,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Sunnuntaiyö",
		"fcttext":"Osittain pilvistä. Alin lämpötila 58ºF. Tuuli E, nopeus 5−10 mph.",
		"fcttext_metric":"Osittain pilvistä. Alin lämpötila 14ºC. Tuuli SE, nopeus 10−15 km/h.",
		"pop":"0"
		}
		]
		},
		"simpleforecast": {
		"forecastday": [
		{"date":{
	"epoch":"1435852800",
	"pretty":"2. heinäkuuta 2015 klo 19:00 (EEST)",
	"day":2,
	"month":7,
	"year":2015,
	"yday":182,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"heinäkuu",
	"monthname_short":"heinä ",
	"weekday_short":"To",
	"weekday":"Torstai",
	"ampm":"PM",
	"tz_short":"EEST",
	"tz_long":"Europe/Helsinki"
},
		"period":1,
		"high": {
		"fahrenheit":"75",
		"celsius":"24"
		},
		"low": {
		"fahrenheit":"61",
		"celsius":"16"
		},
		"conditions":"Selke&auml;&auml;",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "S",
		"degrees": 185
		},
		"avewind": {
		"mph": 7,
		"kph": 11,
		"dir": "S",
		"degrees": 185
		},
		"avehumidity": 51,
		"maxhumidity": 0,
		"minhumidity": 0
		}
		,
		{"date":{
	"epoch":"1435939200",
	"pretty":"3. heinäkuuta 2015 klo 19:00 (EEST)",
	"day":3,
	"month":7,
	"year":2015,
	"yday":183,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"heinäkuu",
	"monthname_short":"heinä ",
	"weekday_short":"Pe",
	"weekday":"Perjantai",
	"ampm":"PM",
	"tz_short":"EEST",
	"tz_long":"Europe/Helsinki"
},
		"period":2,
		"high": {
		"fahrenheit":"79",
		"celsius":"26"
		},
		"low": {
		"fahrenheit":"61",
		"celsius":"16"
		},
		"conditions":"Selke&auml;&auml;",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 20,
		"kph": 32,
		"dir": "WSW",
		"degrees": 253
		},
		"avewind": {
		"mph": 14,
		"kph": 23,
		"dir": "WSW",
		"degrees": 253
		},
		"avehumidity": 56,
		"maxhumidity": 0,
		"minhumidity": 0
		}
		,
		{"date":{
	"epoch":"1436025600",
	"pretty":"4. heinäkuuta 2015 klo 19:00 (EEST)",
	"day":4,
	"month":7,
	"year":2015,
	"yday":184,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"heinäkuu",
	"monthname_short":"heinä ",
	"weekday_short":"La",
	"weekday":"Lauantai",
	"ampm":"PM",
	"tz_short":"EEST",
	"tz_long":"Europe/Helsinki"
},
		"period":3,
		"high": {
		"fahrenheit":"77",
		"celsius":"25"
		},
		"low": {
		"fahrenheit":"55",
		"celsius":"13"
		},
		"conditions":"Mahdollisesti sadetta",
		"icon":"chancerain",
		"icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
		"skyicon":"",
		"pop":30,
		"qpf_allday": {
		"in": 0.02,
		"mm": 1
		},
		"qpf_day": {
		"in": 0.02,
		"mm": 1
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "WNW",
		"degrees": 303
		},
		"avewind": {
		"mph": 9,
		"kph": 14,
		"dir": "WNW",
		"degrees": 303
		},
		"avehumidity": 63,
		"maxhumidity": 0,
		"minhumidity": 0
		}
		,
		{"date":{
	"epoch":"1436112000",
	"pretty":"5. heinäkuuta 2015 klo 19:00 (EEST)",
	"day":5,
	"month":7,
	"year":2015,
	"yday":185,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"heinäkuu",
	"monthname_short":"heinä ",
	"weekday_short":"Su",
	"weekday":"Sunnuntai",
	"ampm":"PM",
	"tz_short":"EEST",
	"tz_long":"Europe/Helsinki"
},
		"period":4,
		"high": {
		"fahrenheit":"78",
		"celsius":"26"
		},
		"low": {
		"fahrenheit":"58",
		"celsius":"14"
		},
		"conditions":"Selke&auml;&auml;",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "N",
		"degrees": 350
		},
		"avewind": {
		"mph": 6,
		"kph": 10,
		"dir": "N",
		"degrees": 350
		},
		"avehumidity": 50,
		"maxhumidity": 0,
		"minhumidity": 0
		}
		]
		}
	}
};
return json;
}
/*
var updateData = function(city) {
var url = "http://api.wunderground.com/api/8ee47d5f92a2cbad/forecast/lang:FI/q/Finland/"+city+".json"
console.log("Haetaan osoitteesta"+url)

request({url: url,json: true}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        return body // Print the json response
		
    }
})
}
*/
var exports = module.exports = {};

exports.haeData2 = function(client,city){
		var osoite = "http://api.wunderground.com/api/8ee47d5f92a2cbad/forecast/lang:FI/q/Finland/"+city+".json";
		var request = require('request'), iconv = require('iconv-lite');
		var requestOptions = {encoding: null, json:true, method: "GET", url: osoite};
		
		request(requestOptions, function(error, response, body){
			  if (!error && response.statusCode == 200) {
				var utf8String = iconv.decode(new Buffer(body), "ISO-8859-1");
				console.log("-->"+utf8String)
				json = utf8String
				var temp = [];
				for(var i = 0;i < 4; i ++)
				{
					var pohja = json.forecast.simpleforecast.forecastday[i];
					temp.push({paiva:i, kuva:pohja.icon_url, teksti:pohja.conditions, min:pohja.low.celsius,max:pohja.high.celsius});
				}
				client.emit('saa',temp)
			}
		})

	
}


exports.haeData = function(client,city){
	// _Toimii ilman ääkkösiä
	//
	var url = "http://api.wunderground.com/api/8ee47d5f92a2cbad/forecast/lang:FI/q/Finland/"+city+".json"
	var iconv = require('iconv-lite');
	console.log("Haetaan osoitteesta"+url)

	request({url: url,encoding:null,method:"GET"}, function (error, response, body) {

	    if (!error && response.statusCode === 200) {
			var utf8String = iconv.decode(new Buffer(body), "ISO-8859-1");
			//var htmlString = utf8String.toString();
			var htmlString = utf8String.replace(/&auml;/g,"ä")
			//			var html = iconv.decode(new Buffer(body),"ISO-8859-1")
			console.log("BODY:"+htmlString)
			json = JSON.parse(htmlString) // Toinen vaihtoehto olisi käyttää json:true request-headerissä
			var temp = [];
			for(var i = 0;i < 4; i ++)
			{
				var pohja = json.forecast.simpleforecast.forecastday[i];
				//temp = temp + pohja.conditions+" "+pohja.icon_url +"- MAX:"+ pohja.high.celsius+"/ MIN:"+ pohja.low.celsius + "\n";
				temp.push({paiva:i, kuva:pohja.icon_url, teksti:pohja.conditions, min:pohja.low.celsius,max:pohja.high.celsius});
			}
			client.emit('saa',temp)
			};


	    })
	
	
	
	//
	// ready json data from the top of the page
	//
	/*
			json = funk1();
			var temp = [];
			for(var i = 0;i < 4; i ++)
			{
				var pohja = json.forecast.simpleforecast.forecastday[i];
				//temp = temp + pohja.conditions+" "+pohja.icon_url +"- MAX:"+ pohja.high.celsius+"/ MIN:"+ pohja.low.celsius + "\n";
				temp.push({paiva:i, kuva:pohja.icon_url, teksti:pohja.conditions, min:pohja.low.celsius,max:pohja.high.celsius});
			}
			client.emit('saa',temp)
*/

}
