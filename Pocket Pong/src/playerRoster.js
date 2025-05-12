import { Player } from './Player';

const name1 = 'Jacob'; //prompt("Welcome! Enter First Player Name.", "Name");
const p1 = new Player(name1);

const name2 = 'David'; //prompt("Welcome! Enter First Player Name.", "Name");
const p2 = new Player(name2);

const name3 = 'Raymond';//prompt("Welcome! Enter First Player Name.", "Name");
const p3 = new Player(name3);

export const playerRoster = [p1, p2, p3];