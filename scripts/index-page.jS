
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
    constructor(username, comment){
        if (typeof username !== 'User' || typeof comment !== 'string') {
            throw new Error('parameter error. please put in the right parameters');
        }
        const today = new Date();
        this.#time = Time(today.getUTCDate(), today.getUTCMonth(), today.getUTCFullYear())
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
        return String(this.#time.getDay()) + "/" + String(this.#time.getMonth())+ "/" + String(this.#time.getYear())
    }
}
let comments = [];

function createCommentSmall(comment){
    const block = document.createElement("div");
    block.setAttribute("style","padding: 16px 0px; border-bottom: 1px; border-color: #E1E1E1; display: flex; ");
    let profilePic = document.createElement("img");
    profilePic.setAttribute("src","./assets/images/Mohan-muruge.jpg");
    profilePic.setAttribute("style","border-radius: 50%; width: 36px; height: 36px;");
    block.append(profilePic);

    const content = document.createElement("p");
    const username = document.createElement("p");
    const date = document.createElement("p");
    

    content.textContent = comment.getComment();
    username.textContent = comment.getUsername();
    date.textContent = comment.getTime();
    
    const topSection = document.createElement(div);
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);
}

function createCommentMedium(comment){
    block.setAttribute("style","padding: 36px 0px; border-bottom: 1px; border-color: #E1E1E1; display: flex; ");
    let profilePic = document.createElement("img");
    profilePic.setAttribute("style","border-radius: 50%; width: 48px; height: 48px;");
    block.append(profilePic);

    const content = document.createElement("p");
    const username = document.createElement("p");
    const date = document.createElement("p");
    
    content.textContent = comment.getComment();
    username.textContent = comment.getUsername();
    date.textContent = comment.getTime();
    
    const topSection = document.createElement(div);
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);
}

function createCommentLarge(){
    block.setAttribute("style","padding: 36px 0px; border-bottom: 1px; border-color: #E1E1E1; display: flex; ");
    let profilePic = document.createElement("img");
    profilePic.setAttribute("style","border-radius: 50%; width: 48px; height: 48px;");
    block.append(profilePic);

    const content = document.createElement("p");
    const username = document.createElement("p");
    const date = document.createElement("p");
    
    content.textContent = comment.getComment();
    username.textContent = comment.getUsername();
    date.textContent = comment.getTime();
    
    const topSection = document.createElement(div);
    topSection.setAttribute("style","display: flex; justify-content: space-between; padding-bottom: 16px");
    topSection.append(username);
    topSection.append(date);
    
    const rightSection = document.createElement("div");
    rightSection.append(topSection);
    rightSection.append(content);
    block.append(rightSection);c
}

function createCommentHtml(comment){
    let windowWidth = window.innerWidth();

    if (windowWidth > 320 || windowWidth<=767){
        return createCommentSmall();
    }else if(windowWidth >767 ||windowWidth<=1280){

        return createCommentMedium();

    }else if(windowWidth >1280){
        return createCommentLarge();
    }
    return document.createElement(div);
    

}


function createComment(username,comment){
    comment = Comment(username,comment);
    comments.push(comment);
    var object = createCommentHtml(comment);
}
