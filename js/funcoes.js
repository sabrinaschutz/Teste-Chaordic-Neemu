
function json() {
    var qtd;
    var retorno = '';
    var slides = '';
    json.prototype.resgatarValores = function () {

        $.getJSON('js/challenge.json', function (data) {
            this.qtd = data.data.recommendation.length;

            for (i = 0; i < this.qtd; i++) {

                var oldPrice = '';
                if (data.data.recommendation[i].oldPrice !== null) {
                    oldPrice = "De <del>" + data.data.recommendation[i].oldPrice + "</del>";
                    /*slides += "<div class='slide'>" +
                     "<span class='text-oferta'>" + (data.data.recommendation[i].name) + "</span>" +
                     "<img src='" + data.data.recommendation[i].imageName + "'>" +
                     "<span class='text-oferta' id='price-oferta'>" + data.data.recommendation[i].price + "</span></div>";*/
                }
                retorno += " <a class='product-link' href='" + data.data.recommendation[i].detailUrl + "' target='_blank'>" +
                        "<img src='" + data.data.recommendation[i].imageName + "' alt='Imagem do produto' class='thumb-prod'>" +
                        "<h3 class='prod-title'>" + data.data.recommendation[i].name + "</h3>" +
                        "<h5 class='old-price'>" + oldPrice + "</h5>" +
                        "<h4 class='price'>" + data.data.recommendation[i].price + "</h4>" +
                        "<h5 class='payment-conditions'>" + data.data.recommendation[i].productInfo.paymentConditions + "</h5>" +
                        "</a>";
            }
            $('#catalog').html(retorno);
            //$('.slider1').html(slides);
        });
    };
}
var obj = new json();
obj.resgatarValores();

$(document).ready(function () {
    $('.slider1').bxSlider({
        slideWidth: 800,
        minSlides: 5,
        maxSlides: 5,
        slideMargin: 10
    });
});
