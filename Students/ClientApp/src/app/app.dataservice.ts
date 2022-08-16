import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacultyGroup } from './groups/faculty-group';
@Injectable()
export class DataService {

    private groupUrl = "/api/groups";
    private facultyUrl = "/api/faculties"
    private studentUrl = "/api/students";
    constructor(private http: HttpClient) {
    }
    GetGroups() {
        return this.http.get(this.groupUrl);
    }
    AddGroup(group: FacultyGroup) {
        return this.http.post(this.groupUrl + "/add", group);
    }
    ModifyGroup(group: FacultyGroup, oldVar: FacultyGroup) {
        return this.http.post(this.groupUrl + "/modify", [group, oldVar]);
    }
    RemoveGroup(group: FacultyGroup) {
        return this.http.post(this.groupUrl + "/remove", group);
    }
    GetStudents() {
        return this.http.get(this.studentUrl);
    }
    AddFaculty(faculty:{ facultyName: string, facultyCode: number }) {
        let body = { facultyCode: faculty.facultyCode, facultyName: faculty.facultyName };
        return this.http.post(this.facultyUrl + "/add", body);
    }
    GetFaculties() {
        return this.http.get(this.facultyUrl);
    }
    GetGroupIds() {
        return this.http.get(this.groupUrl + "/ids");
    }
}