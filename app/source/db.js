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
		}
	}

	getAll = function(){
		var data = [];

		this.db.on("value", function(item){
			data = item.val();
		});

		return data;
	}

	return {
		connect: connect,
		insert: insert,
		getAll: getAll,
	}
})();

