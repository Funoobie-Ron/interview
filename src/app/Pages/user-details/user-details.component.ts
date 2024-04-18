import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatIconModule, MatListModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

}
