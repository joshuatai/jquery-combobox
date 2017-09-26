;(function ($) {

  var combobox = $('[data-toggle=combobox]').combobox({
    
  }).on('filter.combobox', function (e, values) {
    console.log(values);
  })
  //combobox.combobox('enable');

})(jQuery);


