import { Injectable } from '@angular/core';
import { Trainer } from './trainer';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authTrainer(value: any) {
    throw new Error('Method not implemented.');
  }

  private baseURL="http://localhost:8086/trainer"
  constructor(private httpClient : HttpClient) { }
  
  createTrainer(trainer : Trainer):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,trainer);
  }

  getTrainerList():Observable<Trainer[]>{
    return this.httpClient.get<Trainer[]>(`${this.baseURL}`);
  }


  getTrainerById(id:number): Observable<Trainer>{
    return this.httpClient.get<Trainer>(`${this.baseURL}/${id}`);
  }
  updateTrainer(id:number):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,Trainer);
  }
  deleteTrainer(id:number) {  
    return this.httpClient.get(`${this.baseURL}/delete/${id}`);  
  }
}
