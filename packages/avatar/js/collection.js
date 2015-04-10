SimpleSchema.debug = true;

Symptom = new Mongo.Collection("symptom");
Symptom.attachSchema(new SimpleSchema({
	condition_id : 	{ type : [String], unique : true, label :"Condition ID"	}, 
    heading :      	{ type : String                                     	},
    description :  	{ optional : true, type : Object, label :"Description"	},
 }));
 
Condition = new Mongo.Collection("condition");
Condition.attachSchema(new SimpleSchema({
	id :           	{ type : String,                                       	},
	overview :     	{ type : Object,  label : " Overview" ,optional : true	}, 
 Further_reading : 	{ type : Object,  optional : true,                     	},
    multimedia :   	{ type : Object,  optional : true, label : "Multimedia"	},
    articles :     	{ type : Object,  optional : true, label : "Articles"  	},
}));
 
Speciality = new Mongo.Collection("speciality");
Speciality.attachSchema(new SimpleSchema({
	heading :     	{ type  : String, label : " Heading"                 	}, 
    Description : 	{ type : Object,  label : " Description"              	},
}));

cameraSchema= {};
cameraSchema.camera =  new SimpleSchema({
	eye: 			{ type  : [Number], 			decimal  : true        	}, 
	target:			{ type  : [Number], 			decimal  : true      	}, 
});

Avatar = new Mongo.Collection("avatar");
Avatar.attachSchema(new SimpleSchema({
	layerOpacities:	{ type  : [Number], 			decimal  : true     	}, 
    camera : 		{ type : cameraSchema.camera , 	optional: true     		},
}));
 
