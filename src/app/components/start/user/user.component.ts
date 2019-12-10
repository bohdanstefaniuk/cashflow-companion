import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/services/repository';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  inputForm: FormGroup = new FormGroup({
    "name": new FormControl("", [Validators.required]),
    "dream": new FormControl("", [Validators.required])
  });

  constructor(private repo: Repository,
    private router: Router) { }

  onSubmit() {
    var formValue = this.inputForm.value;
    this.repo.user = formValue;
    this.router.navigate(["/game"]);
  }

  onReturn() {
    this.router.navigate(["/"]);
  }

  ngOnInit() {
    const user = this.repo.user;
    this.inputForm.reset(user);
  }

}
