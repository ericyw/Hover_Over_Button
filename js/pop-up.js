var $el, $tempDiv, $tempButton, divHeight = 0;

$.fn.middleBoxButton = function( text, url ) {
    
    return this.hover( function( e ) {
        
        $el = $( this ).css( "border-color", "yellow" );
        
        divHeight = $el.height() + parseInt( $el.css( "padding-top" ) ) + parseInt( $el.css( "padding-bottom" ) );
        
        $tempDiv = $( "<div>", {
        
            class: "overlay rounded"
        });
        
        $tempButton = $( "<a>", {
            
            href: url,
            text: text,
            class: "widget-button rounded",
            css: {
                top: ( divHeight / 2 ) - 7 + "px"
            }
        }).appendTo( $tempDiv );
        
        $( $tempDiv ).appendTo( $el );
    
    }, function( e ) {
        
        $el = $( this ).css( "border-color", "#999" );
        
        $( ".overlay" ).fadeOut( "fast", function() {
            $( this ).remove();
        });
    });
};
$( function() {
    $( ".widget-one" ).middleBoxButton( "Read More", "#read" );
    $( ".widget-two" ).middleBoxButton( "Load More", "#load" );
    $( ".widget-three" ).middleBoxButton( "Continue", "#continue" );
    $( ".widget-four" ).middleBoxButton( "Show More", "#show" );
});