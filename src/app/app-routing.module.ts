import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/start/user/user.component';
import { IncomeInputComponent } from './components/start/income/income.component';
import { OutcomeInputComponent } from './components/start/outcome/outcome.component';
import { GameComponent } from './components/game/game.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'income', component: IncomeInputComponent},
  { path: 'outcome', component: OutcomeInputComponent},
  { path: 'game', component: GameComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
