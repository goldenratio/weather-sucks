'use strict';

// @ts-nocheck
var e=function(){},t={},n=[],o=[];function r(t,r){var i,l,a,s,p=arguments,u=o;for(s=arguments.length;s-- >2;){ n.push(p[s]); }for(r&&null!=r.children&&(n.length||n.push(r.children),delete r.children);n.length;){ if((l=n.pop())&&void 0!==l.pop){ for(s=l.length;s--;){ n.push(l[s]); } }else{ "boolean"==typeof l&&(l=null),(a="function"!=typeof t)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(a=!1)),a&&i?u[u.length-1]+=l:u===o?u=[l]:u.push(l),i=a; } }var c=new e;return c.nodeName=t,c.children=u,c.attributes=null==r?void 0:r,c.key=null==r?void 0:r.key,c}function i(e,t){for(var n in t){ e[n]=t[n]; }return e}function l(e,t){null!=e&&("function"==typeof e?e(t):e.current=t);}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,s=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function u(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&a(c);}function c(){for(var e;e=p.pop();){ e._dirty&&U(e); }}function f(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function d(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n){ for(var o in n){ void 0===t[o]&&(t[o]=n[o]); } }return t}function v(e){var t=e.parentNode;t&&t.removeChild(e);}function h(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t){ l(n,null),l(o,e); }else if("class"!==t||r){ if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n){ for(var i in n){ i in o||(e.style[i]=""); } }for(var i in o){ e.style[i]="number"==typeof o[i]&&!1===s.test(i)?o[i]+"px":o[i]; }}}else if("dangerouslySetInnerHTML"===t){ o&&(e.innerHTML=o.__html||""); }else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,m,a):e.removeEventListener(t,m,a),(e._listeners||(e._listeners={}))[t]=o;}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o;}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t);}else{var p=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?p?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(p?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o));} }else { e.className=o||""; }}function m(e){return this._listeners[e.type](e)}var _=[],y=0,g=!1,b=!1;function C(){for(var e;e=_.shift();){ e.componentDidMount&&e.componentDidMount(); }}function x(e,t,n,o,r,i){y++||(g=null!=r&&void 0!==r.ownerSVGElement,b=null!=e&&!("__preactattr_"in e));var l=function e(t,n,o,r,i){var l=t,a=g;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n){ return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(l=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(l,t),N(t,!0))),l.__preactattr_=!0,l; }var s,p,u=n.nodeName;if("function"==typeof u){ return function(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,s=a,p=d(t);r&&!s&&(r=r._parentComponent);){ s=r.constructor===t.nodeName; }return r&&s&&(!o||r._component)?(B(r,p,3,n,o),e=r.base):(i&&!a&&(L(i),e=l=null),r=S(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,l=null),B(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,N(l,!1))),e}(t,n,o,r); }if(g="svg"===u||"foreignObject"!==u&&g,u=String(u),(!t||!f(t,u))&&(s=u,(p=g?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,l=p,t)){for(;t.firstChild;){ l.appendChild(t.firstChild); }t.parentNode&&t.parentNode.replaceChild(l,t),N(t,!0);}var c=l.firstChild,m=l.__preactattr_,_=n.children;if(null==m){m=l.__preactattr_={};for(var y=l.attributes,C=y.length;C--;){ m[y[C].name]=y[C].value; }}return !b&&_&&1===_.length&&"string"==typeof _[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=_[0]&&(c.nodeValue=_[0]):(_&&_.length||null!=c)&&function(t,n,o,r,i){var l,a,s,p,u,c,d,h,m=t.childNodes,_=[],y={},g=0,b=0,C=m.length,x=0,w=n?n.length:0;if(0!==C){ for(var k=0;k<C;k++){var S=m[k],P=S.__preactattr_;null!=(B=w&&P?S._component?S._component.__key:P.key:null)?(g++,y[B]=S):(P||(void 0!==S.splitText?!i||S.nodeValue.trim():i))&&(_[x++]=S);} }if(0!==w){ for(k=0;k<w;k++){var B;if(u=null,null!=(B=(p=n[k]).key)){ g&&void 0!==y[B]&&(u=y[B],y[B]=void 0,g--); }else if(b<x){ for(l=b;l<x;l++){ if(void 0!==_[l]&&(c=a=_[l],h=i,"string"==typeof(d=p)||"number"==typeof d?void 0!==c.splitText:"string"==typeof d.nodeName?!c._componentConstructor&&f(c,d.nodeName):h||c._componentConstructor===d.nodeName)){u=a,_[l]=void 0,l===x-1&&x--,l===b&&b++;break} } }u=e(u,p,o,r),s=m[k],u&&u!==t&&u!==s&&(null==s?t.appendChild(u):u===s.nextSibling?v(s):t.insertBefore(u,s));} }if(g){ for(var k in y){ void 0!==y[k]&&N(y[k],!1); } }for(;b<=x;){ void 0!==(u=_[x--])&&N(u,!1); }}(l,_,o,r,b||null!=m.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n){ t&&null!=t[o]||null==n[o]||h(e,o,n[o],n[o]=void 0,g); }for(o in t){ "children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||h(e,o,n[o],n[o]=t[o],g); }}(l,n.attributes,m),g=a,l}(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--y||(b=!1,i||C()),l}function N(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&l(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||v(e),w(e));}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;N(e,!0),e=t;}}var k=[];function S(e,t,n){var o,r=k.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),T.call(o,t,n)):((o=new T(t,n)).constructor=e,o.render=P);r--;){ if(k[r].constructor===e){ return o.nextBase=k[r].nextBase,k.splice(r,1),o; } }return o}function P(e,t,n){return this.constructor(e,n)}function B(e,n,o,r,i){e._disable||(e._disable=!0,e.__ref=n.ref,e.__key=n.key,delete n.ref,delete n.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==o&&(1!==o&&!1===t.syncComponentUpdates&&e.base?u(e):U(e,1,i)),l(e.__ref,e));}function U(e,t,n,o){if(!e._disable){var r,l,a,s=e.props,p=e.state,u=e.context,c=e.prevProps||s,f=e.prevState||p,v=e.prevContext||u,h=e.base,m=e.nextBase,g=h||m,b=e._component,w=!1,k=v;if(e.constructor.getDerivedStateFromProps&&(p=i(i({},p),e.constructor.getDerivedStateFromProps(s,p)),e.state=p),h&&(e.props=c,e.state=f,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,p,u)?w=!0:e.componentWillUpdate&&e.componentWillUpdate(s,p,u),e.props=s,e.state=p,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!w){r=e.render(s,p,u),e.getChildContext&&(u=i(i({},u),e.getChildContext())),h&&e.getSnapshotBeforeUpdate&&(k=e.getSnapshotBeforeUpdate(c,f));var P,T,M=r&&r.nodeName;if("function"==typeof M){var W=d(r);(l=b)&&l.constructor===M&&W.key==l.__key?B(l,W,1,u,!1):(P=l,e._component=l=S(M,W,u),l.nextBase=l.nextBase||m,l._parentComponent=e,B(l,W,0,u,!1),U(l,1,n,!0)),T=l.base;}else { a=g,(P=b)&&(a=e._component=null),(g||1===t)&&(a&&(a._component=null),T=x(a,r,u,n||!h,g&&g.parentNode,!0)); }if(g&&T!==g&&l!==b){var D=g.parentNode;D&&T!==D&&(D.replaceChild(T,g),P||(g._component=null,N(g,!1)));}if(P&&L(P),e.base=T,T&&!o){for(var E=e,V=e;V=V._parentComponent;){ (E=V).base=T; }T._component=E,T._componentConstructor=E.constructor;}}for(!h||n?_.push(e):w||e.componentDidUpdate&&e.componentDidUpdate(c,f,k);e._renderCallbacks.length;){ e._renderCallbacks.pop().call(e); }y||o||C();}}function L(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?L(n):t&&(null!=t.__preactattr_&&l(t.__preactattr_.ref,null),e.nextBase=t,v(t),k.push(e),w(t)),l(e.__ref,null);}function T(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[];}i(T.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=i(i({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),u(this);},forceUpdate:function(e){e&&this._renderCallbacks.push(e),U(this,2);},render:function(){}});var M=function(e,t,n,o){for(var r=1;r<t.length;r++){var i=t[r++],l="number"==typeof i?n[i]:i;1===t[r]?o[0]=l:2===t[r]?(o[1]=o[1]||{})[t[++r]]=l:3===t[r]?o[1]=Object.assign(o[1]||{},l):o.push(t[r]?e.apply(null,M(e,l,n,["",null])):l);}return o},W=function(e){for(var t,n,o=1,r="",i="",l=[0],a=function(e){1===o&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(e||r,0):3===o&&(e||r)?(l.push(e||r,1),o=2):2===o&&"..."===r&&e?l.push(e,3):2===o&&r&&!e?l.push(!0,2,r):4===o&&n&&(l.push(e||r,2,n),n=""),r="";},s=0;s<e.length;s++){s&&(1===o&&a(),a(s));for(var p=0;p<e[s].length;p++){ t=e[s][p],1===o?"<"===t?(a(),l=[l],o=3):r+=t:i?t===i?i="":r+=t:'"'===t||"'"===t?i=t:">"===t?(a(),o=1):o&&("="===t?(o=4,n=r,r=""):"/"===t?(a(),3===o&&(l=l[0]),o=l,(l=l[0]).push(o,4),o=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(a(),o=2):r+=t); }}return a(),l},D="function"==typeof Map,E=D?new Map:{},V=D?function(e){var t=E.get(e);return t||E.set(e,t=W(e)),t}:function(e){for(var t="",n=0;n<e.length;n++){ t+=e[n].length+"-"+e[n]; }return E[t]||(E[t]=W(e))};function A(e,t){!function(t,n,o){x(o,e,{},!1,n,!1);}(0,t,t.firstElementChild);}var H=function(e){var t=M(this,V(e),arguments,[]);return t.length>1?t:t[0]}.bind(r);

/**
 * @param {string} forecast
 * @returns {string}
 */
function getForecastIcon(forecast) {
  var key = forecast.toLowerCase();

  if (stringContains(key, ['mist', 'dust', 'haze'])) {
    return '';
  }

  if (stringContains(key, ['sleet'])) {
    return '';
  }

  if (key.indexOf('clear') >= 0) {
    var day = isDay();
    return day ? '' : '';
  }

  if (key.indexOf('rain') >= 0) {
    return '';
  }

  if (key.indexOf('snow') >= 0) {
    return '';
  }

  if (key.indexOf('clouds') >= 0) {
    return '';
  }

  if (key.indexOf('drizzle') >= 0) {
    return '';
  }

  if (key.indexOf('smoke') >= 0) {
    return '';
  }

  if (key.indexOf('smog') >= 0) {
    return '';
  }

  if (key.indexOf('thunder') >= 0) {
    return '';
  }

  if (key.indexOf('fog') >= 0) {
    return '';
  }

  if (key.indexOf('fire') >= 0) {
    return '';
  }

  if (key.indexOf('flood') >= 0) {
    return '';
  }

  if (key.indexOf('hurricane') >= 0) {
    return '';
  }

  if (key.indexOf('tornado') >= 0) {
    return '';
  }

  return '';
}

/**
 * @param {string} forecast
 * @returns {BackgroundType}
 */
function getBackground(forecast) {
  var key = forecast.toLowerCase();

  if (stringContains(key, ['mist', 'haze', 'smoke', 'fog'])) {
    return 'mist';
  }

  if (stringContains(key, ['cloud'])) {
    return 'clouds';
  }

  if (stringContains(key, ['rain'])) {
    return 'rain';
  }

  if (stringContains(key, ['drizzle'])) {
    return 'drizzle';
  }

  if (stringContains(key, ['snow'])) {
    return 'snow';
  }

  if (stringContains(key, ['sleet'])) {
    return 'sleet';
  }

  if (stringContains(key, ['clear'])) {
    var day = isDay();
    return day ? 'clear-day' : 'clear-night';
  }
  return 'default';
}

/**
 * @param {number} kelvin
 * @param {Unit} unit
 * @throws {Error}
 * @returns {number|undefined}
 */
function convertKelvinTo(kelvin, unit) {
  if (typeof kelvin !== 'number') {
    return undefined;
  }

  if (unit === 'C') {
    return Math.round(kelvin - 273.15);
  }

  if (unit === 'F') {
    return Math.round((kelvin - 273.15) * (9 / 5) + 32);
  }

  throw Error('unknown unit: ' + unit);
}

/**
 * @param {string|number} value
 * @throws {Error}
 * @returns {number}
 */
function toInt(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    return parseInt(value, 10) || 0;
  }

  throw Error('invalid type');
}

/**
 * @param {string|boolean|null|undefined} value
 * @param {boolean} fallbackValue
 * @throws {Error}
 * @return {boolean}
 */
function toBoolean(value, fallbackValue) {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    var lowercaseValue = value.toLowerCase();
    if (lowercaseValue === 'true' || lowercaseValue === '1') {
      return true;
    } else if (lowercaseValue === 'false' || lowercaseValue === '0') {
      return false;
    } else {
      return fallbackValue;
    }
  }

  if (typeof value === 'undefined' || value === null) {
    return fallbackValue;
  }

  throw Error('unknown type of value');
}

/**
 * @returns {boolean}
 */
function isDay() {
  var hours = new Date().getHours();
  return hours > 6 && hours < 18;
}

/**
 * @param {string} str
 * @param {Array<string>} list
 * @returns {boolean}
 */
function stringContains(str, list) {
  return list.some(function (entry) { return str.includes(entry); });
}

/**
 * @param {string|undefined|null} val
 * @return {Unit}
 */
function toUnit(val) {
  if (typeof val === 'string') {
    var valUpperCase = val.toUpperCase();
    if (valUpperCase === 'C' || valUpperCase === 'F') {
      return valUpperCase;
    }
  }
  return 'C';
}

/**
 * https://stackoverflow.com/a/25867068
 * @param {number} degree
 * @return {string}
 */
function degreeToCompass(degree) {
  var val = Math.floor((degree / 22.5) + 0.5);
  var arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return arr[(val % 16)];
}

/**
 * @param {number|undefined|null} val
 * @return {string}
 */
function toLocaleString(val) {
  if (typeof val === 'number') {
    return val.toLocaleString();
  }
  return ''
}

var templateObject$7 = Object.freeze(["\n    <div title=\"Settings\" onclick=\"", "\">\n      <svg class=\"settings-icon\" height=\"48\" width=\"48\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h48v48h-48z\" fill=\"none\"/><path d=\"M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97l-.75-5.3c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3c-1.22.51-2.35 1.17-3.38 1.97l-4.98-2.01c-.45-.17-.97 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31c-.08.64-.14 1.29-.14 1.95s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3c1.22-.51 2.35-1.17 3.38-1.97l4.98 2.01c.45.17.97 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zm-14.86 5.05c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/></svg>\n    </div>\n  "]);
var templateObject$6 = Object.freeze(["<h1 class=", ">", "</h1>"]);
var templateObject$5 = Object.freeze(["<div class=\"background\" style=", "></div>"]);
var templateObject$4 = Object.freeze(["\n      <div class=\"forecast\">\n        <div class=\"icon\">", "</div>\n        <div class=\"description\">", "</div>\n      </div>\n  "]);
var templateObject$3 = Object.freeze(["\n      <div class=\"temperature\">\n        <div class=\"weather-digit\">", "<sup><span class=\"sup\">° ", "</span></sup></div>\n      </div>\n  "]);
var templateObject$2 = Object.freeze([""]);
var templateObject$1 = Object.freeze(["<div class=\"city-title\">", "</div>"]);
var templateObject = Object.freeze(["\n    <div class=\"loading-screen\">\n      <div class=\"loading-icon\">\n        <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>  \n      </div>\n    </div>\n  "]);


var LoadingScreen = function () {
  return H(templateObject);
};

/**
 * @param {object} props
 * @property {string} city
 */
var CityHeader = function (ref) {
  var city = ref.city;

  return H(templateObject$1, city);
};

/**
 * @param {object} props
 * @property {number} value
 * @property {string} unit
 */
var Temperature = function (ref) {
  var value = ref.value;
  var unit = ref.unit;

  return value === undefined ?
    H(templateObject$2) :
    H(templateObject$3, toLocaleString(value), unit);
};

/**
 * @param {object} props
 * @property {string} forecast
 */
var ForecastInfo = function (ref) {
  var forecast = ref.forecast;

  return forecast === undefined ?
    H(templateObject$2) :
    H(templateObject$4, getForecastIcon(forecast), forecast);
};

/**
 * @param {object} props
 * @property {string} forecast
 */
var Background = function (ref) {
  var forecast = ref.forecast;

  if (forecast === undefined) {
    return H(templateObject$2);
  }

  var backgroundImageName = getBackground(forecast);
  var bgStyle = "\n    background: rgb(98, 88, 166) url(./assets/backgrounds/" + backgroundImageName + ".jpg) no-repeat;\n    background-size: cover;\n    background-blend-mode: multiply;\n  ";
  return H(templateObject$5, bgStyle);
};

/**
 * @param {object} props
 * @property {boolean} value
 * @property {boolean} blur
 */
var DoesItSuck = function (ref) {
  var value = ref.value;
  var blur = ref.blur;

  var blurClass = blur ? 'blur' : 'no-blur';
  return H(templateObject$6, "does-it-suck " + blurClass, value ? "Yes, It Sucks!" : "");
};

/**
 * @param {object} props
 * @property {Callback} onClick
 */
var SettingsIcon = function (ref) {
  var onClick = ref.onClick;

  return H(templateObject$7, function (/** @type {Event}**/event) { event.stopPropagation(); onClick();});
};

var templateObject$8 = Object.freeze(["\n      <div class=\"settings-panel\" onclick=\"", "\">\n        <div class=\"settings-panel-content\" onclick=\"", "\">\n                \n          <div>\n            <input id=\"c\" name=\"unit\" type=\"radio\" value=\"C\" checked=", " onchange=\"", "\" />\n            <label for=\"c\" style=\"padding-right: 1em;\">° C</label>   \n            <input id=\"f\" name=\"unit\" type=\"radio\" value=\"F\" checked=", " onchange=\"", "\" />\n            <label for=\"f\">° F</label>        \n          </div>\n          \n          <div>\n            <input type=\"text\" list=\"cities\" placeholder=\"City\" value=\"", "\" oninput=\"", "\" />\n            <datalist id=\"cities\">\n              <option value=\"Sukhumi\" />\n              <option value=\"Kabul\" />\n              <option value=\"Episkopi Cantonment\" />\n              <option value=\"Tirana\" />\n              <option value=\"Algiers, US\" />\n              <option value=\"Pago Pago\" />\n              <option value=\"Andorra la Vella\" />\n              <option value=\"Luanda\" />\n              <option value=\"The Valley\" />\n              <option value=\"St. John's\" />\n              <option value=\"Buenos Aires\" />\n              <option value=\"Yerevan\" />\n              <option value=\"Oranjestad\" />\n              <option value=\"Georgetown\" />\n              <option value=\"Canberra\" />\n              <option value=\"Vienna\" />\n              <option value=\"Baku\" />\n              <option value=\"Nassau\" />\n              <option value=\"Manama\" />\n              <option value=\"Dhaka\" />\n              <option value=\"Bridgetown\" />\n              <option value=\"Minsk\" />\n              <option value=\"Brussels\" />\n              <option value=\"Belmopan\" />\n              <option value=\"Porto-Novo\" />\n              <option value=\"Hamilton\" />\n              <option value=\"Thimphu\" />\n              <option value=\"Sucre\" />\n              <option value=\"La Paz\" />\n              <option value=\"Sarajevo\" />\n              <option value=\"Gaborone\" />\n              <option value=\"Brasília\" />\n              <option value=\"Road Town\" />\n              <option value=\"Bandar Seri Begawan\" />\n              <option value=\"Sofia\" />\n              <option value=\"Ouagadougou\" />\n              <option value=\"Bujumbura\" />\n              <option value=\"Phnom Penh\" />\n              <option value=\"Yaoundé\" />\n              <option value=\"Ottawa\" />\n              <option value=\"Praia\" />\n              <option value=\"George Town\" />\n              <option value=\"Bangui\" />\n              <option value=\"N'Djamena\" />\n              <option value=\"Santiago\" />\n              <option value=\"Beijing\" />\n              <option value=\"Flying Fish Cove\" />\n              <option value=\"West Island\" />\n              <option value=\"Bogotá\" />\n              <option value=\"Moroni\" />\n              <option value=\"Avarua\" />\n              <option value=\"San José\" />\n              <option value=\"Zagreb\" />\n              <option value=\"Havana\" />\n              <option value=\"Willemstad\" />\n              <option value=\"Nicosia\" />\n              <option value=\"Prague\" />\n              <option value=\"Yamoussoukro\" />\n              <option value=\"Kinshasa\" />\n              <option value=\"Copenhagen\" />\n              <option value=\"Djibouti\" />\n              <option value=\"Roseau\" />\n              <option value=\"Santo Domingo\" />\n              <option value=\"Dili\" />\n              <option value=\"Hanga Roa\" />\n              <option value=\"Quito\" />\n              <option value=\"Cairo\" />\n              <option value=\"San Salvador\" />\n              <option value=\"Malabo\" />\n              <option value=\"Asmara\" />\n              <option value=\"Tallinn\" />\n              <option value=\"Addis Ababa\" />\n              <option value=\"Stanley\" />\n              <option value=\"Tórshavn\" />\n              <option value=\"Palikir\" />\n              <option value=\"Suva\" />\n              <option value=\"Helsinki\" />\n              <option value=\"Paris\" />\n              <option value=\"Cayenne\" />\n              <option value=\"Papeete\" />\n              <option value=\"Libreville\" />\n              <option value=\"Banjul\" />\n              <option value=\"Tbilisi\" />\n              <option value=\"Berlin\" />\n              <option value=\"Accra\" />\n              <option value=\"Gibraltar\" />\n              <option value=\"Athens\" />\n              <option value=\"Nuuk\" />\n              <option value=\"St. George's\" />\n              <option value=\"Hagåtña\" />\n              <option value=\"Guatemala City\" />\n              <option value=\"St. Peter Port\" />\n              <option value=\"Conakry\" />\n              <option value=\"Bissau\" />\n              <option value=\"Georgetown\" />\n              <option value=\"Port-au-Prince\" />\n              <option value=\"Tegucigalpa\" />\n              <option value=\"Budapest\" />\n              <option value=\"Reykjavík\" />\n              <option value=\"New Delhi\" />\n              <option value=\"Jakarta\" />\n              <option value=\"Tehran\" />\n              <option value=\"Baghdad\" />\n              <option value=\"Dublin\" />\n              <option value=\"Douglas\" />\n              <option value=\"Jerusalem\" />\n              <option value=\"Rome\" />\n              <option value=\"Kingston\" />\n              <option value=\"Tokyo\" />\n              <option value=\"St. Helier\" />\n              <option value=\"Amman\" />\n              <option value=\"Astana\" />\n              <option value=\"Nairobi\" />\n              <option value=\"Tarawa\" />\n              <option value=\"Pristina\" />\n              <option value=\"Kuwait City\" />\n              <option value=\"Bishkek\" />\n              <option value=\"Vientiane\" />\n              <option value=\"Riga\" />\n              <option value=\"Beirut\" />\n              <option value=\"Maseru\" />\n              <option value=\"Monrovia\" />\n              <option value=\"Tripoli\" />\n              <option value=\"Vaduz\" />\n              <option value=\"Vilnius\" />\n              <option value=\"Luxembourg\" />\n              <option value=\"Skopje\" />\n              <option value=\"Antananarivo\" />\n              <option value=\"Lilongwe\" />\n              <option value=\"Kuala Lumpur\" />\n              <option value=\"Malé\" />\n              <option value=\"Bamako\" />\n              <option value=\"Valletta\" />\n              <option value=\"Majuro\" />\n              <option value=\"Nouakchott\" />\n              <option value=\"Port Louis\" />\n              <option value=\"Mexico City\" />\n              <option value=\"Chisinau\" />\n              <option value=\"Monaco\" />\n              <option value=\"Ulaanbaatar\" />\n              <option value=\"Podgorica\" />\n              <option value=\"Plymouth\" />\n              <option value=\"Rabat\" />\n              <option value=\"Maputo\" />\n              <option value=\"Naypyidaw\" />\n              <option value=\"Stepanakert\" />\n              <option value=\"Windhoek\" />\n              <option value=\"Yaren\" />\n              <option value=\"Kathmandu\" />\n              <option value=\"Amsterdam\" />\n              <option value=\"Nouméa\" />\n              <option value=\"Wellington\" />\n              <option value=\"Managua\" />\n              <option value=\"Niamey\" />\n              <option value=\"Abuja\" />\n              <option value=\"Alofi\" />\n              <option value=\"Kingston\" />\n              <option value=\"Pyongyang\" />\n              <option value=\"Nicosia\" />\n              <option value=\"Belfast\" />\n              <option value=\"Saipan\" />\n              <option value=\"Oslo\" />\n              <option value=\"Muscat\" />\n              <option value=\"Islamabad\" />\n              <option value=\"Ngerulmud\" />\n              <option value=\"Jerusalem\" />\n              <option value=\"Panama City\" />\n              <option value=\"Port Moresby\" />\n              <option value=\"Asunción\" />\n              <option value=\"Lima\" />\n              <option value=\"Manila\" />\n              <option value=\"Adamstown\" />\n              <option value=\"Warsaw\" />\n              <option value=\"Lisbon\" />\n              <option value=\"San Juan\" />\n              <option value=\"Doha\" />\n              <option value=\"Taipei\" />\n              <option value=\"Brazzaville\" />\n              <option value=\"Bucharest\" />\n              <option value=\"Moscow\" />\n              <option value=\"Kigali\" />\n              <option value=\"Gustavia\" />\n              <option value=\"Jamestown\" />\n              <option value=\"Basseterre\" />\n              <option value=\"Castries\" />\n              <option value=\"Marigot\" />\n              <option value=\"St. Pierre\" />\n              <option value=\"Kingstown\" />\n              <option value=\"Apia\" />\n              <option value=\"San Marino\" />\n              <option value=\"Riyadh\" />\n              <option value=\"Edinburgh\" />\n              <option value=\"Dakar\" />\n              <option value=\"Belgrade\" />\n              <option value=\"Victoria\" />\n              <option value=\"Freetown\" />\n              <option value=\"Singapore\" />\n              <option value=\"Philipsburg\" />\n              <option value=\"Bratislava\" />\n              <option value=\"Ljubljana\" />\n              <option value=\"Honiara\" />\n              <option value=\"Mogadishu\" />\n              <option value=\"Hargeisa\" />\n              <option value=\"Pretoria\" />\n              <option value=\"Grytviken\" />\n              <option value=\"Seoul\" />\n              <option value=\"Tskhinvali\" />\n              <option value=\"Juba\" />\n              <option value=\"Madrid\" />\n              <option value=\"Sri Jayawardenapura Kotte\" />\n              <option value=\"Khartoum\" />\n              <option value=\"Paramaribo\" />\n              <option value=\"Mbabane\" />\n              <option value=\"Stockholm\" />\n              <option value=\"Bern\" />\n              <option value=\"Damascus\" />\n              <option value=\"São Tomé\" />\n              <option value=\"Dushanbe\" />\n              <option value=\"Dodoma\" />\n              <option value=\"Bangkok\" />\n              <option value=\"Lomé\" />\n              <option value=\"Nukuʻalofa\" />\n              <option value=\"Tiraspol\" />\n              <option value=\"Port of Spain\" />\n              <option value=\"Edinburgh of the Seven Seas\" />\n              <option value=\"Tunis\" />\n              <option value=\"Ankara\" />\n              <option value=\"Ashgabat\" />\n              <option value=\"Cockburn Town\" />\n              <option value=\"Funafuti\" />\n              <option value=\"Kampala\" />\n              <option value=\"Kiev\" />\n              <option value=\"Abu Dhabi\" />\n              <option value=\"London\" />\n              <option value=\"Washington, D.C.\" />\n              <option value=\"Charlotte Amalie\" />\n              <option value=\"Montevideo\" />\n              <option value=\"Tashkent\" />\n              <option value=\"Port Vila\" />\n              <option value=\"Vatican City\" />\n              <option value=\"Caracas\" />\n              <option value=\"Hanoi\" />\n              <option value=\"Cardiff\" />\n              <option value=\"Mata-Utu\" />\n              <option value=\"El Aaiún\" />\n              <option value=\"Sanaá\" />\n              <option value=\"Lusaka\" />\n              <option value=\"Harare\" />\n              <option value=\"Vancouver, CA\" />\n              <option value=\"Vancouver, US\" />\n            </datalist>\n          </div>\n          \n          <div>\n            <input type=\"button\" value=\"Save\" onclick=\"", "\" />\n          </div>\n        \n        </div>\n        \n      </div>\n    "]);

var ENTER = 13;
var ESC = 27;

/**
 * @extends {Component<SettingsPanelProps, SettingsPanelState>}
 */
var SettingsPanel = /*@__PURE__*/(function (Component) {
  function SettingsPanel () {
    Component.apply(this, arguments);
  }

  if ( Component ) SettingsPanel.__proto__ = Component;
  SettingsPanel.prototype = Object.create( Component && Component.prototype );
  SettingsPanel.prototype.constructor = SettingsPanel;

  SettingsPanel.prototype.componentDidMount = function componentDidMount () {
    var ref = /** @type {SettingsPanelProps} **/(this.props);
    var city = ref.city;
    var unit = ref.unit;
    this.setState({
      city: city,
      unit: unit
    });

    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener('keyup', this.onKeyUp);
  };

  SettingsPanel.prototype.componentWillUnmount = function componentWillUnmount () {
    document.removeEventListener('keyup', this.onKeyUp);
  };

  /**
   * @param {KeyboardEvent} event
   */
  SettingsPanel.prototype.onKeyUp = function onKeyUp (event) {
    var keyCode = event.keyCode;
    var ref = /** @type {SettingsPanelProps} **/(this.props);
    var onCloseClick = ref.onCloseClick;
    var onSaveClick = ref.onSaveClick;

    if (keyCode === ESC) {
      onCloseClick();
    } else if(keyCode === ENTER) {
      var ref$1 = this.state;
      var city = ref$1.city;
      var unit = ref$1.unit;
      onSaveClick(city.trim(), unit);
    }
  };

  /**
   * @param {Event} event
   */
  SettingsPanel.prototype.updateUnit = function updateUnit (event) {
    var target = event.target;
    if (!target) {
      return;
    }
    var ref = /** @type {HTMLInputElement}**/(target);
    var value = ref.value;
    this.setState({ unit: value });
  };

  /**
   * @param {Event} event
   */
  SettingsPanel.prototype.updateCity = function updateCity (event) {
    var target = event.target;
    if (!target) {
      return;
    }
    var ref = /** @type {HTMLInputElement}**/(target);
    var value = ref.value;
    this.setState({ city: value });
  };

  /**
   * @param {SettingsPanelProps} props
   * @param {SettingsPanelState} state
   */
  SettingsPanel.prototype.render = function render (ref, ref$1) {
    var this$1 = this;
    var onCloseClick = ref.onCloseClick;
    var onSaveClick = ref.onSaveClick;
    var city = ref$1.city;
    var unit = ref$1.unit;

    return H(templateObject$8, function (/** @type {Event} **/event) { event.stopPropagation(); onCloseClick();}, function (/** @type {Event}**/event) { return event.stopPropagation(); }, unit === 'C', function (/** @type {Event}**/e) { return this$1.updateUnit(e); }, unit === 'F', function (/** @type {Event}**/e) { return this$1.updateUnit(e); }, city, function (/** @type {Event}**/e) { return this$1.updateCity(e); }, function () { return onSaveClick(city.trim(), unit); });
  };

  return SettingsPanel;
}(T));

/**
 * @param {string} city
 * @returns {string}
 */
var weatherApiUrl = function (city) { return ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=en&APPID=1589940d6e6075602eefa336163efef3"); };

/**
 * @param {string} city
 * @returns {Promise<WeatherInfo>}
 */
function fetchWeatherInfo(city) {
  return new Promise(function (resolve, reject) {
    var url = weatherApiUrl(city);
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        // console.log(json);
        var cod = json.cod;
        var code = toInt(cod);
        if (code === 200) {
          var main = json.main;
          var weather = json.weather;
          var sys = json.sys;
          var name = json.name;
          var wind = json.wind;
          var visibility = json.visibility;
          /** @type {WeatherInfo} **/
          var info = {
            temperature: main ? main.temp : undefined,
            forecast: (weather && weather.length > 0) ? weather[0].description : undefined,
            country: sys ? sys.country : undefined,
            city: name,
            humidity: main ? main.humidity : undefined,
            pressure: main ? main.pressure : undefined,
            windSpeed: wind ? wind.speed : undefined,
            windDirection: wind ? wind.deg : undefined,
            visibility: visibility
          };
          resolve(info);
        } else {
          throw Error(code.toString());
        }
      })
      .catch(function (err) {
        var message = err.message;
        var code = toInt(message);
        reject(code);
      });

  });
}

