(function(){
	function logErrors(){
		this.list = [];
	}

	logErrors.prototype.save = function(msg, url, line){
		var error 				= {};
		var datetime 			= new Date();

				error.datetime = datetime.toLocaleString();

				error.message = msg;
				error.url 		= url;
				error.line 		= line;

		this.list.push(error)
	}

	logErrors.prototype.getAll = function(){
		console.log(this.list);
	}

	logErrors.prototype.filterByDate = function(getDate){
	}

	window.onerror = function (msg, url, line) {
		logs = new logErrors();
		logs.save(msg, url, line);		

		logs.getAll();
	}
})();