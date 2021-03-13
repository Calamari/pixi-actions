import * as PIXI from 'pixi.js';
import Action from './Action';
import Interpolation from '../Interpolation';
import Interpolations from '../Interpolations';

export default class RotateTo extends Action {
	time: number = 0;
	seconds: number;
	interpolation: Interpolation;
	startRotation: number;
	rotation: number;
	
	constructor(
		target: PIXI.DisplayObject,
		rotation: number,
		seconds: number, 
		interpolation: Interpolation = Interpolations.linear)
	{
		super(target);
		this.seconds = seconds;
		this.interpolation = interpolation;
		this.rotation = rotation;
	}
	
	tick(delta: number): boolean {
		if (this.time === 0) {
			this.startRotation = this.target.rotation;
		}
		
		this.time += delta;
		
		const factor: number = this.interpolation(Math.min(1, this.time/this.seconds));
		this.target.rotation = this.startRotation + (this.rotation - this.startRotation) * factor;
		return factor >= 1;
	}
	
	reset() {
		super.reset();
		this.time = 0;
	}
};