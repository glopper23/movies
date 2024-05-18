import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ShelfLevelsComponent } from './components/shelf-levels/shelf-levels.component';
import { ShelfItemComponent } from './components/shelf-item/shelf-item.component';
import { AppComponent } from './app.component';
import { VisualArtifactsComponent } from './components/visual-artifacts/visual-artifacts.component';
import { BaseShelveComponent } from './components/base-shelve/base-shelve.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseShelveComponent,
    ShelfLevelsComponent,
    ShelfItemComponent,
    VisualArtifactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
