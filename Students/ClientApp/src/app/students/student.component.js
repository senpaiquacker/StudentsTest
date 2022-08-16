var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef } from '@angular/core';
import { DataService } from 'src/app/app.dataservice';
import { StudentInfo } from './student-info';
let StudentComponent = class StudentComponent {
    constructor(service, elRef) {
        this.service = service;
        this.elRef = elRef;
        this.edited = undefined;
        this.editedId = undefined;
        this.mode = Mode.Nothing;
        this.contentError = false;
        this.elRef = elRef;
    }
    ngOnInit() {
        this.loadStudents();
        this.loadGroups();
    }
    loadStudents() {
        this.service.GetStudents().subscribe((data) => { });
    }
    loadGroups() {
        let g;
        let i;
        this.service.GetGroups().subscribe((data) => {
            g = data;
        });
        this.service.GetGroupIds().subscribe((data) => {
            i = data;
            while (g == undefined) { }
            let k = 0;
            this.groups = i.map(s => {
                return { group: g[++k], groupId: s };
            });
        });
    }
    addStudent() {
        this.students.push(new StudentInfo("", "", "", "", null));
        this.selectStudent(this.students.length - 1);
        this.selectStudent(this.students.length - 1);
        this.mode = Mode.Create;
    }
    selectStudent(id) {
        if (this.mode == Mode.Nothing) {
            if (this.editedId == id) {
                this.edit(id);
            }
            else {
                this.editedId = id;
                this.edited = new StudentInfo(this.students[id].secondName, this.students[id].name, this.students[id].fatherName, this.students[id].dateOfBirth, this.students[id].groupId);
            }
        }
    }
    edit(id) {
        this.editable[id] = true;
        this.mode = Mode.Edit;
    }
    save() {
        if ((this.edited.secondName == "") ||
            (this.edited.name == "") ||
            (this.edited.fatherName == "") ||
            (this.edited.dateOfBirth == "") ||
            (this.edited.groupId == undefined)) {
            this.contentError = true;
        }
        else {
            this.contentError = false;
            this.students[this.editedId] = this.edited;
            this.clearSelection();
        }
    }
    clearSelection() {
        this.editable[this.editedId] = false;
        this.editedId = undefined;
        this.edited = undefined;
        this.mode = Mode.Nothing;
    }
    deleteStudent(id) {
        this.clearSelection();
        this.contentError = false;
    }
    getGroupString(id) {
        var answ = this.groups.find(s => s.groupId == id).group;
        return answ.facultyCodeId + "-" + answ.group;
    }
};
StudentComponent = __decorate([
    Component({
        selector: 'students',
        templateUrl: './student.component.page.html',
        providers: [DataService],
        styleUrls: ['src/app/app.component.style.css']
    }),
    __metadata("design:paramtypes", [DataService, ElementRef])
], StudentComponent);
export { StudentComponent };
var Mode;
(function (Mode) {
    Mode[Mode["Nothing"] = 0] = "Nothing";
    Mode[Mode["Edit"] = 1] = "Edit";
    Mode[Mode["Create"] = 2] = "Create";
})(Mode || (Mode = {}));
//# sourceMappingURL=student.component.js.map