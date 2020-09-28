// import { eachYearOfInterval, format, lightFormat, getDate, parseISO, formatISO } from 'date-fns'
//////////////////GET CURRENT DATE///////////
window.currentDate = function(){
    var startDate = new Date();
    var lightStartDate = dateFns.format(startDate, "yyyy-MM-dd")
    $(".single-date[data-date='" + lightStartDate + "']").addClass("current-date disabled"); 
}
/////////////////////////////////////////////