var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.menu = MenuType.MainMenu;
        this.facultyToggle = false;
    }
    openfacultyform() {
        this.facultyToggle = true;
    }
    onFormClose(toggle) {
        this.facultyToggle = toggle;
    }
    setmenutogroups() {
        this.menu = MenuType.GroupMenu;
    }
    opengroup() {
        return this.menu == MenuType.GroupMenu;
    }
    setmenutostudents() {
        this.menu = MenuType.StudentsMenu;
    }
    openstudents() {
        return this.menu == MenuType.StudentsMenu;
    }
    gettomainmenu() {
        this.menu = MenuType.MainMenu;
    }
    openmain() {
        return this.menu == MenuType.MainMenu;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-comp',
        templateUrl: './app.component.page.html',
        styleUrls: ['./app.component.style.css']
    })
], AppComponent);
export { AppComponent };
var MenuType;
(function (MenuType) {
    MenuType[MenuType["MainMenu"] = 0] = "MainMenu";
    MenuType[MenuType["GroupMenu"] = 1] = "GroupMenu";
    MenuType[MenuType["StudentsMenu"] = 2] = "StudentsMenu";
})(MenuType || (MenuType = {}));
//# sourceMappingURL=app.component.js.map