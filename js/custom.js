/*	Responsive Aeon Grid v2.0
	Designed & Built by Fernando Monteiro, http://www.newaeonweb.com.br	
	Licensed under GPL license, http://www.gnu.org/licenses/gpl-3.0-standalone.html
	
*/

//Hide the url bar on smartphones
/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/
(function( win ){
  var doc = win.document;
  
  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ){
    
    //scroll to 1
    window.scrollTo( 0, 1 );
    var scrollTop = 1,
      getScrollTop = function(){
        return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
      },
    
      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function(){
        if( doc.body ){
          clearInterval( bodycheck );
          scrollTop = getScrollTop();
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        } 
      }, 15 );
    
    win.addEventListener( "load", function(){
      setTimeout(function(){
        //at load, if user hasn't scrolled more than 20 or so...
        if( getScrollTop() < 20 ){
          //reset to hide addr bar at onload
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        }
      }, 0);
    } );
  }
})( this );

    $(function () {
            $('.tip').hover(function(){
            var title = $(this).attr('title');
                          $(this).data('tipText', title).removeAttr('title');
                          $('<p class="tooltip"></p>')
                          .text(title)
                          .appendTo('body')
                          .fadeIn('slow');
            }, function() {
                         
                          $(this).attr('title', $(this).data('tipText'));
                          $('.tooltip').remove();
            }).mousemove(function(e) {
                          var mousex = e.pageX + -30; 
                          var mousey = e.pageY + -80; 
                          $('.tooltip')
                          .css({ top: mousey, left: mousex })
            });
    });


//Add your scripts here
//
//
//
//$(function() {
//    $.getJSON('english.json', function(data) {
//        var template = $('#language-template').html();
//        var info = Mustache.to_html(template, data);
//        $('#language').html(info);
//
//        var templateSlogan = $('#slogan-template').html();
//        var info2 = Mustache.to_html(templateSlogan, data);
//        $('#slogan').html(info2);
//    });
//});