//<![CDATA[
	///<summary>Creates an event handler for an object.</summary>
	///<param name="object">The object that will be modified.</param>
	///<param name="eventName">The name of the event.</param>
	///<param name="handler">The function that will handle the event.</param>
		function CreateEventHandler( object, eventName, handler )
		{
			if ( window.addEventListener ) {
				object.addEventListener( eventName, handler, false );
			} else {
				object.attachEvent( "on" + eventName, handler );
			}
		}
	
		///<summary>Changes article visibility.</summary>
		///<param name="articleId">The id of the article to be displayed.</param>
		function DisplayArticle( articleId )
		{
			var contentContainer = document.getElementById( "content" );
			if ( contentContainer != null ) {
				var count = contentContainer.childNodes.length;
				while ( --count >= 0 ) {
					if ( contentContainer.childNodes[count].className == "article" ) {
						contentContainer.childNodes[count].style.display = "none";
					}
				}
			}
	
			var navContainer = document.getElementById( "nav" );
			if ( navContainer != null ) {
				var count = navContainer.childNodes.length;
				while ( --count >= 0 ) {
					if ( navContainer.childNodes[count].nodeName == "A" ) {
						navContainer.childNodes[count].className = navContainer.childNodes[count].className.replace( /\bactiveLink\b/, '' );
					}
				}
			}
					var activeArticle = document.getElementById( "article-" + articleId );
			if ( activeArticle != null ) {
				activeArticle.style.display = "block";
			}
				var activeLink = document.getElementById( "link-" + articleId );
			if ( activeLink != null ) {
				activeLink.className = "activeLink";
			}
		}
	
		///<summary>Handles the open article event.</summary>
		///<param name="e">The arguments for the event being raised.</param>
		function OnOpenArticle( e )
		{
			DisplayArticle( ( ( e.target ) ? e.target : e.srcElement ).id.replace( /link-/, '' ) );
		}
		///<summary>Initializes the execution environment.</summary>
		///<param name="e">The arguments for the event being raised.</param>
		function OnWindowLoad( e )
		{
			DisplayArticle( "main" );
				var navContainer = document.getElementById( "nav" );
			if ( navContainer != null ) {
				var count = navContainer.childNodes.length;
				while ( --count >= 0 ) {
					if ( navContainer.childNodes[count].nodeName == "A" ) {
						CreateEventHandler( navContainer.childNodes[count], "click", OnOpenArticle );
					}
				}
			}
		}

// Initialize script on load
CreateEventHandler( window, "load", OnWindowLoad );
//]]>
