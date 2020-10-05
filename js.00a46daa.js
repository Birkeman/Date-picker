// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
// import { eachYearOfInterval, format, lightFormat, getDate, parseISO, formatISO } from 'date-fns'
// import { eachDayOfInterval } from 'date-fns'
// import { addMonths, subMonths } from 'date-fns'
// import { getMonth, getYear, startOfMonth, endOfMonth } from 'date-fns'
// import { isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns'
// import { subDays } from 'date-fns'
// import { getUnixTime } from 'date-fns'
// import { fromUnixTime } from 'date-fns'
// import { isFuture, isAfter, isBefore } from 'date-fns'
// import { each } from 'lodash'
// import { zhCN } from 'date-fns/locale'
// // var result = eachYearOfInterval({
// //     start: new Date(2014, 1, 6),
// //     end: new Date(2017, 7, 10)
// // })
// var startDate = new Date();
// var lightStartDate = format(startDate, "yyyy-MM-dd")
// var startYear = getYear(startDate);
// let startMonth = startOfMonth(startDate);
// let endMonth = endOfMonth(startDate);
// var result2 = eachDayOfInterval({
//     start: startMonth,
//     end: endMonth
// });
// //Get month displayed
// const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// const d = new Date();
// $(".js-month-name").html(monthNames[d.getMonth()] + " " + startYear);
// ////////////////////////////////
// ///////////GET STARTING DAY OF WEEK and GET PREVIOUS MONTH END/////////
// let firstDay = isMonday(startMonth)
// console.log("FIRST DAY : "+firstDay)
// console.log("START MONTH : "+startMonth)
// let secondDay = isTuesday(startMonth)
// let thirdDay = isWednesday(startMonth)
// let fourthDay = isThursday(startMonth)
// let fifthDay = isFriday(startMonth)
// let sixthDay = isSaturday(startMonth)
// let minusOne = subDays(startMonth,1)
// let minusTwo = subDays(startMonth,2)
// let minusThree = subDays(startMonth,3)
// let minusFour = subDays(startMonth,4)
// let minusFive = subDays(startMonth,5)
// let minusSix = subDays(startMonth,6)
//     if(firstDay == true) {
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(secondDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(thirdDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(fourthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(fifthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusFive, "MM.dd.yyy")+'">'+getDate(minusFive)+'</li><li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(sixthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusSix, "MM.dd.yyy")+'">'+getDate(minusSix)+'</li><li class="single-date disabled" data-date="'+ format(minusFive, "MM.dd.yyy")+'">'+getDate(minusFive)+'</li><li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     }
////////////////////////////////
//////DISPLAY EACH DAY IN MONTH/////
// result2.forEach(date => {
//     var i = getUnixTime(date);
//     $(".js-calendar").append("<li class='single-date' data-date="+ formatISO(date, { representation: "date" })  +">"+date.getDate()+"</li>")
//     console.log(date.getUTCDate())
// });
////////////////////////////////////
//////////////////GET CURRENT DATE///////////
// function currentDate(){
//     $(".single-date[data-date='" + lightStartDate + "']").addClass("current-date disabled"); 
// }
/////////////////////////////////////////////
$(document).ready(function () {
  window.currentMonth();
  window.monthDays();
  window.currentDate();
  window.beforeToday();
  $(".next").click(getFutureDays);
  $(".prev").click(getPastDays);
  $(".enabled").click(selectDate);
  $(".enabled").addClass("hovered");
}); ////////////////DISABLE DATES BEFORE TODAY///
// $(".js-calendar .single-date").each(function(){
//     if($(this).attr("data-date")<=lightStartDate){
//         $(this).addClass("disabled");
//     } else{
//         $(this).addClass("enabled");
//     }
// })
/////////////////////////////////////////////
// $(document).on("click", ".next", function(){
//     var addM = addMonths(startDate, 1);
//     var addY = getYear(addM);
//     startDate = addM;
//     var startMonth = startOfMonth(startDate);
//     var endMonth = endOfMonth(startDate);
//     var result2 = eachDayOfInterval({
//         start: startMonth,
//         end: endMonth
//     });
//     $(".js-month-name").html(monthNames[addM.getMonth()] + " " + addY);
//     $(".js-calendar").html("")
//     let firstDay = isMonday(startMonth)
//     console.log("FIRST DAY : "+firstDay)
//     console.log("START MONTH : "+startMonth)
//     let secondDay = isTuesday(startMonth)
//     let thirdDay = isWednesday(startMonth)
//     let fourthDay = isThursday(startMonth)
//     let fifthDay = isFriday(startMonth)
//     let sixthDay = isSaturday(startMonth)
//     let minusOne = subDays(startMonth,1)
//     let minusTwo = subDays(startMonth,2)
//     let minusThree = subDays(startMonth,3)
//     let minusFour = subDays(startMonth,4)
//     let minusFive = subDays(startMonth,5)
//     let minusSix = subDays(startMonth,6)
//     if(firstDay == true) {
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(secondDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(thirdDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(fourthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(fifthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusFive, "MM.dd.yyy")+'">'+getDate(minusFive)+'</li><li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(sixthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusSix, "MM.dd.yyy")+'">'+getDate(minusSix)+'</li><li class="single-date disabled" data-date="'+ format(minusFive, "MM.dd.yyy")+'">'+getDate(minusFive)+'</li><li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     }
//         //////DISPLAY EACH DAY IN MONTH/////
//         result2.forEach(date => {
//             var i = getUnixTime(date);
//             $(".js-calendar").append("<li class='single-date' data-date="+ formatISO(date, { representation: "date" }) +">"+date.getDate()+"</li>")
//             console.log(date.getUTCDate())
//         });
//         ////////////////////////////////////
//         window.currentDate();
//         ////////////////DISABLE DATES BEFORE TODAY///
//             $(".js-calendar .single-date").each(function(){
//                 var i = $(this).attr("data-date")
//                 var z = parseISO(i)
//                 if(isFuture(z)){
//                     $(this).addClass("enabled");
//                 } else{
//                     $(this).addClass("disabled");
//                 }
//             })
//         /////////////////////////////////////////////
// })
// $(document).on("click", ".prev", function(){
//     var subM = subMonths(startDate, 1);
//     var addY = getYear(subM);
//     startDate = subM;
//     $(".js-month-name").html(monthNames[subM.getMonth()] + " " + addY);
//     $(".js-calendar").html("");
//     var startMonth = startOfMonth(startDate);
//     var endMonth = endOfMonth(startDate);
//     var result2 = eachDayOfInterval({
//         start: startMonth,
//         end: endMonth
//     });
//     let firstDay = isMonday(startMonth)
//     console.log("FIRST DAY : "+firstDay)
//     console.log("START MONTH : "+startMonth)
//     let secondDay = isTuesday(startMonth)
//     let thirdDay = isWednesday(startMonth)
//     let fourthDay = isThursday(startMonth)
//     let fifthDay = isFriday(startMonth)
//     let sixthDay = isSaturday(startMonth)
//     let minusOne = subDays(startMonth,1)
//     let minusTwo = subDays(startMonth,2)
//     let minusThree = subDays(startMonth,3)
//     let minusFour = subDays(startMonth,4)
//     let minusFive = subDays(startMonth,5)
//     let minusSix = subDays(startMonth,6)
//     if(firstDay == true) {
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(secondDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(thirdDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(fourthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(fifthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusFive, "MM.dd.yyy")+'">'+getDate(minusFive)+'</li><li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     } else if(sixthDay == true){
//         $(".js-calendar").append('<li class="single-date disabled" data-date="'+ format(minusSix, "MM.dd.yyy")+'">'+getDate(minusSix)+'</li><li class="single-date disabled" data-date="'+ format(minusFive, "MM.dd.yyy")+'">'+getDate(minusFive)+'</li><li class="single-date disabled" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
//     }
//         //////DISPLAY EACH DAY IN MONTH/////
//         result2.forEach(date => {
//             var i = getUnixTime(date);
//             $(".js-calendar").append("<li class='single-date' data-date="+ formatISO(date, { representation: "date" }) +">"+date.getDate()+"</li>")
//             console.log(date.getUTCDate())
//         });
//         ////////////////////////////////////
//         window.currentDate();
//         ////////////////DISABLE DATES BEFORE TODAY///
//         $(".js-calendar .single-date").each(function(){
//             var i = $(this).attr("data-date")
//             var z = parseISO(i)
//             console.log("I = "+ i)
//             console.log("Z = "+ z)
//             if(isFuture(z)){
//                 $(this).addClass("enabled");
//             } else{
//                 $(this).addClass("disabled");
//             }
//         })
//         /////////////////////////////////////////////
// })
// $(".js-calendar .single-date").on("click", function(){
//     var u = $(this).attr("data-date");
//     var clickedDate = fromUnixTime(u);
//     var lightStart = lightFormat(clickedDate, 'dd.MM.yyyy')
//     $(".js-start-date").val(lightStart);
//     alert(clickedDate)
//     var secondDate = isFuture(new Date(2014, 11, 31))
//     var afterDate = isAfter(clickedDate, startDate)
//     console.log("afterDate = "+ afterDate)
// })
// var clicks = 0;
// $(document).on("click", ".enabled", function(){
//     // if($(".js-start-date").val() == $(this).attr("data-date")){
//     //     alert($(".js-start-date").val())
//     // }
//     var u = $(this).attr("data-date");
//     if (clicks % 2 == 0){
//         $(".enabled").removeClass("selected-days")
//         $(".enabled").removeClass("start-date end-date");
//         $(".js-start-date, .js-end-date").val('')
//         // var clickedDate = fromUnixTime(u);
//         // var lightStart = lightFormat(clickedDate, 'dd.MM.yyyy')
//         $(".js-start-date").val(u);
//         $(this).addClass("start-date")
//         var z = $(this).attr("data-date");
//         // if($(".js-calendar .single-date").attr("data-date")>u){
//         //     alert("true")
//         // }
//         console.log("this iz Z: "+ $(".start-date").attr("data-date"))
//         // if($(".js-start-date").val() != 0 & $(".js-end-date").val() == 0){
//         //     $(".js-end-date").val($(this).attr("data-date"))
//         // }
//     } else{
//         $(".js-end-date").val(u);
//         $(this).addClass("end-date")
//         $(".start-date").nextUntil(".end-date").addClass("selected-days")
//         $(".enabled").each(function(){
//             console.log($(this).attr("data-date"))
//             // if($(".enabled").text()> $(".start-date").text()){
//             //     console.log("RADI!!!!!!")
//             //     $(this).css("background", "purple")
//             // } else{
//             //     console.log("NE RADI!!!!!")
//             // }
//         });
//         // var v = $(this).attr("data-date");
//         // var secondDate = fromUnixTime(v)
//         // var afterDate = isAfter(clickedDate, startDate)
//         // var lightEnd = lightFormat(secondDate, 'dd.MM.yyyy')
//         // $(".js-end-date").val(lightEnd)
//         // $(this).css("background-color", "red")
//     }
//     ++clicks;
//     $(".js-calendar .single-date").each(function(){
//         if($(this).attr("data-date")>u){
//             $(this).addClass("hovered");
//         }
//     })
// });
/////TESTING AREA///////
// var tester = getUnixTime(startDate)
// console.log("tester: "+ tester)
// var newTest = format(startDate, 'MM/dd/yyyy')
// console.log("tester2: "+ newTest)
// var newTest3 = fromUnixTime(1600812000)
// console.log("tester3: "+ newTest3)
// console.log(startDate + "----------" + lightStartDate)
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50933" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map