/**
 * @param {Callback} callback
 * @returns {DisposeCallback} unsub
 */
function autoUpdate(callback) {
  var updateIntervalMs = 600000; // 10 minutes
  var idleMs = 240000; // 120000 = 2 minutes
  var lastUpdated = Date.now();

  var timerId = window.setInterval(function () {
    callback();
  }, updateIntervalMs);

  var onFocus = function () {
    var now = Date.now();
    var timeDiff = now - lastUpdated;
    if (timeDiff > idleMs) {
      callback();
      lastUpdated = now;
    }
  };

  var online = function () {
    callback();
  };

  window.addEventListener('focus', onFocus);
  window.addEventListener('online', online);

  return function () {
    window.clearInterval(timerId);
    window.removeEventListener('focus', onFocus);
    window.removeEventListener('online', online);
  };
}

var firstRunKey = 'weather-sucks.first-run';

/**
 * @param {Callback} newVersionInstalledCallback
 */
function initServiceWorkers(newVersionInstalledCallback) {
  var serviceWorkerSupported = 'serviceWorker' in navigator;
  if (!serviceWorkerSupported) {
    return;
  }
  var serviceWorker = navigator.serviceWorker;
  serviceWorker.addEventListener('message', /** @type {MessageEvent} **/function (event) {
    var data = event.data;
    switch (data) {
      case 'new-version-installed':
        var firstRun = toBoolean(localStorage.getItem(firstRunKey), true);
        if (firstRun) {
          localStorage.setItem(firstRunKey, 'false');
        } else {
          newVersionInstalledCallback();
        }
        break;
    }
  });

  serviceWorker.register('./service-worker.js')
    .then(/** @type {ServiceWorkerRegistration} **/function (registration) {
      onNewServiceWorker(registration, function () {
        if (registration.waiting) {
          registration.waiting.postMessage('force-activate');
        }
      });
    });
}

