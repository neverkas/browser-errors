/**********
***	Logs
*/
var logs = (function(){
	save = function(msg, url, line){
		var obj 		= {};
		var datetime 	= new Date();

		obj.datetime 	= datetime.toLocaleString(); // Date format 27/8/2015 15:15:52
		obj.message 	= msg;
		obj.url 		= url;
		obj.line 		= line;		
		//this.list.push(error)
		
		if(typeof Database === 'function'){
			db = new Database();

			db.connect('https://jslogs.firebaseio.com');
			db.insert(obj);
		}
	}

	getAll = function(){
		//console.log(this.list);
	}

	filterByDate = function(getDate){
	}		

	return {
		save: save
	}
})();


window.onerror = function (msg, url, line) {
	//obj = new logs();
	//obj.save(msg, url, line);		
	logs.save(msg, url, line);		
}
