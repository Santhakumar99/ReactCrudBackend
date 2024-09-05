var app = require("./app");
const port = 7400;
const fs = require("fs");
const https = require("https");
//app.get('/', (req, res) => res.send('Task Manager APIs Running'));

// // Firebase Admin Sdk
// firebaseAdmin.initializeApp({
//     credential: firebaseAdmin.credential.cert(serviceAccount),
//     databaseURL: "https://fullstack-auth-demo.firebaseio.com"
// });

app.listen(port, () => console.log(`Server started on port ${port}`));
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// var server = app.listen(port, async function () {
//   console.log("Express server listening on port " + port);
// });

//const options = {
//	key: fs.readFileSync('key.pem'),
//	cert: fs.readFileSync('cert.pem')
//};

//app.get('/hello', function(req,res) {
//res.send('hello');
//});

//https.createServer(options, app).listen(7401, async function () {
//console.log('Express server listening on port 7401');
//});
