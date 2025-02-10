class Time{
    #week
    #day
    #month
    #year
    constructor(week,day, month, year){
        this.#week = week;
        this.#day = day;
        this.#month = month;
        this.#year = year;
    }
    getWeek(){
        return this.#week;
    }
    getDay(){
        return this.#day;
    }
    getMonth(){
        return this.#month;
    }
    getYear(){
        return this.#year;
    }
}

class Shows{

    #date;
    #location;
    #venue;
    constructor(location, venue,week,month,date,year){
        if (typeof date !== 'string'|| typeof location !== 'string' || typeof venue !== 'string' || typeof venue !== 'string') {
            throw new Error('parameter error. please put in the right parameters');
        }
        this.#date = new Time(week,date,month,year);
        this.#location = location;
        this.#venue = venue;
    }
    getVenue(){
        return this.#venue;
    }
    getLocation(){
        return this.#location;
    }
    getTime(){
        var v = this.#date.getWeek() + " "+this.#date.getDay()+" "+ this.#date.getMonth()+ " " + this.#date.getYear();
        return v;
    }
}
let shows = [];
function createTopBar(){
    const block = document.createElement("div");
    block.setAttribute("style", "align-items: center;display:flex; justify-content:flex-start; border-bottom: 2px solid #AFAFAF")
    const date = document.createElement("p");
    date.textContent = "DATE";
    date.setAttribute("style","width:100%; margin: 0px; font-size: 12px; font-weight: 400; padding-bottom:8px; color: #AFAFAF");
    const venue = document.createElement("p");
    venue.textContent = "VENUE";
    venue.setAttribute("style","width:100%; margin: 0px; font-size: 12px; font-weight: 400; padding-bottom:8px; color: #AFAFAF");
    const location = document.createElement("p");
    location.textContent = "LOCATION";
    location.setAttribute("style","width:100%; margin: 0px; font-size: 12px; font-weight: 400; padding-bottom:8px; color: #AFAFAF");
    block.append(date);
    block.append(venue);
    block.append(location);
    const button = document.createElement("button");
    button.textContent = "BUY TICKETS";
    button.setAttribute("style","margin: 0px 0px; width:100%; visibility:hidden;")
    block.append(button);
    return block;
}
function createShowSmall(show){
    const block = document.createElement("div");
    block.setAttribute("style","margin: 0px; padding:16px 0px; border-bottom: 2px solid #AFAFAF")
    const date = document.createElement("p");
    date.textContent = "DATE";
    date.setAttribute("style","margin: 0px; font-size: 10px; font-weight: 400; padding-bottom:8px; color: #AFAFAF");
    const dateValue = document.createElement("p");
    dateValue.textContent = show.getTime();
    dateValue.setAttribute("style","margin: 0px; font-size: 10px; font-weight: 700; padding-bottom: 16px;");
    const venue = document.createElement("p");
    venue.textContent = "VENUE";
    venue.setAttribute("style"," margin: 0px; font-size: 10px; font-weight: 400; padding-bottom:8px; color: #AFAFAF");
    const venueValue = document.createElement("p");
    venueValue.textContent = show.getVenue();
    venueValue.setAttribute("style","font-size: 14px; font-weight: 400; padding-bottom: 16px;");
    const location = document.createElement("p");
    
    location.textContent = "LOCATION";
    location.setAttribute("style","margin: 0px; font-size: 10px; font-weight: 400; padding-bottom:8px; color: #AFAFAF");
    const locationValue = document.createElement("p");
    locationValue.textContent = show.getLocation();
    locationValue.setAttribute("style","margin: 0px; font-size: 14px; font-weight: 500; padding-bottom: 16px;");
    block.append(date);
    block.append(dateValue);
    block.append(venue);
    block.append(venueValue);
    block.append(location);
    block.append(locationValue);
    const button = document.createElement("button");
    button.textContent = "BUY TICKETS";
    button.setAttribute("style","margin: 16px 0px")
    block.append(button);
    return block;
}

function createShowMedium(show){
    const block = document.createElement("div");
    block.setAttribute("style", "align-items: center;display:flex; justify-content:flex-start; border-bottom: 2px solid #AFAFAF")
    const dateValue = document.createElement("p");
    dateValue.textContent = show.getTime();
    dateValue.setAttribute("style","width:100%; font-size: 14px; font-weight: 700; grid-area: \"1\";");
    const venueValue = document.createElement("p");
    venueValue.textContent = show.getVenue();
    venueValue.setAttribute("style","width:100%; font-size: 14px; font-weight: 400; grid-area: \"2\"; ");
    const locationValue = document.createElement("p");
    locationValue.textContent = show.getLocation();
    locationValue.setAttribute("style","width:100%;font-size: 14px; font-weight: 400; grid-area: \"2\";");
    block.append(dateValue);
    block.append(venueValue);
    block.append(locationValue);
    const button = document.createElement("button");
    button.textContent = "BUY TICKETS";
    const buttonBlock= document.createElement("div");
    buttonBlock.setAttribute("style","width:100%")
    button.setAttribute("style","margin: 16px 0px ")
    buttonBlock.append(button);
    block.append(buttonBlock);
    return block;

}

function determineScreenType(){
    let windowWidth = window.innerWidth;
    if (windowWidth > 320 && windowWidth<=767){
        return "phone";
    }else if(windowWidth >767 && windowWidth<=1280){
        return "tablet";
    }else if(windowWidth >1280){
        return "desktop";

    }
    return "none";
}

var currentScreenType = determineScreenType();

function setShow(){
    const myNode = document.getElementById("shows");
    let windowWidth = window.innerWidth;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    if (windowWidth > 320 && windowWidth<=767){
        shows.forEach((s) =>{myNode.appendChild(createShowSmall(s))});
    }else if(windowWidth >767 && windowWidth<=1280){
        myNode.appendChild(createTopBar())
        shows.forEach((s) =>{myNode.appendChild(createShowMedium(s))});
    }else if(windowWidth >1280){
        myNode.appendChild(createTopBar())
        shows.forEach((s) =>{myNode.appendChild(createShowMedium(s))});

    }
    
}
 function determineDayOfWeek(day){
    switch(day){
        case 0:
            return "Sunday";

        case 1:
            return "Monday";

        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thursday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";

        default:
            return "unknown";

    }
}
async function getShowFromAPI(){
    shows.length = 0;
    const response = await CommentApi.getShowDates();
    for(let i = 0;i< response.length; i++){
        let dateObj = new Date(response[i].date);

        let commentObj = new Shows(response[i].location,response[i].place,(determineDayOfWeek(dateObj.getDay())),String(dateObj.getDate()),String(dateObj.getMonth()),String(dateObj.getFullYear()));
        commentObj.src = "./assets/Images/handtinyblack.gif";
        shows.push(commentObj);
    }
    setShow();
}

const body = document.getElementsByTagName("body")[0];
getShowFromAPI();
window.addEventListener('resize', function(event) {
    event.preventDefault();
    var updatedSize = determineScreenType();
    if(currentScreenType != updatedSize){
        currentScreenType =updatedSize;
        setShow();
    }
}, true);