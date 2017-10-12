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
* [Style Portal - Combo Box](http://style-portal.tw.trendnet.org/#/styles/minimalism/1.7.0/65ce6af3-87b9-45ed-b1e7-56f1b1ad3745)


## API
### Properties
Name           | Type    | Default   | Description
:---           | :---    | :-------- | :----------
value          | String  | None      | Set default value initially.
clearable      | Boolean | true      | The value can be empty or not.
disabled       | Boolean | false     | Manimulate whether a combobox component will be enabled or disabled initially.
placeholder    | String  | Select... | Placeholder text for the filter input.


### Methods
Name           | Parameters     | Return        | Description
:---           | :------------- | :------------ | :----------
setValue       | Value (String) | None          | Set value after initialization
getValue       | None           | Value (String)| Get value after initialization
enable         | None           | None          | Enables the combobox after initialization.
disable        | None           | None          | Disables the combobox after initialization.
destroy        | None           | None          | Removes the combobox functionality completely. This will return the element back to its pre-init state.

### Events
Name                           | Parameters                                   | Description
:----------------------------- | :------------------------------------------- | :----------------------------------
change.combobox(event, value)  | Event (Object), value (String)               | Triggered when an option is changed.
show.combobox(event, items)    | Event (Object), Collection of values (Array) | Triggered when the options menu is shown.
## License
[MIT License (MIT)](http://opensource.org/licenses/MIT)
