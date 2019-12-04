$api_url = 'http://localhost:8080';

var opts = {'message': 'test'};

// fetch($api_url).then(function(res) {
// 	// res instanceof Response == true.
// 	if (res.ok) {
// 		res.json().then(function(data) {
// 			console.log(data.entries);
// 		});
// 	} else {
// 		console.log("Looks like the response wasn't perfect, got status", res.status);
// 	}
// }, function(e) {
// 	console.log("Fetch failed!", e);
// });