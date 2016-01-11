COOKIE_SHEET = "shopify-cheat-sheet";

/*
function readCookie() {
  var list = $.cookie(COOKIE_SHEET) || "essentials#col1,liquid#col1,images#col1,filter2#col1,filters#col2,template2#col3,template#col4,helpers#col4";
  return list;
}
*/
/*

function setCookie(content) {
  $.cookie(COOKIE_SHEET, content);
}

function initSheet() {
  var list = readCookie();
  var els = list.split(','); // 'one,two,three' => ['one','two','three']
  // reorder div.blocks 
  jQuery.each(els, function(i,el){
   var ids = el.split('#');
   var block_id = "#"+ids[0];
   var col_id = "#"+ids[1];
   $(block_id).appendTo(col_id);         
  });    
}
*/

$(document).ready(function() {
/*   initSheet(); */
  
  $('.move').hide();
        
  $('.move').click(function(){
    return false;
  });
  
  
  $('.edit-mode').toggle(
    function(){
      $('dl,hr').slideUp(400);
      $('.move').show();
      $('.wiki').hide();
      $(this).text("turn off edit mode")
      $(this).addClass("activated");
      $('#footer-wrapper').fadeIn(2000);
      return false;
      
  },
  function(){
    $('dl,hr').slideDown(400);
    $('.move').hide();
    $('.wiki').show();
    $(this).text("Edit sheet");
    $(this).removeClass("activated");
    $('#footer-wrapper').hide();
    return false;
  }
  );
  
  $('dd').hide();
   $('dt').click(function() {
     $(this).next('dd').toggle();
     $(this).toggleClass('active');
   });
  
  $(function(){

    // $('a.move').mousedown(function(){
    //    $(this).parents().find('dl').slideUp(400);
    // });
    // $('a.move').mouseup(function(){
    //    $(this).parents().find('dl').slideDown(400);
    // });

      // $('a.move').hover( 
      //   function() {
      //     $(this).mousedown(function(){
      //        $(this).parents().find('dl').slideUp(400);
      //     });
      //     $(this).parents().find('dl').slideUp(400);
      //     $(this).parents().find('hr').hide(400);
      //     
      //   },
      //   function() {
      //     $(this).parents().find('dl').show();
      // 
      //   }
      //   );


      
  	$('#col1,#col2,#col3,#col4').sortable({
  		connectWith: '.col-3',
  		handle: '.move',
  		cursor: 'move',
  		placeholder: 'placeholder',
  		forcePlaceholderSize: true,
  		opacity: 0.4,
  		delay: 20,
  		start: function(event, ui) { 
  		 $('dl').hide();
       $('.col-3').addClass("indent")
  	  },
      
  		stop: function(event, ui){ 
  		  $('.col-3').removeClass("indent")
  		  var cols = ['#col1','#col2','#col3','#col4'];    		  
  		  var list = jQuery.map(cols, function(col, i){
  		    var els = $(col).sortable('toArray');
  		    var collist = jQuery.map(els, function(el, i){
  		      return el+col;
  		      $('dl').hide();
  		    });
  		    return collist;

  		  });
  		  setCookie(list);
		  }
  	})


  });
  
  $(function(){
    $('.move').click();
     return false;
  })
  
   });
   
    Cufon.replace('h1')('h2')('h3')('h4');