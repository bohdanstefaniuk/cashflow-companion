import { Component, DoCheck } from '@angular/core';
import { Repository } from 'src/app/services/repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck {
  isInitialized: boolean;

  constructor(public repo: Repository) { 

  }

  ngDoCheck() {
    this.isInitialized = this.repo.isInitialized;
  }

}
