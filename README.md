# FlexBox-PhotoGallery
A simple, responsive, photo gallery that uses flexbox and media queries to control reformatting of the layout. It also includes a simple jQuery overlay.

It should drop right into the desired parent container and format according to the container width. The media query breakpoint will need to be adjusted based on image-thumbnail size. And, it will work best with uniform size images. To remove/disable the jQuery overlay, simply remove the two <script> tags at the bottom of the HTML body and delete the overlay.js file.

--04/13/2017: Added jQuery overlay
--04/14/2017: Re-factored needlessly complex HTML and CSS to make DOM traversal more straight-forward and because simpler is                 always better
