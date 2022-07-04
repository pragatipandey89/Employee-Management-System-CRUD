import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>
  {
    return this.http.get<any>('http://localhost:8080/all');
  }

  public getby(emp:any): Observable<any>
  {
    const value={
      id:emp
    }
    console.log("service",emp);
    return this.http.post<any>('http://localhost:8080/byid',value);
  }
  
  public addEmployee(Employee : {
    firstName: string;
    lastName: string;
    email: string;
    job: string;
    number: number;
  }): Observable<Employee>
  {
    console.log(Employee);
    return this.http.post<any>('http://localhost:8080/insert',Employee);
  }

  public updateEmployee(Employee : {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    job: string;
    number: number;
  }): Observable<Employee>
  {
    return this.http.post<Employee>('http://localhost:8080/update',Employee);
  }

  public deleteEmployee( emp :any)
  {
    console.log("service",emp);
    return this.http.post('http://localhost:8080/delete', emp);
    // return this.http.delete<any>('http://localhost:8080/delete', emp);
  }
  
}
