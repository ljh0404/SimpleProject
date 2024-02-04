import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TaskModel } from '../interfaces/taskModel';
import { RootObject } from '../interfaces/plantInterface';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private endpoint: string = environment.endPoint;
  private apiUrl: string = environment.endPoint + 'GetAllTasks';

  constructor(private http: HttpClient) { }

  getList(): Observable<TaskModel[]>{
    return this.http.get<TaskModel[]>(`${this.apiUrl}`)
  }

  getPlants(): Observable<RootObject>{
    return this.http.get<RootObject>(environment.plantEndPoint);
  }
}
