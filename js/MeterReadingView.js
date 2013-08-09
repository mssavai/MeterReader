var MeterReadingView = function(store) {
	this.el = $('<div/>');
	this.render = function() {
		this.el.html(MeterReadingView.template());
		return this;
	};
}
MeterReadingView.template = Handlebars.compile($("#meter-reading-tpl").html());
