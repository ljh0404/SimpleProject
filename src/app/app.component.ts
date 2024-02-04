import { Component } from '@angular/core';
import { TaskModel } from './interfaces/taskModel';
import { GeneralService } from './services/general.service';
import { RootObject } from './interfaces/plantInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeployAngularExample';
  taskList : TaskModel[] = []
  plantList! : RootObject

  constructor(private taskService: GeneralService) {}

  getTaskList(){
    this.taskService.getList().subscribe({
      next:(data) => {
        this.taskList = data;
      },
      error:(e) => {}
    });
  }

  getPlantList(){
    this.taskService.getPlants().subscribe((data) => {
      this.plantList = data;
    })
  }

  

  ngOnInit(){
    this.getTaskList();
    this.getPlantList();
  }
}
