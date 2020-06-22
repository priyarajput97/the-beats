import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './services/event-emitter.service';
import { startWith, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading: boolean;

  constructor(
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit() {
    this.eventEmitterService.isLoading.pipe(
      startWith(null),
      delay(0),
      tap((isLoading) => {
        this.isLoading = isLoading;
      })
    ).subscribe();
  }
}