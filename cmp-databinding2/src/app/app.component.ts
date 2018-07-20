import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
	oddNumbers: number[] = [];
	evenNumbers: number[] = [];


	onIntervalFired(firedNumber: number){
		console.log('FIRED#  '+firedNumber);
		if(firedNumber % 2 === 0){
			this.evenNumbers.push(firedNumber);
		} else {
			this.oddNumbers.push(firedNumber);
		}
		console.log(firedNumber);
	}
}
