var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.groupUrl = "/api/groups";
        this.facultyUrl = "/api/faculties";
        this.studentUrl = "/api/students";
    }
    GetGroups() {
        return this.http.get(this.groupUrl);
    }
    AddGroup(group) {
        return this.http.post(this.groupUrl + "/add", group);
    }
    ModifyGroup(group, oldVar) {
        return this.http.post(this.groupUrl + "/modify", [group, oldVar]);
    }
    RemoveGroup(group) {
        return this.http.post(this.groupUrl + "/remove", group);
    }
    GetStudents() {
        return this.http.get(this.studentUrl);
    }
    AddFaculty(faculty) {
        let body = { facultyCode: faculty.facultyCode, facultyName: faculty.facultyName };
        return this.http.post(this.facultyUrl + "/add", body);
    }
    GetFaculties() {
        return this.http.get(this.facultyUrl);
    }
    GetGroupIds() {
        return this.http.get(this.groupUrl + "/ids");
    }
};
DataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], DataService);
export { DataService };
//# sourceMappingURL=app.dataservice.js.map