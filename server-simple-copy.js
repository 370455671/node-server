var http = require('http')
var fs = require('fs')
var url = require('url')

var server = http.createServer(function(req,res){

var pathObj = url.parse(req.url,true)
console.log(pathObj)

switch(pathObj.pathname){
    case '/getWeather':
    var ret
    if(pathObj.query.city == 'beijing'){
        ret = {
            city: 'beijing',
            weather: 'sunday'
        }
    }else{
        ret = {
            city: pathObj.query.city,
            weather: 'unknow'
        }
    }
    res.end(JSON.stringify(ret))
        break;

    case '/user/123':
        res.end(fs.readFileSync(__dirname + '/static/user.tpl'))
        break;
    default:
        res.end(fs.readFileSync(__dirname + '/static'+pathObj.pathname))

 }
})
server.listen(9000)