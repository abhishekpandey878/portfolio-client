import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ProjectsSectionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ProjectsSectionComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editRequested.emit()); });
    i0.ɵɵtext(1, " \u270E ");
    i0.ɵɵelementEnd();
} }
function ProjectsSectionComponent_div_9_a_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵtext(1, "View live");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const project_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("href", project_r4.link, i0.ɵɵsanitizeUrl);
} }
function ProjectsSectionComponent_div_9_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tech_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tech_r8);
} }
function ProjectsSectionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div")(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 9);
    i0.ɵɵtext(6, "Project showcase");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, ProjectsSectionComponent_div_9_a_7_Template, 2, 1, "a", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 11);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 12);
    i0.ɵɵtemplate(11, ProjectsSectionComponent_div_9_span_11_Template, 2, 1, "span", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(project_r4.name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", project_r4.link);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r4.description);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", project_r4.stack);
} }
export class ProjectsSectionComponent {
    constructor() {
        this.showEditTools = false;
        this.editRequested = new EventEmitter();
    }
    static { this.ɵfac = function ProjectsSectionComponent_Factory(t) { return new (t || ProjectsSectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProjectsSectionComponent, selectors: [["app-projects-section"]], inputs: { profile: "profile", showEditTools: "showEditTools" }, outputs: { editRequested: "editRequested" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 3, consts: [["id", "projects", 1, "panel", "panel-full", "reveal-on-scroll"], ["class", "card-edit-btn", "type", "button", "aria-label", "Edit projects", "style", "position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;", 3, "click", 4, "ngIf"], [1, "section-header"], [1, "section-tag"], [1, "project-grid", "project-grid-wide"], ["class", "project-card", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Edit projects", 1, "card-edit-btn", 2, "position", "absolute", "top", "18px", "right", "18px", "left", "auto", "z-index", "2", 3, "click"], [1, "project-card"], [1, "project-top"], [1, "project-caption"], ["target", "_blank", "rel", "noreferrer", 3, "href", 4, "ngIf"], [1, "project-description"], [1, "stack-row"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noreferrer", 3, "href"]], template: function ProjectsSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, ProjectsSectionComponent_button_1_Template, 2, 0, "button", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "Projects");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtemplate(9, ProjectsSectionComponent_div_9_Template, 12, 4, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showEditTools);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.profile.sectionTitles.projects);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.profile.projects);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectsSectionComponent, [{
        type: Component,
        args: [{ selector: 'app-projects-section', standalone: true, imports: [CommonModule], template: "<article class=\"panel panel-full reveal-on-scroll\" id=\"projects\">\n  <button\n    class=\"card-edit-btn\"\n    *ngIf=\"showEditTools\"\n    type=\"button\"\n    (click)=\"editRequested.emit()\"\n    aria-label=\"Edit projects\"\n    style=\"position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;\">\n    &#9998;\n  </button>\n  <div class=\"section-header\">\n    <div>\n      <p class=\"section-tag\">Projects</p>\n      <h2>{{ profile.sectionTitles.projects }}</h2>\n    </div>\n  </div>\n  <div class=\"project-grid project-grid-wide\">\n    <div class=\"project-card\" *ngFor=\"let project of profile.projects\">\n      <div class=\"project-top\">\n        <div>\n          <h3>{{ project.name }}</h3>\n          <p class=\"project-caption\">Project showcase</p>\n        </div>\n        <a *ngIf=\"project.link\" [href]=\"project.link\" target=\"_blank\" rel=\"noreferrer\">View live</a>\n      </div>\n      <p class=\"project-description\">{{ project.description }}</p>\n      <div class=\"stack-row\">\n        <span *ngFor=\"let tech of project.stack\">{{ tech }}</span>\n      </div>\n    </div>\n  </div>\n</article>\n" }]
    }], null, { profile: [{
            type: Input,
            args: [{ required: true }]
        }], showEditTools: [{
            type: Input
        }], editRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=projects-section.component.js.map