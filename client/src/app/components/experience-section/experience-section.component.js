import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ExperienceSectionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function ExperienceSectionComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editRequested.emit()); });
    i0.ɵɵtext(1, " \u270E ");
    i0.ɵɵelementEnd();
} }
function ExperienceSectionComponent_div_9_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const point_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(point_r6);
} }
function ExperienceSectionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div")(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 9);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 10);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "ul", 11);
    i0.ɵɵtemplate(10, ExperienceSectionComponent_div_9_li_10_Template, 2, 1, "li", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r4.role);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.company);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.period);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.getExperienceBulletPoints(item_r4.description));
} }
export class ExperienceSectionComponent {
    constructor() {
        this.showEditTools = false;
        this.editRequested = new EventEmitter();
    }
    getExperienceBulletPoints(description) {
        return description
            .split('\n')
            .map((item) => item.replace(/^[\-\u2022]\s*/, '').trim())
            .filter(Boolean);
    }
    static { this.ɵfac = function ExperienceSectionComponent_Factory(t) { return new (t || ExperienceSectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExperienceSectionComponent, selectors: [["app-experience-section"]], inputs: { profile: "profile", showEditTools: "showEditTools" }, outputs: { editRequested: "editRequested" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 3, consts: [["id", "experience", 1, "panel", "panel-full", "reveal-on-scroll"], ["class", "card-edit-btn", "type", "button", "aria-label", "Edit experience", "style", "position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;", 3, "click", 4, "ngIf"], [1, "section-header"], [1, "section-tag"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Edit experience", 1, "card-edit-btn", 2, "position", "absolute", "top", "18px", "right", "18px", "left", "auto", "z-index", "2", 3, "click"], [1, "timeline-item"], [1, "timeline-head"], [1, "timeline-company"], [1, "timeline-period"], [1, "experience-points"], [4, "ngFor", "ngForOf"]], template: function ExperienceSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, ExperienceSectionComponent_button_1_Template, 2, 0, "button", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "Experience");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtemplate(9, ExperienceSectionComponent_div_9_Template, 11, 4, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showEditTools);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.profile.sectionTitles.experience);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.profile.experience);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExperienceSectionComponent, [{
        type: Component,
        args: [{ selector: 'app-experience-section', standalone: true, imports: [CommonModule], template: "<article class=\"panel panel-full reveal-on-scroll\" id=\"experience\">\n  <button\n    class=\"card-edit-btn\"\n    *ngIf=\"showEditTools\"\n    type=\"button\"\n    (click)=\"editRequested.emit()\"\n    aria-label=\"Edit experience\"\n    style=\"position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;\">\n    &#9998;\n  </button>\n  <div class=\"section-header\">\n    <div>\n      <p class=\"section-tag\">Experience</p>\n      <h2>{{ profile.sectionTitles.experience }}</h2>\n    </div>\n  </div>\n  <div class=\"timeline\">\n    <div class=\"timeline-item\" *ngFor=\"let item of profile.experience\">\n      <div class=\"timeline-head\">\n        <div>\n          <h3>{{ item.role }}</h3>\n          <p class=\"timeline-company\">{{ item.company }}</p>\n        </div>\n        <span class=\"timeline-period\">{{ item.period }}</span>\n      </div>\n      <ul class=\"experience-points\">\n        <li *ngFor=\"let point of getExperienceBulletPoints(item.description)\">{{ point }}</li>\n      </ul>\n    </div>\n  </div>\n</article>\n" }]
    }], null, { profile: [{
            type: Input,
            args: [{ required: true }]
        }], showEditTools: [{
            type: Input
        }], editRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=experience-section.component.js.map