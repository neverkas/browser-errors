/**********
***	Logs
*/

function logs(){}

logs.prototype.save = function(msg, url, line){
	var obj 			= {};
	var datetime 	= new Date();

	obj.datetime 	= datetime.toLocaleString(); // Date format 27/8/2015 15:15:52
	obj.message 	= msg;
	obj.url 			= url;
	obj.line 			= line;		
	//this.list.push(error)
	
	if(typeof Database === 'function'){
		db = new Database();
		db.connect('jslogs');
		db.insert(obj);
	}
}

logs.prototype.getAll = function(){
	//console.log(this.list);
}

logs.prototype.filterByDate = function(getDate){
}

window.onerror = function (msg, url, line) {
	obj = new logs();
	obj.save(msg, url, line);		
}