/*************Create overlay for the flexbox photo gallery*********************/
//1: Flesh out the HTML for the overlay
/*  should look like this: <div class="overlay"><img><p></p></div>  */
//1.1: Define this in a way that's modular and usable in javascript/jQuery
var $overlayDiv = $("<div class='overlayDiv'></div>");
var $overlayImg = $("<img>");
var $overlayP = $("<p></p>");
//1.2  Assemble these components and insert them into the gallery
$overlayDiv.append($overlayImg);
$overlayDiv.append($overlayP);
$(".flex-gal").append($overlayDiv);

//2: Hide the overlay by default
$overlayDiv.click(function () {
    $overlayDiv.hide();
})

//3:Populate, style and show the overlay when an image is clicked
$(".flex-gal img").click(function () {
    //Style the overlay with jQuery so that if user isn't running javascript, they won't have to load all of this CSS
    $(".overlayDiv").css({
      'background': 'rgba(0,0,0,0.8)',
      'width': '100%',
      'height': '100%',
      'position': 'fixed',
    	'display': 'block',
      'top': '0',
      'left': '0',
      'display': 'none',
      'text-align': 'center',
    });
    $(".overlayDiv img").css({
      'margin-top': '10%',
      'border': '8px solid rgb(180, 180, 180)',
      'border-radius': '5px',
      'max-width': '90%',
    });
    $(".overlayDiv p").css({
      'color': 'rgb(172, 172, 172)',
    });
    //3.1: Set the overlay-img src to match the clicked img src attribute
    $overlayImg.attr('src', $(this).attr('src'));
    //3.2: Set the overlay-p text to match the clicked img alt attribute
    $overlayP.text($(this).attr('alt'));
    //3.3 Show the overlay
    $overlayDiv.show();
});
