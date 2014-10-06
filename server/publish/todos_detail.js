/*****************************************************************************/
/* TodosDetail Publish Functions
/*****************************************************************************/

Meteor.publish('todos_detail', function (id) {
  // you can remove this if you return a cursor
  return Todos.find({_id:id});
});
