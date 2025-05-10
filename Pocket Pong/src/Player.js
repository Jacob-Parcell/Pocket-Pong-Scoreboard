export class Player {

    constructor(name) {
        this._name = name;
        this._score = 0;
        this._isPocket = false;
    }

    get name() {
        return this._name;
    }

    get score() {
        return this._score;
    }

    get isPocket() {
        return this.isPocket;
    }

    set score(newScore) {
        this._score = newScore;
    }

    set isPocket(pos) {
        this._isPocket = pos;
    }

    incrementScore = () => {
        this._score++;
        console.log(this._score);
        //TODO update screen
    }
}