var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/app.dataservice';
let FacultyFormComponent = class FacultyFormComponent {
    constructor(service, eRef) {
        this.service = service;
        this.eRef = eRef;
        this.onFacultySavedOrCanceled = new EventEmitter();
        this.code = undefined;
        this.name = "";
        this.contentError = false;
    }
    submit() {
        if (this.code == undefined ||
            this.code == null ||
            this.code.toString() == "" ||
            this.name == "") {
            this.contentError = true;
        }
        else {
            this.service.AddFaculty({ facultyName: this.name, facultyCode: parseInt(this.code.toString()) })
                .subscribe(() => { this.clear(); });
            this.onFormClose();
        }
    }
    cancel() {
        this.onFormClose();
        this.clear();
    }
    clear() {
        this.name = "";
        this.code = undefined;
    }
    onFormClose() {
        this.onFacultySavedOrCanceled.emit(false);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], FacultyFormComponent.prototype, "onFacultySavedOrCanceled", void 0);
FacultyFormComponent = __decorate([
    Component({
        selector: 'faculty-form',
        templateUrl: './faculty-form.component.page.html',
        providers: [DataService],
        styleUrls: ['src/app/app.component.style.css']
    }),
    __metadata("design:paramtypes", [DataService, ElementRef])
], FacultyFormComponent);
export { FacultyFormComponent };
//# sourceMappingURL=faculty-form.component.js.map