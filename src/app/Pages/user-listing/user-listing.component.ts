import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonService } from 'src/app/Services/common.service';


export interface User {
  name: string;
  address: string;
  username: string;
  role: string;
}
@Component({
  selector: 'app-user-listing',
  standalone: true,
  imports: [CommonModule, MatTableModule,MatToolbarModule],
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address', 'username', 'role'];
  users: User[] = [];

  constructor(private CommonService:CommonService){

  }

  ngOnInit() {
    console.log("hello listing")
    this.CommonService.getAllUsers().subscribe(res=>{
      console.log(res)
      this.users=res;
    })
  }
}
