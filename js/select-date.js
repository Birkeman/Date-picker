// const { isBefore } = require("date-fns");
import { isBefore } from 'date-fns'
var clicks = 0;
    
window.selectDate = function(){

    // if($(".js-start-date").val() == $(this).attr("data-date")){
    //     alert($(".js-start-date").val())
    // }
    var u = $(this).attr("data-date");
    if ($(this).hasClass("disabled")){
        return
    }
    if (clicks % 2 == 0 && $(this).hasClass("enabled")){

        window.beforeToday();
        $(".enabled").removeClass("selected-days")
        $(".enabled").removeClass("start-date end-date");
        $(".js-start-date, .js-end-date").val('')
        $(".js-start-date").val(u);
        $(this).addClass("start-date")
        $(this).prevAll().removeClass("enabled hovered").addClass("disabled")


    } else{
        $(".js-end-date").val(u);
        $(this).addClass("end-date")

        $(".start-date").nextUntil(".end-date").addClass("selected-days")
        $(".end-date").prevUntil(".start-date").addClass("selected-days")
        $(".fixed").removeClass("selected-days")
        $(this).prevAll().removeClass("disabled").addClass("enabled hovered")
        $(".fixed").removeClass("hovered")
        window.beforeToday();
        // $(".enabled").removeClass("hovered")
        // $(".enabled").addClass("hovered")

        // $(".enabled").each(function(){
        //     console.log($(this).attr("data-date"))
        //     // if($(".enabled").text()> $(".start-date").text()){
        //     //     console.log("RADI!!!!!!")
        //     //     $(this).css("background", "purple")
        //     // } else{
        //     //     console.log("NE RADI!!!!!")

        //     // }
        // });
        // var v = $(this).attr("data-date");
        // var secondDate = fromUnixTime(v)
        // var afterDate = isAfter(clickedDate, startDate)
        // var lightEnd = lightFormat(secondDate, 'dd.MM.yyyy')
        // $(".js-end-date").val(lightEnd)
        // $(this).css("background-color", "red")


    }
    ++clicks;
    $(".js-calendar .single-date").each(function(){
        if($(this).attr("data-date")>u){
            $(this).addClass("hovered");
        }
    })
};