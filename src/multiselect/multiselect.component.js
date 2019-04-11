import React, { Component } from "react";
import ms from "./multiselect.component.css";
import "../assets/closeicon/css/fontello.css";

const closeIconTypes = {
  circle: 'icon_cancel_circled',
  circle2: 'icon_cancel_circled2',
  close: 'icon_window_close',
  cancel: 'icon_cancel'
};

export class Multiselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      options: props.options,
      filteredOptions: props.options,
      unfilteredOptions: props.options,
      selectedValues: Object.assign([], props.selectedValues),
      preSelectedValues: Object.assign([], props.selectedValues),
      toggleOptionsList: false,
      highlightOption: 0,
			showCheckbox: props.showCheckbox,
      groupedObject: [],
      closeIconType: closeIconTypes[props.closeIcon] || closeIconTypes['circle']
    };
		this.searchWrapper = React.createRef();
		this.searchBox = React.createRef();
    this.onChange = this.onChange.bind(this);
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
  }

  componentDidMount() {
		const { showCheckbox, groupBy } = this.props;
		const { options } = this.state;
    if (!showCheckbox) {
      this.removeSelectedValuesFromOptions(false);
		} 
		if (groupBy && showCheckbox) {
			this.groupByOptions(options);
		}
    this.searchWrapper.current.addEventListener("click", () => {
			this.searchBox.current.focus();
    });
  }

  componentWillUnmount() {
    this.searchWrapper.current.removeEventListener();
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
    this.setState(
      { inputValue: event.target.value },
      this.filterOptionsByInput
    );
  }

  filterOptionsByInput() {
    let { options, filteredOptions, inputValue } = this.state;
    const { isObject, displayValue } = this.props;
    if (isObject) {
      options = filteredOptions.filter(
        i => i[displayValue].indexOf(inputValue) > -1
      );
    } else {
      options = filteredOptions.filter(i => i.indexOf(inputValue) > -1);
    }
    this.groupByOptions(options);
    this.setState({ options });
  }

  onArrowKeyNavigation(e) {
    const {
      options,
      highlightOption,
      toggleOptionsList,
      inputValue,
      selectedValues
    } = this.state;
    if (e.keyCode === 8 && !inputValue && selectedValues.length) {
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
      this.onSelectItem(options[highlightOption]);
    }
    setTimeout(() => {
      const element = document.querySelector("ul.optionContainer .highlight");
      if (element) {
        element.scrollIntoView();
      }
    });
  }

  onRemoveSelectedItem(item) {
		let { selectedValues, showCheckbox, index = 0, isObject } = this.state;
		const { onRemove } = this.props;
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
  }

  onSelectItem(item) {
    const { selectedValues, showCheckbox } = this.state;
    const { selectionLimit, onSelect } = this.props;
    if (selectionLimit == selectedValues.length) {
      return;
    }

    if (this.isSelectedValue(item)) {
      this.onRemoveSelectedItem(item);
      return;
    }
		selectedValues.push(item);
		onSelect(selectedValues, item);
    this.setState({ selectedValues }, () => {
      if (!showCheckbox) {
				this.removeSelectedValuesFromOptions(true);
      }
    });
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
    const { groupBy, style, emptyRecordMsg } = this.props;
    const { options } = this.state;
    return (
      <ul className={`optionContainer`} style={style['optionContainer']}>
        {options.length === 0 && <span style={style['notFound']} className={`notFound ${ms.notFound}`}>{emptyRecordMsg}</span>}
        {!groupBy ? this.renderNormalOption() : this.renderGroupByOptions()}
      </ul>
    );
  }

  renderGroupByOptions() {
    const { isObject = false, displayValue, showCheckbox, style } = this.props;
    const { groupedObject } = this.state;
    return Object.keys(groupedObject).map(obj => {
			return (
				<React.Fragment>
					<li key={obj} className={ms.groupHeading} style={style['groupHeading']}>{obj}</li>
					{groupedObject[obj].map((option, i) => (
						<li
							key={`option${i}`}
							style={style['option']}
							className={`${ms.groupChildEle} ${this.fadeOutSelection(option) && ms.disableSelection} option`}
							onClick={() => this.onSelectItem(option)}
						>
							{showCheckbox && (
								<input
									type="checkbox"
									className={ms.checkbox}
									checked={this.isSelectedValue(option)}
								/>
							)}
							{isObject ? option[displayValue] : option.toString()}
						</li>
					))}
				</React.Fragment>
			)
		});
  }

  renderNormalOption() {
    const { isObject = false, displayValue, showCheckbox, style } = this.props;
    const { highlightOption } = this.state;
    return this.state.options.map((option, i) => (
      <li
				key={`option${i}`}
				style={style['option']}
        className={`${
          highlightOption === i ? `${ms.highlightOption} highlight` : ""
        } ${this.fadeOutSelection(option) && ms.disableSelection} option`}
        onClick={() => this.onSelectItem(option)}
      >
        {showCheckbox && (
          <input
            type="checkbox"
            className={`checkbox ${ms.checkbox}`}
            checked={this.isSelectedValue(option)}
          />
        )}
        {isObject ? option[displayValue] : option.toString()}
      </li>
    ));
  }

  renderSelectedList() {
    const { isObject = false, displayValue, style } = this.props;
    const { selectedValues, closeIconType } = this.state;
    return selectedValues.map((value, index) => (
      <span className={`chip ${ms.chip}`} key={index} style={style['chips']}>
        {!isObject ? value.toString() : value[displayValue]}
        <i
          className={`icon_cancel ${ms[closeIconType]} ${
            ms.closeIcon
          } ${this.isDisablePreSelectedValues(value) && ms.disableSelection}`}
          onClick={() => this.onRemoveSelectedItem(value)}
        />
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
    const { selectionLimit, showCheckbox } = this.props;
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
      highlightOption: 0
    });
  }

  renderMultiselectContainer() {
    const { inputValue, toggleOptionsList } = this.state;
    const { placeholder, style } = this.props;
    return (
      <div className={ms.multiSelectContainer} id="multiselectContainerReact" style={style['multiselectConatiner']}>
        <div className={ms.searchWarpper} ref={this.searchWrapper} style={style['searchBox']}>
          {this.renderSelectedList()}
          <input
						type="text"
						ref={this.searchBox}
						className="searchBox"
            onChange={this.onChange}
            value={inputValue}
            onFocus={this.toggelOptionList}
            onBlur={() => setTimeout(this.toggelOptionList, 100)}
            placeholder={placeholder}
            onKeyDown={this.onArrowKeyNavigation}
            style={style['inputField']}
          />
        </div>
        <div
          className={`optionListContainer ${ms.optionListContainer} ${
            toggleOptionsList ? ms.displayBlock : ms.displayNone
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
  closeIcon: 'circle2'
};