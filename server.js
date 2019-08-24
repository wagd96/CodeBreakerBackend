var server = require('./app/app');
var port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server on port 3000');
})
/* */