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
  users: User[] = [
    { name: 'John Doe', address: '123 Main St, City, Country', username: 'johndoe', role: 'User' },
    { name: 'Jane Smith', address: '456 Elm St, City, Country', username: 'janesmith', role: 'Admin' },
    // Add more users as needed
  ];

  constructor(private CommonService:CommonService){

  }

  ngOnInit() {
    console.log("hello listing")
    this.CommonService.getAllUsers().subscribe(res=>{
      console.log(res)
      //this.users=res;
    })
  }
}
