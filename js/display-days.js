import { format, getUnixTime, formatISO, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns'
//////////////////GET CURRENT DATE///////////
window.currentDate = function(){
    var startDate = new Date();
    var lightStartDate = format(startDate, "yyyy-MM-dd")
    $(".single-date[data-date='" + lightStartDate + "']").addClass("current-date disabled"); 
}
/////////////////////////////////////////////

//////DISPLAY EACH DAY IN MONTH/////
window.monthDays = function(){
    var startDate = new Date();
    let startMonth = startOfMonth(startDate);
    let endMonth = endOfMonth(startDate);
    var result2 = eachDayOfInterval({
        start: startMonth,
        end: endMonth
    });
    result2.forEach(date => {
        var i = getUnixTime(date);
        $(".js-calendar").append("<li class='single-date' data-date="+ formatISO(date, { representation: "date" })  +">"+date.getDate()+"</li>")
        console.log(date.getUTCDate())
    });
}
////////////////////////////////////

////////////////DISABLE DATES BEFORE TODAY///
window.beforeToday = function(){
    var startDate = new Date();
    var lightStartDate = format(startDate, "yyyy-MM-dd")
    $(".js-calendar .single-date").each(function(){
        if($(this).attr("data-date")<=lightStartDate){
            $(this).addClass("disabled");
        } else{
            $(this).addClass("enabled");
        }
    })
/////////////////////////////////////////////
}