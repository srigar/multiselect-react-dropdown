import React from "react";

export interface IMultiselectProps {
    options: any,
    disablePreSelectedValues?: boolean,
    selectedValues?: any,
    isObject?: boolean,
    displayValue?: string,
    showCheckbox?: boolean,
    selectionLimit?: any,
    placeholder?: string,
    groupBy?: string,
    showGroupByCheckbox?: boolean,
    loading?: boolean,
    style?: object,
    emptyRecordMsg?: string,
    onSelect?: (selectedList:any, selectedItem: any) => void,
    onRemove?: (selectedList:any, selectedItem: any) => void,
    onSearch?: (value:string) => void,
    onKeyPressFn?: (event:any, value:string) => void,
    closeIcon?: string,
    singleSelect?: boolean,
    caseSensitiveSearch?: boolean,
    id?: string,
    closeOnSelect?: boolean,
    avoidHighlightFirstOption?: boolean,
    hidePlaceholder?: boolean,
    showArrow?: boolean,
    keepSearchTerm?: boolean,
    customCloseIcon?: React.ReactNode | string,
    customArrow?: any;
    disable?: boolean;
    className?: string;
    selectedValueDecorator?: (v:string, option: any) => React.ReactNode | string;
    optionValueDecorator?: (v:string, option: any) => React.ReactNode | string
    hideSelectedList?: boolean
}
