import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { ColorBoxComponent } from './color-box.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, ColorBoxComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
