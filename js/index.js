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

// var result = eachYearOfInterval({
//     start: new Date(2014, 1, 6),
//     end: new Date(2017, 7, 10)
// })
var startDate = new Date();
var lightStartDate = dateFns.format(startDate, "yyyy-MM-dd")
var startYear = dateFns.getYear(startDate);
let startMonth = dateFns.startOfMonth(startDate);
let endMonth = dateFns.endOfMonth(startDate);
var result2 = dateFns.eachDayOfInterval({
    start: startMonth,
    end: endMonth
})

//Get month displayed
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const d = new Date();
$(".js-month-name").html(monthNames[d.getMonth()] + " " + startYear);
////////////////////////////////

///////////GET STARTING DAY OF WEEK and GET PREVIOUS MONTH END/////////
let firstDay = dateFns.isMonday(startMonth)
console.log("FIRST DAY : "+firstDay)
console.log("START MONTH : "+startMonth)
let secondDay = dateFns.isTuesday(startMonth)
let thirdDay = dateFns.isWednesday(startMonth)
let fourthDay = dateFns.isThursday(startMonth)
let fifthDay = dateFns.isFriday(startMonth)
let sixthDay = dateFns.isSaturday(startMonth)

let minusOne = dateFns.subDays(startMonth,1)
let minusTwo = dateFns.subDays(startMonth,2)
let minusThree = dateFns.subDays(startMonth,3)
let minusFour = dateFns.subDays(startMonth,4)
let minusFive = dateFns.subDays(startMonth,5)
let minusSix = dateFns.subDays(startMonth,6)

    if(firstDay == true) {
        $(".js-calendar").append('<li class="single-date disabled" data-date="'+ dateFns.format(minusOne, "MM.dd.yyy")+'">'+dateFns.getDate(minusOne)+'</li>')
    } else if(secondDay == true){
        $(".js-calendar").append('<li class="single-date disabled" data-date="'+ dateFns.format(minusTwo, "MM.dd.yyy")+'">'+dateFns.getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusOne, "MM.dd.yyy")+'">'+dateFns.getDate(minusOne)+'</li>')
    } else if(thirdDay == true){
        $(".js-calendar").append('<li class="single-date disabled" data-date="'+ dateFns.format(minusThree, "MM.dd.yyy")+'">'+dateFns.getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusTwo, "MM.dd.yyy")+'">'+dateFns.getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusOne, "MM.dd.yyy")+'">'+dateFns.getDate(minusOne)+'</li>')
    } else if(fourthDay == true){
        $(".js-calendar").append('<li class="single-date disabled" data-date="'+ dateFns.format(minusFour, "MM.dd.yyy")+'">'+dateFns.getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusThree, "MM.dd.yyy")+'">'+dateFns.getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusTwo, "MM.dd.yyy")+'">'+dateFns.getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusOne, "MM.dd.yyy")+'">'+dateFns.getDate(minusOne)+'</li>')
    } else if(fifthDay == true){
        $(".js-calendar").append('<li class="single-date disabled" data-date="'+ dateFns.format(minusFive, "MM.dd.yyy")+'">'+dateFns.getDate(minusFive)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusFour, "MM.dd.yyy")+'">'+dateFns.getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusThree, "MM.dd.yyy")+'">'+dateFns.getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusTwo, "MM.dd.yyy")+'">'+dateFns.getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusOne, "MM.dd.yyy")+'">'+dateFns.getDate(minusOne)+'</li>')
    } else if(sixthDay == true){
        $(".js-calendar").append('<li class="single-date disabled" data-date="'+ dateFns.format(minusSix, "MM.dd.yyy")+'">'+dateFns.getDate(minusSix)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusFive, "MM.dd.yyy")+'">'+dateFns.getDate(minusFive)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusFour, "MM.dd.yyy")+'">'+dateFns.getDate(minusFour)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusThree, "MM.dd.yyy")+'">'+dateFns.getDate(minusThree)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusTwo, "MM.dd.yyy")+'">'+dateFns.getDate(minusTwo)+'</li><li class="single-date disabled" data-date="'+ dateFns.format(minusOne, "MM.dd.yyy")+'">'+dateFns.getDate(minusOne)+'</li>')
    }
