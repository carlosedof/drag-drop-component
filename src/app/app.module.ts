import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DragDropComponent} from './components/drag-drop/drag-drop.component';
import {DragDropModule} from 'primeng/dragdrop';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StorageService} from './services/storage.service';
import {MarksEditComponent} from './pages/marks-edit/marks-edit.component';
import {MarksViewComponent} from './pages/marks-view/marks-view.component';
import {HomeComponent} from './pages/home/home.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    DragDropComponent,
    MarksEditComponent,
    MarksViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    DialogModule,
    AccordionModule,
    AppRoutingModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
