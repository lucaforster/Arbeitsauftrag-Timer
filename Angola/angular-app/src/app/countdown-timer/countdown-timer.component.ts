import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnDestroy {
  minutes: number = 0;
  seconds: number = 0;
  timer: any;
  isRunning: boolean = false;

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.updateTimer();
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
  }

  resetTimer() {
    clearInterval(this.timer);
    this.isRunning = false;
    this.minutes = 0;
    this.seconds = 0;
  }

  updateTimer() {
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}