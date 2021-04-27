// These variables save the current year and month
var currentYear = dateSelected.getFullYear();
var currentMonth = dateSelected.getMonth();

// Added listeners to switch the month in the calendar
document.getElementById("previous-month").addEventListener("click", switchMonth, true);
document.getElementById("next-month").addEventListener("click", switchMonth, true);

// Added listeners to switch the year in the calendar
document.getElementById("larrow").addEventListener("click", function () {
    dateSelected.setFullYear(dateSelected.getFullYear() - 1);
    generateCalendar(dateSelected.getFullYear(), dateSelected.getMonth());
});

var forwardYear = document.getElementById("rarrow").addEventListener("click", function () {
    dateSelected.setFullYear(dateSelected.getFullYear() + 1);
    generateCalendar(dateSelected.getFullYear(), dateSelected.getMonth());
});

// First, calendar is generated in the current year and month
generateCalendar(dateSelected.getFullYear(), dateSelected.getMonth());

// This function generates the new calendar in the month and year selected
function generateCalendar(p_year, p_month) {
    var daysMonth = new Date(p_year, p_month + 1, 0).getDate();
    var firstDayMonth = new Date(p_year, p_month, 1).getDay();

    eliminatePreviousGrid();
    generateGridEmpty();

    // The next lines insert the week days in the grid and the id's in the first line in the grid
    for (var i = 0; i < weekDays.length; i++) {
        document.getElementsByClassName("week-day")[i].innerHTML = weekDays[i];
    }

    // The next lines insert the day numbers in the grid according to the month and year
    for (var i = 0; i < daysMonth; i++) {
        if (firstDayMonth == 0) {
            document.getElementsByClassName("grid-day")[i + 6].insertAdjacentHTML("afterbegin", "<div class='numberDayGrid'>" + (i + 1) + "</div>");
            if (i + 1 == dateSelected.getDate() && currentYear == dateSelected.getFullYear() && currentMonth == dateSelected.getMonth()) {
                var day = document.getElementsByClassName("grid-day")[i + 6];
                day.style.backgroundColor = "#695eff";
                day.classList.remove('hover-class');
                day.style.borderRadius = "3px";
                day.style.color = "white";
            }
        }
        else {
            document.getElementsByClassName("grid-day")[i + firstDayMonth - 1].insertAdjacentHTML("afterbegin", "<div class='numberDayGrid'>" + (i + 1) + "</div>");
            if (i + 1 == dateSelected.getDate() && currentYear == dateSelected.getFullYear() && currentMonth == dateSelected.getMonth()) {
                var day = document.getElementsByClassName("grid-day")[i + firstDayMonth - 1];
                day.style.backgroundColor = "#695eff";
                day.classList.remove('hover-class');
                day.style.borderRadius = "3px";
                day.style.color = "white";
            }
        }
    }

    // The text in the month display is updated
    if (p_month == 0) {
        document.getElementById("previous-month").innerHTML = monthsYear[11];
        document.getElementById("actual-month").innerHTML = monthsYear[p_month];
        document.getElementById("next-month").innerHTML = monthsYear[p_month + 1];
    }
    else if (p_month == 11) {
        document.getElementById("previous-month").innerHTML = monthsYear[p_month - 1];
        document.getElementById("actual-month").innerHTML = monthsYear[p_month];
        document.getElementById("next-month").innerHTML = monthsYear[0];
    }
    else {
        document.getElementById("previous-month").innerHTML = monthsYear[p_month - 1];
        document.getElementById("actual-month").innerHTML = monthsYear[p_month];
        document.getElementById("next-month").innerHTML = monthsYear[p_month + 1];
    }
    // The text in the year display is updated
    document.getElementById("year-text").innerHTML = p_year;
    blockEmptyCells();
    DataToCalendar();
};

// This function generates the empty grid in main
function generateGridEmpty() {
    for (var i = 0; i < 49; i++) {
        if (i < 7) {
            document.querySelector("main").insertAdjacentHTML("beforeend", "<div class='week-day'></div>");
        }
        else {
            document.querySelector("main").insertAdjacentHTML("beforeend", "<div class='grid-day hover-class' onmouseover='generateGridButton(event)' onclick='callTemplateDayEvents(event)'></div>");
        }
    }
};

