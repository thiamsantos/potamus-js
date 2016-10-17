# potamus-stylus
Scripts for [potamus](https://github.com/thiamsantos/potamus) components.

```$ npm install --save-dev potamus-js```

Until now, there the following components:
- button
- checkbox
- radio
- text-field


## Usage

Use some module loader as [webpack](https://webpack.github.io/) or [rollup](http://rollupjs.org/).

CommonJs:
```javascript
const potamus = require('potamus-js');
```
ES6 Module
```javascript
import potamus from 'potamus-js';
```
## Components
All components works just fine without javascript, but with some limitations, so is good include this scripts.
### Button
``` html
<button class="some-awesome-button-class-name">Button</button>
```
```javascript
potamus.button('some-awesome-button-class-name', 'name-for-ripple-effect-class');
```
### Checkbox
```html
<input class="some-awesome-checkbox-class-name" type="checkbox" id="some-name" name="some-name">
```
```javascript
potamus.checkbox('some-awesome-checkbox-class-name');
```
### Radio
```html
<input class="some-awesome-radio-name" type="radio" id="first" name="radio">
<input class="some-awesome-radio-name" type="radio" id="second" name="radio">
```
This component doesn't need javascript.
### Text-field
```html
<div class="some-awesome-text-field-name">
  <input class="some-awesome-text-field-name_sufix-input" type="text" id="some-name">
  <label class="some-awesome-text-field-name__sufix-label" for="some-name">Nome</label>
</div>
```
```javascript
potamus.textField('some-awesome-text-field-name', '__sufix-label', '_sufix-input');
```
## Contributing
- Fork it!
- Create a new branch for the new feature: `git checkout -b my-new-feature`
- Commit your changes: `git commit -m 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request with full remarks documenting your changes ;)

## License

potamus is released under the terms of the [MIT License](https://opensource.org/licenses/MIT)
