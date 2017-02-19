(function( $ ) {
 
    var methods = {
        init : function(options) {

        },
        show : function( ) {    },// IS
        hide : function( ) {  },// GOOD
        update : function( options ) { 
			
		}// !!!
    };

    $.fn.pollution = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        }    
    };
}( window.jQuery || windows.$ ));
