function showComingSnackbar() {

    var comingSnackbar = $("#coming-snackbar")[0];

    var data = {
        message: 'Page Coming Soon!',
        timeout: 3000,
        actionHandler: function(event) {
            console.log("coming snackbar handler");
        },
        //The function to execute when the action is clicked.
        actionText: ' '
    };
    comingSnackbar.MaterialSnackbar.showSnackbar(data);

}


$(function() {

    var coming = $("a[href='#'], a[href='']");

    /*
    	    $("body")
    	    .append(
    	        $("<div/>")
    	        .attr("id", "coming-snackbar")
    	        .addClass("mdl-js-snackbar mdl-snackbar")
    	        .append(
    	            $("<div/>")
    	            .addClass("mdl-snackbar__text")
    	        )
    	        .append(
    	            $("<button/>")
    	            .addClass('mdl-snackbar__action')
    	        )
    	    );
    */

    coming.on('click', function(event) {
        event.preventDefault();
        /* Act on the event */

        alert("Page Coming Soon!");

        /* has bug with layout */
        // showComingSnackbar();

    });

});
