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
    style?: object,
    emptyRecordMsg?: string,
    onSelect?: (selectedList:any, selectedItem: any) => void,
    onRemove?: (selectedList:any, selectedItem: any) => void,
    onSearch?: (value:string) => void,
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
    required?: boolean
}
