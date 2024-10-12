import { Component, Input } from '@angular/core';
import { UserDto } from '../../models/userDto';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  @Input()
  userResult?: UserDto[];
}
