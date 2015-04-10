Meteor.publish('appointments', function(id) {  return Appointments.find({doctor_id:id});});
Meteor.publish('cases', function() {  return Cases.find();});
Meteor.publish('docworkplaces', function(id) {  return Workplace.find({doctor_id:id});});
Meteor.publish('workplaces', function() {  return Workplace.find();});
