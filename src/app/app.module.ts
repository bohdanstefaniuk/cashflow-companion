import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IncomeInputComponent } from './components/start/income/income.component';
import { OutcomeInputComponent } from './components/start/outcome/outcome.component';
import { UserComponent } from './components/start/user/user.component';
import { GameComponent } from './components/game/game.component';
import { TotalComponent } from './components/game/total/total.component';
import { LoansComponent } from './components/game/loans/loans.component';
import { Repository } from './services/repository';
import { SummaryCalculator } from './services/summaryCalculator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncomeComponent } from './components/game/income/income.component';
import { OutcomeComponent } from './components/game/outcome/outcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncomeInputComponent,
    OutcomeInputComponent,
    UserComponent,
    GameComponent,
    TotalComponent,
    LoansComponent,
    IncomeComponent,
    OutcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [Repository, SummaryCalculator],
  bootstrap: [AppComponent]
})
export class AppModule { }
