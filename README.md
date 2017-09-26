# jQuery Combo Box

jQuery Combo Box is developed base on a jQuery plugin ([jQuery Editable Select](https://www.npmjs.com/package/jquery-editable-select)), and adopted the Style Portal.

## Usage
### HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <link href="combobox.css" media="screen" rel="stylesheet">
  </head>
  <body>
    <select id="combobox" class="input-width-default form-control" data-toggle="combobox">
      <option>France</option>
      <option>Germany</option>
      <option>Syria</option>
      <option>Tahiti</option>
      <option>Taiwan</option>
      <option>Tajikistan</option>
    </select>
    <script src="combobox.js"></script>
  </body>
</html>
```

### JavaScript
```javascript
$('#combobox').combobox(options);
```

## Dependencies
* [jQuery Editable Select homepage and documentation](http://indrimuska.github.io/jquery-editable-select/)
* [Style Portal - Date Picker](httphttp://style-portal.tw.trendnet.org/#/styles/minimalism/1.7.0/65ce6af3-87b9-45ed-b1e7-56f1b1ad3745)


## API
### Properties
Name                | Type       | Default       | Description
:---                | :---       | :------------ | :----------
disabled            | Boolean    | false         | Manimulate whether a combobox component will be enabled or disabled initially.
placeholder         | String     | Select...     | Placeholder text for the filter input.


### Methods
Name                | Parameters | Return        | Description
:---                | :---       | :------------ | :----------
enable              | None       | None          | Enables the combobox.
disable             | None       | None          | Disables the combobox.
destroy             | None       | None          | Removes the combobox functionality completely. This will return the element back to its pre-init state.

### Events
Name                                 | Parameters                            | Return   | Description
:---                                 | :---                                  | :--------| :----------
select.combobox(event, value)        | Event object, value                   | None     | Triggered when an option is selected.
show.combobox(event, items)          | Event object, collection of values    | None     | Triggered when the options menu is shown.
## License
[MIT License (MIT)](http://opensource.org/licenses/MIT)
