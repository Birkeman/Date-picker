import { eachYearOfInterval, format } from 'date-fns'
import { eachDayOfInterval } from 'date-fns'
import { addMonths, subMonths } from 'date-fns'
import { getMonth, getYear, startOfMonth, endOfMonth } from 'date-fns'
import { isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday } from 'date-fns'
var result = eachYearOfInterval({
    start: new Date(2014, 1, 6),
    end: new Date(2017, 7, 10)
})
var startDate = new Date();
var startYear = getYear(startDate);
let startMonth = startOfMonth(startDate);
let endMonth = endOfMonth(startDate);
alert(startDate)
var result2 = eachDayOfInterval({
    start: startMonth,
    end: endMonth
});
result2.forEach(date => {
    $(".js-calendar").append("<li>"+date.getDate()+"</li>")
    console.log(date.getUTCDate())
});

//Get month displayed
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const d = new Date();
$(".js-month-name").html(monthNames[d.getMonth()] + " " + startYear);
////////////////////////////////
var firstDay = isMonday(startMonth)
var secondDay = isTuesday(startMonth)
var thirdDay = isWednesday(startMonth)
var fourthDay = isThursday(startMonth)
var fifthDay = isFriday(startMonth)
var sixthDay = isSaturday(startMonth)
var seventhDay = isSunday(startMonth)
// console.log("is monday? : " + firstDay)
// console.log("is monday? : " + secondDay)
if (secondDay == true) {
    $(".js-calendar").prepend("<li>31</li>")
} else if(thirdDay == true){
    $(".js-calendar").prepend("<li>30</li><li>31</li>")
} else if(fourthDay == true){
    $(".js-calendar").prepend("<li>29</li><li>30</li><li>31</li>")
} else if(fifthDay == true){
    $(".js-calendar").prepend("<li>28</li><li>29</li><li>30</li><li>31</li>")
} else if(sixthDay == true){
    $(".js-calendar").prepend("<li>27</li><li>28</li><li>29</li><li>30</li><li>31</li>")
} else if(seventhDay == true){
    $(".js-calendar").prepend("<li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li>")
} 

$(document).on("click", ".next", function(){
    var addM = addMonths(startDate, 1);
    var addY = getYear(addM);
    startDate = addM;
    $(".js-month-name").html(monthNames[addM.getMonth()] + " " + addY);
    $(".js-calendar").html("")
    var startMonth = startOfMonth(startDate);
    var endMonth = endOfMonth(startDate);
    var result2 = eachDayOfInterval({
        start: startMonth,
        end: endMonth
    });
    result2.forEach(date => {
        $(".js-calendar").append("<li>"+date.getDate()+"</li>")
    })
    var firstDay = isMonday(startMonth)
    var secondDay = isTuesday(startMonth)
    var thirdDay = isWednesday(startMonth)
    var fourthDay = isThursday(startMonth)
    var fifthDay = isFriday(startMonth)
    var sixthDay = isSaturday(startMonth)
    var seventhDay = isSunday(startMonth)
    // console.log("is monday? : " + firstDay)
    // console.log("is monday? : " + secondDay)
    if (secondDay == true) {
        $(".js-calendar").prepend("<li>31</li>")
    } else if(thirdDay == true){
        $(".js-calendar").prepend("<li>30</li><li>31</li>")
    } else if(fourthDay == true){
        $(".js-calendar").prepend("<li>29</li><li>30</li><li>31</li>")
    } else if(fifthDay == true){
        $(".js-calendar").prepend("<li>28</li><li>29</li><li>30</li><li>31</li>")
    } else if(sixthDay == true){
        $(".js-calendar").prepend("<li>27</li><li>28</li><li>29</li><li>30</li><li>31</li>")
    } else if(seventhDay == true){
        $(".js-calendar").prepend("<li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li>")
    } 

    console.log("start of month : " + startMonth);
    console.log("end of month : " + endMonth);
})
$(document).on("click", ".prev", function(){
    // var month = getMonth(new Date(),'MMMM dd yyyy')
    var subM = subMonths(startDate, 1);
    var addY = getYear(subM);
    startDate = subM;
    $(".js-month-name").html(monthNames[subM.getMonth()] + " " + addY);
    $(".js-calendar").html("");
    var startMonth = startOfMonth(startDate);
    var endMonth = endOfMonth(startDate);
    var result2 = eachDayOfInterval({
        start: startMonth,
        end: endMonth
    });
    result2.forEach(date => {
        $(".js-calendar").append("<li>"+date.getDate()+"</li>")
    });
})


