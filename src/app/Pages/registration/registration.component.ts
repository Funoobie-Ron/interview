import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatOptionModule,MatSelectModule ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  register() {
    if (this.registrationForm.valid) {
      const name = this.registrationForm.value.name;
      const address = this.registrationForm.value.address;
      const username = this.registrationForm.value.username;
      const role = this.registrationForm.value.role;
      this.commonService.register(this.registrationForm.value).subscribe(res=>{
        console.log(res)
      }
      );
    }
  }
}
