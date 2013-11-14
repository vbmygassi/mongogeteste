// mongoose
var m = require("mongoose");
m.connect("mongodb://127.0.0.1/yummie");

// schema
var j = m.Schema( { type: String } );

// schema method
j.methods.speak = function(){
	console.log("speak:" +this.type);
}

// model
var k = m.model("test", j);

// object
var f = new k( { type: "tollo" } );
console.log(f.type);
f.speak();


// db
var db = m.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function cb() {
	console.log("toll");
});

// save object
f.save(function(err, obj){
	if(err){
		console.log(err);
	}
	if(obj){
		obj.speak();
	}
});

// find objects
k.find(function(err, coll){
	if(err){
		console.log(err);
	}
	if(coll){
		console.log(coll);
	}
});

// filter objects
k.find({ type: "tollo" }, function(err, coll){
	if(err){
		console.log(err);
	}
	if(coll){
		console.log(coll);
	}
});

