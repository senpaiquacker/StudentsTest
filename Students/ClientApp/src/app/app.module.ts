import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FacultyFormModule } from './faculty-form/faculty-form.module';
import { GroupModule } from './groups/group.module';
import { StudentModule } from './students/student.module';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, FacultyFormModule, GroupModule, StudentModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }