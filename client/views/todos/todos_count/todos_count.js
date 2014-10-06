
/*****************************************************************************/
/* TodosCount: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodosCount.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.TodosCount.helpers({
	CompletedCount: function(){
		return Todos.find({is_done: true}).count();
	},
	TotalCount: function(){
		return Todos.find({}).count();
	}
});

/*****************************************************************************/
/* TodosCount: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosCount.created = function () {
};

Template.TodosCount.rendered = function () {
};

Template.TodosCount.destroyed = function () {
};