////////////////////////////////

//////DISPLAY EACH DAY IN MONTH/////
result2.forEach(date => {
    var i = dateFns.getUnixTime(date);
    $(".js-calendar").append("<li class='single-date' data-date="+ dateFns.formatISO(date, { representation: "date" })  +">"+date.getDate()+"</li>")
    console.log(date.getUTCDate())
});
////////////////////////////////////

//////////////////GET CURRENT DATE///////////
// function currentDate(){
//     $(".single-date[data-date='" + lightStartDate + "']").addClass("current-date disabled"); 
// }
/////////////////////////////////////////////
window.currentDate();
////////////////DISABLE DATES BEFORE TODAY///
    $(".js-calendar .single-date").each(function(){
        if($(this).attr("data-date")<=lightStartDate){
            $(this).addClass("disabled");
        } else{
            $(this).addClass("enabled");
        }
    })
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

//     // $(".js-calendar .single-date").on("click", function(){
//     //     var u = $(this).attr("data-date");
//     //     var clickedDate = fromUnixTime(u);
//     //     var lightStart = lightFormat(clickedDate, 'dd.MM.yyyy')
//     //     $(".js-start-date").val(lightStart);
//     //     alert(clickedDate)
//     //     var secondDate = isFuture(new Date(2014, 11, 31))
//     //     var afterDate = isAfter(clickedDate, startDate)
//     //     console.log("afterDate = "+ afterDate)
//     // })

//     var clicks = 0;
    
//     $(document).on("click", ".enabled", function(){


//         // if($(".js-start-date").val() == $(this).attr("data-date")){
//         //     alert($(".js-start-date").val())
//         // }
//         var u = $(this).attr("data-date");
//         if (clicks % 2 == 0){
//             $(".enabled").removeClass("selected-days")
//             $(".enabled").removeClass("start-date end-date");
//             $(".js-start-date, .js-end-date").val('')
//             // var clickedDate = fromUnixTime(u);
//             // var lightStart = lightFormat(clickedDate, 'dd.MM.yyyy')
//             $(".js-start-date").val(u);
//             $(this).addClass("start-date")
//             var z = $(this).attr("data-date");
//             // if($(".js-calendar .single-date").attr("data-date")>u){
//             //     alert("true")
//             // }
//             console.log("this iz Z: "+ $(".start-date").attr("data-date"))
//             // if($(".js-start-date").val() != 0 & $(".js-end-date").val() == 0){
//             //     $(".js-end-date").val($(this).attr("data-date"))
//             // }

//         } else{
//             $(".js-end-date").val(u);
//             $(this).addClass("end-date")

//             $(".start-date").nextUntil(".end-date").addClass("selected-days")

//             $(".enabled").each(function(){
//                 console.log($(this).attr("data-date"))
//                 // if($(".enabled").text()> $(".start-date").text()){
//                 //     console.log("RADI!!!!!!")
//                 //     $(this).css("background", "purple")
//                 // } else{
//                 //     console.log("NE RADI!!!!!")

//                 // }
//             });
//             // var v = $(this).attr("data-date");
//             // var secondDate = fromUnixTime(v)
//             // var afterDate = isAfter(clickedDate, startDate)
//             // var lightEnd = lightFormat(secondDate, 'dd.MM.yyyy')
//             // $(".js-end-date").val(lightEnd)
//             // $(this).css("background-color", "red")
//         }
//         ++clicks;
//         $(".js-calendar .single-date").each(function(){
//             if($(this).attr("data-date")>u){
//                 $(this).addClass("hovered");
//             }
//         })

//     });
// /////TESTING AREA///////
// var tester = getUnixTime(startDate)
// console.log("tester: "+ tester)
// var newTest = format(startDate, 'MM/dd/yyyy')
// console.log("tester2: "+ newTest)
// var newTest3 = fromUnixTime(1600812000)
// console.log("tester3: "+ newTest3)
// console.log(startDate + "----------" + lightStartDate)