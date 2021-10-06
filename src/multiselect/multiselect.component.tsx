// @ts-nocheck
import React from "react";
import "./styles.css";
import CloseCircle from '../assets/svg/closeCircle.svg';
import CloseCircleDark from '../assets/svg/closeCircleDark.svg';
import CloseLine from '../assets/svg/closeLine.svg';
import CloseSquare from '../assets/svg/closeSquare.svg';
import DownArrow from '../assets/svg/downArrow.svg';
import { IMultiselectProps } from "./interface";

const closeIconTypes = {
  circle: CloseCircleDark,
  circle2: CloseCircle,
  close: CloseSquare,
  cancel: CloseLine
};

export class Multiselect extends React.Component<IMultiselectProps, any> {
  static defaultProps: { disableFilter: boolean; customFilter: (v: any, search: string, index: number, arr: Array<any>) => boolean; options: never[]; disablePreSelectedValues: boolean; selectedValues: never[]; isObject: boolean; displayValue: string; showCheckbox: boolean; selectionLimit: number; placeholder: string; groupBy: string; style: {}; emptyRecordMsg: string; onSelect: () => void; onRemove: () => void; closeIcon: string; singleSelect: boolean; caseSensitiveSearch: boolean; id: string; closeOnSelect: boolean; avoidHighlightFirstOption: boolean; hidePlaceholder: boolean; showArrow: boolean; keepSearchTerm: boolean; };
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      disableFilter: props.disableFilter,
      options: props.options,
      filteredOptions: props.options,
      unfilteredOptions: props.options,
      selectedValues: Object.assign([], props.selectedValues),
      preSelectedValues: Object.assign([], props.selectedValues),
      toggleOptionsList: false,
      highlightOption: props.avoidHighlightFirstOption ? -1 : 0,
			showCheckbox: props.showCheckbox,
      keepSearchTerm: props.keepSearchTerm,
      groupedObject: [],
      closeIconType: closeIconTypes[props.closeIcon] || closeIconTypes['circle']
    };
    // @ts-ignore
    this.optionTimeout = null;
    // @ts-ignore
		this.searchWrapper = React.createRef();
    // @ts-ignore
		this.searchBox = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.renderMultiselectContainer = this.renderMultiselectContainer.bind(this);
    this.renderSelectedList = this.renderSelectedList.bind(this);
    this.onRemoveSelectedItem = this.onRemoveSelectedItem.bind(this);
    this.toggelOptionList = this.toggelOptionList.bind(this);
    this.onArrowKeyNavigation = this.onArrowKeyNavigation.bind(this);
    this.onSelectItem = this.onSelectItem.bind(this);
    this.filterOptionsByInput = this.filterOptionsByInput.bind(this);
    this.removeSelectedValuesFromOptions = this.removeSelectedValuesFromOptions.bind(this);
    this.isSelectedValue = this.isSelectedValue.bind(this);
    this.fadeOutSelection = this.fadeOutSelection.bind(this);
    this.isDisablePreSelectedValues = this.isDisablePreSelectedValues.bind(this);
    this.renderGroupByOptions = this.renderGroupByOptions.bind(this);
    this.renderNormalOption = this.renderNormalOption.bind(this);
    this.listenerCallback = this.listenerCallback.bind(this);
    this.resetSelectedValues = this.resetSelectedValues.bind(this);
    this.getSelectedItems = this.getSelectedItems.bind(this);
    this.getSelectedItemsCount = this.getSelectedItemsCount.bind(this);
    this.hideOnClickOutside = this.hideOnClickOutside.bind(this);
    this.isVisible = this.isVisible.bind(this);
    this.customFilter = props?.customFilter?.bind(this);
  }

  initialSetValue() {
    const { showCheckbox, groupBy, singleSelect } = this.props;
		const { options } = this.state;
    if (!showCheckbox && !singleSelect) {
      this.removeSelectedValuesFromOptions(false);
		} 
    // if (singleSelect) {
    //   this.hideOnClickOutside();
    // }
		if (groupBy) {
			this.groupByOptions(options);
		}
  }

  resetSelectedValues() {
    const { unfilteredOptions } = this.state;
    return new Promise((resolve) => {
      this.setState({
        selectedValues: [],
        preSelectedValues: [],
        options: unfilteredOptions,
        filteredOptions: unfilteredOptions
      }, () => {
        // @ts-ignore
        resolve();
        this.initialSetValue();
      });
    });
  }

  getSelectedItems() {
    return this.state.selectedValues;
  }

  getSelectedItemsCount() {
    return this.state.selectedValues.length;
  }

  componentDidMount() {
		this.initialSetValue();
    // @ts-ignore
    this.searchWrapper.current.addEventListener("click", this.listenerCallback);
  }

  componentDidUpdate(prevProps) {
    const { options, selectedValues } = this.props;
    const { options: prevOptions, selectedValues: prevSelectedvalues } = prevProps;
    if (JSON.stringify(prevOptions) !== JSON.stringify(options)) {
      this.setState({ options, filteredOptions: options, unfilteredOptions: options }, this.initialSetValue);
    }
    if (JSON.stringify(prevSelectedvalues) !== JSON.stringify(selectedValues)) {
      this.setState({ selectedValues: Object.assign([], selectedValues), preSelectedValues: Object.assign([], selectedValues) }, this.initialSetValue);
    }
  }

  listenerCallback() {
    // @ts-ignore
    this.searchBox.current.focus();
  }

  componentWillUnmount() {
    // @ts-ignore
    if (this.optionTimeout) {
      // @ts-ignore
      clearTimeout(this.optionTimeout);
    }
    // @ts-ignore
    this.searchWrapper.current.removeEventListener('click', this.listenerCallback);
  }

  // Skipcheck flag - value will be true when the func called from on deselect anything.
  removeSelectedValuesFromOptions(skipCheck) {
    const { isObject, displayValue, groupBy } = this.props;
    const { selectedValues = [], unfilteredOptions, options } = this.state;
    if (!skipCheck && groupBy) {
      this.groupByOptions(options);
    }
    if (!selectedValues.length && !skipCheck) {
      return;
    }
    if (isObject) {
      let optionList = unfilteredOptions.filter(item => {
        return selectedValues.findIndex(
          v => v[displayValue] === item[displayValue]
        ) === -1
          ? true
          : false;
      });
      if (groupBy) {
        this.groupByOptions(optionList);
      }
      this.setState(
        { options: optionList, filteredOptions: optionList },
        this.filterOptionsByInput
      );
      return;
    }
    let optionList = unfilteredOptions.filter(
      item => selectedValues.indexOf(item) === -1
    );

    this.setState(
      { options: optionList, filteredOptions: optionList },
      this.filterOptionsByInput
    );
  }

  groupByOptions(options) {
    const { groupBy } = this.props;
    const groupedObject = options.reduce(function(r, a) {
      const key = a[groupBy] || "Others";
      r[key] = r[key] || [];
      r[key].push(a);
      return r;
    }, Object.create({}));
    
    this.setState({ groupedObject });
  }

  onChange(event) {
    const { onSearch } = this.props;
    this.setState(
      { inputValue: event.target.value },
      this.filterOptionsByInput
    );
    if (onSearch) {
      onSearch(event.target.value);
    }
  }

  filterOptionsByInput() {
    let { options, filteredOptions, inputValue, disableFilter, customFilter } = this.state;

    if (disableFilter) {
      this.groupByOptions(options);
      this.setState({ options });
      return
    }
    
    if (customFilter) {
      options = filteredOptions.filter((v, i, arr) => customFilter(v, inputValue, i, arr))
    } else {
      const { isObject, displayValue } = this.props;
      if (isObject) {
        options = filteredOptions.filter(i => this.matchValues(i[displayValue], inputValue))
      } else {
        options = filteredOptions.filter(i => this.matchValues(i, inputValue));
      }
    }

    this.groupByOptions(options);
    this.setState({ options });
  }

  matchValues(value, search) {
    if (this.props.caseSensitiveSearch) {
      return value.indexOf(search) > -1;
    }
    if (value.toLowerCase) {
      return value.toLowerCase().indexOf(search.toLowerCase()) > -1;
    }
    return value.toString().indexOf(search) > -1;
  }

  onArrowKeyNavigation(e) {
    const {
      options,
      highlightOption,
      toggleOptionsList,
      inputValue,
      selectedValues
    } = this.state;
    const { disablePreSelectedValues } = this.props;
    if (e.keyCode === 8 && !inputValue && !disablePreSelectedValues && selectedValues.length) {
      this.onRemoveSelectedItem(selectedValues.length - 1);
    }
    if (!options.length) {
      return;
    }
    if (e.keyCode === 38) {
      if (highlightOption > 0) {
        this.setState(previousState => ({
          highlightOption: previousState.highlightOption - 1
        }));
      } else {
        this.setState({ highlightOption: options.length - 1 });
      }
    } else if (e.keyCode === 40) {
      if (highlightOption < options.length - 1) {
        this.setState(previousState => ({
          highlightOption: previousState.highlightOption + 1
        }));
      } else {
        this.setState({ highlightOption: 0 });
      }
    } else if (e.key === "Enter" && options.length && toggleOptionsList) {
      if (highlightOption === -1) {
        return;
      }
      this.onSelectItem(options[highlightOption]);
    }
    // TODO: Instead of scrollIntoView need to find better soln for scroll the dropwdown container.
    // setTimeout(() => {
    //   const element = document.querySelector("ul.optionContainer .highlight");
    //   if (element) {
    //     element.scrollIntoView();
    //   }
    // });
  }

  onRemoveSelectedItem(item) {
		let { selectedValues, index = 0 } = this.state;
		const { onRemove, showCheckbox, displayValue, isObject } = this.props;
    if (isObject) {
      index = selectedValues.findIndex(
        i => i[displayValue] === item[displayValue]
      );
    } else {
      index = selectedValues.indexOf(item);
    }
		selectedValues.splice(index, 1);
		onRemove(selectedValues, item);
    this.setState({ selectedValues }, () => {
      if (!showCheckbox) {
				this.removeSelectedValuesFromOptions(true);
      }
    });
    if (!this.props.closeOnSelect) {
      // @ts-ignore
      this.searchBox.current.focus();
    }
  }

  onSelectItem(item) {
    const { selectedValues } = this.state;
    const { selectionLimit, onSelect, singleSelect, showCheckbox } = this.props;
    if (!this.state.keepSearchTerm){
      this.setState({
        inputValue: ''
      });
    }
    if (singleSelect) {
      this.onSingleSelect(item);
      onSelect([item], item);
      return;
    }
    if (this.isSelectedValue(item)) {
      this.onRemoveSelectedItem(item);
      return;
    }
    if (selectionLimit == selectedValues.length) {
      return;
    }
		selectedValues.push(item);
		onSelect(selectedValues, item);
    this.setState({ selectedValues }, () => {
      if (!showCheckbox) {
				this.removeSelectedValuesFromOptions(true);
      } else {
        this.filterOptionsByInput();
      }
    });
    if (!this.props.closeOnSelect) {
      // @ts-ignore
      this.searchBox.current.focus();
    }
  }

  onSingleSelect(item) {
    this.setState({ selectedValues: [item], toggleOptionsList: false });
  }

  isSelectedValue(item) {
    const { isObject, displayValue } = this.props;
    const { selectedValues } = this.state;
    if (isObject) {
      return (
        selectedValues.filter(i => i[displayValue] === item[displayValue])
          .length > 0
      );
    }
    return selectedValues.filter(i => i === item).length > 0;
  }

  renderOptionList() {
    const { groupBy, style, emptyRecordMsg, loading, loadingMessage = 'loading...' } = this.props;
    const { options } = this.state;
    if (loading) {
      return (
        <ul className={`optionContainer`} style={style['optionContainer']}>
          {typeof loadingMessage === 'string' && <span style={style['loadingMessage']} className={`notFound`}>{loadingMessage}</span>}
          {typeof loadingMessage !== 'string' && loadingMessage}
        </ul>
      );
    }
    return (
      <ul className={`optionContainer`} style={style['optionContainer']}>
        {options.length === 0 && <span style={style['notFound']} className={`notFound`}>{emptyRecordMsg}</span>}
        {!groupBy ? this.renderNormalOption() : this.renderGroupByOptions()}
      </ul>
    );
  }

  renderGroupByOptions() {
    const { isObject = false, displayValue, showCheckbox, style, singleSelect } = this.props;
    const { groupedObject } = this.state;
    return Object.keys(groupedObject).map(obj => {
			return (
				<React.Fragment key={obj}>
					<li className="groupHeading" style={style['groupHeading']}>{obj}</li>
					{groupedObject[obj].map((option, i) => (
						<li
							key={`option${i}`}
							style={style['option']}
              className={`
               groupChildEle ${this.fadeOutSelection(option) && 'disableSelection'}
                ${this.isDisablePreSelectedValues(option) && 'disableSelection'} option
              `}
							onClick={() => this.onSelectItem(option)}
						>
							{showCheckbox && !singleSelect && (
                  <input
                    type="checkbox"
                    className={'checkbox'}
                    readOnly
                    checked={this.isSelectedValue(option)}
                  />
							)}
							{isObject ? option[displayValue] : (option || '').toString()}
						</li>
					))}
				</React.Fragment>
			)
		});
  }

  renderNormalOption() {
    const { isObject = false, displayValue, showCheckbox, style, singleSelect } = this.props;
    const { highlightOption } = this.state;
    return this.state.options.map((option, i) => (
          <li
            key={`option${i}`}
            style={style['option']}
            className={`
              ${highlightOption === i ? `highlightOption highlight` : ""} 
              ${this.fadeOutSelection(option) && 'disableSelection'} 
              ${this.isDisablePreSelectedValues(option) && 'disableSelection'} option
            `}
            onClick={() => this.onSelectItem(option)}
          >
            {showCheckbox && !singleSelect && (
              <input
                type="checkbox"
                readOnly
                className={`checkbox`}
                checked={this.isSelectedValue(option)}
              />
            )}
            {isObject ? option[displayValue] : (option || '').toString()}
          </li>
    ));
  }

  renderSelectedList() {
    const { isObject = false, displayValue, style, singleSelect, customCloseIcon } = this.props;
    const { selectedValues, closeIconType } = this.state;
    return selectedValues.map((value, index) => (
      <span className={`chip  ${singleSelect && 'singleChip'} ${this.isDisablePreSelectedValues(value) && 'disableSelection'}`} key={index} style={style['chips']}>
        {!isObject ? (value || '').toString() : value[displayValue]}
        {!this.isDisablePreSelectedValues(value) && (!customCloseIcon ? <img
          className="icon_cancel closeIcon"
          src={closeIconType}
          onClick={() => this.onRemoveSelectedItem(value)}
        /> : <i className="custom-close" onClick={() => this.onRemoveSelectedItem(value)}>{customCloseIcon}</i>)}
      </span>
    ));
  }

  isDisablePreSelectedValues(value) {
    const { isObject, disablePreSelectedValues, displayValue } = this.props;
    const { preSelectedValues } = this.state;
    if (!disablePreSelectedValues || !preSelectedValues.length) {
      return false;
    }
    if (isObject) {
      return (
        preSelectedValues.filter(i => i[displayValue] === value[displayValue])
          .length > 0
      );
    }
    return preSelectedValues.filter(i => i === value).length > 0;
  }

  fadeOutSelection(item) {
    const { selectionLimit, showCheckbox, singleSelect } = this.props;
    if (singleSelect) {
      return;
    }
    const { selectedValues } = this.state;
    if (selectionLimit == -1) {
      return false;
    }
    if (selectionLimit != selectedValues.length) {
      return false;
    }
    if (selectionLimit == selectedValues.length) {
      if (!showCheckbox) {
        return true;
      } else {
        if (this.isSelectedValue(item)) {
          return false;
        }
        return true;
      }
    }
  }

  toggelOptionList() {
    this.setState({
      toggleOptionsList: !this.state.toggleOptionsList,
      highlightOption: this.props.avoidHighlightFirstOption ? -1 : 0
    });
  }

  onFocus(){
    if (this.state.toggleOptionsList) {
      // @ts-ignore
      clearTimeout(this.optionTimeout);
    } else {
      this.toggelOptionList();
    }
  }

  onBlur(){
    // @ts-ignore
    this.optionTimeout = setTimeout(this.toggelOptionList, 250);
  }

  isVisible(elem) {
    return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length )
  }

  hideOnClickOutside() {
    const element = document.getElementsByClassName('multiselect-container')[0];
    const outsideClickListener = event => {
        if (element && !element.contains(event.target) && this.isVisible(element)) {
          this.toggelOptionList();
        }
    }
    document.addEventListener('click', outsideClickListener)
  }

  renderMultiselectContainer() {
    const { inputValue, toggleOptionsList, selectedValues } = this.state;
    const { placeholder, style, singleSelect, id, hidePlaceholder, disable, showArrow} = this.props;
    return (
      <div className={`multiselect-container multiSelectContainer ${disable ? `disable_ms` : ''}`} id={id || 'multiselectContainerReact'} style={style['multiselectContainer']}>
        <div className={`search-wrapper searchWrapper ${singleSelect ? 'singleSelect' : ''}`} 
          ref={this.searchWrapper} style={style['searchBox']} 
          onClick={singleSelect ? this.toggelOptionList : () => {}}
        >
          {this.renderSelectedList()}
          <input
						type="text"
						ref={this.searchBox}
            className="searchBox"
            id={`${id || 'search'}_input`}
            onChange={this.onChange}
            value={inputValue}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            placeholder={((singleSelect && selectedValues.length) || (hidePlaceholder && selectedValues.length)) ? '' : placeholder}
            onKeyDown={this.onArrowKeyNavigation}
            style={style['inputField']}
            autoComplete="off"
            disabled={singleSelect || disable}
          />
          {(singleSelect || showArrow) && <img
            src={DownArrow}
            className={`icon_cancel icon_down_dir`}
          />}
        </div>
        <div
          className={`optionListContainer ${
            toggleOptionsList ? 'displayBlock' : 'displayNone'
          }`}
        >
          {this.renderOptionList()}
        </div>
      </div>
    );
  }

  render() {
    return this.renderMultiselectContainer();
  }
}

Multiselect.defaultProps = {
  options: [],
  disablePreSelectedValues: false,
  selectedValues: [],
  isObject: true,
  displayValue: "model",
  showCheckbox: false,
  selectionLimit: -1,
  placeholder: "Select",
	groupBy: "",
	style: {},
	emptyRecordMsg: "No Options Available",
	onSelect: () => {},
  onRemove: () => {},
  closeIcon: 'circle2',
  singleSelect: false,
  caseSensitiveSearch: false,
  id: '',
  closeOnSelect: true,
  avoidHighlightFirstOption: false,
  hidePlaceholder: false,
  showArrow: false,
  keepSearchTerm: false,
  customCloseIcon: ''
};
