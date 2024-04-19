import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,MatButtonModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:  FormGroup;

  constructor(private router: Router,private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.remove();
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  // Convenience getter for easy access to form fields
  get formControls() {
    return this.loginForm.controls;
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  login() {
    if (this.loginForm.valid) {
      this.commonService.login(this.loginForm.value).subscribe(res=>{
        console.log(res)
        this.commonService.setToken(res.token);
        this.router.navigate(['/dashboard'])
      },
      err=> {
        console.log(err)
        alert(err.error.message)
      }
    );
    }
  }
}
