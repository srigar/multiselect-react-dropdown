'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*,:after,:before{box-sizing:border-box}.multiSelectContainer{position:relative;text-align:left;width:100%}.disable_ms{pointer-events:none;opacity:.5}.searchWrapper{border:1px solid #ccc;border-radius:4px;padding:5px;min-height:22px;position:relative}.multiSelectContainer input{border:none;margin-top:3px;background:transparent}.multiSelectContainer input:focus{outline:none}.chip{padding:4px 10px;background:#0096fb;margin-right:5px;margin-bottom:5px;border-radius:11px;display:inline-flex;align-items:center;font-size:13px;line-height:19px;color:#fff}.chip,.singleChip{white-space:nowrap}.singleChip{background:none;border-radius:none;color:inherit}.singleChip i{display:none}.closeIcon{height:13px;width:13px;float:right;margin-left:5px;cursor:pointer}.optionListContainer{position:absolute;width:100%;background:#fff;border-radius:4px;margin-top:1px;z-index:2}.multiSelectContainer ul{display:block;padding:0;margin:0;border:1px solid #ccc;border-radius:4px;max-height:250px;overflow-y:auto}.multiSelectContainer li{padding:10px}.multiSelectContainer li:hover{background:#0096fb;color:#fff;cursor:pointer}.checkbox{margin-right:10px}.disableSelection{pointer-events:none;opacity:.5}.highlightOption{background:#0096fb;color:#fff}.displayBlock{display:block}.displayNone{display:none}.notFound{padding:10px;display:block}.singleSelect{padding-right:20px}li.groupHeading{color:#908e8e;pointer-events:none;padding:5px 15px}li.groupChildEle{padding-left:30px}.icon_down_dir{position:absolute;right:5px;top:50%;transform:translateY(-50%)}.icon_down_dir:before{content:\"\\e803\"}.custom-close{display:flex}";
styleInject(css_248z);

var CloseCircle = "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2096%2096%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M48%2C0A48%2C48%2C0%2C1%2C0%2C96%2C48%2C48.0512%2C48.0512%2C0%2C0%2C0%2C48%2C0Zm0%2C84A36%2C36%2C0%2C1%2C1%2C84%2C48%2C36.0393%2C36.0393%2C0%2C0%2C1%2C48%2C84Z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M64.2422%2C31.7578a5.9979%2C5.9979%2C0%2C0%2C0-8.4844%2C0L48%2C39.5156l-7.7578-7.7578a5.9994%2C5.9994%2C0%2C0%2C0-8.4844%2C8.4844L39.5156%2C48l-7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C1%2C0%2C8.4844%2C8.4844L48%2C56.4844l7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C0%2C0%2C8.4844-8.4844L56.4844%2C48l7.7578-7.7578A5.9979%2C5.9979%2C0%2C0%2C0%2C64.2422%2C31.7578Z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var CloseCircleDark = "data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M256%2C33C132.3%2C33%2C32%2C133.3%2C32%2C257c0%2C123.7%2C100.3%2C224%2C224%2C224c123.7%2C0%2C224-100.3%2C224-224C480%2C133.3%2C379.7%2C33%2C256%2C33z%20%20%20%20M364.3%2C332.5c1.5%2C1.5%2C2.3%2C3.5%2C2.3%2C5.6c0%2C2.1-0.8%2C4.2-2.3%2C5.6l-21.6%2C21.7c-1.6%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3L256%2C289.8%20%20%20l-75.4%2C75.7c-1.5%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1%2C0.8-4.2%2C2.3-5.6l75.7-76%20%20%20l-75.9-75c-3.1-3.1-3.1-8.2%2C0-11.3l21.6-21.7c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l75.7%2C74.7l75.7-74.7%20%20%20c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l21.6%2C21.7c3.1%2C3.1%2C3.1%2C8.2%2C0%2C11.3l-75.9%2C75L364.3%2C332.5z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var CloseLine = "data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M443.6%2C387.1L312.4%2C255.4l131.5-130c5.4-5.4%2C5.4-14.2%2C0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4%20%20L256%2C197.8L124.9%2C68.3c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4L68%2C105.9c-5.4%2C5.4-5.4%2C14.2%2C0%2C19.6l131.5%2C130L68.4%2C387.1%20%20c-2.6%2C2.6-4.1%2C6.1-4.1%2C9.8c0%2C3.7%2C1.4%2C7.2%2C4.1%2C9.8l37.4%2C37.6c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1L256%2C313.1l130.7%2C131.1%20%20c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1l37.4-37.6c2.6-2.6%2C4.1-6.1%2C4.1-9.8C447.7%2C393.2%2C446.2%2C389.7%2C443.6%2C387.1z%22%2F%3E%3C%2Fsvg%3E";

