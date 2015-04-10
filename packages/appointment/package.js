Package.describe({
	summary: "Package for User Management.",
	version: '1.0.0'
});


Package.on_use(function (api, where) {
  api.export(['Workplace','Cases','Appointments','Workplaceform']);
  api.use(['accounts-base','accounts-password','aldeed:simple-schema','aldeed:collection2','mongo','underscore']);
  api.add_files([
  'client/js/collection.js'
  ], 'client'); 
  api.add_files([
  'server/js/collection.js'
  ,'server/js/posts.js'
  ,'server/js/publication.js'
  ], 'server');
  api.add_files([
  'common/js/collection.js'
  ]); 
});
