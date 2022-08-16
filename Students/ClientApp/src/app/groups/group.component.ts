import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from 'src/app/app.dataservice';
import { FacultyGroup } from './faculty-group';

@Component({
    selector: 'groups',
    templateUrl: './group.component.page.html',
    providers: [DataService],
    styleUrls: ['src/app/app.component.style.css']
})
export class GroupComponent implements OnInit {

    constructor(private service: DataService, private elRef: ElementRef) {
        this.elRef = elRef;
    }
    public edited: FacultyGroup = undefined;
    private editedId: number = undefined;
    public editable: boolean[];
    public mode: Mode = Mode.Nothing;

    public contentError: boolean = false;

    public faculties: { facultyCode: number, facultyName: string }[];
    public groups: FacultyGroup[];

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

    selectGroup(id: number) {
        if (this.mode == Mode.Nothing) {
            if (this.editedId == id) {
                this.edit(id);
            }
            else {
                this.editedId = id;
            }
        }
    }

    edit(id: number): void {
        this.editable[id] = true;
        this.loadFaculties();
        this.edited = new FacultyGroup(this.groups[id].group, this.groups[id].facultyCodeId);
        this.mode = Mode.Edit;
    }

    deleteGroup(id: number): void {
        this.clearSelection();
        this.service.RemoveGroup(this.groups[id]).subscribe(() => { });
        
        this.contentError = false;
    }

    save(): void {
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
                this.service.AddGroup(this.edited).subscribe((data: FacultyGroup) => { });
            }
            else if (this.mode == Mode.Edit) {
                this.service.ModifyGroup(this.edited, this.groups[this.editedId]).subscribe(() => { })
            }
            
            this.groups[this.editedId] = this.edited;
            
            this.clearSelection();
        }
    }

    clearSelection(): void {
        this.editable[this.editedId] = false;
        this.editedId = undefined;
        this.edited = undefined;
        this.mode = Mode.Nothing;
    }

    loadGroups(): void {
        this.service.GetGroups().subscribe((data: FacultyGroup[]) => {
            this.groups = data;
            this.editable = Array.from(this.groups, (n) => false);
            console.log(this.groups);
            return this.groups;
        });
    }

    getFacultyName(id : number): string {
        return this.faculties.find(s => s.facultyCode == id).facultyName;
    }
    loadFaculties() {
        return this.service.GetFaculties().subscribe((s: { facultyCode: number, facultyName: string }[]) => {
            this.faculties = s;
        });
    }
}

enum Mode {
    Nothing = 0,
    Edit = 1,
    Create = 2
}