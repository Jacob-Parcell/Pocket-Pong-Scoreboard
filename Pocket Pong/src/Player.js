export class Player {

    constructor(name) {
        this._name = name;
        this._score = 0;
    }

    get name() {
        return this._name;
    }

    get score() {
        return this._score;
    }

    set score(newScore) {
        this._score = newScore;
    }

    incrementScore = () => {
        this._score++;
        console.log(this._score);
        //TODO update screen
    }
}