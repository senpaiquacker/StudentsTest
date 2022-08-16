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
import { FacultyGroup } from './faculty-group';
let GroupComponent = class GroupComponent {
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
        this.loadGroups();
        this.loadFaculties();
    }
    addGroup() {
        this.groups.push(new FacultyGroup(null, null));
        this.selectGroup(this.groups.length - 1);
        this.selectGroup(this.groups.length - 1);
        this.mode = Mode.Create;
    }
    selectGroup(id) {
        if (this.mode == Mode.Nothing) {
            if (this.editedId == id) {
                this.edit(id);
            }
            else {
                this.editedId = id;
            }
        }
    }
    edit(id) {
        this.editable[id] = true;
        this.loadFaculties();
        this.edited = new FacultyGroup(this.groups[id].group, this.groups[id].facultyCodeId);
        this.mode = Mode.Edit;
    }
    deleteGroup(id) {
        this.clearSelection();
        this.service.RemoveGroup(this.groups[id]).subscribe(() => { });
        this.contentError = false;
    }
    save() {
        if ((this.edited.group == undefined ||
            this.edited.group == null ||
            this.edited.group.toString() == "") ||
            (this.edited.facultyCodeId == undefined)) {
            this.contentError = true;
        }
        else {
            this.contentError = false;
            this.edited.group = parseInt(this.edited.group.toString(), 10);
            this.edited.facultyCodeId = parseInt(this.edited.facultyCodeId.toString(), 10);
            if (this.mode == Mode.Create) {
                this.service.AddGroup(this.edited).subscribe((data) => { });
            }
            else if (this.mode == Mode.Edit) {
                this.service.ModifyGroup(this.edited, this.groups[this.editedId]).subscribe(() => { });
            }
            this.groups[this.editedId] = this.edited;
            this.clearSelection();
        }
    }
    clearSelection() {
        this.editable[this.editedId] = false;
        this.editedId = undefined;
        this.edited = undefined;
        this.mode = Mode.Nothing;
    }
    loadGroups() {
        this.service.GetGroups().subscribe((data) => {
            this.groups = data;
            this.editable = Array.from(this.groups, (n) => false);
            console.log(this.groups);
            return this.groups;
        });
    }
    getFacultyName(id) {
        return this.faculties.find(s => s.facultyCode == id).facultyName;
    }
    loadFaculties() {
        return this.service.GetFaculties().subscribe((s) => {
            this.faculties = s;
        });
    }
};
GroupComponent = __decorate([
    Component({
        selector: 'groups',
        templateUrl: './group.component.page.html',
        providers: [DataService],
        styleUrls: ['src/app/app.component.style.css']
    }),
    __metadata("design:paramtypes", [DataService, ElementRef])
], GroupComponent);
export { GroupComponent };
var Mode;
(function (Mode) {
    Mode[Mode["Nothing"] = 0] = "Nothing";
    Mode[Mode["Edit"] = 1] = "Edit";
    Mode[Mode["Create"] = 2] = "Create";
})(Mode || (Mode = {}));
//# sourceMappingURL=group.component.js.map