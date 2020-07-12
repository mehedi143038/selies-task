class Book{
    constructor(title,author){
        this.title = title;
        this.author = author;
    }
    get title(){
        return "Title" + this.title;
    }
    get author(){
        return "Author" + this.author;
    }
}
