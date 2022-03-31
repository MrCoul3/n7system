import { createElement } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var FlexContainer = function FlexContainer(props) {
  var styles = {
    padding: props.padding,
    width: props.width,
    height: props.height,
    display: "flex",
    gap: props.gap,
    justifyContent: props.jContent,
    alignItems: props.alignItems,
    flexDirection: props.fDirection
  };
  return createElement("div", {
    onClick: props.onClick,
    style: _extends({}, styles)
  }, props.children);
};

export { FlexContainer };
//# sourceMappingURL=n7-flexcontainer.esm.js.map