var CloseSquare = "data:image/svg+xml,%3Csvg%20height%3D%22135.467mm%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%2013547%2013547%22%20width%3D%22135.467mm%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Ebene_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20class%3D%22fil0%22%20points%3D%220%2C0%2013547%2C0%2013547%2C13547%200%2C13547%20%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil1%22%20d%3D%22M714%2012832l12118%200%200%20-12117%20-12118%200%200%2012117zm4188%20-2990l1871%20-1871%201871%201871%201197%20-1197%20-1871%20-1871%201871%20-1871%20-1197%20-1197%20-1871%201871%20-1871%20-1871%20-1197%201197%201871%201871%20-1871%201871%201197%201197z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var closeIconTypes = {
  circle: CloseCircleDark,
  circle2: CloseCircle,
  close: CloseSquare,
  cancel: CloseLine
};
var Multiselect = /*#__PURE__*/function (_React$Component) {
  _inherits(Multiselect, _React$Component);

  function Multiselect(props) {
    var _this;

    _classCallCheck(this, Multiselect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Multiselect).call(this, props));
    _this.state = {
      inputValue: "",
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
    }; // @ts-ignore

    _this.optionTimeout = null; // @ts-ignore

    _this.searchWrapper = React__default.createRef(); // @ts-ignore

    _this.searchBox = React__default.createRef();
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.renderMultiselectContainer = _this.renderMultiselectContainer.bind(_assertThisInitialized(_this));
    _this.renderSelectedList = _this.renderSelectedList.bind(_assertThisInitialized(_this));
    _this.onRemoveSelectedItem = _this.onRemoveSelectedItem.bind(_assertThisInitialized(_this));
    _this.toggelOptionList = _this.toggelOptionList.bind(_assertThisInitialized(_this));
    _this.onArrowKeyNavigation = _this.onArrowKeyNavigation.bind(_assertThisInitialized(_this));
    _this.onSelectItem = _this.onSelectItem.bind(_assertThisInitialized(_this));
    _this.filterOptionsByInput = _this.filterOptionsByInput.bind(_assertThisInitialized(_this));
    _this.removeSelectedValuesFromOptions = _this.removeSelectedValuesFromOptions.bind(_assertThisInitialized(_this));
    _this.isSelectedValue = _this.isSelectedValue.bind(_assertThisInitialized(_this));
    _this.fadeOutSelection = _this.fadeOutSelection.bind(_assertThisInitialized(_this));
    _this.isDisablePreSelectedValues = _this.isDisablePreSelectedValues.bind(_assertThisInitialized(_this));
    _this.renderGroupByOptions = _this.renderGroupByOptions.bind(_assertThisInitialized(_this));
    _this.renderNormalOption = _this.renderNormalOption.bind(_assertThisInitialized(_this));
    _this.listenerCallback = _this.listenerCallback.bind(_assertThisInitialized(_this));
    _this.resetSelectedValues = _this.resetSelectedValues.bind(_assertThisInitialized(_this));
    _this.getSelectedItems = _this.getSelectedItems.bind(_assertThisInitialized(_this));
    _this.getSelectedItemsCount = _this.getSelectedItemsCount.bind(_assertThisInitialized(_this));
    _this.hideOnClickOutside = _this.hideOnClickOutside.bind(_assertThisInitialized(_this));
    _this.isVisible = _this.isVisible.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Multiselect, [{
    key: "initialSetValue",
    value: function initialSetValue() {
      var _this$props = this.props,
          showCheckbox = _this$props.showCheckbox,
          groupBy = _this$props.groupBy,
          singleSelect = _this$props.singleSelect;
      var options = this.state.options;

      if (!showCheckbox && !singleSelect) {
        this.removeSelectedValuesFromOptions(false);
      } // if (singleSelect) {
      //   this.hideOnClickOutside();
      // }


      if (groupBy && showCheckbox) {
        this.groupByOptions(options);
      }
    }
  }, {
    key: "resetSelectedValues",
    value: function resetSelectedValues() {
      var _this2 = this;

      var unfilteredOptions = this.state.unfilteredOptions;
      return new Promise(function (resolve) {
        _this2.setState({
          selectedValues: [],
          preSelectedValues: [],
          options: unfilteredOptions,
          filteredOptions: unfilteredOptions
        }, function () {
          // @ts-ignore
          resolve();

          _this2.initialSetValue();
        });
      });
    }
  }, {
    key: "getSelectedItems",
    value: function getSelectedItems() {
      return this.state.selectedValues;
    }
  }, {
    key: "getSelectedItemsCount",
    value: function getSelectedItemsCount() {
      return this.state.selectedValues.length;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialSetValue(); // @ts-ignore

      this.searchWrapper.current.addEventListener("click", this.listenerCallback);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          options = _this$props2.options,
          selectedValues = _this$props2.selectedValues;
      var prevOptions = prevProps.options,
          prevSelectedvalues = prevProps.selectedValues;

      if (JSON.stringify(prevOptions) !== JSON.stringify(options)) {
        this.setState({
          options: options,
          filteredOptions: options,
          unfilteredOptions: options
        }, this.initialSetValue);
      }

      if (JSON.stringify(prevSelectedvalues) !== JSON.stringify(selectedValues)) {
        this.setState({
          selectedValues: Object.assign([], selectedValues),
          preSelectedValues: Object.assign([], selectedValues)
        }, this.initialSetValue);
      }
    }
  }, {
    key: "listenerCallback",
    value: function listenerCallback() {
      // @ts-ignore
      this.searchBox.current.focus();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // @ts-ignore
      if (this.optionTimeout) {
        // @ts-ignore
        clearTimeout(this.optionTimeout);
      } // @ts-ignore


      this.searchWrapper.current.removeEventListener('click', this.listenerCallback);
    } // Skipcheck flag - value will be true when the func called from on deselect anything.

  }, {
    key: "removeSelectedValuesFromOptions",
    value: function removeSelectedValuesFromOptions(skipCheck) {
      var _this$props3 = this.props,
          isObject = _this$props3.isObject,
          displayValue = _this$props3.displayValue,
          groupBy = _this$props3.groupBy;
      var _this$state = this.state,
          _this$state$selectedV = _this$state.selectedValues,
          selectedValues = _this$state$selectedV === void 0 ? [] : _this$state$selectedV,
          unfilteredOptions = _this$state.unfilteredOptions,
          options = _this$state.options;

      if (!skipCheck && groupBy) {
        this.groupByOptions(options);
      }

      if (!selectedValues.length && !skipCheck) {
        return;
      }

      if (isObject) {
        var _optionList = unfilteredOptions.filter(function (item) {
          return selectedValues.findIndex(function (v) {
            return v[displayValue] === item[displayValue];
          }) === -1 ? true : false;
        });

        if (groupBy) {
          this.groupByOptions(_optionList);
        }

        this.setState({
          options: _optionList,
          filteredOptions: _optionList
        }, this.filterOptionsByInput);
        return;
      }

      var optionList = unfilteredOptions.filter(function (item) {
        return selectedValues.indexOf(item) === -1;
      });
      this.setState({
        options: optionList,
        filteredOptions: optionList
      }, this.filterOptionsByInput);
    }
  }, {
    key: "groupByOptions",
    value: function groupByOptions(options) {
      var groupBy = this.props.groupBy;
      var groupedObject = options.reduce(function (r, a) {
        var key = a[groupBy] || "Others";
        r[key] = r[key] || [];
        r[key].push(a);
        return r;
      }, Object.create({}));
      this.setState({
        groupedObject: groupedObject
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var onSearch = this.props.onSearch;
      this.setState({
        inputValue: event.target.value
      }, this.filterOptionsByInput);

      if (onSearch) {
        onSearch(event.target.value);
      }
    }
  }, {
    key: "filterOptionsByInput",
    value: function filterOptionsByInput() {
      var _this3 = this;

      var _this$state2 = this.state,
          options = _this$state2.options,
          filteredOptions = _this$state2.filteredOptions,
          inputValue = _this$state2.inputValue;
      var _this$props4 = this.props,
          isObject = _this$props4.isObject,
          displayValue = _this$props4.displayValue;

      if (isObject) {
        options = filteredOptions.filter(function (i) {
          return _this3.matchValues(i[displayValue], inputValue);
        });
      } else {
        options = filteredOptions.filter(function (i) {
          return _this3.matchValues(i, inputValue);
        });
      }

      this.groupByOptions(options);
      this.setState({
        options: options
      });
    }
  }, {
    key: "matchValues",
    value: function matchValues(value, search) {
      if (this.props.caseSensitiveSearch) {
        return value.indexOf(search) > -1;
      }

      if (value.toLowerCase) {
        return value.toLowerCase().indexOf(search.toLowerCase()) > -1;
      }

      return value.toString().indexOf(search) > -1;
    }
  }, {
    key: "onArrowKeyNavigation",
    value: function onArrowKeyNavigation(e) {
      var _this$state3 = this.state,
          options = _this$state3.options,
          highlightOption = _this$state3.highlightOption,
          toggleOptionsList = _this$state3.toggleOptionsList,
          inputValue = _this$state3.inputValue,
          selectedValues = _this$state3.selectedValues;
      var disablePreSelectedValues = this.props.disablePreSelectedValues;

      if (e.keyCode === 8 && !inputValue && !disablePreSelectedValues && selectedValues.length) {
        this.onRemoveSelectedItem(selectedValues.length - 1);
      }

      if (!options.length) {
        return;
      }

      if (e.keyCode === 38) {
        if (highlightOption > 0) {
          this.setState(function (previousState) {
            return {
              highlightOption: previousState.highlightOption - 1
            };
          });
        } else {
          this.setState({
            highlightOption: options.length - 1
          });
        }
      } else if (e.keyCode === 40) {
        if (highlightOption < options.length - 1) {
          this.setState(function (previousState) {
            return {
              highlightOption: previousState.highlightOption + 1
            };
          });
        } else {
          this.setState({
            highlightOption: 0
          });
        }
      } else if (e.key === "Enter" && options.length && toggleOptionsList) {
        if (highlightOption === -1) {
          return;
        }

        this.onSelectItem(options[highlightOption]);
      } // TODO: Instead of scrollIntoView need to find better soln for scroll the dropwdown container.
      // setTimeout(() => {
      //   const element = document.querySelector("ul.optionContainer .highlight");
      //   if (element) {
      //     element.scrollIntoView();
      //   }
      // });

    }
  }, {
    key: "onRemoveSelectedItem",
    value: function onRemoveSelectedItem(item) {
      var _this4 = this;

      var _this$state4 = this.state,
          selectedValues = _this$state4.selectedValues,
          _this$state4$index = _this$state4.index,
          index = _this$state4$index === void 0 ? 0 : _this$state4$index;
      var _this$props5 = this.props,
          onRemove = _this$props5.onRemove,
          showCheckbox = _this$props5.showCheckbox,
          displayValue = _this$props5.displayValue,
          isObject = _this$props5.isObject;

      if (isObject) {
        index = selectedValues.findIndex(function (i) {
          return i[displayValue] === item[displayValue];
        });
      } else {
        index = selectedValues.indexOf(item);
      }

      selectedValues.splice(index, 1);
      onRemove(selectedValues, item);
      this.setState({
        selectedValues: selectedValues
      }, function () {
        if (!showCheckbox) {
          _this4.removeSelectedValuesFromOptions(true);
        }
      });

      if (!this.props.closeOnSelect) {
        // @ts-ignore
        this.searchBox.current.focus();
      }
    }
  }, {
    key: "onSelectItem",
    value: function onSelectItem(item) {
      var _this5 = this;

      var selectedValues = this.state.selectedValues;
      var _this$props6 = this.props,
          selectionLimit = _this$props6.selectionLimit,
          onSelect = _this$props6.onSelect,
          singleSelect = _this$props6.singleSelect,
          showCheckbox = _this$props6.showCheckbox;

      if (!this.state.keepSearchTerm) {
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
      this.setState({
        selectedValues: selectedValues
      }, function () {
        if (!showCheckbox) {
          _this5.removeSelectedValuesFromOptions(true);
        } else {
          _this5.filterOptionsByInput();
        }
      });

      if (!this.props.closeOnSelect) {
        // @ts-ignore
        this.searchBox.current.focus();
      }
    }
  }, {
    key: "onSingleSelect",
    value: function onSingleSelect(item) {
      this.setState({
        selectedValues: [item],
        toggleOptionsList: false
      });
    }
  }, {
    key: "isSelectedValue",
    value: function isSelectedValue(item) {
      var _this$props7 = this.props,
          isObject = _this$props7.isObject,
          displayValue = _this$props7.displayValue;
      var selectedValues = this.state.selectedValues;

      if (isObject) {
        return selectedValues.filter(function (i) {
          return i[displayValue] === item[displayValue];
        }).length > 0;
      }

      return selectedValues.filter(function (i) {
        return i === item;
      }).length > 0;
    }
  }, {
    key: "renderOptionList",
    value: function renderOptionList() {
      var _this$props8 = this.props,
          groupBy = _this$props8.groupBy,
          style = _this$props8.style,
          emptyRecordMsg = _this$props8.emptyRecordMsg,
          loading = _this$props8.loading,
          _this$props8$loadingM = _this$props8.loadingMessage,
          loadingMessage = _this$props8$loadingM === void 0 ? 'loading...' : _this$props8$loadingM;
      var options = this.state.options;

      if (loading) {
        return React__default.createElement("ul", {
          className: "optionContainer",
          style: style['optionContainer']
        }, typeof loadingMessage === 'string' && React__default.createElement("span", {
          style: style['loadingMessage'],
          className: "notFound"
        }, loadingMessage), typeof loadingMessage !== 'string' && loadingMessage);
      }

      return React__default.createElement("ul", {
        className: "optionContainer",
        style: style['optionContainer']
      }, options.length === 0 && React__default.createElement("span", {
        style: style['notFound'],
        className: "notFound"
      }, emptyRecordMsg), !groupBy ? this.renderNormalOption() : this.renderGroupByOptions());
    }
  }, {
    key: "renderGroupByOptions",
    value: function renderGroupByOptions() {
      var _this6 = this;

      var _this$props9 = this.props,
          _this$props9$isObject = _this$props9.isObject,
          isObject = _this$props9$isObject === void 0 ? false : _this$props9$isObject,
          displayValue = _this$props9.displayValue,
          showCheckbox = _this$props9.showCheckbox,
          style = _this$props9.style,
          singleSelect = _this$props9.singleSelect;
      var groupedObject = this.state.groupedObject;
      return Object.keys(groupedObject).map(function (obj) {
        return React__default.createElement(React__default.Fragment, {
          key: obj
        }, React__default.createElement("li", {
          className: "groupHeading",
          style: style['groupHeading']
        }, obj), groupedObject[obj].map(function (option, i) {
          return React__default.createElement("li", {
            key: "option".concat(i),
            style: style['option'],
            className: "\n               groupChildEle ".concat(_this6.fadeOutSelection(option) && 'disableSelection', "\n                ").concat(_this6.isDisablePreSelectedValues(option) && 'disableSelection', " option\n              "),
            onClick: function onClick() {
              return _this6.onSelectItem(option);
            }
          }, showCheckbox && !singleSelect && React__default.createElement("input", {
            type: "checkbox",
            className: 'checkbox',
            readOnly: true,
            checked: _this6.isSelectedValue(option)
          }), isObject ? option[displayValue] : (option || '').toString());
        }));
      });
    }
  }, {
    key: "renderNormalOption",
    value: function renderNormalOption() {
      var _this7 = this;

      var _this$props10 = this.props,
          _this$props10$isObjec = _this$props10.isObject,
          isObject = _this$props10$isObjec === void 0 ? false : _this$props10$isObjec,
          displayValue = _this$props10.displayValue,
          showCheckbox = _this$props10.showCheckbox,
          style = _this$props10.style,
          singleSelect = _this$props10.singleSelect;
      var highlightOption = this.state.highlightOption;
      return this.state.options.map(function (option, i) {
        return React__default.createElement("li", {
          key: "option".concat(i),
          style: style['option'],
          className: "\n              ".concat(highlightOption === i ? "highlightOption highlight" : "", " \n              ").concat(_this7.fadeOutSelection(option) && 'disableSelection', " \n              ").concat(_this7.isDisablePreSelectedValues(option) && 'disableSelection', " option\n            "),
          onClick: function onClick() {
            return _this7.onSelectItem(option);
          }
        }, showCheckbox && !singleSelect && React__default.createElement("input", {
          type: "checkbox",
          readOnly: true,
          className: "checkbox",
          checked: _this7.isSelectedValue(option)
        }), isObject ? option[displayValue] : (option || '').toString());
      });
    }
  }, {
    key: "renderSelectedList",
    value: function renderSelectedList() {
      var _this8 = this;

      var _this$props11 = this.props,
          _this$props11$isObjec = _this$props11.isObject,
          isObject = _this$props11$isObjec === void 0 ? false : _this$props11$isObjec,
          displayValue = _this$props11.displayValue,
          style = _this$props11.style,
          singleSelect = _this$props11.singleSelect,
          customCloseIcon = _this$props11.customCloseIcon;
      var _this$state5 = this.state,
          selectedValues = _this$state5.selectedValues,
          closeIconType = _this$state5.closeIconType;
      return selectedValues.map(function (value, index) {
        return React__default.createElement("span", {
          className: "chip  ".concat(singleSelect && 'singleChip', " ").concat(_this8.isDisablePreSelectedValues(value) && 'disableSelection'),
          key: index,
          style: style['chips']
        }, !isObject ? (value || '').toString() : value[displayValue], !_this8.isDisablePreSelectedValues(value) && (!customCloseIcon ? React__default.createElement("img", {
          className: "icon_cancel closeIcon",
          src: closeIconType,
          onClick: function onClick() {
            return _this8.onRemoveSelectedItem(value);
          }
        }) : React__default.createElement("i", {
          className: "custom-close",
          onClick: function onClick() {
            return _this8.onRemoveSelectedItem(value);
          }
        }, customCloseIcon)));
      });
    }
  }, {
    key: "isDisablePreSelectedValues",
    value: function isDisablePreSelectedValues(value) {
      var _this$props12 = this.props,
          isObject = _this$props12.isObject,
          disablePreSelectedValues = _this$props12.disablePreSelectedValues,
          displayValue = _this$props12.displayValue;
      var preSelectedValues = this.state.preSelectedValues;

      if (!disablePreSelectedValues || !preSelectedValues.length) {
        return false;
      }

      if (isObject) {
        return preSelectedValues.filter(function (i) {
          return i[displayValue] === value[displayValue];
        }).length > 0;
      }

      return preSelectedValues.filter(function (i) {
        return i === value;
      }).length > 0;
    }
  }, {
    key: "fadeOutSelection",
    value: function fadeOutSelection(item) {
      var _this$props13 = this.props,
          selectionLimit = _this$props13.selectionLimit,
          showCheckbox = _this$props13.showCheckbox,
          singleSelect = _this$props13.singleSelect;

      if (singleSelect) {
        return;
      }

      var selectedValues = this.state.selectedValues;

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
  }, {
    key: "toggelOptionList",
    value: function toggelOptionList() {
      this.setState({
        toggleOptionsList: !this.state.toggleOptionsList,
        highlightOption: this.props.avoidHighlightFirstOption ? -1 : 0
      });
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      if (this.state.toggleOptionsList) {
        // @ts-ignore
        clearTimeout(this.optionTimeout);
      } else {
        this.toggelOptionList();
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      // @ts-ignore
      this.optionTimeout = setTimeout(this.toggelOptionList, 250);
    }
  }, {
    key: "isVisible",
    value: function isVisible(elem) {
      return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    }
  }, {
    key: "hideOnClickOutside",
    value: function hideOnClickOutside() {
      var _this9 = this;

      var element = document.getElementsByClassName('multiselect-container')[0];

      var outsideClickListener = function outsideClickListener(event) {
        if (element && !element.contains(event.target) && _this9.isVisible(element)) {
          _this9.toggelOptionList();
        }
      };

      document.addEventListener('click', outsideClickListener);
    }
  }, {
    key: "renderMultiselectContainer",
    value: function renderMultiselectContainer() {
      var _this$state6 = this.state,
          inputValue = _this$state6.inputValue,
          toggleOptionsList = _this$state6.toggleOptionsList,
          selectedValues = _this$state6.selectedValues;
      var _this$props14 = this.props,
          placeholder = _this$props14.placeholder,
          style = _this$props14.style,
          singleSelect = _this$props14.singleSelect,
          id = _this$props14.id,
          hidePlaceholder = _this$props14.hidePlaceholder,
          disable = _this$props14.disable,
          showArrow = _this$props14.showArrow;
      return React__default.createElement("div", {
        className: "multiselect-container multiSelectContainer ".concat(disable ? "disable_ms" : ''),
        id: id || 'multiselectContainerReact',
        style: style['multiselectContainer']
      }, React__default.createElement("div", {
        className: "search-wrapper searchWrapper ".concat(singleSelect ? 'singleSelect' : ''),
        ref: this.searchWrapper,
        style: style['searchBox'],
        onClick: singleSelect ? this.toggelOptionList : function () {}
      }, this.renderSelectedList(), React__default.createElement("input", {
        type: "text",
        ref: this.searchBox,
        className: "searchBox",
        id: "".concat(id || 'search', "_input"),
        onChange: this.onChange,
        value: inputValue,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        placeholder: singleSelect && selectedValues.length || hidePlaceholder && selectedValues.length ? '' : placeholder,
        onKeyDown: this.onArrowKeyNavigation,
        style: style['inputField'],
        autoComplete: "off",
        disabled: singleSelect || disable
      }), (singleSelect || showArrow) && React__default.createElement("i", {
        className: "icon_cancel icon_down_dir"
      })), React__default.createElement("div", {
        className: "optionListContainer ".concat(toggleOptionsList ? 'displayBlock' : 'displayNone')
      }, this.renderOptionList()));
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderMultiselectContainer();
    }
  }]);

  return Multiselect;
}(React__default.Component);
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
  onSelect: function onSelect() {},
  onRemove: function onRemove() {},
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

exports.default = Multiselect;
//# sourceMappingURL=multiselect-react-dropdown.cjs.development.js.map
