import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {

  constructor(private ser: EmployeeServiceService,
    private ro: Router) { }

  empList=[{
    id:1,
    firstName: "string",
    lastName: "string",
    email: "string",
    job: "string",
    number: 12}, 
    {
      id:1,
      firstName: "string",
      lastName: "string",
      email: "string",
      job: "string",
      number: 12
    }
  ]
  ngOnInit(): void {
    this.getallemp();
  }

  private getallemp()
  {
    this.ser.getAll().subscribe( data => {
      this.empList=data;
      console.log(data);
    }, error => console.log(error));
    
  }

  onDelete(emp : {id: any}){
    this.ser.deleteEmployee(emp).subscribe( data=> {
      console.log(emp);
      this.getallemp();
    });
    
    
  }

  onEdit(emp: any)
  {
    this.ro.navigate(['/update', emp]);
  }

}
