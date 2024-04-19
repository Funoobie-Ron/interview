import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { UserListingComponent } from '../user-listing/user-listing.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { CommonService } from 'src/app/Services/common.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatTabsModule, UserListingComponent, UserDetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  isAdmin: boolean;

    constructor(private CommonService:CommonService){

    }

    ngOnInit() {
      console.log("hello")
      this.CommonService.currentuser().subscribe(res=>{
       if(res.role === 'admin'){
        this.isAdmin =true;
       }else{
        this.isAdmin =false;
       }
      })
    }

  }
