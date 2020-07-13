import { Component, DoCheck } from '@angular/core';
import { Repository } from 'src/app/services/repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck {
  isInitialized: boolean;

  constructor(public repo: Repository, private router: Router) {}

  ngDoCheck() {
    this.isInitialized = this.repo.isInitialized;
  }

  startNewGame() {
    this.repo.clear();
    this.router.navigate(['/user']);
  }

}
