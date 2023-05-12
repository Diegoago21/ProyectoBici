import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
//import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { FooterComponent } from './share/footer/footer.component';







@NgModule({
  declarations: [
    AppComponent,NavbarComponent,FooterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
