"use strict";

$('.js-cancel-overflow').on("click", function () {
  $(this).parent().parent().addClass('cancel-overflow-limit');
});
"use strict";

var $ctd = function $ctd(elem) {
  return document.querySelector(elem);
};
var countdown = function countdown(_config) {
  var tarDate = $ctd(_config.target).getAttribute('data-date').split('-');
  var day = parseInt(tarDate[0]);
  var month = parseInt(tarDate[1]);
  var year = parseInt(tarDate[2]);
  var tarTime = $ctd(_config.target).getAttribute('data-time');
  var tarhour, tarmin;
  if (tarTime != null) {
    tarTime = tarTime.split(':');
    tarhour = parseInt(tarTime[0]);
    tarmin = parseInt(tarTime[1]);
  }
  var months = [31, new Date().getFullYear() % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var dateNow = new Date();
  var dayNow = dateNow.getDate();
  var monthNow = dateNow.getMonth() + 1;
  var yearNow = dateNow.getFullYear();
  var hourNow = dateNow.getHours();
  var minNow = dateNow.getMinutes();
  var count_day = 0,
    count_hour = 0,
    count_min = 0;
  var count_day_isSet = false;
  var isOver = false;

  // Set the date we're counting down to
  var countDownDate = new Date(year, month - 1, day, tarhour, tarmin, 0, 0).getTime();
  if (document.querySelector('.day') !== null) {
    $ctd(_config.target + ' .day .word').innerHTML = _config.dayWord;
  }
  $ctd(_config.target + ' .hour .word').innerHTML = _config.hourWord;
  $ctd(_config.target + ' .min .word').innerHTML = _config.minWord;
  if (document.querySelector('.sec') !== null) {
    $ctd(_config.target + ' .sec .word').innerHTML = _config.secWord;
  }
  var _updateTime = function updateTime() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    requestAnimationFrame(_updateTime);
    if (document.querySelector('.day') !== null) {
      $ctd(_config.target + ' .day .num').innerHTML = addZero(days);
    }
    $ctd(_config.target + ' .hour .num').innerHTML = addZero(hours);
    $ctd(_config.target + ' .min .num').innerHTML = addZero(minutes);
    if (document.querySelector('.sec') !== null) {
      $ctd(_config.target + ' .sec .num').innerHTML = addZero(seconds);
    }

    // If the count down is over, write some text
    if (distance < 0) {
      $ctd(".countdown").innerHTML = "EXPIRED";
    }
  };
  _updateTime();
};
var addZero = function addZero(x) {
  return x < 10 && x >= 0 ? "0" + x : x;
};
"use strict";

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
"use strict";

// If "grey-header-cut" exists add a class on "main" to adjust the diamonds background image
if (document.querySelector('.grey-header-cut') !== null) {
  document.querySelector('.main').classList.add("main-bg-short");
}
window.addEventListener("load", function (event) {
  // If "component-skew-inner"s height is grater than 2350px add a class to adjust the diamonds background image
  document.querySelectorAll('.component-skew-inner').forEach(function (item) {
    if (item.clientHeight > 2350) {
      item.classList.add("component-skew-inner-tall");
    }
  });
});
"use strict";

// Update text and value of the info console buttons by selecting options from their dropdown
$('.js-info-select li').on("click keydown", function (event) {
  var thisText = $(this).text().trim();
  if (event.key === 'Enter' || event.type === 'click') {
    $(this).addClass('selected').siblings().removeClass('selected');
    $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisText);
    $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisText);
  }
});
$('.js-info-select-hotel li').on("click keydown", function (event) {
  var thisText = $(this).text().trim();
  var thisNameText = $(this).find('.lna-name').text().trim();
  var thisLocationText = $(this).find('.lna-location span').text().trim();
  if (event.key === 'Enter' || event.type === 'click') {
    $(this).addClass('selected').siblings().removeClass('selected');
    if (!$(this).hasClass('no-accomodation')) {
      $(this).parent().parent().siblings('.info-drop-slice-btn').val("".concat(thisNameText).concat(thisLocationText !== '' ? ' - ' : '').concat(thisLocationText));
      $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisNameText);
      $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-location').text(thisLocationText);
    } else {
      $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisText);
      $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisText);
      $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-location').text('');
    }
  }
});
$('.js-info-select-hotel-form li').on("click keydown", function (event) {
  var thisText = $(this).text().trim();
  var thisNameText = $(this).find('.lna-name').text().trim();
  var thisLocationText = $(this).find('.lna-location span').text().trim();
  if (event.key === 'Enter' || event.type === 'click') {
    $(this).addClass('selected').siblings().removeClass('selected');
    if (!$(this).hasClass('no-accomodation')) {
      $(this).parent().parent().siblings('.info-drop-slice-btn').val("".concat(thisNameText).concat(thisLocationText !== '' ? ' - ' : '').concat(thisLocationText));
      $(this).parent().parent().siblings('.info-drop-slice-btn').find('.info-drop-slice-btn-selection').html("<span class='ids-sel-1'>".concat(thisNameText, "</span>").concat(thisLocationText !== '' ? ' - ' : '', "<span class='ids-sel-2'>").concat(thisLocationText, "</span>"));
    } else {
      $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisText);
      $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisText);
    }
  }
});
$('.js-info-select-sessions li').on("click keydown", function (event) {
  var thisNameText = $(this).find('.info-sessions-period').text().trim();
  if (event.key === 'Enter' || event.type === 'click') {
    $(this).addClass('selected').siblings().removeClass('selected');
    $(this).parent().parent().siblings('.info-drop-slice-btn').val(thisNameText);
    $(this).parent().parent().siblings('.info-drop-slice-btn').children('.info-drop-slice-btn-selection').text(thisNameText);
  }
});
document.querySelectorAll('.info-drop-slice-btn').forEach(function (item) {
  item.addEventListener('show.bs.dropdown', function (event) {
    $('.info-dropped-overlay').addClass('dropped');
  });
  item.addEventListener('hide.bs.dropdown', function (event) {
    $('.info-dropped-overlay').removeClass('dropped');
  });
});
"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var observer = new IntersectionObserver(function (entries) {
  var _iterator = _createForOfIteratorHelper(entries),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      var intersecting = entry.isIntersecting;
      if (intersecting) {
        entry.target.classList.add("in-view");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
},
// 👇 Threshold is 100%
{
  threshold: 0.5
});
var observerTargets = document.querySelectorAll('.observe');
observerTargets.forEach(function (observerTarget) {
  observer.observe(observerTarget);
});
"use strict";

