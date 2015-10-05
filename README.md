# Browser Errors v1.0

Tiene como finalidad detectar los errores que retorna el navegador en la consola y guardarlos en una base de datos, en mi caso con Firebase.
Se puede utilizar en cualquier aplicación de javascript.
los archivos necesarios son **db.js** y **logs.js**

**db.js**
```
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
```

**logs.js**
```
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
	Database.url = 'https://jslogs.firebaseio.com';
	Database.connect();
}

window.onerror = function (msg, file, line) {
	var url = location.href.toString();	
	logs.save(msg, file, line, url);		
}

```

## Configurar

Modificar la url de la variable en **logs.js**
```
	Database.url = 'https://jslogs.firebaseio.com';
```

## Base de Datos

* *Firebase*
 + http://www.firebase.com/

