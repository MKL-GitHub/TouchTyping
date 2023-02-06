class Typing {
    private _typingBlock;

    constructor(id: string) {
        this._typingBlock = document.getElementById(id);

        console.log(this._typingBlock);
    }
}