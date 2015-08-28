/**********
***	Database
*/

function Database(){}

Database.prototype.connect = function(getName){
	this.db = new Firebase("https://" + getName + ".firebaseio.com");
}

Database.prototype.insert = function(data){
	if(data){		
		this.db.push(data);
		this.db.on("value", function(data) {
			//console.log(data);
		});
	}
}