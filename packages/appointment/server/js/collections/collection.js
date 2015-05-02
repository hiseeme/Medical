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
