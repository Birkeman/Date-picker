var clicks = 0;

window.selectDate = function(){

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
        $(".disabled").removeClass("hovered")

    }
    ++clicks;
    $(".js-calendar .single-date").each(function(){
        if($(this).attr("data-date")>u){
            $(this).addClass("hovered");
        }
    })
};