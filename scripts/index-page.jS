
class Time{
    #day
    #month
    #year
    constructor(day, month, year){
        this.#day = day;
        this.#month = month;
        this.#year = year;
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

class Comment{
    #username;
    #comment;
    #time;
    src;
    
    constructor(username, comment, time){
        if (typeof username !== 'string'|| typeof comment !== 'string') {
            throw new Error('parameter error. please put in the right parameters');
        }
        this.#time = time;
        this.#username = username;
        this.#comment = comment;
    }
    getUsername(){
        return this.#username;
    }
    getComment(){
        return this.#comment;
    }
    getTime(){
        return String(this.#time.getMonth()) + "/" + String(this.#time.getDay())+ "/" + String(this.#time.getYear())
    }
}
let comments = [];
comments.push(new Comment("Victor Pinto","I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",new Time("20","10","2023")));
comments.push(new Comment("Christina Cabrera", "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",new Time("28","10","2023")));
comments.push(new Comment("Isaac Tadesse", "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",new Time("02","11","2023")));
comments[0].src = "assets/Images/handtinyblack.gif";
comments[1].src = "assets/Images/handtinyblack.gif";
comments[2].src = "assets/Images/handtinyblack.gif";

function createCommentSmall(comment){
    const block = document.createElement("div");
    block.setAttribute("style","padding: 16px 0px; border-bottom: 1px; border-color: #E1E1E1; display: flex; ");
    let profilePic = document.createElement("img");
    profilePic.setAttribute("src",comment.src);
    profilePic.setAttribute("style"," margin-right:32px; border-radius: 50%; width: 36px; height: 36px;");
    block.append(profilePic);
    profilePic.style.backgroundColor = "#323232";

    const content = document.createElement("p");
    const username = document.createElement("p");
    const date = document.createElement("p");
    

    content.textContent = comment.getComment();
    content.setAttribute("style","width 100%;")
    username.textContent = comment.getUsername();
    username.setAttribute("style","width 100%; padding-right:24px;")
    date.textContent = comment.getTime();
    date.setAttribute("style","")

    const topSection = document.createElement("div");
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.setAttribute("style","width: 100%; word-break: break-all;white-space: normal;");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);
    return block;

}

function createCommentMedium(comment){
    const block = document.createElement("div");
    block.setAttribute("style","padding: 36px 0px; border-bottom: 1px; border-color: #E1E1E1; display: flex; ");
    let profilePic = document.createElement("img");
    profilePic.setAttribute("style","border-radius: 50%; width: 48px; height: 48px;");
    profilePic.setAttribute("src",comment.src);
    profilePic.style.backgroundColor = "#323232";
    block.append(profilePic);

    const content = document.createElement("p");
    const username = document.createElement("p");
    const date = document.createElement("p");
    
    content.textContent = comment.getComment();
    content.setAttribute("style","width 100%;")
    username.textContent = comment.getUsername();
    username.setAttribute("style","width 100%; padding-right:24px;")
    date.textContent = comment.getTime();
    date.setAttribute("style","")
    
    const topSection = document.createElement("div");
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.setAttribute("style","width: 100%; word-break: break-all;white-space: normal;");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);
    return block;

}

function createCommentLarge(comment){
    const block = document.createElement("div");
    block.setAttribute("style","padding: 36px 0px; border-bottom: 1px; border-color: #E1E1E1; display: flex; ");
    let profilePic = document.createElement("img");
    profilePic.setAttribute("style","border-radius: 50%; width: 48px; height: 48px;");
    profilePic.setAttribute("src",comment.src);
    profilePic.style.backgroundColor = "#323232";

    block.append(profilePic);

    const content = document.createElement("p");
    const username = document.createElement("p");
    const date = document.createElement("p");

    content.textContent = comment.getComment();
    content.setAttribute("style","height:auto; line-height:22px;")
    username.textContent = comment.getUsername();
    username.setAttribute("style"," padding-right:24px; line-height:22px;")
    date.textContent = comment.getTime();
    date.setAttribute("style","")

    
    const topSection = document.createElement("div");
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.setAttribute("style","width: 100%; word-break: break-all;white-space: normal;");
    rightSection.setAttribute("id","right-section");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);
    return block;
}

function createCommentHtml(comment){
    let windowWidth = window.innerWidth;

    if (windowWidth > 320 || windowWidth<=767){
        return createCommentLarge(comment);
    }else if(windowWidth >767 ||windowWidth<=1280){

        return createCommentLarge(comment);

    }else if(windowWidth >1280){
        return createCommentLarge(comment);
    }
    return document.createElement(div);


}


function createComment(username,comment){
    const today = new Date();
    commentObj = new Comment(username,comment,new Time(today.getUTCDate(), today.getUTCMonth(), today.getUTCFullYear()));
    commentObj.src = "./assets/images/Mohan-muruge.jpg";

    comments.push(commentObj);
    var object = createCommentHtml(commentObj);
    document.getElementById("comments").appendChild(object);
}
function onClick(){
    event.preventDefault();

}
const form = document.getElementById("itemForm");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if(event.target.username.value.length == 0){
        document.getElementById("username").style.borderColor = "#D22D2D";
        if(event.target.comment.value.length == 0){
            document.getElementById("comment").style.borderColor = "#D22D2D";
    
        }
        return;
    }
    if(event.target.comment.value.length == 0){
        document.getElementById("comment").style.borderColor = "#D22D2D";
        return;
    }
    document.getElementById("comment").style.borderColor = "#E1E1E1";
    document.getElementById("username").style.borderColor = "#E1E1E1";
    createComment(event.target.username.value,event.target.comment.value);
    document.getElementById("comment").value = "";
    document.getElementById("username").value = "";
  });
  function recreateComments(){
    const myNode = document.getElementById("comments");
    let windowWidth = window.innerWidth;
    if(myNode != null){
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }
    }

    if (windowWidth > 320 && windowWidth<=767){
        comments.forEach((s) =>{myNode.appendChild(createCommentSmall(s))});
    }else if(windowWidth >767 && windowWidth<=1280){
        comments.forEach((s) =>{myNode.appendChild(createCommentMedium(s))});
    }else if(windowWidth >1280){
        comments.forEach((s) =>{myNode.appendChild(createCommentLarge(s))});

    }   
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
window.addEventListener('resize', function(event) {
    event.preventDefault();
    var updatedSize = determineScreenType();
    if(currentScreenType != updatedSize){
        currentScreenType =updatedSize;
        recreateComments();
    }
}, true);
var currentScreenType = determineScreenType();
