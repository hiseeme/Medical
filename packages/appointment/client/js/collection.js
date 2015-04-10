
Workplaceform = {};

Workplaceform.UserCountry = new SimpleSchema({ 	
	name: 	{	type: String													},
	code: 	{	type: String,	regEx: /^[A-Z]{2}$/								}
	});

Workplaceform.address = new SimpleSchema({ 
	street :	{	type : String,			optional : true						},
	pincode:	{	type : Number,				optional : true					},
	city : 		{	optional : true,				type : String				},
	country:   	{	type: Workplaceform.UserCountry,	optional: true			},
}); 

Workplaceform.slots_description = new SimpleSchema({ 
	start_time:	{	type : Number, optional : true,autoform: {type: "noUiSlider",noUiSliderOptions: {step: 10 },noUiSlider_pipsOptions: {mode:'steps',density: 5}}},
	end_time:	{	type : Date													},
});
//Workplaceform.booked = new SimpleSchema({ 
	//time:		{	type : Date													},
	//appointment_id:{type : String												},
//});
Workplaceform.slots = new SimpleSchema({ 
	day :		{	type : String ,	allowedValues: ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},
	description:{	type :	[Workplaceform.slots_description]				},
	//booked :	{	type : [Workplaceform.booked ]							}
});
Workplaceform.schema = new SimpleSchema({ 
	doctor_id :	{	type : String	,autoValue: function() {if (this.isInsert){return Meteor.userId()} else {this.unset();}}	},
	name : 		{	type : String												},
	address : 	{	type : Workplaceform.address,								}, 
	type :		{	optional : true,	type : String,	allowedValues: ["Clinic", "Hospital"]},
	slot_duration:{	type : Number,			optional : true,					},
	slots_description:{	type : [Workplaceform.slots],							},
});

Workplace = new Meteor.Collection("workplaces");
