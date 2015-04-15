Package.describe({
	summary: "Package for User Management.",
	version: '1.0.0'
});


Package.on_use(function (api, where) {
  api.export(['Appointments','Notifications']);
  api.export([],'client');
  api.use(['userman','accounts-base','accounts-password','aldeed:simple-schema','aldeed:collection2','aldeed:autoform','mongo','underscore']);
  api.add_files([
  'client/js/collection.js'
  ,'client/js/autoform.js'
  ], 'client'); 
  api.add_files([
  'server/js/collections/collection.js'
  ,'server/js/posts.js'
  ,'server/js/security/publication.js'
  ], 'server');
  api.add_files([
  'common/js/collection.js'
  ]); 
});
