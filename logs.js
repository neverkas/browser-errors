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
		
		if(typeof Database === 'object'){			
			Database.insert(obj);
		}
	}

	getAll = function(){
		return Database.getAll();
	}

	filterByDate = function(getDate){
	}		

	return {
		save: save,
	}
})();


window.onload = function(){
	Database.connect();
}

window.onerror = function (msg, file, line) {
	var url = location.href.toString();	
	logs.save(msg, file, line, url);		
}
