import CommentApi from "./comments_api";

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

function createCommentSmall(comment){
    const block = document.createElement("div");
    block.setAttribute("style","padding: 16px 0px; border-bottom: 1px solid #E1E1E1; border-color: #E1E1E1; display: flex; ");
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
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px;");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.setAttribute("style","width: 100%;");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);
    return block;

}

function createCommentMedium(comment){
    const block = document.createElement("div");
    block.setAttribute("style","padding: 36px 0px; border-bottom: 1px solid #E1E1E1; border-color: #E1E1E1; display: flex; ");
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
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px;");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.setAttribute("style","width: 100%; padding:16px;");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);
    return block;

}

function createCommentLarge(comment){
    const block = document.createElement("div");
    block.setAttribute("style","padding: 36px 0px; border-bottom: 1px solid #E1E1E1; border-color: #E1E1E1; display: flex; ");
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
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px;");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.setAttribute("style","width: 100%; padding:16px;");
    rightSection.setAttribute("id","right-section");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);
    return block;
}

function createCommentHtml(comment){
    let windowWidth = window.innerWidth;
    if (windowWidth > 320 || windowWidth<=767){
        return createCommentSmall(comment);
    }else if(windowWidth >767 ||windowWidth<=1280){

        return createCommentMedium(comment);

    }else if(windowWidth >1280){
        return createCommentLarge(comment);
    }
    return document.createElement(div);


}


async function createComment(username,comment){
    const response = await CommentApi.addComments(username, comment);
    const today = new Date(response.timestamp);
    let commentObj = new Comment(username,comment,new Time(today.getDate(),String(Number(today.getMonth())+1), today.getFullYear()));
    commentObj.src = "./assets/images/Mohan-muruge.jpg";
    comments.push(commentObj);
    var object = createCommentHtml(commentObj);
    document.getElementById("comments").appendChild(object);
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
async function getCommentsFromApi(){
    comments.length = 0;
    const response = await CommentApi.getComments();
    for(let i = 0;i< response.length; i++){
        let dateObj = new Date(response[i].timestamp);
        let commentObj = new Comment(response[i].name,response[i].comment,new Time(dateObj.getDate(), String(Number(dateObj.getMonth())+1), dateObj.getFullYear()));
        commentObj.src = "./assets/Images/handtinyblack.gif";
        comments.push(commentObj);
    }
    recreateComments();
}
  async function recreateComments(){
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
getCommentsFromApi();

recreateComments();
