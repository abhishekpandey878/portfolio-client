import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function HeroProfileComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵlistener("click", function HeroProfileComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editRequested.emit()); });
    i0.ɵɵtext(1, " \u270E ");
    i0.ɵɵelementEnd();
} }
function HeroProfileComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.animatedSummary || ctx_r1.profile.summary);
} }
export class HeroProfileComponent {
    constructor() {
        this.animatedHeadline = '';
        this.animatedSummary = '';
        this.isSummaryVisible = false;
        this.showEditTools = false;
        this.editRequested = new EventEmitter();
    }
    static { this.ɵfac = function HeroProfileComponent_Factory(t) { return new (t || HeroProfileComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeroProfileComponent, selectors: [["app-hero-profile"]], inputs: { profile: "profile", animatedHeadline: "animatedHeadline", animatedSummary: "animatedSummary", isSummaryVisible: "isSummaryVisible", showEditTools: "showEditTools" }, outputs: { editRequested: "editRequested" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 35, vars: 10, consts: [["id", "about", 1, "hero-card", "reveal-on-scroll", "revealed"], ["class", "card-edit-btn", "type", "button", "aria-label", "Edit profile section", "style", "position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;", 3, "click", 4, "ngIf"], [1, "hero-copy"], [1, "eyebrow"], [1, "headline"], ["class", "summary", 4, "ngIf"], [1, "hero-actions"], ["download", "", 1, "primary-btn", 3, "href"], ["href", "#contact", 1, "secondary-btn"], [1, "hero-metrics"], ["href", "#skills", 1, "metric-card"], ["href", "#projects", 1, "metric-card"], ["href", "#experience", 1, "metric-card"], [1, "hero-side"], [1, "portrait-card"], [1, "photo-frame"], [3, "src", "alt"], ["type", "button", "aria-label", "Edit profile section", 1, "card-edit-btn", 2, "position", "absolute", "top", "18px", "right", "18px", "left", "auto", "z-index", "2", 3, "click"], [1, "summary"]], template: function HeroProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵtemplate(1, HeroProfileComponent_button_1_Template, 2, 0, "button", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "p", 3);
            i0.ɵɵtext(4, "Full Stack Engineer (MEAN)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 4);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, HeroProfileComponent_p_9_Template, 2, 1, "p", 5);
            i0.ɵɵelementStart(10, "div", 6)(11, "a", 7);
            i0.ɵɵtext(12, "Download Resume");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 8);
            i0.ɵɵtext(14, "Contact Me");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 9)(16, "a", 10)(17, "strong");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span");
            i0.ɵɵtext(20, "Core Skills");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "a", 11)(22, "strong");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span");
            i0.ɵɵtext(25, "Featured Projects");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "a", 12)(27, "strong");
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "span");
            i0.ɵɵtext(30, "Experience Entries");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(31, "aside", 13)(32, "div", 14)(33, "div", 15);
            i0.ɵɵelement(34, "img", 16);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showEditTools);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.profile.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.animatedHeadline || ctx.profile.headline);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isSummaryVisible);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("href", ctx.profile.resumePath, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.profile.skills.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.profile.projects.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.profile.experience.length);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("src", ctx.profile.profilePhoto, i0.ɵɵsanitizeUrl)("alt", ctx.profile.name + " profile photo");
        } }, dependencies: [CommonModule, i1.NgIf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeroProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-hero-profile', standalone: true, imports: [CommonModule], template: "<section class=\"hero-card reveal-on-scroll revealed\" id=\"about\">\n  <button\n    class=\"card-edit-btn\"\n    *ngIf=\"showEditTools\"\n    type=\"button\"\n    (click)=\"editRequested.emit()\"\n    aria-label=\"Edit profile section\"\n    style=\"position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;\">\n    &#9998;\n  </button>\n  <div class=\"hero-copy\">\n    <p class=\"eyebrow\">Full Stack Engineer (MEAN)</p>\n    <h1>{{ profile.name }}</h1>\n    <p class=\"headline\">{{ animatedHeadline || profile.headline }}</p>\n    <p class=\"summary\" *ngIf=\"isSummaryVisible\">{{ animatedSummary || profile.summary }}</p>\n\n    <div class=\"hero-actions\">\n      <a class=\"primary-btn\" [href]=\"profile.resumePath\" download>Download Resume</a>\n      <a class=\"secondary-btn\" href=\"#contact\">Contact Me</a>\n    </div>\n\n    <div class=\"hero-metrics\">\n      <a class=\"metric-card\" href=\"#skills\">\n        <strong>{{ profile.skills.length }}</strong>\n        <span>Core Skills</span>\n      </a>\n      <a class=\"metric-card\" href=\"#projects\">\n        <strong>{{ profile.projects.length }}</strong>\n        <span>Featured Projects</span>\n      </a>\n      <a class=\"metric-card\" href=\"#experience\">\n        <strong>{{ profile.experience.length }}</strong>\n        <span>Experience Entries</span>\n      </a>\n    </div>\n  </div>\n  <aside class=\"hero-side\">\n    <div class=\"portrait-card\">\n      <div class=\"photo-frame\">\n        <img [src]=\"profile.profilePhoto\" [alt]=\"profile.name + ' profile photo'\" />\n      </div>\n    </div>\n  </aside>\n</section>\n" }]
    }], null, { profile: [{
            type: Input,
            args: [{ required: true }]
        }], animatedHeadline: [{
            type: Input
        }], animatedSummary: [{
            type: Input
        }], isSummaryVisible: [{
            type: Input
        }], showEditTools: [{
            type: Input
        }], editRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=hero-profile.component.js.map