jQuery(function () {
  $('.reviews-grid').masonry({
    itemSelector: '.review-card',
    columnWidth: 230,
    gutter: 18,
    horizontalOrder: true,
    fitWidth: true
  });
});
"use strict";

$(".menu-btn").on("click", function () {
  $(".menu-btn").removeClass("menu-btn-active");
  $(this).addClass("menu-btn-active");
  if (!$(this).hasClass("show")) {
    $("body").removeClass("nav-active");
  } else {
    $("body").addClass("nav-active");
  }
});

// Sticky menu when scrolling
var mainHeader = $(".header");
var headerScrollThreshold = 80;
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= headerScrollThreshold) {
    mainHeader.addClass("header-sticky");
  } else {
    mainHeader.removeClass("header-sticky");
  }
});
$(document).on("keyup", function (e) {
  if (e.key === "Escape") {
    $("body").removeClass("nav-active");
  }
});

// Show megamenu
$(".js-megamenu-toggler").on("click", function () {
  $(this).closest(".main-submenu-group").hide();
  $(this).closest(".main-submenu").find(".megamenu-wrapper").show();
});

// Megamenu back button
$(".megamenu-back-btn").on("click", function () {
  $(this).closest(".megamenu-wrapper").hide();
  $(this).closest(".main-submenu").find(".main-submenu-group").show();
});
function initMegaMenu() {
  var $megamenuWrapper = $(".megamenu-wrapper");
  var $megamenuListItems = $(".megamenu-list .list-group-item");
  var $megamenuCenterItems = $(".megamenu-center-item");
  var $megamenuCenter = $(".megamenu-center");
  function showCenterItem(centerId) {
    $megamenuCenterItems.hide();
    $(".center-id-".concat(centerId)).show();
  }
  function handleResponsive() {
    if (window.innerWidth >= 1024) {
      $megamenuCenter.show();

      // Show first item by default when megamenu becomes visible
      if ($megamenuWrapper.is(":visible")) {
        var firstCenterId = $megamenuListItems.first().data("center-id");
        if (firstCenterId) {
          showCenterItem(firstCenterId);
        }
      }
    } else {
      // Mobile behavior - hide center, stack left and right
      $megamenuCenter.hide();
    }
  }
  $megamenuListItems.on("mouseenter", function () {
    if (window.innerWidth >= 1024) {
      var centerId = $(this).data("center-id");
      if (centerId) {
        showCenterItem(centerId);
      }
    }
  });

  // Initialize on megamenu wrapper show
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "attributes" && mutation.attributeName === "style") {
        var target = mutation.target;
        if ($(target).hasClass("megamenu-wrapper") && $(target).is(":visible")) {
          handleResponsive();
        }
      }
    });
  });

  // Observe megamenu wrapper for visibility changes
  $megamenuWrapper.each(function () {
    observer.observe(this, {
      attributes: true,
      attributeFilter: ["style"]
    });
  });

  // Handle window resize
  $(window).on("resize", handleResponsive);

  // Initial setup
  handleResponsive();
}

