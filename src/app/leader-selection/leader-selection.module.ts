import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderSelectionRoutingModule } from './leader-selection-routing.module';
import { LeaderSelectionComponent } from './leader-selection.component';
import { FactionBarComponent } from './faction-bar/faction-bar.component';
import { FactionDetailComponent } from './faction-detail/faction-detail.component';
import { LeaderDetailComponent } from './faction-detail/leader-detail/leader-detail.component';



@NgModule({
  declarations: [
    FactionBarComponent,
    FactionDetailComponent,
    LeaderDetailComponent,
    LeaderSelectionComponent
  ],
  imports: [
    LeaderSelectionRoutingModule,
    CommonModule
  ],
  exports: [
    LeaderSelectionComponent
  ]
})
export class LeaderSelectionModule { }
