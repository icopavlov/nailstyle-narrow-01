$( document ).ready( function() {
	
	$( ".button.open-nav" ).appendTo( "#main-nav" );
	$( ".button.close-nav" ).appendTo( "#main-nav .nav" );
	
//	$( "#slider .slide" ).append( $( "#slider .controls" ) );
	
	$( "#send-email" ).appendTo( "#contact-info" );
	$( ".contact-info-items" ).appendTo( "main" );
	
	
	let servicesArray = $( ".services-array" );
	/* buildRows( servicesArray );
	setRowPositions( servicesArray );
	appendWrapper( servicesArray ); */
	
	/* servicesArray.on( "click", function( e ) {
		let target = $( e.target );
		
		if ( target.is( ".button.open-service" ) ) {
			let row = target.closest( ".row" ), 
				wrapper = row.children( ".service-info-wrapper" ), 
				buttonPos = target.attr( "data-pos" ), 
				serviceInfo = wrapper.children().eq( buttonPos );
			serviceInfo.addClass( "current" );
			row.get( 0 ).style.setProperty( "--service-info-height", serviceInfo.outerHeight() + "px" );
		} else if ( target.is( ".button.close-service" ) ) {
			let serviceInfo = target.closest( ".service-info" );
			serviceInfo.removeClass( "current" );
		}
		
	} ); */
	
} );


function buildRows( parent ) {
	let elements = parent.children(), 
		rowStart = 0;
	
	while ( rowStart < elements.length ) {
		let currentRowPos = elements.eq( rowStart ).offset().top;
		let currentRow = elements.filter( function() {
			return $( this ).offset().top === currentRowPos;
		} );
		currentRow.wrapAll( "<div class= 'row' />" );
		
		let rowEndElement = currentRow.eq( currentRow.length - 1 );
		rowStart = elements.index( rowEndElement ) + 1;
	}
}

/* function setRowPositions( elements ) {
	elements = $( elements );
	for ( let i = 0; i < elements.length; i++ ) {
		let element = elements.eq( i ), 
			buttonOpen = element.find( ".button.open-service" );
		buttonOpen.attr( "data-pos", i );
	}
} */

function setRowPositions( parent ) {
	let rows = parent.find( ".row" );
	rows.each( function() {
		let elements = $( this ).children();
		for( let i = 0; i < elements.length; i++ ) {
			let element = elements.eq( i ), 
				buttonOpen = element.find( ".button.open-service" );
			buttonOpen.attr( "data-pos", i );
		}
	} );
}

function appendWrapper( parent ) {
	let rows = parent.find( ".row" );
	rows.each( function() {
		
		let row = $( this ), 
			serviceInfo = row.find( ".service-info" );
		row.append( $( "<div class= 'service-info-wrapper' />" ).append( serviceInfo ) );
		
	} );
	
}

/* function buildRows( parent ) {
	let elements = parent.children(), 
		currentRowElements = [ elements.eq( 0 ) ], 
		currentElementPos = $( currentRowElements[ 0 ] ).offset().top, 
		currentRowPos = currentElementPos;
		
//	alert( currentRowPos );
	
	for ( let i = 1; i <= elements.length; i++ ) {
		let currentElement = null;
			
		if ( i < elements.length ) {
			currentElement = elements.eq( i ); 
			currentElementPos = currentElement.offset().top;
		}
		
//		alert( currentElementPos );
		
		if ( i < elements.length && currentElementPos === currentRowPos ) {
			currentRowElements.push( currentElement );
			
//			alert( currentRowElements.length );
			
		} else {
			$( currentRowElements ).wrapAll( "<div class= 'row' />" ) ;
			currentRowElements = [ currentElement ];
			
//			alert( currentRowElements.length );
			
			currentRowPos = currentElementPos;
		}
		
	}
	
} */

















