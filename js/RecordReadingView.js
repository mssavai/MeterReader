var RecordReadingView = function(store) {
	this.el = $('<div/>');
	this.render = function() {
		this.el.html(RecordReadingView.template());
		return this;
	};
}
RecordReadingView.template = Handlebars.compile($("#record-reading-tpl").html());
