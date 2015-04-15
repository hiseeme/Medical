LoginSchema = {};

	LoginSchema.Dlogin = new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		}
	});

	LoginSchema.Dregister= new SimpleSchema({ 	
		firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,	label : 'First Name' 	},
		lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/, 	label : 'Last Name'		},
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		},
		gender:    	{	type: String,	allowedValues: ['Male', 'Female'] , label : 'Gender'},
		birthday : 	{	type: Date,	   /*	autoform: {	 afFieldInput: {type: "bootstrap-datepicker"  } },*/  label : 'Birthday'	},
	});

	LoginSchema.Dpassreset= new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password: {	 	type: String,  	regEx: /^[A-Z]{2}$/		,label : 'Password' 		},
		confirmPassword: {type: String,	regEx: /^[A-Z]{2}$/		,label : 'Renter Password' ,
			custom: function () {
				if (this.value !== this.field('password').value) {
				return "passwordMismatch";
			}
		}
																							},
	});


UpdateSchema = {};

	UpdateSchema.UserCountry = new SimpleSchema({ 	
		name: 	{	type: String	},
		code: 	{	type: String,	regEx: /^[A-Z]{2}$/		}
	});

	UpdateSchema.UserProfile = new SimpleSchema({
	firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,						},
	lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/,						},
	birthday:  	{	type: Date,		optional: true									},
	gender:    	{	type: String,	allowedValues: ['Male', 'Female'],	optional: true	},
	organization:{	type: String,	regEx: /^[a-z0-9A-z .]{3,30}$/,	optional: true	},
	website:   	{	type: String,	regEx: SimpleSchema.RegEx.Url,	optional: true	},
	bio:       	{	type: String,	optional: true							},
	country:   	{	type: UpdateSchema.UserCountry,	optional: true						},
	});
	
	UpdateSchema.email = new SimpleSchema({
	address: 	{	type: String,	regEx: SimpleSchema.RegEx.Email					},
	verified: 	{	type: Boolean													},
	});
	
	UpdateSchema.User = new SimpleSchema({
	username:	{	type: String,	regEx: /^[a-z0-9A-Z_]{3,15}$/,	optional: true,	},
	emails: 	{	type: [UpdateSchema.email],	optional: true							},
	//createdAt:  {	type: Date			,autoValue: function() { return new Date;}	},
	profile: 	{	type: UpdateSchema.UserProfile,										},
	//services: 	{	type: Object,	optional: true,		blackbox: true				},
	//roles: 		{	type: Object,						blackbox: true				}, //defauth value
    
	});


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
	name : 		{	type : String												},
	address : 	{	type : Workplaceform.address,								}, 
	type :		{	optional : true,	type : String,	allowedValues: ["Clinic", "Hospital"]},
	slot_duration:{	type : Number,			optional : true,					},
	slots_description:{	type : [Workplaceform.slots],							},
});

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
DocSchema.Workplace.schema = new SimpleSchema({ 
	name : 		{	type : String	,					optional : true,		},
	address : 	{	type : DocSchema.Workplace.address,	optional : true				}, 
	type :		{	optional : true,	type : String,	allowedValues: ["Clinic", "Hospital"]},
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

/////////////////////////////

DocSchema.qualification = new SimpleSchema({
	course :	{	type : String,	max:144,		optional : true				},
	college :	{	type : String,	max:144,		optional : true				},
	city :		{	type : String,	max:144,		optional : true				},
});

DocSchema.fields = new SimpleSchema({
	speciality :{	type : String, 												},
	description:{	type : String,	max:144,									},
	type :		{	type : String, 												},
	qualification:{	type : [DocSchema.qualification]							},
});

DocSchema.schema = new SimpleSchema({
	contactnos:	{	type : [Number],	unique : true,optional : true   		}, 
	blood_group:{	type : String ,	    optional : true, 
			allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
																				},   
	fields :	{	type : DocSchema.fields,									}, 
});

DocSchema.Workplaces = new SimpleSchema({
	workplaces:	{	type : [DocSchema.Workplace.schema]	,						}, 
});

Doctor = new Mongo.Collection("doctor");
Patient = new Mongo.Collection("patients");

DocSchema.eachday = new SimpleSchema({ 
	start_time:	{	type : Date													},
	end_time:	{	type : Date													},
	slot_duration:{	type : Number,												},
	workplace_index:{type: Number,
		autoform: {
			options: function () {
				return _.map(Doctor.findOne(Meteor.userId()).workplaces, function (c, i) {
					return {label: "Workplace " + i + ": " + c.name, value: i};
				});
			}
		}
																				},
});

DocSchema.Daytype = new SimpleSchema({ 
	name:		{	type: String												},
	day :		{	type: [DocSchema.eachday]									},
});

DocSchema.Calendar = new SimpleSchema({ 
	calendar:	{	type : [DocSchema.Daytype]	,	optional : true				}, 
});


DocSchema.Workplace.calendar = new SimpleSchema({ 
	day :		{	type : String ,	allowedValues: ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},
	type:{	type : Number,	
		autoform: {
			options: function () {
				return _.map(Doctor.findOne(Meteor.userId()).calendar, function (c, i) {
					return {label: "Day Type " + i + ": " + c.name, value: i};
				});
			}
		}
																				},
});

