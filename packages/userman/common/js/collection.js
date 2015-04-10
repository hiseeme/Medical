//Files = new FS.Collection("files", {
  //stores: [new FS.Store.GridFS("filesStore")]
//});

PatSchema = {};
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
});


Patient = new Mongo.Collection("patients");
Patient.attachSchema(PatSchema.Schema);

DocSchema = {};

DocSchema.notes = new SimpleSchema({
	created_at:	{	type: 	Date	,autoValue: function() { return new Date;}	} ,
	content :	{	type : String,	max:144,		optional : true				},
});

DocSchema.qualification = new SimpleSchema({
	course :	{	type : String,	max:144,		optional : true				},
	college :	{	type : String,	max:144,		optional : true				},
	city :		{	type : String,	max:144,		optional : true				},
});

DocSchema.fields = new SimpleSchema({
	speciality :{	type : String, 					optional : true				},
	description:{	type : String,	max:144,		optional : true				},
	type :		{	type : String, 					optional : true				},
	pinned_cases:{	type : [Number],				optional : true,			},
	qualification:{	type : [DocSchema.qualification]							},
	notes :		{ type	: 	[DocSchema.notes],		optional : true				},
});

DocSchema.schema = new SimpleSchema({
	contactnos:	{	type : [Number],	unique : true,optional : true   		}, 
	blood_group:{	type : String ,	    optional : true, 
			allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
																				},   
	fields :	{	type : DocSchema.fields,									}, 
})


Doctor = new Mongo.Collection("doctor");
Doctor.attachSchema();

NotiSchema = {}

NotiSchema.contents = new SimpleSchema({
	message : 	{	type : String, 			optional : true						},
	date :		{	type : Date, 			optional : true						}
});

NotiSchema.schema = new SimpleSchema({
	belongs_to:	{	type : String,												}, 
	contents : 	{	type : [NotiSchema.contents],	optional : true				}, 
})


Notifications = new Mongo.Collection("notifications");
Notifications.attachSchema(NotiSchema.schema);
