import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventManagerService } from 'src/app/shared/shared-event-manager.service';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {
  projectList :any= [];
  timer: number = 0;
  constructor(private eventService: EventManagerService) { }
  //projectsControl = new FormControl();
  projectsControl = '';
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  ngOnInit(): void {
    this.subscribeToEvent();
    this.projectList = localStorage.getItem('project')?.split(',');
    console.log(this.projectList);
  }

  subscribeToEvent(){
    this.eventService.getProjectValObservable().subscribe(result => {
       // if(result) this.projectList = result;
        console.log(this.projectList);
    });
  }
  onStartTimerClick() {
    setInterval(() => {this.timer = 
      Math.round((this.timer+0.1) * 100) / 100}, 1000)
      localStorage.setItem('timer', this.timer.toString());
  }

}
