;(function ($) {

  var combobox = $('#combobox').combobox({
    // clearable: false,
    // value: 'Syria'
  })
  .on('filter.combobox', function (e, values) {
    //console.log(values);
  })
  .on('change.combobox', function (e, value) {
    console.log(value) 
  })
  .on('show.combobox', function (e, lists) {
    console.log(lists)
  })
  // $(document).on('click', function (e) {
  //   combobox.combobox('setValue', 'tajikistan');
  // });
  
})(jQuery);


