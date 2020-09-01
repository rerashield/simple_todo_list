class TodoItem {
    title: String = '';
    content: String = '';
    createDate: Date | undefined;
    endDate: Date | undefined;
    isFinish: boolean = false;

    constructor(title: String, content: String, createDate: Date) {
        this.title = title;
        this.content = content;
        this.createDate = createDate;
    }

    getTitle(): String {
        return this.title;
    }

    getContent(): String {
        return this.content;
    }

    getCreateDateAsString(): String {
        if (this.createDate !== undefined) {
            return this.createDate.toUTCString();
        } else {
            return '';
        }
    }

    getEndDate(): any {

    }

    isFinished(): boolean{
        return this.isFinish;
    }

}

export { TodoItem }