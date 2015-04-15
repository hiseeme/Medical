DocSchema = {};
DocSchema.Workplace = {};

/////////////////////////////

DocSchema.Workplace.UserCountry = new SimpleSchema({ 	
	name: 	{	type: String													},
	code: 	{	type: String,	regEx: /^[A-Z]{2}$/								}
	});

DocSchema.Workplace.address = new SimpleSchema({ 
	street :	{	type : String,			optional : true						},
	pincode:	{	type : Number,				optional : true					},
	city : 		{	optional : true,				type : String				},
	country:   	{	type: DocSchema.Workplace.UserCountry,	optional: true			},
}); 
////
DocSchema.Workplace.slots_description = new SimpleSchema({ 
	start_time:	{	type : Date			,optional : true,						},
	end_time:	{	type : Date													},
	slot_number:{	type : Number												},
});

DocSchema.Workplace.booked = new SimpleSchema({ 
	time:		{	type : Date													},
	slot_number:{	type : Number												},
	appointment_id:{type : String												},
});
DocSchema.Workplace.slots = new SimpleSchema({ 
	day :		{	type : String ,	allowedValues: ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","unaddressed"]},
	description:{	type :	[DocSchema.Workplace.slots_description] 				},
	booked :	{	type : [DocSchema.Workplace.booked ]							}
});
////
DocSchema.Workplace.schema = new SimpleSchema({ 
	name : 		{	type : String	,					optional : true,		},
	address : 	{	type : DocSchema.Workplace.address,	optional : true				}, 
	type :		{	optional : true,	type : String,	allowedValues: ["Clinic", "Hospital"]},
	slot_duration:{	type : Number,			optional : true,					},
	slots_description:{	type : [DocSchema.Workplace.slots],	optional : true,		},
});
DocSchema.eachday = new SimpleSchema({ 
	workplace_index:{type: Number												},
	start_time:	{	type : Date													},
	end_time:	{	type : Date													},
	slot_duration:{	type : Number,												},
});
DocSchema.Calendar = new SimpleSchema({ 
	name:		{	type: String												},
	day :		{	type: [DocSchema.eachday]									},
});

/////////////////////////////

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
	speciality :{	type : String, 												},
	description:{	type : String,	max:144,									},
	type :		{	type : String, 												},
	pinned_cases:{	type : [Number],					optional : true			},
	qualification:{	type : [DocSchema.qualification]							},
});

DocSchema.schema = new SimpleSchema({
	contactnos:	{	type : [Number],	unique : true,optional : true   		}, 
	blood_group:{	type : String ,	    optional : true, 
			allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
																				},   
	fields :	{	type : DocSchema.fields,		optional : true				}, 
	calendar:	{	type : [DocSchema.Calendar]	,	optional : true				}, 
	workplaces:	{	type : [DocSchema.Workplace.schema]	,	optional : true		}, 
	notes :		{ 	type :	[DocSchema.notes],		optional : true				},
})

Doctor = new Mongo.Collection("doctor");
Doctor.attachSchema(DocSchema.schema);

