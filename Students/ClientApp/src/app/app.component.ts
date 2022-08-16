import { Component } from '@angular/core';

@Component({
    selector: 'app-comp',
    templateUrl: './app.component.page.html',
    styleUrls: ['./app.component.style.css']
})
export class AppComponent {
    public menu: MenuType = MenuType.MainMenu;

    public facultyToggle: boolean = false;

    public openfacultyform(): void {
        this.facultyToggle = true;
    }

    onFormClose(toggle: boolean) {
        this.facultyToggle = toggle;
    }


    public setmenutogroups() {
        this.menu = MenuType.GroupMenu;
    }

    public opengroup(): boolean {
        return this.menu == MenuType.GroupMenu;
    }


    public setmenutostudents() {
        this.menu = MenuType.StudentsMenu;
    }

    public openstudents() : boolean {
        return this.menu == MenuType.StudentsMenu;
    }


    public gettomainmenu() {
        this.menu = MenuType.MainMenu;
    }

    public openmain() : boolean{
        return this.menu == MenuType.MainMenu;
    }
    
}
enum MenuType {
    MainMenu = 0,
    GroupMenu = 1,
    StudentsMenu = 2,
}