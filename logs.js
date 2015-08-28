/**********
***	Logs
*/
var logs = (function(){
	save = function(msg, file, line, url){
		var obj 		= {};
		var datetime 	= new Date();

		obj.datetime 	= datetime.toLocaleString(); // Date format 27/8/2015 15:15:52
		obj.url 		= url;
		obj.message 	= msg;
		obj.file 		= file;
		obj.line 		= line;		
		
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
		save: save,
	}
})();


window.onerror = function (msg, file, line) {
	//obj = new logs();
	//obj.save(msg, url, line);		
	var url = location.href.toString();
	
	logs.save(msg, file, line, url);		
}
