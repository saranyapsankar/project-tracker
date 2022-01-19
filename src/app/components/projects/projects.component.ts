import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventManagerService } from 'src/app/shared/shared-event-manager.service';

export interface DialogData {
  projectName: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  project: any = [];
  name= '';

  constructor(public dialog: MatDialog, private eventService:EventManagerService) { }

  ngOnInit(): void {
  }

  onAddProject(){
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '250px',
      data: {projectName: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.project.push(result);
      localStorage.setItem('project', this.project);
      this.eventService.emitProjectValObservable(this.project);
    });
  }

  deleteProject(projectName: string){
   this.project =  this.project.filter((item: string) => item != projectName);
  }
  
  }

@Component({
  selector: 'add-project-dialog',
  templateUrl: 'add-project-dialog.html',
})

export class AddProjectDialogComponent {
  
  projectName: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
