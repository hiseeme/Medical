
AppointmentSchema = {};

AppointmentSchema.schema = new SimpleSchema({
	case_id	: 	{  	type : String,												},
	user_id : 	{  	type : String,			optional : true,					},
	doctor_id :	{ 	type : [String],		optional : true,					},
	Workplace_id:{	type : String,			optional : true,					},
	status : 	{	type : String,			allowedValues: ["open","closed","reopened","other"],
								autoValue : function (){ return "open"},
											optional : true,
																				},
	createdAt:  {	type: Date		,autoValue: function() { return new Date;}	},
	description:{	type : String,			optional : true,					}
	//Add attachments field
});


Appointments = new Mongo.Collection("appointments");
Appointments.attachSchema(AppointmentSchema.schema);

CasesSchema = {};

CasesSchema.case_notes = new SimpleSchema({
	created_by:	{	type : String,	optional : true, label : "Created by user"	},
	created_at:	{	type: 	Date	,autoValue: function() { return new Date;}	},
	content:	{	type : String,			optional : true						}
});

CasesSchema.schema = new SimpleSchema({
	owner : 	{	type : String												}, 
	status : 	{	type : String,	allowedValues: ["open","closed","others"]	},
	appointments:{	type : [String],label: "List of appointment Ids",optional : true	},
	case_notes:	{	type : [CasesSchema.case_notes],	optional : true			},
});


Cases = new Mongo.Collection("cases");
Cases.attachSchema(CasesSchema.schema);

WorkplaceSchema = {};

WorkplaceSchema.UserCountry = new SimpleSchema({ 	
	name: 	{	type: String													},
	code: 	{	type: String,	regEx: /^[A-Z]{2}$/								}
	});

WorkplaceSchema.address = new SimpleSchema({ 
	street :	{	type : String,			optional : true						},
	pincode:	{	type : Number,				optional : true					},
	city : 		{	optional : true,				type : String				},
	country:   	{	type: WorkplaceSchema.UserCountry,	optional: true			},
}); 

WorkplaceSchema.slots_description = new SimpleSchema({ 
	start_time:	{	type : Number			,optional : true,						},
	end_time:	{	type : Date													},
});
WorkplaceSchema.booked = new SimpleSchema({ 
	time:		{	type : Date													},
	appointment_id:{type : String												},
});
WorkplaceSchema.slots = new SimpleSchema({ 
	day :		{	type : String ,	allowedValues: ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},
	description:{	type :	[WorkplaceSchema.slots_description] 				},
	booked :	{	type : [WorkplaceSchema.booked ]							}
});
WorkplaceSchema.schema = new SimpleSchema({ 
	doctor_id :	{	type : String	,autoValue: function() {if (this.isInsert){return this.userId} else {this.unset();}}				},
	name : 		{	type : String	,					optional : true,		},
	address : 	{	type : WorkplaceSchema.address,	optional : true				}, 
	type :		{	optional : true,	type : String,	allowedValues: ["Clinic", "Hospital"]},
	slot_duration:{	type : Number,			optional : true,					},
	slots_description:{	type : [WorkplaceSchema.slots],							},
})


Workplace = new Meteor.Collection("workplaces");
Workplace.attachSchema(WorkplaceSchema.schema);


