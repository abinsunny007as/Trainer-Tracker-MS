import { Injectable } from '@angular/core';
import { Trainer } from './trainer';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http'


const baseURL="http://localhost:8088/trainer"
@Injectable({
  providedIn: 'root'


})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  createTrainer(trainer : Trainer):Observable<Object>{
    return this.httpClient.post(`${baseURL}`,trainer);
  }

  getTrainerList():Observable<Trainer[]>{
    return this.httpClient.get<Trainer[]>(`${baseURL}`);
  }


  getTrainerById(id:any): Observable<Trainer>{
    return this.httpClient.get<Trainer>(`${baseURL}/${id}`);
  }
  updateTrainer(id:any, data:any):Observable<any>{
    return this.httpClient.put(`${baseURL}/${id}`,data);
  }

  deleteTrainer(id: any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  findByTitle(id: any): Observable<Trainer[]> {
    return this.httpClient.get<Trainer[]>(`${baseURL}/${id}`);
  }
}
