import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FacultyFormComponent } from './faculty-form.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [FacultyFormComponent],
    exports: [FacultyFormComponent]
})
export class FacultyFormModule {

}