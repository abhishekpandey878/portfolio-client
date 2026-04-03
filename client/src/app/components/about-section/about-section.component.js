import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AboutSectionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function AboutSectionComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editRequested.emit()); });
    i0.ɵɵtext(1, " \u270E ");
    i0.ɵɵelementEnd();
} }
function AboutSectionComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "span", 10);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4);
} }
export class AboutSectionComponent {
    constructor() {
        this.showEditTools = false;
        this.editRequested = new EventEmitter();
    }
    static { this.ɵfac = function AboutSectionComponent_Factory(t) { return new (t || AboutSectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutSectionComponent, selectors: [["app-about-section"]], inputs: { profile: "profile", showEditTools: "showEditTools" }, outputs: { editRequested: "editRequested" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 4, consts: [[1, "panel", "panel-full", "about-panel", "reveal-on-scroll"], ["class", "card-edit-btn about-edit-btn", "type", "button", "aria-label", "Edit about", "style", "position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;", 3, "click", 4, "ngIf"], [1, "section-header"], [1, "section-tag"], [1, "about-layout"], [1, "about-summary"], [1, "highlights-grid"], ["class", "highlight-card", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Edit about", 1, "card-edit-btn", "about-edit-btn", 2, "position", "absolute", "top", "18px", "right", "18px", "left", "auto", "z-index", "2", 3, "click"], [1, "highlight-card"], [1, "highlight-dot"]], template: function AboutSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, AboutSectionComponent_button_1_Template, 2, 0, "button", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "About");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 4)(9, "div", 5)(10, "p");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 6);
            i0.ɵɵtemplate(13, AboutSectionComponent_div_13_Template, 4, 1, "div", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showEditTools);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.profile.sectionTitles.about);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.profile.summary);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.profile.highlights);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AboutSectionComponent, [{
        type: Component,
        args: [{ selector: 'app-about-section', standalone: true, imports: [CommonModule], template: "<article class=\"panel panel-full about-panel reveal-on-scroll\">\n  <button\n    class=\"card-edit-btn about-edit-btn\"\n    *ngIf=\"showEditTools\"\n    type=\"button\"\n    (click)=\"editRequested.emit()\"\n    aria-label=\"Edit about\"\n    style=\"position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;\">\n    &#9998;\n  </button>\n  <div class=\"section-header\">\n    <div>\n      <p class=\"section-tag\">About</p>\n      <h2>{{ profile.sectionTitles.about }}</h2>\n    </div>\n  </div>\n  <div class=\"about-layout\">\n    <div class=\"about-summary\">\n      <p>{{ profile.summary }}</p>\n    </div>\n    <div class=\"highlights-grid\">\n      <div class=\"highlight-card\" *ngFor=\"let item of profile.highlights\">\n        <span class=\"highlight-dot\"></span>\n        <p>{{ item }}</p>\n      </div>\n    </div>\n  </div>\n</article>\n" }]
    }], null, { profile: [{
            type: Input,
            args: [{ required: true }]
        }], showEditTools: [{
            type: Input
        }], editRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=about-section.component.js.map