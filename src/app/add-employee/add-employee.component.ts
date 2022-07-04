import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  myreact: any = FormGroup;

  success:boolean=false;

  constructor(private ser: EmployeeServiceService
    , private router: Router) { }

  ngOnInit(): void {

      this.myreact = new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        number: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        job: new FormControl(null, Validators.required),
      });

  }

  onSubmit()
  {
    this.ser.addEmployee(this.myreact.value).subscribe( data =>{

    }, error => console.log(error));

    console.log(this.myreact.value);
    
    setTimeout(()=> {
      this.router.navigate(['/list']);
    },600);
    
    
  }
}
