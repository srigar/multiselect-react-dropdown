# REACT-MULTI-SELECT-DROPDOWN(DD)  

## Description
A React component providing multi select functionality with various features like selection limit, CSS customization, checkbox, search option, disable preselected values, render normal array(not an object), keyboard navigation and grouping features.
![Multiselect](images/dd.png)
----
## Installation
```
npm install multiselect-react-dropdown
```
----
## Demo
[React-multi-select-dropdown](https://codesandbox.io/s/10xn41w767)

----
## 1. Basic Usage
```js
import { Multiselect } from 'multiselect-react-dropdown';

this.state = {
    options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2}]
};

<Multiselect
options={this.state.options} // Options to display in the dropdown
selectedvalues={this.state.selectedValue} // Preselected value to persist in dropdown
onSelect={this.onSelect} // Function will trigger on select event
onRemove={this.onRemove} // Function will trigger on remove event
displayValue="name" // Property name to display in the dropdown
/>

onSelect(optionsList, selectedItem) {
    ...
}

onRemove(optionList, removedItem) {
    ...
}
```
----

## 2. Props

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  |
| `options` | `array` | `[]` | Dropdown options
| `onSelect` | `function` | `func` | Callback function will invoked on select event
| `onRemove` | `function` | `func` | Callback function will invoked on remove event
| `selectedvalues` | `array` | `[]` | Preselected value to persist in dropdown
| `showCheckbox` | `bool` | `false` | To display checkbox option in the dropdown
| `selectionLimit` | `number` | `-1` | You can limit the number of items that can be selected in a dropdown
| `placeholder` | `string` | `Select` | Placeholder text
| `disablePreSelectedValues` | `bool` | `false` | Prevent to deselect the preselected values
| `isObject` | `bool` | `true` | Make it false to display array of string or number `Ex. ['Test1',1]`
| `displayValue` | `string` | `value` | Property name in the object to display in the dropdown. Refer `Basic Usage` section
| `emptyRecordMsg` | `string` | `No options available` | Message to display when no records found
| `groupBy` | `string` | `''` | Group the popup list items with the corresponding category by the property name in the object
| `closeIcon` | `string` | `circle` | Option to select close icon instead of default. Refer `Close Icon` section
| `style` | `object` | `{}` | CSS Customization for multiselect. Refer below object for css customization.

## 3. CSS Customization   

```css
{
  multiselectConatiner: { // To change css for multiselect (Width,height,etc..)
	....
  },
  searchBox: { // To change search box element look
	border: none;
	font-size: 10px;
	min-height: 50px;
  },
  inputField: { // To change input field position or margin
      margin: 5px;
  },
  chips: { // To change css chips(Selected options)
	background: red;
  },
  optionContainer: { // To change css for option container 
	border: 2px solid;
  }
  option: { // To change css for dropdown options
	color: blue;
  },
  groupHeading: { // To chanage heading style for grouping features
	....
  }
}
```
## 4. Close Icons
| Name  | Image  |
|:--------- | :---- |
| `circle` | ![Close Icon](images/circle.png) |
| `circle2` | ![Close Icon](images/circle2.png) |
| `cancel` | ![Close Icon](images/cancel.png) |
| `close` | ![Close Icon](images/close.png) |
## Licence
MIT
