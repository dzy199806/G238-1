

// wow

new WOW().init();

// carousel

$(document).ready(function() {

  var owl = $("#screenshots");

  owl.owlCarousel({
    autoPlay: false,
    pagination: false,
    stopOnHover: true,
  });

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })

});

// Testimonial

$(document).ready(function() {

  $("#review").owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,


      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});
