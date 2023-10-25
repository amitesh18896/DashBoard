import { Component } from '@angular/core';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faBell = faBell;
  faSearch = faSearch;
}
