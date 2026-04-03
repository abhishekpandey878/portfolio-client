import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LinksSectionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function LinksSectionComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editRequested.emit()); });
    i0.ɵɵtext(1, " \u270E ");
    i0.ɵɵelementEnd();
} }
function LinksSectionComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7)(1, "div")(2, "p", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 9);
    i0.ɵɵtext(7, "Open");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const link_r4 = ctx.$implicit;
    i0.ɵɵproperty("href", link_r4.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(link_r4.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(link_r4.url);
} }
export class LinksSectionComponent {
    constructor() {
        this.showEditTools = false;
        this.editRequested = new EventEmitter();
    }
    static { this.ɵfac = function LinksSectionComponent_Factory(t) { return new (t || LinksSectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LinksSectionComponent, selectors: [["app-links-section"]], inputs: { profile: "profile", showEditTools: "showEditTools" }, outputs: { editRequested: "editRequested" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 3, consts: [["id", "links", 1, "panel", "panel-half", "reveal-on-scroll"], ["class", "card-edit-btn", "type", "button", "aria-label", "Edit links", "style", "position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;", 3, "click", 4, "ngIf"], [1, "section-header", "compact-header"], [1, "section-tag"], [1, "link-list"], ["class", "link-card", "target", "_blank", "rel", "noreferrer", 3, "href", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Edit links", 1, "card-edit-btn", 2, "position", "absolute", "top", "18px", "right", "18px", "left", "auto", "z-index", "2", 3, "click"], ["target", "_blank", "rel", "noreferrer", 1, "link-card", 3, "href"], [1, "link-label"], [1, "link-arrow"]], template: function LinksSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, LinksSectionComponent_button_1_Template, 2, 0, "button", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "Links");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtemplate(9, LinksSectionComponent_a_9_Template, 8, 3, "a", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showEditTools);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.profile.sectionTitles.links);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.profile.socialLinks);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LinksSectionComponent, [{
        type: Component,
        args: [{ selector: 'app-links-section', standalone: true, imports: [CommonModule], template: "<article class=\"panel panel-half reveal-on-scroll\" id=\"links\">\n  <button\n    class=\"card-edit-btn\"\n    *ngIf=\"showEditTools\"\n    type=\"button\"\n    (click)=\"editRequested.emit()\"\n    aria-label=\"Edit links\"\n    style=\"position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;\">\n    &#9998;\n  </button>\n  <div class=\"section-header compact-header\">\n    <div>\n      <p class=\"section-tag\">Links</p>\n      <h2>{{ profile.sectionTitles.links }}</h2>\n    </div>\n  </div>\n  <div class=\"link-list\">\n    <a class=\"link-card\" *ngFor=\"let link of profile.socialLinks\" [href]=\"link.url\" target=\"_blank\" rel=\"noreferrer\">\n      <div>\n        <p class=\"link-label\">{{ link.label }}</p>\n        <strong>{{ link.url }}</strong>\n      </div>\n      <span class=\"link-arrow\">Open</span>\n    </a>\n  </div>\n</article>\n" }]
    }], null, { profile: [{
            type: Input,
            args: [{ required: true }]
        }], showEditTools: [{
            type: Input
        }], editRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=links-section.component.js.map