import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() numberEmitted = new EventEmitter<number>();
  increment: number = 0;
  intervalID: any;

  onGameStart() {
    this.intervalID = setInterval(() => this.numberEmitted.emit(++this.increment), 1000);
  }

  onGameStop() {
    clearInterval(this.intervalID);
  }

}
