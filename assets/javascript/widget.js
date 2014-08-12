"use strict";

$(document).ready(function(){


/**
    $('.small-avatar').popover(
      {
        trigger: 'hover',
        placement: 'top',
        html: 'true',
        content: function(el){
            return $(el).find(".hover").html();
        }
    });
*/
    $(".js-moment-since").each(function(index){
		var time = moment(parseInt($(this).text())); 
		$(this).text(time.fromNow());
	});
});