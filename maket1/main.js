var page = 0;
var itemCount = 3;

$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            fillCarousel(data.slice(0,3));
            page ++;
        },
        error: function () {
            
        }
    });
});

function fillCarousel(data) {
    
    var parentElem = $('.carousel-inner');
    var elem;
    for (i = 0; i < data.length; i++) {
        parentElem.append('<div class="carousel-item' + ((i === 0) ? ' active' : '') + '">' +
        `<img class="d-block w-100" src="` + data[i].url +`" alt="`+ data[i].title + `">
      </div>`
        );
    }
}