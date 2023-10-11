import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessaggiComponent } from './messaggi/messaggi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InOutParentComponent } from './child-parent-example/in-out-parent/in-out-parent.component';
import { InChildComponent } from './child-parent-example/in-child/in-child.component';
import { OutChildComponent } from './child-parent-example/out-child/out-child.component';
import { StudenteParentComponent } from './studente/studente-parent/studente-parent.component';
import { StudenteInChildComponent } from './studente/studente-in-child/studente-in-child.component';
import { StudenteOutChildComponent } from './studente/studente-out-child/studente-out-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MessaggiComponent,
    DataBindingComponent,
    InOutParentComponent,
    InChildComponent,
    OutChildComponent,
    StudenteParentComponent,
    StudenteInChildComponent,
    StudenteOutChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }