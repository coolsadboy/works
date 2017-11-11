
    
      function slowScroll (id) {
        var offset = 80;
        $('html, body').animate ({
          scrollTop: $(id).offset ().top - offset
        }, 700);
        return false;
      }
    
      $(".nav li").on("click", function() {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
      });

      ymaps.ready(init);
      var myMap, 
          myPlacemark;

      function init(){ 
          myMap = new ymaps.Map("map", {
              center: [60.016684, 30.320509],
              zoom: 16
          }); 
          
          myPlacemark = new ymaps.Placemark([60.016684, 30.320509], {
              hintContent: 'Платформа',
              balloonContent: 'Лучшее заведение на Удельной'
          });
          
          myMap.geoObjects.add(myPlacemark);
      }