PatSchema = {};
PatSchema.CasesSchema = {};

PatSchema.CasesSchema.case_notes = new SimpleSchema({
	created_by:	{	type : String,	optional : true, label : "Created by user"	},
	created_at:	{	type: 	Date	,autoValue: function() { return new Date;}	},
	content:	{	type : String,			optional : true						}
});

PatSchema.CasesSchema.schema = new SimpleSchema({
	status : 	{	type : String,	allowedValues: ["open","closed","others"]	},
	appointments:{	type : [String],label: "List of appointment Ids",optional : true	},
	case_notes:	{	type : [PatSchema.CasesSchema.case_notes],	optional : true			},
});

PatSchema.Schema = new SimpleSchema({
	contactnos:	{	type : [Number],	unique : true,optional : true   		}, 
	blood_group:{	type : String ,	    optional : true, 
			allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
																				},
	is_critical : {	type:Boolean,			optional : true,					},
	known_allergies:{	type: String,		optional : true,	allowedValues : ["Etc","y","Skin","X"]			},
	major_surgeries: {	type: String,		optional : true, 	allowedValues : ["Heart","Eye","Head","XYZ"]	},
	health_condition:{	type: String,		optional : true, 	allowedValues : ["Good","Bad"]					},
	food_habbit:{	type: String,			optional : true,	allowedValues : ["Veg","Non-Veg"]				},
	family_physician: {	type: String,		optional : true,					},
	cases : 	{	type : [PatSchema.CasesSchema.schema],	optional : true,	},
});

Patient = new Mongo.Collection("patients");
Patient.attachSchema(PatSchema.Schema);