/**
 * https://github.com/GoogleChrome/workbox/issues/1120
 * @param {ServiceWorkerRegistration} registration
 * @param {Callback} callback
 */
function onNewServiceWorker(registration, callback) {
  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    return callback();
  }

  var listenInstalledStateChange = function () {
    var installing = registration.installing;
    if (!installing) {
      return;
    }

    installing.addEventListener('statechange', /** @type {Event} **/function (event) {
      var target = event.target;
      if (!target) {
        return;
      }
      var ref = /** @type {ServiceWorker} **/(target);
      var state = ref.state;
      if (state === 'installed') {
        // A new service worker is available, inform the user
        callback();
      }
    });
  };

  if (registration.installing) {
    return listenInstalledStateChange();
  }

  // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,
  registration.addEventListener('updatefound', listenInstalledStateChange);
}

var templateObject$1$1 = Object.freeze(["\n    <div class=", ">\n      <div style=\"padding: 1em;\">\n        <div>Humidity: ", "%</div>\n        <div>Pressure: ", " mBar</div>\n        <div>Wind Speed: ", " m/s</div>\n        <div>Wind Direction: ", "° (", ")</div>\n        <div>Visibility: ", " km</div>\n      </div>\n    </div>\n  "]);
var templateObject$9 = Object.freeze([""]);

