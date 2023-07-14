import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _createClass from "babel-runtime/helpers/createClass";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import easingTypes from "tween-functions";
import { Tween as Timeline } from "rc-tween-one";
import ticker from "rc-tween-one/es/ticker";

import EventListener from "./EventDispatcher";
import {
  noop,
  dataToArray,
  objectEqual,
  currentScrollTop,
  windowHeight,
} from "./util";

let tickerId = 0;

function playScaleToArray(playScale) {
  if (Array.isArray(playScale)) {
    if (playScale.length === 2) {
      return playScale;
    }
    return [playScale[0] || 0, playScale[1] || 1];
  } else if (playScale) {
    return [playScale, 1];
  }
  return [0, 1];
}

let ScrollParallax = (function (_React$Component) {
  _inherits(ScrollParallax, _React$Component);

  _createClass(ScrollParallax, null, [
    {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, _ref) {
        let prevProps = _ref.prevProps,
          $self = _ref.$self;

        let nextState = {
          prevProps: props,
        };
        if (prevProps && props !== prevProps) {
          let equal = objectEqual(prevProps.animation, props.animation);
          if (!equal) {
            $self.setDefaultData(props.animation || {});
            $self.timeline.resetAnimData();
            $self.timeline.setDefaultData($self.defaultTweenData);
          }
        }
        return nextState; // eslint-disable-line
      },
    },
  ]);

  function ScrollParallax(props) {
    _classCallCheck(this, ScrollParallax);

    let _this = _possibleConstructorReturn(
      this,
      (ScrollParallax.__proto__ || Object.getPrototypeOf(ScrollParallax)).call(
        this,
        props
      )
    );

    _this.setDefaultData = function (_vars) {
      let vars = dataToArray(_vars);
      let varsForIn = function varsForIn(item, i) {
        let playScale = playScaleToArray(item.playScale).map(function (data) {
          return data * _this.clientHeight;
        });
        let aItem = _extends({}, item);
        delete aItem.playScale;
        let cItem = _extends({}, item);
        delete cItem.playScale;
        cItem.delay = playScale[0];
        aItem.delay = playScale[0];
        cItem.duration = playScale[1] - playScale[0];
        aItem.duration = playScale[1] - playScale[0];
        cItem.onStart = null;
        cItem.onUpdate = null;
        cItem.onComplete = null;
        cItem.onRepeat = null;
        aItem.onStart = aItem.onStart || noop;
        aItem.onComplete = aItem.onComplete || noop;
        aItem.onUpdate = aItem.onUpdate || noop;
        aItem.onStartBack = aItem.onStartBack || noop;
        aItem.onCompleteBack = aItem.onCompleteBack || noop;
        _this.defaultTweenData[i] = cItem;
        _this.defaultData[i] = aItem;
      };
      vars.forEach(varsForIn);
    };

    _this.resizeEventListener = function () {
      if (
        _this.defaultData[_this.defaultData.length - 1] &&
        _this.defaultData[_this.defaultData.length - 1].onCompleteBool &&
        !_this.props.always
      ) {
        return;
      }
      _this.scrollTop = currentScrollTop();
      _this.target =
        _this.props.targetId && document.getElementById(_this.props.targetId);
      _this.clientHeight = _this.target
        ? _this.target.clientHeight
        : windowHeight();
      _this.setDefaultData(_this.props.animation || {});
      if (_this.timeline) {
        _this.timeline.resetDefaultStyle();
      }
      _this.timeline = new Timeline(_this.dom, _this.defaultTweenData);
      _this.timeline.init();
      _this.scrollEventListener();
    };
    let theTimeout = null;
    let startTime = Date.parse(new Date);
    let counter = 30;
    let diff = 0;
    let positive = true;
    _this.scrollEventListener = function () {
      let handler = () => {
        let scrollTop = _this.target
          ? _this.target.scrollTop
          : currentScrollTop();
        _this.clientHeight = _this.target
          ? _this.target.clientHeight
          : windowHeight();
        let dom = _this.props.location
          ? document.getElementById(_this.props.location)
          : _this.dom;
        if (!dom) {
          throw new Error('"location" is null');
        }
        let targetTop = _this.target
          ? _this.target.getBoundingClientRect().top
          : 0;
        let offsetTop = dom.getBoundingClientRect().top + scrollTop - targetTop;
        let elementShowHeight = scrollTop - offsetTop + _this.clientHeight;
        let currentShow = _this.scrollTop - offsetTop + _this.clientHeight;
        // if(Boolean(elementShowHeight - diff) === positive){
        // } else {
        //   if(counter){
        //     counter = counter - 1;
        //   }else{
        //     positive = !positive
        //   }
        // }
        // if(positive){
        //   elementShowHeight = diff + 3
        // }else{
        //   elementShowHeight = diff - 3
        // }
        // diff = elementShowHeight;  

        _this.defaultData.forEach(function (item, i) {
          let duration = _this.defaultData
            .map(function (c, ii) {
              return (ii < i && c.delay + c.duration) || 0;
            })
            .reduce(function (a, b) {
              return a + b;
            });
          let noUpdate = void 0;
          console.log(`props`,props.animation.x);
          console.log(`elementShowHeight`,elementShowHeight)
          console.log(`item`,item)
          if (elementShowHeight <= item.delay + duration) {
            if (!item.onCompleteBackBool && item.onStartBool) {
              item.onCompleteBackBool = true;
              noUpdate = true;
              item.onCompleteBack();
            }
          } else {
            item.onCompleteBackBool = false;
          }
          if (elementShowHeight >= item.delay + duration) {
            if (!item.onStartBool) {
              item.onStartBool = true;
              noUpdate = true;
              item.onStart();
            }
          } else {
            item.onStartBool = false;
          }

          if (elementShowHeight <= item.delay + item.duration + duration) {
            if (!item.onStartBackBool && item.onCompleteBool) {
              item.onStartBackBool = true;
              noUpdate = true;
              item.onStartBack();
            }
          } else {
            item.onStartBackBool = false;
          }

          if (elementShowHeight >= item.delay + item.duration + duration) {
            if (!item.onCompleteBool) {
              item.onCompleteBool = true;
              noUpdate = true;
              item.onComplete();
            }
          } else {
            item.onCompleteBool = false;
          }
          if (
            elementShowHeight >= item.delay + duration &&
            elementShowHeight <= item.delay + item.duration + duration &&
            !noUpdate
          ) {
            item.onUpdate(
              elementShowHeight / (item.delay + item.duration + duration)
            );
          }
        });
        ticker.clear(_this.tickerId);
        _this.tickerId = "scrollParallax" + Date.now() + "-" + tickerId;
        tickerId++;
        if (tickerId >= Number.MAX_VALUE) {
          tickerId = 0;
        }
        let startFrame = ticker.frame;
        ticker.wake(_this.tickerId, function () {
          let moment = (ticker.frame - startFrame) * ticker.perFrame;
          let ratio = easingTypes.easeOutQuad(moment, 0.08, 1, 300);
          _this.timeline.frame(
            currentShow + ratio * (elementShowHeight - currentShow)
          );
          if (moment >= 300) {
            ticker.clear(_this.tickerId);
          }
        });

        _this.scrollTop = scrollTop;
        // 如果不一直靠滚动来执行动画，always=false而且动画全执行完了，，删除scrollEvent;
        if (
          _this.defaultData[_this.defaultData.length - 1].onCompleteBool &&
          _this.eventType &&
          !_this.props.always
        ) {
          EventListener.removeEventListener(
            _this.eventType,
            _this.scrollEventListener,
            _this.target
          );
        }
      };
      
      // if(theTimeout !== null){
      //   clearTimeout(theTimeout)
      // };
      // let curTime = Date.parse(new Date); 
      // if(curTime - startTime > 40) { 
      //     startTime = curTime;
      //     handler();
      //     return
      // } else { 
      //     theTimeout = setTimeout(()=>{
      //       handler();
      //     }, 10);
      // }


      // if(theTimeout !== null){
      //   clearTimeout(theTimeout);
      // };
      // theTimeout = setTimeout(()=>{
      //   handler();
      // }, 3);
      handler();
     
    };

    _this.scrollTop = 0;
    _this.defaultTweenData = [];
    _this.defaultData = [];
    _this.state = {
      $self: _this,
    };
    return _this;
  }

  _createClass(ScrollParallax, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.dom = ReactDom.findDOMNode(this);
        let date = Date.now();
        let length = EventListener._listeners.scroll
          ? EventListener._listeners.scroll.length
          : 0;
        this.eventType = "scroll.scrollEvent" + date + length;
        this.eventResize = "resize.resizeEvent" + date + length;
        this.resizeEventListener();
        EventListener.addEventListener(
          this.eventResize,
          this.resizeEventListener,
          this.target
        );
        // 预注册;
        this.timeline.frame(0);

        this.scrollEventListener();
        EventListener.addEventListener(
          this.eventType,
          this.scrollEventListener,
          this.target
        );
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        EventListener.removeEventListener(
          this.eventType,
          this.scrollEventListener,
          this.target
        );
        EventListener.removeEventListener(
          this.eventResize,
          this.resizeEventListener,
          this.target
        );
      },
    },
    {
      key: "render",
      value: function render() {
        let _props = this.props,
          animation = _props.animation,
          always = _props.always,
          component = _props.component,
          location = _props.location,
          targetId = _props.targetId,
          componentProps = _props.componentProps,
          props = _objectWithoutProperties(_props, [
            "animation",
            "always",
            "component",
            "location",
            "targetId",
            "componentProps",
          ]);

        let style = _extends({}, props.style);
        Object.keys(style).forEach(function (p) {
          if (p.indexOf("filter") >= 0 || p.indexOf("Filter") >= 0) {
            // ['Webkit', 'Moz', 'Ms', 'ms'].forEach(prefix=> style[`${prefix}Filter`] = style[p]);
            let transformArr = ["Webkit", "Moz", "Ms", "ms"];
            for (let i = 0; i < transformArr.length; i++) {
              style[transformArr[i] + "Filter"] = style[p];
            }
          }
        });
        props.style = style;
        return React.createElement(
          this.props.component,
          _extends({}, props, componentProps)
        );
      },
    },
  ]);

  return ScrollParallax;
})(React.Component);

ScrollParallax.propTypes = {
  component: PropTypes.any,
  animation: PropTypes.any,
  always: PropTypes.bool,
  location: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.any,
  id: PropTypes.string,
  targetId: PropTypes.string,
  componentProps: PropTypes.object,
};
ScrollParallax.defaultProps = {
  component: "div",
  always: true,
  componentProps: {},
};

ScrollParallax.isScrollParallax = true;
export default ScrollParallax;
