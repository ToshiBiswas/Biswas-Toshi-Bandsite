
class CommentApi{

    static baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    static id = null;
    static async register(){
        this.id = sessionStorage.getItem("sessionId");
        if (typeof this.id !== "string"){
            const paragraph = await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/"+"register");
            this.id = paragraph.data.api_key;
            sessionStorage.setItem("sessionId", this.id);
        }

    }
    static async getComments(){
        const response = await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/"+"comments/"+"?api_key="+String(CommentApi.id));

        console.log(response);
        response.data.sort((a, b) => {
            return b.posted - a.posted;
        });
    
        return response.data;
    }
    static async addComments(username, comment){
        const newPost = {
            name: username,
            comment: comment
        };
        const response = await axios.post(
            "https://unit-2-project-api-25c1595833b2.herokuapp.com/"+"comments/"+"?api_key="+String(CommentApi.id),
            newPost
        );
        return response.data;

    }
}


(async () => {
    await CommentApi.register(); // Will trigger initialization if not already 
})();