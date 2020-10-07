$(document).ready(function () {
    window.currentMonth();
    window.monthDays();
    window.currentDate();
    window.beforeToday();
    $(".next").click(getFutureDays);
    $(".prev").click(getPastDays);
    $(".enabled").click(selectDate);
    $(".enabled").addClass("hovered")
});