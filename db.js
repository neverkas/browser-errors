/**********
***	Database
*/
var Database = (function(){
	this.url = null;
	this.db = null;

	connect = function(){
		if(this.url != null){
			this.db = new Firebase(this.url);
		}
	}

	insert = function(data){
		if(data){
			this.db.push(data);
			
			this.db.on("value", function(data) {
				//console.log(data);
			});
		
		}
	}

	return {
		connect: connect,
		insert: insert,
	}
})();

