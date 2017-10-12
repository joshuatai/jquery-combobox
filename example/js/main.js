;(function ($) {

  $('#combobox').combobox().add(
  $('#combobox-2').combobox({
    clearable: false
  }))
    .on('change.combobox', function (e, value) {
      console.log(value);
    })
    .on('show.combobox', function (e, lists) {
      console.log(lists);
    });
})(jQuery);


