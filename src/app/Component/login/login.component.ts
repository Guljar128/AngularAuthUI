import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/Helper/validateForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService){

  }
  ngOnInit(): void {
      this.loginForm = this.fb.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      })

    }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit(){
    if(this.loginForm.valid)
    {
      this.toastr.success('Login Successfully!!');
      
    }else{
      ValidateForm.validateAllFormFields(this.loginForm);
      this.toastr.error('Your Form Is Invalid');
    }
  }
}
