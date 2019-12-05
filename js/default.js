$api_url = 'http://localhost:8080';

var opts = {'message': 'test'};
$.ajax({
	type 		: 'GET',
	url 		: $api_url,
	crossDomain : true,
	success : function(data){
		console.log('success');
	},
	error : function(e){
		console.log('error: ',e);
	}
});
// fetch($api_url).then(function(res) {
// 	// res instanceof Response == true.
// 	console.log('outside');
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