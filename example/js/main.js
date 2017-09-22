;(function ($) {

  $('[data-toggle=combobox]').combobox();








  /*
  $('[data-combobox=initialize]', container).each(function() {
    var $combobox =  $('.combobox');
    var input = $('.combobox').find(".es-input");
    var list = $('.combobox').find(".es-list");
    var list_item = $('.combobox').find(".es-list li");
    var close_btn = $('<span />').addClass('icon icon-cancel');

    input.addClass("form-control");
    list.addClass("dropdown-menu");
    input
    close_btn.appendTo($combobox);
    close_btn.hide();

    input.on('input keydown', function (e) {
        if(input.val() == "" || e.keyCode=='46') {
          $('.es-list').css("top", "auto");
          close_btn.hide();
        }
        else {
          $('.es-list').css("top", "auto");
          close_btn.show();
        }
    });
    //console.log($._data(input.data("editableSelect").$input, "events"))
    $combobox.on('click', function (event) {
      if (!list.is(":visible")) {
        input.trigger("focus");
      } else {
        event.preventDefault();
      }
      //if (!list.is(":visible"))
    });
    close_btn.on('click', function (e) {
        input.val("");
        $('.es-list').find('li.no-matches').remove();
        $('.es-list').find('li').addClass("es-visible");
        $('.es-list').find('li').show();
        close_btn.hide();
    });
  });*/

})(jQuery);


