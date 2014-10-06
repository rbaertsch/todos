
/*****************************************************************************/
/* TodosIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.TodosIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.TodosIndex.helpers({
	items: function(){
		return Todos.find({},{sort: {createdAt: -1}});
	},
	isDoneClass: function(){
		return this.is_done ? 'done' : '';
	}
});

/*****************************************************************************/
/* TodosIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosIndex.created = function () {
};

Template.TodosIndex.rendered = function () {
};

Template.TodosIndex.destroyed = function () {
};