// Initialize megamenu functionality
$(document).ready(function () {
  initMegaMenu();
});
$(document).on("hide.bs.dropdown", ".header", function () {
  $("body").removeClass("nav-active");
});
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// https://github.com/faisalman/ua-parser-js
!function (i, e) {
  "use strict";

  var o = "model",
    r = "name",
    a = "type",
    n = "vendor",
    t = "version",
    s = "mobile",
    b = "tablet",
    w = "smarttv",
    d = function d(i) {
      var e = {};
      for (var o in i) e[i[o].toUpperCase()] = i[o];
      return e;
    },
    l = function l(i, e) {
      return "string" == typeof i && -1 !== c(e).indexOf(c(i));
    },
    c = function c(i) {
      return i.toLowerCase();
    },
    u = function u(i, e) {
      if ("string" == typeof i) return i = i.replace(/^\s+|\s+$/g, ""), void 0 === e ? i : i.substring(0, 255);
    },
    m = function m(i, e) {
      for (var o, r, a, n, t, s, b = 0; b < e.length && !t;) {
        var w = e[b],
          d = e[b + 1];
        for (o = r = 0; o < w.length && !t;) if (t = w[o++].exec(i)) for (a = 0; a < d.length; a++) s = t[++r], "object" == _typeof(n = d[a]) && n.length > 0 ? 2 == n.length ? "function" == typeof n[1] ? this[n[0]] = n[1].call(this, s) : this[n[0]] = n[1] : 3 == n.length ? "function" != typeof n[1] || n[1].exec && n[1].test ? this[n[0]] = s ? s.replace(n[1], n[2]) : void 0 : this[n[0]] = s ? n[1].call(this, s, n[2]) : void 0 : 4 == n.length && (this[n[0]] = s ? n[3].call(this, s.replace(n[1], n[2])) : void 0) : this[n] = s || void 0;
        b += 2;
      }
    },
    p = function p(i, e) {
      for (var o in e) if ("object" == _typeof(e[o]) && e[o].length > 0) {
        for (var r = 0; r < e[o].length; r++) if (l(e[o][r], i)) return "?" === o ? void 0 : o;
      } else if (l(e[o], i)) return "?" === o ? void 0 : o;
      return i;
    },
    h = {
      ME: "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      2000: "NT 5.0",
      XP: ["NT 5.1", "NT 5.2"],
      Vista: "NT 6.0",
      7: "NT 6.1",
      8: "NT 6.2",
      8.1: "NT 6.3",
      10: ["NT 6.4", "NT 10.0"],
      RT: "ARM"
    },
    f = {
      browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [t, [r, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [t, [r, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [r, t], [/opios[\/ ]+([\w\.]+)/i], [t, [r, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [t, [r, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [r, t], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [t, [r, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [t, [r, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [t, [r, "WeChat"]], [/konqueror\/([\w\.]+)/i], [t, [r, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [t, [r, "IE"]], [/yabrowser\/([\w\.]+)/i], [t, [r, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[r, /(.+)/, "$1 Secure Browser"], t], [/\bfocus\/([\w\.]+)/i], [t, [r, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [t, [r, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [t, [r, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [t, [r, "Dolphin"]], [/coast\/([\w\.]+)/i], [t, [r, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [t, [r, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [t, [r, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[r, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[r, /(.+)/, "$1 Browser"], t], [/(comodo_dragon)\/([\w\.]+)/i], [[r, /_/g, " "], t], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [r, t], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [r], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[r, "Facebook"], t], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [r, t], [/\bgsa\/([\w\.]+) .*safari\//i], [t, [r, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [t, [r, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[r, "Chrome WebView"], t], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [t, [r, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [r, t], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [t, [r, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [t, r], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [r, [t, p, {
        "1.0": "/8",
        1.2: "/1",
        1.3: "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }]], [/(webkit|khtml)\/([\w\.]+)/i], [r, t], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[r, "Netscape"], t], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [t, [r, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [r, t]],
      cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", c]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", c]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", c]]],
      device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [o, [n, "Samsung"], [a, b]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [o, [n, "Samsung"], [a, s]], [/\((ip(?:hone|od)[\w ]*);/i], [o, [n, "Apple"], [a, s]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [o, [n, "Apple"], [a, b]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [o, [n, "Huawei"], [a, b]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [o, [n, "Huawei"], [a, s]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[o, /_/g, " "], [n, "Xiaomi"], [a, s]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[o, /_/g, " "], [n, "Xiaomi"], [a, b]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [o, [n, "OPPO"], [a, s]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [o, [n, "Vivo"], [a, s]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [o, [n, "Realme"], [a, s]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [o, [n, "Motorola"], [a, s]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [o, [n, "Motorola"], [a, b]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [o, [n, "LG"], [a, b]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [o, [n, "LG"], [a, s]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [o, [n, "Lenovo"], [a, b]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[o, /_/g, " "], [n, "Nokia"], [a, s]], [/(pixel c)\b/i], [o, [n, "Google"], [a, b]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [o, [n, "Google"], [a, s]], [/droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [o, [n, "Sony"], [a, s]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[o, "Xperia Tablet"], [n, "Sony"], [a, b]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [o, [n, "OnePlus"], [a, s]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [o, [n, "Amazon"], [a, b]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[o, /(.+)/g, "Fire Phone $1"], [n, "Amazon"], [a, s]], [/(playbook);[-\w\),; ]+(rim)/i], [o, n, [a, b]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [o, [n, "BlackBerry"], [a, s]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [o, [n, "ASUS"], [a, b]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [o, [n, "ASUS"], [a, s]], [/(nexus 9)/i], [o, [n, "HTC"], [a, b]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [n, [o, /_/g, " "], [a, s]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [o, [n, "Acer"], [a, b]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [o, [n, "Meizu"], [a, s]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [o, [n, "Sharp"], [a, s]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [n, o, [a, s]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [n, o, [a, b]], [/(surface duo)/i], [o, [n, "Microsoft"], [a, b]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [o, [n, "Fairphone"], [a, s]], [/(u304aa)/i], [o, [n, "AT&T"], [a, s]], [/\bsie-(\w*)/i], [o, [n, "Siemens"], [a, s]], [/\b(rct\w+) b/i], [o, [n, "RCA"], [a, b]], [/\b(venue[\d ]{2,7}) b/i], [o, [n, "Dell"], [a, b]], [/\b(q(?:mv|ta)\w+) b/i], [o, [n, "Verizon"], [a, b]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [o, [n, "Barnes & Noble"], [a, b]], [/\b(tm\d{3}\w+) b/i], [o, [n, "NuVision"], [a, b]], [/\b(k88) b/i], [o, [n, "ZTE"], [a, b]], [/\b(nx\d{3}j) b/i], [o, [n, "ZTE"], [a, s]], [/\b(gen\d{3}) b.+49h/i], [o, [n, "Swiss"], [a, s]], [/\b(zur\d{3}) b/i], [o, [n, "Swiss"], [a, b]], [/\b((zeki)?tb.*\b) b/i], [o, [n, "Zeki"], [a, b]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[n, "Dragon Touch"], o, [a, b]], [/\b(ns-?\w{0,9}) b/i], [o, [n, "Insignia"], [a, b]], [/\b((nxa|next)-?\w{0,9}) b/i], [o, [n, "NextBook"], [a, b]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[n, "Voice"], o, [a, s]], [/\b(lvtel\-)?(v1[12]) b/i], [[n, "LvTel"], o, [a, s]], [/\b(ph-1) /i], [o, [n, "Essential"], [a, s]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [o, [n, "Envizen"], [a, b]], [/\b(trio[-\w\. ]+) b/i], [o, [n, "MachSpeed"], [a, b]], [/\btu_(1491) b/i], [o, [n, "Rotor"], [a, b]], [/(shield[\w ]+) b/i], [o, [n, "Nvidia"], [a, b]], [/(sprint) (\w+)/i], [n, o, [a, s]], [/(kin\.[onetw]{3})/i], [[o, /\./g, " "], [n, "Microsoft"], [a, s]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [o, [n, "Zebra"], [a, b]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [o, [n, "Zebra"], [a, s]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [n, o, [a, "console"]], [/droid.+; (shield) bui/i], [o, [n, "Nvidia"], [a, "console"]], [/(playstation [345portablevi]+)/i], [o, [n, "Sony"], [a, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [o, [n, "Microsoft"], [a, "console"]], [/smart-tv.+(samsung)/i], [n, [a, w]], [/hbbtv.+maple;(\d+)/i], [[o, /^/, "SmartTV"], [n, "Samsung"], [a, w]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[n, "LG"], [a, w]], [/(apple) ?tv/i], [n, [o, "Apple TV"], [a, w]], [/crkey/i], [[o, "Chromecast"], [n, "Google"], [a, w]], [/droid.+aft(\w)( bui|\))/i], [o, [n, "Amazon"], [a, w]], [/\(dtv[\);].+(aquos)/i], [o, [n, "Sharp"], [a, w]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[n, u], [o, u], [a, w]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[a, w]], [/((pebble))app/i], [n, o, [a, "wearable"]], [/droid.+; (glass) \d/i], [o, [n, "Google"], [a, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [o, [n, "Zebra"], [a, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [n, [a, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [o, [a, s]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [o, [a, b]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[a, b]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[a, s]], [/(android[-\w\. ]{0,9});.+buil/i], [o, [n, "Generic"]]],
      engine: [[/windows.+ edge\/([\w\.]+)/i], [t, [r, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [t, [r, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [r, t], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [t, r]],
      os: [[/microsoft (windows) (vista|xp)/i], [r, t], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [r, [t, p, h]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[r, "Windows"], [t, p, h]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[t, /_/g, "."], [r, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[r, "Mac OS"], [t, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [t, r], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [r, t], [/\(bb(10);/i], [t, [r, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [t, [r, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [t, [r, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [t, [r, "webOS"]], [/crkey\/([\d\.]+)/i], [t, [r, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[r, "Chromium OS"], t], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [r, t], [/(sunos) ?([\w\.\d]*)/i], [[r, "Solaris"], t], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*!/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [r, t]]
    },
    _v = function v(e, o) {
      if ("object" == _typeof(e) && (o = e, e = void 0), !(this instanceof _v)) return new _v(e, o).getResult();
      var r = e || (void 0 !== i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
        a = o ? function (i, e) {
          var o = {};
          for (var r in i) e[r] && e[r].length % 2 == 0 ? o[r] = e[r].concat(i[r]) : o[r] = i[r];
          return o;
        }(f, o) : f;
      return this.getBrowser = function () {
        var i,
          e = {};
        return e.name = void 0, e.version = void 0, m.call(e, r, a.browser), e.major = "string" == typeof (i = e.version) ? i.replace(/[^\d\.]/g, "").split(".")[0] : void 0, e;
      }, this.getCPU = function () {
        var i = {
          architecture: void 0
        };
        return m.call(i, r, a.cpu), i;
      }, this.getDevice = function () {
        var i = {
          vendor: void 0,
          model: void 0,
          type: void 0
        };
        return m.call(i, r, a.device), i;
      }, this.getEngine = function () {
        var i = {
          name: void 0,
          version: void 0
        };
        return m.call(i, r, a.engine), i;
      }, this.getOS = function () {
        var i = {
          name: void 0,
          version: void 0
        };
        return m.call(i, r, a.os), i;
      }, this.getResult = function () {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      }, this.getUA = function () {
        return r;
      }, this.setUA = function (i) {
        return r = "string" == typeof i && i.length > 255 ? u(i, 255) : i, this;
      }, this.setUA(r), this;
    };
  _v.VERSION = "0.7.28", _v.BROWSER = d([r, t, "major"]), _v.CPU = d(["architecture"]), _v.DEVICE = d([o, n, a, "console", s, w, b, "wearable", "embedded"]), _v.ENGINE = _v.OS = d([r, t]), "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _v), exports.UAParser = _v) : "function" == typeof define && define.amd ? define(function () {
    return _v;
  }) : void 0 !== i && (i.UAParser = _v);
  var g = void 0 !== i && (i.jQuery || i.Zepto);
  if (g && !g.ua) {
    var x = new _v();
    g.ua = x.getResult(), g.ua.get = function () {
      return x.getUA();
    }, g.ua.set = function (i) {
      x.setUA(i);
      var e = x.getResult();
      for (var o in e) g.ua[o] = e[o];
    };
  }
}("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : void 0);
var newPlatformParser = new UAParser();
var newBrowserName = newPlatformParser.getBrowser().name !== undefined ? newPlatformParser.getBrowser().name.toLowerCase() : ''; // Browser name in lowercase
var newBrowserVersion = newBrowserName + newPlatformParser.getBrowser().major; // Browser version
var newOsOriginalName = newPlatformParser.getOS().name !== undefined ? newPlatformParser.getOS().name.toLowerCase().replace(/\s+/g, '') : 'unknown'; // OS name in lowercase and without spaces
var newDeviceName = newPlatformParser.getDevice().model !== undefined ? newPlatformParser.getDevice().model.toLowerCase() : ''; // Device name in lowercase.
var newOSName = 'os-' + newOsOriginalName; // Create OS general body class

if (newOsOriginalName === 'macos') {
  // Mac OS custom body class and menu category active
  newOSName = 'os-mac';
} else if (newOsOriginalName === 'windows') {
  // Windows OS custom body class and menu category active
  newOSName = 'os-win';
  if (newPlatformParser.getOS().version === "7") {
    newOSName = 'os-win os-win-7';
  }
} else if (newOsOriginalName === 'Windows Phone') {
  // Custom body class for Windows Phone OS
  newOSName = 'os-win-phone';
} else if (newOsOriginalName === 'chromiumos') {
  // Custom body class for Chromium OS
  newOSName = 'os-chrome';
}

// Custom body class for iPhone
if (newDeviceName === 'iphone') {
  $('body').addClass('os-iphone');
}

// Custom body class for iPad
if (newDeviceName === 'ipad') {
  $('body').addClass('os-ipad');
}

// Add the OS, browser and browser version classes to the body
$('body').addClass(newOSName + ' ' + newBrowserName + ' ' + newBrowserVersion);

//console.log('ua-parser-js', newBrowserName);
//console.log('ua-parser-js', newBrowserVersion);
//console.log('ua-parser-js', newOsOriginalName);
//console.log('ua-parser-js OS', newPlatformParser.getOS());
"use strict";

// Show search console (from the menu)
$(".search-toggler").on("click", function () {
  $(this).closest(".main-submenu-group").hide();
  $(this).closest(".main-submenu").find(".search-wrapper").show();
});

// Search back button
$(".search-back-btn").on("click", function () {
  $(this).closest(".search-wrapper").hide();
  $(this).closest(".main-submenu").find(".main-submenu-group").show();
  $("body").removeClass("search-general-active");
});

// Update text and value of the search console buttons by selecting options from their dropdown
$(".js-search-select li").on("click keydown", function (event) {
  // Skip hero search dropdowns - they have their own handler in HeroSearch object
  if ($(this).closest("#hero-cities-list, #hero-domains-list, #hero-periods-list").length > 0) {
    return;
  }
  var thisText = $(this).text().trim();
  if (event.key === "Enter" || event.type === "click") {
    $(this).addClass("selected").siblings().removeClass("selected");
    $(this).parent().parent().siblings(".search-console-slice-btn").val(thisText);
    $(this).parent().parent().siblings(".search-console-slice-btn").children(".search-console-selection").text(thisText);
    $(this).parent().parent().siblings(".search-console-slice-btn").children(".search-console-selection").addClass("scs-active");
  }
});

// Modify the padding of the search's dropdown to accomodate the scrollbar when there are many options
$(".search-console-slice-btn").on("click", function () {
  if ($(this).siblings(".search-console-slice-dropdown").hasClass("show")) {
    var searchDropdownHeight = $(this).siblings(".search-console-slice-dropdown.show").children("ul")[0].scrollHeight;
    if (searchDropdownHeight > 255) {
      $(this).siblings(".search-console-slice-dropdown").addClass("scsDropOverflow");
    }
  }
});

// Show search console outside of the menu in the hero area
$(".search-trigger-mobile").on("click", function () {
  $(this).siblings(".search-wrapper-general").fadeIn();
  $("body").addClass("search-general-active");
});

// ========================================
// HERO SEARCH SYSTEM - Interactive Filtering
// ========================================

var HeroSearch = {
  state: {
    selectedCityId: null,
    selectedCitySlug: null,
    selectedCityName: null,
    selectedDomainSlug: null,
    selectedDomainName: null,
    selectedPeriodId: null,
    selectedStartDate: null,
    selectedEndDate: null,
    selectedPeriodText: null,
    isFiltering: false
  },
  init: function init() {
    if (typeof apsapSearchData === "undefined") {
      console.log("HeroSearch: apsapSearchData not defined, skipping init");
      return;
    }
    this.bindEvents();
    this.restoreSelections();
  },
  bindEvents: function bindEvents() {
    var self = this;

    // City selection
    $(document).on("click keydown", "#hero-cities-list li", function (e) {
      if ($(this).attr("tabindex") === "-1") return; // Skip loading placeholder

      if (e.key === "Enter" || e.type === "click") {
        var $this = $(this);
        self.state.selectedCityId = $this.data("city-id");
        self.state.selectedCitySlug = $this.data("city-slug");
        self.state.selectedCityName = $this.data("city-name");
        console.log(self.state);
        console.log("HeroSearch: City selected", {
          id: self.state.selectedCityId,
          slug: self.state.selectedCitySlug,
          name: self.state.selectedCityName
        });

        // Update UI
        $this.addClass("selected").siblings().removeClass("selected");

        // Update button text
        $("#searchTriggerDrop-1a .search-console-selection").text(self.state.selectedCityName).addClass("scs-active");

        // Filter domains and periods by this city
        if (self.state.selectedCityId) {
          self.filterBySelection();
        }
      }
    });

    // Domain selection
    $(document).on("click keydown", "#hero-domains-list li", function (e) {
      if ($(this).attr("tabindex") === "-1") return; // Skip loading placeholder

      if (e.key === "Enter" || e.type === "click") {
        var $this = $(this);
        self.state.selectedDomainSlug = $this.data("domain-slug");
        self.state.selectedDomainName = $this.data("domain-name");

        // Update UI
        $this.addClass("selected").siblings().removeClass("selected");

        // Update button text
        $("#searchTriggerDrop-2a .search-console-selection").text(self.state.selectedDomainName).addClass("scs-active");

        // Filter cities and periods by this domain
        if (self.state.selectedDomainSlug) {
          self.filterBySelection();
        }
      }
    });

    // Period selection
    $(document).on("click keydown", "#hero-periods-list li", function (e) {
      if ($(this).attr("tabindex") === "-1") return; // Skip loading placeholder

      if (e.key === "Enter" || e.type === "click") {
        var $this = $(this);
        self.state.selectedPeriodId = $this.data("period-id");
        self.state.selectedStartDate = $this.data("start-date");
        self.state.selectedEndDate = $this.data("end-date");

        // Get the period text from first div
        self.state.selectedPeriodText = $this.find("div:first").text().trim();
        console.log("HeroSearch: Period selected", {
          id: self.state.selectedPeriodId,
          startDate: self.state.selectedStartDate,
          endDate: self.state.selectedEndDate,
          text: self.state.selectedPeriodText
        });

        // Update UI
        $this.addClass("selected").siblings().removeClass("selected");

        // Update button text
        $("#searchTriggerDrop-3a .search-console-selection").text(self.state.selectedPeriodText).addClass("scs-active");

        // Filter cities and domains by this period
        if (self.state.selectedStartDate && self.state.selectedEndDate) {
          self.filterBySelection();
        }
      }
    });

    // Search button click
    $(".search-console-bubbles, #hero-search-btn").on("click", function (e) {
      e.preventDefault();
      self.performSearch();
    });
  },
  filterDomainsByCity: function filterDomainsByCity(cityId) {
    var _this = this;
    if (this.state.isFiltering) return;
    this.state.isFiltering = true;
    $.ajax({
      url: apsapSearchData.ajaxUrl,
      method: "POST",
      data: {
        action: "apsap_get_filtered_search",
        nonce: apsapSearchData.nonce,
        city_id: cityId
      },
      success: function success(response) {
        _this.state.isFiltering = false;
        if (response.success && response.data.domains) {
          // Show only available domains
          var availableSlugs = response.data.domains.map(function (d) {
            return d.slug;
          });
          $("#hero-domains-list li").each(function () {
            var slug = $(this).data("domain-slug");
            if (slug) {
              $(this).toggle(availableSlugs.includes(slug));
            }
          });
          console.log("HeroSearch: Filtered domains by city", availableSlugs);
        }
      },
      error: function error() {
        _this.state.isFiltering = false;
        console.error("HeroSearch: Failed to filter domains");
      }
    });
  },
  filterCitiesByDomain: function filterCitiesByDomain(domainSlug) {
    var _this2 = this;
    if (this.state.isFiltering) return;
    this.state.isFiltering = true;
    $.ajax({
      url: apsapSearchData.ajaxUrl,
      method: "POST",
      data: {
        action: "apsap_get_filtered_search",
        nonce: apsapSearchData.nonce,
        domain_slug: domainSlug
      },
      success: function success(response) {
        _this2.state.isFiltering = false;
        if (response.success && response.data.cities) {
          // Show only available cities
          var availableIds = response.data.cities.map(function (c) {
            return c.city_id;
          });
          $("#hero-cities-list li").each(function () {
            var cityId = $(this).data("city-id");
            if (cityId) {
              $(this).toggle(availableIds.includes(cityId));
            }
          });
          console.log("HeroSearch: Filtered cities by domain", availableIds);
        }
      },
      error: function error() {
        _this2.state.isFiltering = false;
        console.error("HeroSearch: Failed to filter cities");
      }
    });
  },
  /**
   * Unified filtering method - filters all three dropdowns based on current selection
   * Supports interdependent filtering across city, domain, and period
   */
  filterBySelection: function filterBySelection() {
    var _this3 = this;
    if (this.state.isFiltering) return;
    this.state.isFiltering = true;
    var requestData = {
      action: "apsap_get_filtered_search",
      nonce: apsapSearchData.nonce
    };

    // Add current selections to request
    if (this.state.selectedCityId) {
      requestData.city_id = this.state.selectedCityId;
    }
    if (this.state.selectedDomainSlug) {
      requestData.domain_slug = this.state.selectedDomainSlug;
    }
    if (this.state.selectedStartDate && this.state.selectedEndDate) {
      requestData.start_date = this.state.selectedStartDate;
      requestData.end_date = this.state.selectedEndDate;
    }
    console.log("HeroSearch: Filtering with params:", requestData);
    $.ajax({
      url: apsapSearchData.ajaxUrl,
      method: "POST",
      data: requestData,
      success: function success(response) {
        _this3.state.isFiltering = false;
        if (!response.success) {
          console.error("HeroSearch: Filter API returned error");
          return;
        }

        // Filter cities dropdown (if not the selected dimension)
        if (!_this3.state.selectedCityId && response.data.cities) {
          var availableCityIds = response.data.cities.map(function (c) {
            return c.city_id;
          });
          $("#hero-cities-list li").each(function () {
            var cityId = $(this).data("city-id");
            if (cityId) {
              $(this).toggle(availableCityIds.includes(cityId));
            }
          });
          console.log("HeroSearch: Filtered cities", availableCityIds.length + " available");
        }

        // Filter domains dropdown (if not the selected dimension)
        if (!_this3.state.selectedDomainSlug && response.data.domains) {
          var availableDomainSlugs = response.data.domains.map(function (d) {
            return d.slug;
          });
          $("#hero-domains-list li").each(function () {
            var slug = $(this).data("domain-slug");
            if (slug) {
              $(this).toggle(availableDomainSlugs.includes(slug));
            }
          });
          console.log("HeroSearch: Filtered domains", availableDomainSlugs.length + " available");
        }

        // Filter periods dropdown (if not the selected dimension)
        if (!_this3.state.selectedPeriodId && response.data.periods) {
          var availablePeriodIds = response.data.periods.map(function (p) {
            return p.period_id;
          });
          $("#hero-periods-list li").each(function () {
            var periodId = $(this).data("period-id");
            if (periodId) {
              $(this).toggle(availablePeriodIds.includes(periodId));
            }
          });
          console.log("HeroSearch: Filtered periods", availablePeriodIds.length + " available");
        }
      },
      error: function error() {
        _this3.state.isFiltering = false;
        console.error("HeroSearch: Failed to fetch filtered data");
      }
    });
  },
  performSearch: function performSearch() {
    var city = this.state.selectedCitySlug;
    var domain = this.state.selectedDomainSlug;
    var period = this.state.selectedPeriodId;
    var startDate = this.state.selectedStartDate;
    var endDate = this.state.selectedEndDate;
    console.log("HeroSearch: performSearch called with state:", {
      city: city,
      domain: domain,
      period: period,
      fullState: this.state
    });
    var url = "";
    if (city && domain) {
      // Both selected → /oferta-cursuri-tematica/{domain}/{city}/
      url = "/oferta-cursuri-tematica/".concat(domain, "/").concat(city, "/");
    } else if (domain) {
      // Only domain → /oferta-cursuri-tematica/{domain}/
      url = "/oferta-cursuri-tematica/".concat(domain, "/");
    } else if (city) {
      // Only city selected
      if (city === "on-line") {
        // Special case: online courses page
        url = "/cursuri-acreditate-online/";
      } else {
        // Regular location page
        url = "/oferta-cursuri-cazare/".concat(city, "/");
      }
    } else if (period && startDate && endDate) {
      // Only period selected → period page with date params
      url = "/oferta-cursuri-perioada/?start_date=".concat(startDate, "&end_date=").concat(endDate);
      console.log("HeroSearch: Period-only search", {
        startDate: startDate,
        endDate: endDate
      });
    } else {
      // Nothing selected
      console.error("HeroSearch: No city, domain or period selected!");
      alert("Te rugăm să selectezi o locație, o tematică sau o perioadă.");
      return;
    }
    console.log("HeroSearch: Redirecting to", url);
    window.location.href = url;
  },
  restoreSelections: function restoreSelections() {
    // Restore from URL (already set via PHP classes 'selected')
    var $selectedCity = $("#hero-cities-list li.selected");
    var $selectedDomain = $("#hero-domains-list li.selected");
    if ($selectedCity.length) {
      this.state.selectedCityId = $selectedCity.data("city-id");
      this.state.selectedCitySlug = $selectedCity.data("city-slug");
      this.state.selectedCityName = $selectedCity.data("city-name");

      // Filter domains based on preselected city
      if (this.state.selectedCityId) {
        this.filterDomainsByCity(this.state.selectedCityId);
      }
    }
    if ($selectedDomain.length) {
      this.state.selectedDomainSlug = $selectedDomain.data("domain-slug");
      this.state.selectedDomainName = $selectedDomain.data("domain-name");

      // Filter cities based on preselected domain
      if (this.state.selectedDomainSlug) {
        this.filterCitiesByDomain(this.state.selectedDomainSlug);
      }
    }
  }
};

// Initialize on page load
$(document).ready(function () {
  HeroSearch.init();
});
"use strict";

// Initialization for the first slider with full image cards from the main submenu under the search console
var cardFullImageSlider = new Swiper("#card-full-image-slider", {
  slidesPerView: "auto",
  spaceBetween: 5,
  centerInsufficientSlides: true,
  breakpoints: {
    320: {
      centeredSlides: true
    },
    400: {
      centeredSlides: false
    },
    1280: {
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true
      }
    }
  }
});

// Initialization for the hero slider
var heroSlider = new Swiper("#hero-slider", {
  effect: "fade",
  autoplay: {
    enabled: true,
    delay: 4000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  }
});

// +++++++++++++ Courses timeline slider START ++++++++++++++ //
// Initialization for the courses slider, the one with months's names
var coursesSlider = new Swiper("#courses-slider", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// Pe clickul asta o sa faci tu ajax-ul
$("#courses-slider .swiper-slide").on("click", function () {
  $(this).addClass("current-active").siblings().removeClass("current-active");
});
// +++++++++++++ Courses timeline slider END ++++++++++++++ //

// Initialization for the overflowing cards slider in the big blue area
var carsOverflowSlider2 = new Swiper("#card-overflow-slider", {
  slidesPerView: "auto",
  centerInsufficientSlides: true,
  breakpoints: {
    320: {
      enabled: false
    },
    1200: {
      enabled: true,
      spaceBetween: 30,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true
      }
    }
  }
});

// Initialization for the lectori slider (no fisheye)
var simpleLectoriSlider = new Swiper(".js-swiper-medallion", {
  loop: true,
  a11y: {
    containerMessage: "Lectorii APSAP",
    containerRoleDescriptionMessage: "Lectorii experimentați de la APSAP sunt specialiști în domeniile pe care le predau"
  },
  breakpoints: {
    320: {
      enabled: false
    },
    1200: {
      enabled: true,
      slidesPerView: 5,
      spaceBetween: 15,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: "Carusel cu lectorii APSAP",
        containerRoleDescriptionMessage: "Lectorii experimentați de la APSAP sunt specialiști în domeniile pe care le predau"
      }
    },
    1374: {
      enabled: true,
      slidesPerView: 6,
      spaceBetween: 30,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: "Carusel cu lectorii APSAP",
        containerRoleDescriptionMessage: "Lectorii experimentați de la APSAP sunt specialiști în domeniile pe care le predau"
      }
    }
  }
});

// Initialization for the team slider with fisheye
var medallionFisheyeSlider = new Swiper(".js-medallion-fisheye", {
  slideActiveClass: "medallion-zoom",
  a11y: {
    containerMessage: "Echipa APSAP",
    containerRoleDescriptionMessage: "Echipa centrului de formare APSAP"
  },
  breakpoints: {
    320: {
      enabled: false
    },
    1200: {
      enabled: true,
      slidesPerView: 3,
      spaceBetween: 15,
      initialSlide: 2,
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      autoplay: {
        enabled: true,
        delay: 4000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: "Carusel cu echipa APSAP",
        containerRoleDescriptionMessage: "Echipa centrului de formare APSAP"
      }
    },
    1374: {
      enabled: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      initialSlide: 2,
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      autoplay: {
        enabled: true,
        delay: 4000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: "Carusel cu echipa APSAP",
        containerRoleDescriptionMessage: "Echipa centrului de formare APSAP"
      }
    }
  }
});

// Add min height on the fisheye wrapper so that it doesn't move the page when it zooms
setTimeout(function () {
  var jsMedallionFisheye = $(".js-medallion-fisheye").outerHeight();
  $(".js-medallion-fisheye").css("min-height", jsMedallionFisheye);
}, 1000);

// Initialization for the documents/certifications slider
var certificationsSlider = new Swiper(".js-swiper-certification", {
  rewind: true,
  centerInsufficientSlides: true,
  a11y: {
    containerMessage: "Autorizatii si certificate APSAP",
    containerRoleDescriptionMessage: "Centrul de Formare APSAP este furnizor acreditat de formare profesională înregistrat în Registrul Național al Furnizorilor de Formare Profesionala a Adulților a Municipiului București iar certificatele de absolvire sunt emise de Comisia de Autorizare a Furnizorilor de Formare Profesională a Adulţilor sub egida Ministerului Muncii și Protecției Sociale și a Ministerului Educației și Cercetării"
  },
  breakpoints: {
    320: {
      enabled: false
    },
    1200: {
      enabled: true,
      slidesPerView: 5,
      spaceBetween: 15,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: "Carusel cu autorizatii si certificate APSAP",
        containerRoleDescriptionMessage: "Centrul de Formare APSAP este furnizor acreditat de formare profesională înregistrat în Registrul Național al Furnizorilor de Formare Profesionala a Adulților a Municipiului București iar certificatele de absolvire sunt emise de Comisia de Autorizare a Furnizorilor de Formare Profesională a Adulţilor sub egida Ministerului Muncii și Protecției Sociale și a Ministerului Educației și Cercetării"
      }
    },
    1374: {
      enabled: true,
      slidesPerView: 6,
      spaceBetween: 15,
      autoplay: {
        enabled: true,
        delay: 3000,
        pauseOnMouseEnter: true
      },
      a11y: {
        containerMessage: "Carusel cu autorizatii si certificate APSAP",
        containerRoleDescriptionMessage: "Centrul de Formare APSAP este furnizor acreditat de formare profesională înregistrat în Registrul Național al Furnizorilor de Formare Profesionala a Adulților a Municipiului București iar certificatele de absolvire sunt emise de Comisia de Autorizare a Furnizorilor de Formare Profesională a Adulţilor sub egida Ministerului Muncii și Protecției Sociale și a Ministerului Educației și Cercetării"
      }
    }
  }
});

// Hotels thumbnail sliders
var thumbsBigSlider = document.querySelectorAll(".js-thumbs-big");
var thumbsSmallSlider = document.querySelectorAll(".js-thumbs-small");
for (var i = 0; i < thumbsBigSlider.length; i++) {
  thumbsBigSlider[i].classList.add("js-thumbs-big-" + i);
  thumbsSmallSlider[i].classList.add("js-thumbs-small-" + i);
  var hotelThumbs = new Swiper(".js-thumbs-small-" + i, {
    //direction: "vertical",
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    keyboard: {
      enabled: true
    },
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        direction: "horizontal"
      },
      600: {
        direction: "vertical"
      }
    }
  });
  var hotelThumbsBig = new Swiper(".js-thumbs-big-" + i, {
    spaceBetween: 10,
    keyboard: {
      enabled: true
    },
    thumbs: {
      swiper: hotelThumbs
    }
  });
}

/* ---------- NEW ------------ */
var formatoriOverflowSlider = new Swiper("#formatoriOverflowSlider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1
  }
});
var eventAgendaSlider = new Swiper("#eventAgendaSlider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1
  },
  scrollbar: {
    el: ".agenda-scrollbar",
    draggable: true,
    dragSize: 100
  }
});
var photoGallerySlider = new Swiper("#photoGallerySlider", {
  slidesPerView: "auto",
  spaceBetween: 15,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1
  }
});
var packagesSlider = new Swiper("#packagesSlider", {
  slidesPerView: "auto",
  spaceBetween: 25,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1
  }
});
var medicalCoursesOverflowSlider = new Swiper("#medicalCoursesOverflowSlider", {
  slidesPerView: "auto",
  spaceBetween: 15,
  grabCursor: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: "auto"
    }
  }
});