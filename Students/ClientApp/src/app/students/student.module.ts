import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [StudentComponent],
    exports: [StudentComponent]
})
export class StudentModule {

}