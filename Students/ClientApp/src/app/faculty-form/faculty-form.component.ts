import { Component, ElementRef, Output, Input, EventEmitter} from '@angular/core';
import { DataService } from 'src/app/app.dataservice';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'faculty-form',
    templateUrl: './faculty-form.component.page.html',
    providers: [DataService],
    styleUrls: ['src/app/app.component.style.css']
})
export class FacultyFormComponent {
    constructor(private service: DataService, private eRef: ElementRef) {

    }
    @Output() onFacultySavedOrCanceled = new EventEmitter<boolean>();

    public code: number = undefined;
    public name: string = "";
    public contentError: boolean = false;
    submit(): void {
        if (this.code == undefined ||
            this.code == null ||
            this.code.toString() == "" ||
            this.name == "") {
            this.contentError = true;
        }
        else {
            this.service.AddFaculty({ facultyName: this.name, facultyCode: parseInt(this.code.toString())})
                .subscribe(() => { this.clear(); });
            this.onFormClose();
        }
    }
    cancel(): void {
        this.onFormClose();
        this.clear();
    }
    clear(): void {
        this.name = "";
        this.code = undefined;
    }
    onFormClose() {
        this.onFacultySavedOrCanceled.emit(false);
    }
}