/**
 * @param {AdditionalInfoProps} props
 */
var AdditionalInfoPanel = function (ref) {
  var show = ref.show;
  var data = ref.data;

  if (show === undefined || data === undefined) {
    return H(templateObject$9);
  }
  var showClass = show ? 'additional-info-show' : 'additional-info-hide';
  var humidity = data.humidity;
  var pressure = data.pressure;
  var windSpeed = data.windSpeed;
  var windDirection = data.windDirection;
  var visibility = data.visibility;

  return H(templateObject$1$1, "additional-info " + showClass, toLocaleString(humidity), toLocaleString(pressure), toLocaleString(windSpeed), toLocaleString(windDirection), degreeToCompass(windDirection), toLocaleString(visibility / 1000));
};

var templateObject$3$1 = Object.freeze(["<", " />"]);
var templateObject$2$1 = Object.freeze(["<", " city=\"", "\" unit=\"", "\" \n              onCloseClick=", " \n              onSaveClick=", " />"]);
var templateObject$1$2 = Object.freeze([""]);
var templateObject$a = Object.freeze(["\n      <div class=\"app\" onClick=\"", "\">\n        ", "\n        ", "\n        <", " forecast=\"", "\" />\n        <div class=", ">\n          <div style=\"padding: 1.4em;\">\n            <", " onClick=\"", "\" /> \n            <", " city=\"", "\" />\n            <", " value=\"", "\" unit=\"", "\" />\n            <", " forecast=\"", "\" />\n          </div>\n        </div>\n        <", " value=", " blur=", " />\n        <", " show=", " data=", " />\n      </div>\n    "]);

