/**********
***	Database
*/

function Database(){}

Database.prototype.connect = function(url){
	this.db = new Firebase(url);
}

Database.prototype.insert = function(data){
	if(data){		
		this.db.push(data);
		
		this.db.on("value", function(data) {
			//console.log(data);
		});
	
	}
}