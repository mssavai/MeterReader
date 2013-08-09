var HomeView = function(store) {
	this.el = $('<div/>');
	this.render = function() {
		this.el.html(HomeView.template());
		return this;
	};
}
HomeView.template = Handlebars.compile($("#home-tpl").html());