/** @type {StorageKey} **/
var storageKey = {
  CITY: 'weather-sucks.city',
  UNIT: 'weather-sucks.unit'
};

/**
 * @extends {Component<AppProps, AppState>}
 */
var App = /*@__PURE__*/(function (Component) {
  function App () {
    Component.apply(this, arguments);
  }

  if ( Component ) App.__proto__ = Component;
  App.prototype = Object.create( Component && Component.prototype );
  App.prototype.constructor = App;

  App.prototype.componentDidMount = function componentDidMount () {
    var this$1 = this;

    var urlParam = typeof URLSearchParams !== 'undefined' ? new URLSearchParams(location.search) : undefined;
    var city = (urlParam && urlParam.get('city')) || localStorage.getItem(storageKey.CITY) || 'London';
    var unit = toUnit((urlParam && urlParam.get('unit')) || localStorage.getItem(storageKey.UNIT));

    /** @type {AppState} **/
    var data = {
      city: city,
      unit: unit,
      temperature: undefined,
      forecast: undefined,
      showSettingsPanel: false,
      showAdditionalInfo: false,
      additionalInfo: undefined,
      doesItSuck: false
    };
    this.setState(data);

    autoUpdate(function () {
      this$1.updateWeather();
    });
    this.updateWeather();
  };

  /**
   * @param {AppProps} prop
   * @param {AppState} state
   */
  App.prototype.render = function render (ref, ref$1) {
    var this$1 = this;
    var showSettingsPanel = ref$1.showSettingsPanel;
    var showAdditionalInfo = ref$1.showAdditionalInfo;
    var additionalInfo = ref$1.additionalInfo;
    var city = ref$1.city;
    var doesItSuck = ref$1.doesItSuck;
    var temperature = ref$1.temperature;
    var unit = ref$1.unit;
    var forecast = ref$1.forecast;

    /** @type {boolean} **/
    var weatherLoaded = typeof temperature !== 'undefined';

    var blurClass = showSettingsPanel ? 'blur' : 'no-blur';
    return H(templateObject$a, function () {
      this$1.toggleAdditionalInfo();
    }, !showSettingsPanel ?
      H(templateObject$1$2) :
      H(templateObject$2$1, SettingsPanel, city, unit, function () { return this$1.closeSettingsPanel(); }, function (/** @type {string}**/city, /** @type {Unit}**/unit) { return this$1.saveSettings(city, unit); }), weatherLoaded ?
      H(templateObject$1$2) :
      H(templateObject$3$1, LoadingScreen), Background, forecast, "weather-container " + blurClass, SettingsIcon, function () { return this$1.openSettingsPanel(); }, CityHeader, city, Temperature, temperature, unit, ForecastInfo, forecast, DoesItSuck, doesItSuck, showSettingsPanel, AdditionalInfoPanel, showAdditionalInfo, additionalInfo);
  };

  App.prototype.openSettingsPanel = function openSettingsPanel () {
    this.setState({
      showSettingsPanel: true,
      showAdditionalInfo: false
    });
  };

  App.prototype.closeSettingsPanel = function closeSettingsPanel () {
    this.setState({ showSettingsPanel: false });
  };

  App.prototype.toggleAdditionalInfo = function toggleAdditionalInfo () {
    var ref = this.state;
    var showAdditionalInfo = ref.showAdditionalInfo;
    var showSettingsPanel = ref.showSettingsPanel;
    if (showSettingsPanel) {
      return;
    }
    this.setState({ showAdditionalInfo: !showAdditionalInfo });
  };

  /**
   * @param {string} city
   * @param {Unit} unit
   */
  App.prototype.saveSettings = function saveSettings (city, unit) {
    if (city) {
      localStorage.setItem(storageKey.CITY, city);
      this.setState({
        city: city
      });
    }

    if (unit && (unit === 'C' || unit === 'F')) {
      localStorage.setItem(storageKey.UNIT, unit);
      this.setState({
        unit: unit
      });
    }

    this.closeSettingsPanel();
    history.pushState({}, '', './');

    this.updateWeather();
  };

  App.prototype.updateWeather = function updateWeather () {
    var this$1 = this;

    var ref = this.state;
    var city = ref.city;
    var unit = ref.unit;
    fetchWeatherInfo(city)
      .then(/** @type {WeatherInfo} **/function (data) {
        var temperature = data.temperature;
        var forecast = data.forecast;
        var city = data.city;
        var country = data.country;
        var humidity = data.humidity;
        var pressure = data.pressure;
        var windSpeed = data.windSpeed;
        var windDirection = data.windDirection;
        var visibility = data.visibility;
        /** @type {AdditionalInfo} **/
        var additionalInfo = {
          humidity: humidity,
          pressure: pressure,
          windSpeed: windSpeed,
          windDirection: windDirection,
          visibility: visibility
        };
        this$1.setState({
          temperature: convertKelvinTo(temperature, unit),
          forecast: forecast,
          city: (city + ", " + country),
          doesItSuck: true,
          showSettingsPanel: false,
          additionalInfo: additionalInfo
        });
      })
      .catch(/** @type {number} **/function (errCode) {
        console.log('error: ', errCode);
        this$1.setState({
          temperature: undefined,
          forecast: undefined
        });

        if (errCode === 404) {
          alert('Invalid City Name');
        }
        this$1.openSettingsPanel();
      });
  };

  return App;
}(T));

window.onload = function () {
  console.log('Created by: @karthikvj https://twitter.com/karthikvj');
  console.log('Source: https://github.com/goldenratio/weather-sucks');

  initServiceWorkers(function () {
    console.log('new version available');
  });
  A(H(templateObject$3$1, App), document.body);
};
