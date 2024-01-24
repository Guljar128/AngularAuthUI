import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import ValidateForm from 'src/app/Helper/validateForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"

  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService){

  }
  ngOnInit(): void {
      this.signupForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        userName: ['', Validators.required],
        password: ['', Validators.required]
      })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup(){
    if(this.signupForm.valid)
    {
      this.toastr.success('Sign Up Successfully!!');
      
    }else{
      ValidateForm.validateAllFormFields(this.signupForm);
      this.toastr.error('Your Form Is Invalid');
    }
  }
}
