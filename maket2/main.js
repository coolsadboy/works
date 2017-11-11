var page = 0;
var itemsCount = 9;

$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            renderProducts(data.slice(page, itemsCount));
            fillCarousel(data.slice(0,9));
            page ++;
        },
        error: function () {
            
        }
    });
});

$('.show-more-button .fa-plus-circle').click(showMoreClicked);

function showMoreClicked() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (data, status, xhr) {
            renderProducts(data.slice(page * itemsCount, (page + 1) *itemsCount));
            page ++;
        },
        error: function () {
            
        }
    });
}

function renderProducts(data) {
    // var parentElem = $('.product-gallery')[0];
    // var elem;
    // for (i = 0; i < data.length; i++) {
    //     elem = document.createElement('div');
    //     elem.className = 'product-item';
    //     elem.innerHTML = '<img src="' + data[i].url + '">';
    //     parentElem.append(elem);
    // }

    var parentElem = $('#product-gallery-container');
    var elem;
    for (i = 0; i < data.length; i++) {
        parentElem.append('<div class="product-item"><img src="' + data[i].url + '"></div>');
    }
}


function fillCarousel(data) {
    
    var parentElem = $('.carousel-inner');
    var elem;
    for (i = 0; i < data.length; i++) {
        parentElem.append(
        '<div class="carousel-item' + ((i === 0) ? ' active' : '') + '">' +
        `<img class="d-block w-100" src="` + data[i].url +`" alt="`+ data[i].title + `">
      </div>)`
        );
    }
}