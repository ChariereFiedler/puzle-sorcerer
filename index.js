let fs = require('fs');
let hbs = require('handlebars');
let data = require('./models/event');


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function adapteTypes(model, cb) {
	if(model.properties) {
		for(let attrib in model.properties) {
			if(model.properties[attrib].type) {
				let type = model.properties[attrib].type;
				let finalType = type;
				switch(type) {
					case "date":
						finalType = "Date";
						break;
					default:
						break;
				}
				 model.properties[attrib].type = finalType;
				console.log(attrib);
			}
		}
	}
	console.log(model);
	cb(model);
}

function writeFile(filename,data, cb) {
	return fs.writeFile(filename + 'model.ts', data, cb);
}

hbs.registerHelper('upperFirstLetter', (item) => {

	if(item.length > 0) {
		let digit = item[0].toUpperCase();
		item =  capitalizeFirstLetter(item);
		console.log('UpperFirstLetter : ', digit, "  ",item[0].toUpperCase(), "  ", item);
	}
	console.log('UpperFirstLetter : ', item);
	return item;
});


require.extensions['.hbs'] = (module, filename)=>{
	module.exports = fs.readFileSync(filename, 'utf8');
};

let source = require("./templates/model.hbs");




let result  = adapteTypes(data, (item)=> {
	let template = hbs.compile(source);
	console.log(template);
	let result = template(data);
	console.log(result);
	return writeFile(data.name, result, (err) => {
		if (err) {
			console.log(err);
		}
		console.log("FileSaved");
	});
});




