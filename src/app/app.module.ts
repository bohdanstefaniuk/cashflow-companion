import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/start/user/user.component';
import { GameComponent } from './components/game/game.component';
import { SummaryComponent } from './components/game/summary/summary.component';
import { LoansComponent } from './components/game/loans/loans.component';
import { Repository } from './services/repository';
import { SummaryCalculator } from './services/summary-calculator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncomeComponent } from './components/game/income/income.component';
import { OutcomeComponent } from './components/game/outcome/outcome.component';
import { StocksComponent } from './components/game/stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    GameComponent,
    SummaryComponent,
    LoansComponent,
    IncomeComponent,
    OutcomeComponent,
    StocksComponent
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
