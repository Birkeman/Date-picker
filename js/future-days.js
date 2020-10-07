import { format, getDate, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, subDays } from 'date-fns'
import { isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday } from 'date-fns'
import { formatISO, parseISO } from 'date-fns'
window.getFutureDays = function(){

    // var startDate = new Date();
    // var addM = addMonths(startDate, 1);
    // startDate = addM;
    var startSelected = $(".js-start-date").val()
    var endSelected = $(".js-end-date").val()
    var currentMonthISO = $(".js-month-var").val();
    var currentMonth = parseISO(currentMonthISO)
    var monthAdd = addMonths(currentMonth,1)
    var monthName = format(monthAdd, "MMMM yyyy")
    $(".js-month-name").html(monthName);
    var m = formatISO(monthAdd)
    $(".js-month-name").attr("data-helper", m);
    $(".js-month-var").val(m);

    var startMonth = startOfMonth(monthAdd)
    var endMonth = endOfMonth(monthAdd)
    var resultX = eachDayOfInterval({
        start: startMonth,
        end: endMonth
    });

    $(".js-calendar").html("")

    let firstDay = isMonday(startMonth)
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
        //////DISPLAY EACH DAY IN MONTH/////
        resultX.forEach(date => {
            $(".js-calendar").append("<li class='single-date' data-date="+ formatISO(date, { representation: "date" }) +">"+date.getDate()+"</li>")
        });
        ////////////////////////////////////
        
        ////////////////GET CURRENT DATE/////////////
        window.currentDate();
        /////////////////////////////////////////////

        ////////////////DISABLE DATES BEFORE TODAY///
        window.beforeToday();
        /////////////////////////////////////////////

        ////////////////SELECT DATE///
        $(".enabled").click(selectDate);
        /////////////////////////////////////////////

        /////IF SELECTED DATES EXIST///////
        $("li[data-date='" + startSelected +"']").addClass("start-date");
        $("li[data-date='" + endSelected +"']").addClass("end-date");
        $(".start-date").nextUntil(".end-date").addClass("selected-days")
        $(".end-date").prevUntil(".start-date").addClass("selected-days")
        $(".fixed").removeClass("selected-days")
        /////////////////////////////////////////////
}
