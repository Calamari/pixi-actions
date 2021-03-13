import * as PIXI from 'pixi.js';
import Action from './Action';

export default class Delay extends Action {
	time: number = 0;
	seconds: number;
	
	constructor(
		target: PIXI.DisplayObject,
		seconds: number)
	{
		super(target);
		this.seconds = seconds;
	}
	
	tick(delta: number): boolean {
		this.time += delta;
		
		return this.time >= this.seconds;
	}
	
	reset() {
		super.reset();
		this.time = 0;
	}
};