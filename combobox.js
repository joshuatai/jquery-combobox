/* =========================================================
 * jquery-combobox.js
 * Repo: git@adc.github.trendmicro.com:joshua-tai/jquery-combobox.git
 * Demo: https://eternicode.github.io/bootstrap-datepicker/
 * Docs: https://bootstrap-datepicker.readthedocs.org/
 * =========================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

;(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else if (typeof exports === 'object') {
      factory(require('jquery'));
  } else {
      factory(jQuery);
  }
}(function ($, undefined) {

  'use strict';


  //Add customize codes at original filter function.
  EditableSelect.prototype.filter = function () {
    var hiddens = 0;
    var search  = this.$input.val().toLowerCase().trim();

    this.$list.find('li').addClass('es-visible').show();
    this.$list.find('li.no-matches').remove();//customize to remove <li> element at the begin of filter event.
    if (this.options.filter) {
      hiddens = this.$list.find('li').filter(function (i, li) { return $(li).text().toLowerCase().indexOf(search) < 0; }).hide().removeClass('es-visible').length;
      if (this.$list.find('li').length == hiddens) {
        //this.hide();
        this.onSearchNotFound();//customize to call onSearchNotFound function.
      }
    }
  };
  //Customize onSearchNotFound function
  EditableSelect.prototype.onSearchNotFound = function () {
    if(!this.$list.find('li').hasClass("no-matches")) {
      this.$list.append("<li class=\"no-matches\">No matches found.</li>");
    }
  };

  var combobox   = '<div class="combobox input-icon-group" data-role="combobox-wrapper"></div>';

  /* Utilities */


  // COMBOBOX CLASS DEFINITION
  // ===========================

  var Combobox = function (element, options) {
    this.options                   = options;
    this.$body                     = $(document.body);
    this.$element                  = $(element);
    this.$combobox                 = $(combobox).insertBefore(this.$element).append(this.$element).data('combobox', this);
    this.$close                    = $('<span data-toggle="close"></span>').addClass('icon icon-cancel').data('combobox', this).hide();

    this.$combobox.addClass(this.$element.attr('class').split(' ').filter(function (classname) {
      return classname !== 'form-control';
    }).join(' '));

    this._init();
  };

  Combobox.VERSION = '1.0.0';

  Combobox.DEFAULTS = {
    disabled: false,
    placeholder: 'Select...',
    items: []
  };

  Combobox.prototype =  {
    _init: function () {
      this.$element.editableSelect({
        effects: 'fade'
      });
      var $input = this.$input = this.$combobox.find('.es-input').addClass('form-control').attr('placeholder', this.options.placeholder);
      var $list  = this.$list = this.$combobox.find('.es-list').addClass('dropdown-menu');
      var $close = this.$close;

      this.$combobox.append($close);

      this.$combobox
        .on('show.editable-select', function (e) {
            $list.css("top", "auto");
            $list.find('li').addClass("es-visible").show();
        }).on('select.editable-select', function (e) {
            $close.show();
        });
    },
    /* Events Triggerer */
    _edit: function (date) {
      this.$element.trigger($.Event('edit'), [date]);
    },
    disable: function () {
      this.$element.attr('disabled', true);
    },
    destroy: function () {
      $(document).off('click', $.proxy(this._doUnEdit, this));
      this.$element.removeAttr('class data-role').addClass(this.orgClass);
      this.$element.insertBefore(this.$datepickerWrapper);
      this.$datepickerWrapper.add(this.$label, this.$datepickerContainer._datepicker('destroy')).remove();
      delete this.$element.data()['bs.datepicker'];
    }
  };

  // COMBOBOX PLUGIN DEFINITION
  // ============================
  var Plugin = function (option, param) {
    var retval = null;
    this.each(function () {
      var $this   = $(this);
      var data    = $this.data('combobox');
      var options = $.extend({}, Combobox.DEFAULTS, $this.data(), typeof option == 'object' && option);

      if (!data) $this.data('combobox', (data = new Combobox(this, options)));
      if (typeof option == 'string') retval = data[option].call(data, param);
    });
    if (!retval) {
      retval = this;
    }
    return retval;
  };

  $.fn.combobox             = Plugin;
  $.fn.combobox.Constructor = Combobox;


  // COMBOBOX NO CONFLICT
  // ======================
  var supper   = $.fn.combobox;

  $.fn.combobox.noConflict = function () {
    $.fn.combobox = supper;
    return this;
  }

  // COMBOBOX DATA-API
  // ===================
  $(document)
    .on('input keydown', '[data-toggle="combobox"]', function (e) {
      var $input = $(this);
      var org = $input.data('editableSelect').$select.data('combobox');

      org.$list.css("top", "auto");
      if($input.val() === "") {
        org.$close.hide();
      } else {
        org.$close.show();
      }
    })
    .on('click', '[data-role="combobox-wrapper"]', function (e) {
      var $this = $(this);
      var instance = $this.data('combobox');
      if (!instance.$list.is(":visible")) {
        instance.$input.trigger("focus");
      } else {
        e.preventDefault();
      }
    })
    .on('click', '[data-toggle="close"]', function (e) {
      var $this = $(this).hide();
      var instance = $this.data('combobox');
      instance.$list
        .hide()
        .find('li.no-matches').remove()
        .end()
        .find('li').addClass("es-visible")
        .show()
        .css("top", "auto");

      instance.$input.val('').trigger("focus");
    });
}));
