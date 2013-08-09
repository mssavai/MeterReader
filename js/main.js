var app = {
	route: function() {
		var hash = window.location.hash;
		if (!hash) {
			$('body').html(new HomeView(this.store).render().el);
			return;
		}

	},
	findById:function() {
		self.store.findById(Number($('.search-key').val()), function(employee) {
			if(employee!=null){
				$('body').html(new EmployeeView(employee).render().el);
			}else{
				alert('meter number does not exist!\n\nPlease try again.');
			}
			});
	},
	registerEvents: function(){
		var self = this;
		// Check of browser supports touch events...
		if (document.documentElement.hasOwnProperty('ontouchstart')) {
			// ... if yes: register touch event listener to change the "selected" state of the item
			$('body').on('touchstart', 'a', function(event) {
				$(event.target).addClass('tappable-active');
			});
			$('body').on('touchend', 'a', function(event) {
				$(event.target).removeClass('tappable-active');
			});
		} else {
			// ... if not: register mouse events instead
			$('body').on('mousedown', 'a', function(event) {
				$(event.target).addClass('tappable-active');
			});
			$('body').on('mouseup', 'a', function(event) {
				$(event.target).removeClass('tappable-active');
			});
		}
		$(window).on('hashchange', $.proxy(this.route, this));
        $('body').on('click', '.verify-button', function() {
		self.store.findById(Number($('.search-key').val()), function(employee) {
				if(employee!=null){
					$('body').html(new EmployeeView(employee).render().el);
				}else{
					alert('meter number does not exist!\n\nPlease try again.');
				}
				});
			});	
        $('body').on('click', '.meter-reading', function() {
				$('body').html(new MeterReadingView().render().el);
			});	
        $('body').on('click', '.record-reading', function() {
			var reading=Number($('.search-key').val());
			if(reading===0){
				alert("Invalid reading\n\nPlease check and try again.");
			}else{
				$('body').html(new RecordReadingView(reading).render().el);			
			}
				
			});	
		},
	
	initialize: function() {
		var self = this;
		this.store = new MemoryStore(function() {
			self.route();
		});
	this.registerEvents();	
	}

};

app.initialize();