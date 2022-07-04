import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  myreact: any = FormGroup;

  employ:any;

  empid : any;

  constructor( private ser: EmployeeServiceService, private ro: ActivatedRoute , private re: Router) { }

  ngOnInit(): void {
    this.empid = this.ro.snapshot.params['id'];
    this.formbuild();
    this.ser.getby(this.empid).subscribe( data => {
      this.employ=data;
      console.log(this.employ)
      this.myreact.get('firstname').setValue(this.employ.firstname);
      this.myreact.get('lastname').setValue(this.employ.lastname);
      this.myreact.get('number').setValue(this.employ.number);
      this.myreact.get('email').setValue(this.employ.email);
      this.myreact.get('job').setValue(this.employ.job);


    });
  
    console.log("update",this.empid);
    console.log(this.employ)
    //this.formbuild();
   
  }

  onSubmit()
  {

    let config=this.myreact.value;
    config.id=Number(this.empid);

    this.ser.addEmployee(config).subscribe( data =>{

    });

    console.log("config",config);
    
    setTimeout(()=> {
      this.re.navigate(['/list']);
    },600);
    
    
  }

  formbuild(){
    this.myreact = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]),
      job: new FormControl('', Validators.required),
    });
  }

}
