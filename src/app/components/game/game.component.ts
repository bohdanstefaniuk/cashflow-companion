import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Repository } from 'src/app/services/repository';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isGuidVisible: boolean = true;
  user: User;

  constructor(private repo: Repository) { }

  ngOnInit() {
    this.user = this.repo.user;
  }

  hideGuide() {
    this.isGuidVisible = false;
  }

}
