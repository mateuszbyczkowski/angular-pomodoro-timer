import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() {
  }

  activeTime: number = 7;
  breakTime: number = 3;
  intervalActive;
  intervalBreak;
  disableStart: boolean = false;
  isActiveTime: boolean = false;

  listaKursantow = ['Mateusz', 'Weronika', 'Jan'];

  ngOnInit() {
  }

  startTimer() {
    this.disableStart = true;
    this.isActiveTime = true;
    this.intervalActive = setInterval(() => {
      if (this.activeTime > 0) {
        this.activeTime--;
      } else {
        alert("KONIEC PRACY, ZRELAKSUJ SIĘ!");
        this.isActiveTime = false;
        clearInterval(this.intervalActive);
        this.activeTime = 15;
        this.breakTimer();
      }
    }, 1000);
  }

  breakTimer() {
    this.intervalBreak = setInterval(() => {
      if (this.breakTime > 0) {
        this.breakTime--;
      } else {
        alert("DO ROBOTY KONIEC PRZERWY!");
        this.breakTime = 3;
        this.isActiveTime = true;
        this.startTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalActive);
    clearInterval(this.breakTime);
    this.isActiveTime = false;
    this.disableStart = false;
  }

  formatTime() {
    const date = new Date(null);
    if(this.isActiveTime) {
      date.setSeconds(this.activeTime);
    } else {
      date.setSeconds(this.breakTime);
    }
    return date.toISOString().substr(11,8)
  }

  restartTimer() {
    this.activeTime = 15;
    this.breakTime = 3;
  }
}
