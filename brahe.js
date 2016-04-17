var exports = module.exports = {};
var cheerio = require('cheerio');

exports.haeData = function(client,busStop) {
	var osoite = "http://turku.trapeze.fi/nettinaytto/web?stopid="+busStop+"&command=quicksearch&view=mobile";
	console.log("Haen dataa haulla:"+osoite)
var request = require('request'), iconv = require('iconv-lite');
var requestOptions = {encoding: null, method: "GET", url: osoite};


request(requestOptions, function(error, response, body){
  if (!error && response.statusCode == 200) {
	//console.log(body);
	var utf8String = iconv.decode(new Buffer(body), "ISO-8859-1");
	var htmlString = utf8String.toString();

	$ = cheerio.load(htmlString);

	var ar = $('.deptable').text().trim().split("\n");

	// poista tyhjät merkit
	for(var i = 0; i < ar.length; i = i + 1) { ar[i] = ar[i].replace(/\s/g,'');}

	// poista tyhjät alkiot
	for(var i = 0; i < ar.length; i = i + 1) 
	{if(ar[i] == ''){ar.splice(i,3) } }
	
	ar.splice(3,1); // poista yhdestä kohtaa
	
	var main = "";
	var taulut = [];
	for(var i = 1; i  < 6; i++)
	{
		main = main + ""+ar[3*i]+"   "+ar[3*i + 1]+"   "+ar[3*i + 2]+"\n"
		taulut.push({aika:ar[3*i],linja:ar[3*i + 1],maaranpaa:ar[3*i + 2]})
	}
	main = main + "";

	console.log(main);
	client.emit('aikataulu',taulut);	
  }
});
}