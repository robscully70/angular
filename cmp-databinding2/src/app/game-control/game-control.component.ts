import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	interval;
	@Output() intervalFired = new EventEmitter;
	lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
  	console.log('start');
  	this.interval = setInterval(() => {
  	this.intervalFired.emit(this.lastNumber + 1);
  	this.lastNumber++;
  	console.log(this.lastNumber)
  	}, 1000);
  }
  onPauseGame(){
  	clearInterval(this.interval);
  }

}