// This function switches the month according to the month selected
function switchMonth(event) {
    if (event.target.id == "previous-month") {
        dateSelected.setMonth(dateSelected.getMonth() - 1);
    }
    else {
        dateSelected.setMonth(dateSelected.getMonth() + 1);
    }
    generateCalendar(dateSelected.getFullYear(), dateSelected.getMonth());
};

// This function eliminates the entire grid
function eliminatePreviousGrid() {
    var mainGrid = document.querySelector("main");
    while (mainGrid.firstChild) {
        mainGrid.removeChild(mainGrid.firstChild);
    }
};

// This function generate the events in the corresponding event date
function DataToCalendar() {
    var firstDayMonth = new Date(dateSelected.getFullYear(), dateSelected.getMonth(), 1).getDay();
    for (var i = 0; i < arrayEvents.length; i++) {
        var objectTemp = Object.assign({}, arrayEvents[i]);
        var dateTemp = new Date(objectTemp.idate);
        if (dateTemp.getMonth() == dateSelected.getMonth() && dateTemp.getFullYear() == dateSelected.getFullYear()) {
            let father;
            if (firstDayMonth == 0) {
                father = document.getElementsByClassName("grid-day")[5 + dateTemp.getDate()];
            }
            else {
                father = document.getElementsByClassName("grid-day")[firstDayMonth + dateTemp.getDate() - 2];
            }
            let eventsInDay = father.getElementsByClassName("event-box").length;
            let eventMax = father.getElementsByClassName("more-event-box")[0];
            if (eventsInDay < 1) {
                father.insertAdjacentHTML("beforeend", "<div class='event-box' onclick='callTemplate2(event)' value='" + i + "'><p onclick='callTemplate2(event)' value='" + i + "'>" + objectTemp.title + "</p></div>");
            }
            else if ((eventsInDay == 1) && (!eventMax)) {
                father.insertAdjacentHTML("beforeend", "<div class='more-event-box''>...</div>");
            }
        }
    }
};

function generateGridButton(event) {
    let buttonSpecific = document.getElementById("new-event-specific");
    if (buttonSpecific) {
        if ((event.target.getAttribute("class") == "grid-day hover-class") ||
            (event.target.getAttribute("class") == "grid-day")) {
            buttonSpecific.parentNode.removeChild(buttonSpecific);
            event.target.insertAdjacentHTML("afterbegin", "<input type='button' id='new-event-specific' value='+'>");
            newEventActivator(event.target);
        }
    }
    else {
        event.target.insertAdjacentHTML("afterbegin", "<input type='button' id='new-event-specific' value='+'>");
        newEventActivator(event.target);
    }
};

function newEventActivator(elementTarget) {
    var button = document.getElementById("new-event-specific");
    button.addEventListener('click', function () {
        var script = document.createElement('script');
        script.src = 'formulario.js';
        script.type = 'text/javascript';

        callTemplate();

        var numberDay = elementTarget.getElementsByClassName("numberDayGrid")[0].innerHTML;
        var numberMonth = dateSelected.getMonth() + 1;
        if (numberDay < 10) { numberDay = "0" + numberDay; }
        if (numberMonth < 10) { numberMonth = "0" + numberMonth; }

        if (new Date().getHours() < 10) {
            var formatedTimeHour = "0" + new Date().getHours();
        } else {
            var formatedTimeHour = new Date().getHours();
        }

        if (new Date().getMinutes() < 10) {
            var formatedTimeMinute = "0" + new Date().getMinutes();
        } else {
            var formatedTimeMinute = new Date().getMinutes();
        }

        var stringDate = dateSelected.getFullYear() + "-" + numberMonth + "-" + numberDay + "T" + formatedTimeHour + ":" + formatedTimeMinute;
        document.getElementById("initial-date").defaultValue = stringDate;
        console.log(stringDate);

        habilitarReminder(this);
        habilitarDate(this);
    });
};

function blockEmptyCells() {
    for (let i = 0; i < 42; i++) {
        if (document.querySelectorAll(".grid-day")[i].innerText == "") {
            document.querySelectorAll(".grid-day")[i].setAttribute('onmouseover', '');
            document.querySelectorAll(".grid-day")[i].setAttribute('onclick', '');
        }
    }
}