(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel(window.owlSettings);
  
    owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.originalEvent.deltaY>0) {
        owl.trigger('next.owl');
      } else {
        owl.trigger('prev.owl');
      }
      e.preventDefault();
    });
  })();