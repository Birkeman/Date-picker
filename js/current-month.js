import { eachYearOfInterval, format, lightFormat, getDate, parseISO, formatISO } from 'date-fns'
import { eachDayOfInterval } from 'date-fns'
import { addMonths, subMonths } from 'date-fns'
import { getMonth, getYear, startOfMonth, endOfMonth } from 'date-fns'
import { isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns'
import { subDays } from 'date-fns'
import { getUnixTime } from 'date-fns'
import { fromUnixTime } from 'date-fns'
import { isFuture, isAfter, isBefore } from 'date-fns'
import { each } from 'lodash'
import { zhCN } from 'date-fns/locale'

window.currentMonth = function(){

var startDate = new Date();
var lightStartDate = format(startDate, "yyyy-MM-dd")
var startYear = getYear(startDate);
let startMonth = startOfMonth(startDate);
let endMonth = endOfMonth(startDate);
var result2 = eachDayOfInterval({
    start: startMonth,
    end: endMonth
});

/////GET MONTH DISPLAYED////////
var monthName = format(startDate, "MMMM yyyy")
$(".js-month-name").html(monthName);
var m = formatISO(startDate);
console.log("M = " + m)
$(".js-month-name").attr("data-helper", m);
$(".js-month-var").val(m);
////////////////////////////////

///////////GET STARTING DAY OF WEEK and GET PREVIOUS MONTH END/////////
let firstDay = isMonday(startMonth)
console.log("FIRST DAY : "+firstDay)
console.log("START MONTH : "+startMonth)
let secondDay = isTuesday(startMonth)
let thirdDay = isWednesday(startMonth)
let fourthDay = isThursday(startMonth)
let fifthDay = isFriday(startMonth)
let sixthDay = isSaturday(startMonth)

let minusOne = subDays(startMonth,1)
let minusTwo = subDays(startMonth,2)
let minusThree = subDays(startMonth,3)
let minusFour = subDays(startMonth,4)
let minusFive = subDays(startMonth,5)
let minusSix = subDays(startMonth,6)

    if(firstDay == true) {
        $(".js-calendar").append('<li class="single-date disabled fixed" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
    } else if(secondDay == true){
        $(".js-calendar").append('<li class="single-date disabled fixed" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
    } else if(thirdDay == true){
        $(".js-calendar").append('<li class="single-date disabled fixed" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
    } else if(fourthDay == true){
        $(".js-calendar").append('<li class="single-date disabled fixed" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
    } else if(fifthDay == true){
        $(".js-calendar").append('<li class="single-date disabled fixed" data-date="'+ format(minusFive, "MM.dd.yyy")+'">'+getDate(minusFive)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
    } else if(sixthDay == true){
        $(".js-calendar").append('<li class="single-date disabled fixed" data-date="'+ format(minusSix, "MM.dd.yyy")+'">'+getDate(minusSix)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusFive, "MM.dd.yyy")+'">'+getDate(minusFive)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusFour, "MM.dd.yyy")+'">'+getDate(minusFour)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusThree, "MM.dd.yyy")+'">'+getDate(minusThree)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusTwo, "MM.dd.yyy")+'">'+getDate(minusTwo)+'</li><li class="single-date disabled fixed" data-date="'+ format(minusOne, "MM.dd.yyy")+'">'+getDate(minusOne)+'</li>')
    }

}
