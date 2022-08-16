import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from 'src/app/app.dataservice';
import { FacultyGroup } from 'src/app/groups/faculty-group';
import { StudentInfo } from './student-info';

@Component({
    selector: 'students',
    templateUrl: './student.component.page.html',
    providers: [DataService],
    styleUrls: ['src/app/app.component.style.css']
})
export class StudentComponent implements OnInit {

    constructor(private service: DataService, private elRef: ElementRef) {
        this.elRef = elRef;
    }
    public edited: StudentInfo = undefined;
    private editedId: number = undefined;
    public editable: boolean[];
    public mode: Mode = Mode.Nothing;

    public contentError: boolean = false;

    public students: StudentInfo[];
    public groups: { group: FacultyGroup, groupId: number }[];

    ngOnInit() {
        this.loadStudents();
        this.loadGroups();
    }

    loadStudents(): void {
        this.service.GetStudents().subscribe((data: StudentInfo[]) => {});
    }

    loadGroups(): void {
        let g: FacultyGroup[];
        let i: number[];
        this.service.GetGroups().subscribe((data: FacultyGroup[]) => {
            g = data;
        });
        this.service.GetGroupIds().subscribe((data: number[]) => {
            i = data;
            while (g == undefined) { }
            let k: number = 0;
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

    selectStudent(id: number) {
        if (this.mode == Mode.Nothing) {
            if (this.editedId == id) {
                this.edit(id);
            }
            else {
                this.editedId = id;
                this.edited = new StudentInfo(
                    this.students[id].secondName,
                    this.students[id].name,
                    this.students[id].fatherName,
                    this.students[id].dateOfBirth,
                    this.students[id].groupId
                );
            }
        }
    }

    edit(id: number): void {
        this.editable[id] = true;
        this.mode = Mode.Edit;
    }

    save(): void {
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

    clearSelection(): void {
        this.editable[this.editedId] = false;
        this.editedId = undefined;
        this.edited = undefined;
        this.mode = Mode.Nothing;
    }

    deleteStudent(id: number): void {
        this.clearSelection();
        this.contentError = false;
    }
    getGroupString(id: number): string {
        var answ = this.groups.find(s => s.groupId == id).group;
        return answ.facultyCodeId + "-" + answ.group;
    }
}
enum Mode {
    Nothing = 0,
    Edit = 1,
    Create = 2
}