var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
