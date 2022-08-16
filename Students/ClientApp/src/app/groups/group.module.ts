import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GroupComponent } from './group.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [GroupComponent],
    exports: [GroupComponent]
})
export class GroupModule {

}