var AppMap = require("can/map/");

require("can/map/define/");
require("can/route/route");

module.exports = AppMap.extend({
	define: {
		xhrResponse: {
			get: function(last, set) {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "http://www.example.org/session");

				xhr.addEventListener("load", function() {
					set( this.responseText );
				});
				xhr.addEventListener("error", function() {
					console.log( "err", this, arguments );
				});

				xhr.send();
			}
		},
		gotResponse: {
			get: function(){
				return !!this.attr('xhrResponse');
			}
		}
	}
});
