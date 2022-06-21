import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Story, Meta } from '@storybook/react';

import MultiSelect from "../src";
import { options, flatArray, selectedValues } from "./constants";
import { IMultiselectProps } from "../src/multiselect/interface";

const style = {
  chips: {
    background: "red"
  },
  searchBox: {
    border: "none",
    "border-bottom": "1px solid blue",
    "border-radius": "0px"
  },
  multiselectContainer: {
    color: "red"
  }
};

export default {
  title: "Multiselect Dropdown",
  component: MultiSelect,
  decorators: [withKnobs]
} as Meta;

const Template: Story<IMultiselectProps> = (args) => <MultiSelect {...args} />;

export const FlatArray = Template.bind({});
FlatArray.args = {
  options: flatArray,
  isObject: false
};

export const ArrrayOfObjects = Template.bind({});
ArrrayOfObjects.args = {
  options,
  displayValue: 'key'
};

export const SelectedValueDecorator = Template.bind({});
SelectedValueDecorator.args = {
  options: [{key: "Option 0 is extremely long and therefore should probably be shortened once selected as a value", cat: "Group 1"},...options],
  selectedValueDecorator: v => v.length > 15 ? `${v.substring(0,15)}...` : v,
  displayValue: 'key'
} as IMultiselectProps;

export const OptionValueDecorator = Template.bind({});
OptionValueDecorator.args = {
  options,
  optionValueDecorator: v => v.toUpperCase(),
  displayValue: 'key'
} as IMultiselectProps;


export const PreselectedValues = Template.bind({});
PreselectedValues.args = {
  options,
  displayValue: 'key',
  selectedValues: selectedValues
};

export const DisablePreselectedValues = Template.bind({});
DisablePreselectedValues.args = {
  options,
  displayValue: 'key',
  disablePreSelectedValues: true,
  selectedValues: selectedValues
};

export const ShowCheckbox = Template.bind({});
ShowCheckbox.args = {
  options,
  displayValue: 'key',
  showCheckbox: true
};

export const HideSelectedList = Template.bind({});
HideSelectedList.args = {
  options,
  displayValue: 'key',
  showCheckbox: true,
  hideSelectedList: true
};

export const Grouping = Template.bind({});
Grouping.args = {
  options,
  displayValue: 'key',
  showCheckbox: true,
  groupBy: "cat"
};

export const SelectionLimit = Template.bind({});
SelectionLimit.args = {
  options,
  displayValue: 'key',
  selectionLimit: 2
};

export const NormalSingleSelect = Template.bind({});
NormalSingleSelect.args = {
  options,
  displayValue: 'key',
  singleSelect: true
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  options,
  placeholder: "Custom Placeholder",
  displayValue: 'key',
};

export const CssCustomization = Template.bind({});
CssCustomization.args = {
  options,
  placeholder: "CSS Custom",
  displayValue: 'key',
  id: "css_custom",
  style: style
};

export const CustomCloseIcon = Template.bind({});
CustomCloseIcon.args = {
  options,
  displayValue: 'key',
  customCloseIcon: <>🍑</>,
  selectedValues
};
