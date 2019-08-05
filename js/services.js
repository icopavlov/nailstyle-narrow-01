$( document ).ready( function() {
	
	let servicesSection = $( "#services" ), 
		servicesArray = $( ".services-array" ), 
		services = $( ".service" ), 
		servicesWrapper = $( "<div class= 'services-wrapper' />" ), 
		serviceInfoWrapper = $( "<div class= 'service-info-wrapper' />" ), 
		serviceInfo = null;
		
	servicesArray.append( serviceInfoWrapper.append( servicesArray.find( ".service-info" ) ) );
	servicesArray.append( servicesWrapper.append( servicesArray.find( ".service" ) ) );
	
	servicesSection.get( 0 ).style.setProperty( "--services-wrapper-height", servicesWrapper.outerHeight() + "px" );
	
	/* let servicesRelativeAnimationDelay = parseFloat( getComputedStyle( document.querySelector( "#services" ) ).getPropertyValue( "--services-relative-animation-delay" ) );
	servicesSection.get( 0 ).style.setProperty( "--services-overall-animation-duration", ( services.length - 1 ) * servicesRelativeAnimationDelay ); */
	
	setAnimationDelays( services, getComputedStyle( document.querySelector( "#services" ) ).getPropertyValue( "--services-relative-animation-delay" ) );
	
	servicesArray.on( "click", function( e ) {
		let target = $( e.target );
		
		if ( target.is( ".button.open-service" ) ) {
			if ( serviceInfo !== null ) {
				serviceInfo.removeClass( "current" );
			}
			
			goBackTo( servicesSection, 0 );
			
			let service = target.closest( ".service" ), 
				servicePos = servicesArray.find( ".service" ).index( service ); 
			serviceInfo = serviceInfoWrapper.children( ".service-info" ).eq( servicePos );
			
			serviceInfoWrapper.addClass( "open" );
			serviceInfo.addClass( "current" );
			servicesArray.addClass( "open" );
			
			servicesSection.get( 0 ).style.setProperty( "--service-info-height", serviceInfo.outerHeight() + "px" );
		} else if ( target.is( ".button.close-service" ) ) {
			let serviceInfo = target.closest( ".service-info" );
			servicesArray.removeClass( "open" );
			serviceInfo.removeClass( "current" );
			serviceInfoWrapper.removeClass( "open" );
		}
		
	} );
	
} );

function setAnimationDelays( elements, relativeDelayString ) {
	
	let delay = 0, 
		relativeDelay = parseFloat( relativeDelayString.substring( 0, relativeDelayString.length - 1 ) );
	
	elements.each( function() {
		
		let element = $( this );
		element.css( "animation-delay", delay + "s" );
		delay += relativeDelay;
		
	} );
	
}

function goBackTo( targetSection, shift ) {
	$( "html, body" ).animate( {
		scrollTop: targetSection.offset().top + shift
	}, 200 );
	
//	$( document ).scrollTop( targetSection.offset().top );
//	UIkit.scroll( $( document ) ).scrollTo( $( targetSection ) );
}




















