import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SkillsSectionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function SkillsSectionComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editRequested.emit()); });
    i0.ɵɵtext(1, " \u270E ");
    i0.ɵɵelementEnd();
} }
function SkillsSectionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "img", 8);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r1.getSkillIcon(skill_r4), i0.ɵɵsanitizeUrl)("alt", skill_r4 + " logo");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(skill_r4);
} }
export class SkillsSectionComponent {
    constructor() {
        this.showEditTools = false;
        this.editRequested = new EventEmitter();
    }
    getSkillIcon(skill) {
        const normalized = skill.toLowerCase();
        const iconMap = [
            ['angular', 'angularjs/angularjs-original.svg'],
            ['typescript', 'typescript/typescript-original.svg'],
            ['javascript', 'javascript/javascript-original.svg'],
            ['node', 'nodejs/nodejs-original.svg'],
            ['express', 'express/express-original.svg'],
            ['mongodb', 'mongodb/mongodb-original.svg'],
            ['mongo', 'mongodb/mongodb-original.svg'],
            ['html', 'html5/html5-original.svg'],
            ['css', 'css3/css3-original.svg'],
            ['java', 'java/java-original.svg'],
            ['spring', 'spring/spring-original.svg'],
            ['mysql', 'mysql/mysql-original.svg'],
            ['postgres', 'postgresql/postgresql-original.svg'],
            ['sql server', 'microsoftsqlserver/microsoftsqlserver-plain.svg'],
            ['react', 'react/react-original.svg'],
            ['next', 'nextjs/nextjs-original.svg'],
            ['vue', 'vuejs/vuejs-original.svg'],
            ['bootstrap', 'bootstrap/bootstrap-original.svg'],
            ['tailwind', 'tailwindcss/tailwindcss-original.svg'],
            ['docker', 'docker/docker-original.svg'],
            ['git', 'git/git-original.svg'],
            ['github', 'github/github-original.svg'],
            ['firebase', 'firebase/firebase-plain.svg'],
            ['python', 'python/python-original.svg'],
            ['c++', 'cplusplus/cplusplus-original.svg'],
            ['c#', 'csharp/csharp-original.svg'],
            ['php', 'php/php-original.svg'],
            ['laravel', 'laravel/laravel-original.svg'],
            ['rest', 'fastapi/fastapi-original.svg'],
            ['api', 'fastapi/fastapi-original.svg']
        ];
        const match = iconMap.find(([keyword]) => normalized.includes(keyword));
        const iconPath = match?.[1] || 'devicon/devicon-original.svg';
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`;
    }
    static { this.ɵfac = function SkillsSectionComponent_Factory(t) { return new (t || SkillsSectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SkillsSectionComponent, selectors: [["app-skills-section"]], inputs: { profile: "profile", showEditTools: "showEditTools" }, outputs: { editRequested: "editRequested" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 3, consts: [["id", "skills", 1, "panel", "panel-half", "reveal-on-scroll"], ["class", "card-edit-btn", "type", "button", "aria-label", "Edit skills", "style", "position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;", 3, "click", 4, "ngIf"], [1, "section-header", "compact-header"], [1, "section-tag"], [1, "skills-grid"], ["class", "skill-card", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Edit skills", 1, "card-edit-btn", 2, "position", "absolute", "top", "18px", "right", "18px", "left", "auto", "z-index", "2", 3, "click"], [1, "skill-card"], [3, "src", "alt"]], template: function SkillsSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0);
            i0.ɵɵtemplate(1, SkillsSectionComponent_button_1_Template, 2, 0, "button", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "Skills");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtemplate(9, SkillsSectionComponent_div_9_Template, 4, 3, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showEditTools);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.profile.sectionTitles.skills);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.profile.skills);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SkillsSectionComponent, [{
        type: Component,
        args: [{ selector: 'app-skills-section', standalone: true, imports: [CommonModule], template: "<article class=\"panel panel-half reveal-on-scroll\" id=\"skills\">\n  <button\n    class=\"card-edit-btn\"\n    *ngIf=\"showEditTools\"\n    type=\"button\"\n    (click)=\"editRequested.emit()\"\n    aria-label=\"Edit skills\"\n    style=\"position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;\">\n    &#9998;\n  </button>\n  <div class=\"section-header compact-header\">\n    <div>\n      <p class=\"section-tag\">Skills</p>\n      <h2>{{ profile.sectionTitles.skills }}</h2>\n    </div>\n  </div>\n  <div class=\"skills-grid\">\n    <div class=\"skill-card\" *ngFor=\"let skill of profile.skills\">\n      <img [src]=\"getSkillIcon(skill)\" [alt]=\"skill + ' logo'\" />\n      <span>{{ skill }}</span>\n    </div>\n  </div>\n</article>\n" }]
    }], null, { profile: [{
            type: Input,
            args: [{ required: true }]
        }], showEditTools: [{
            type: Input
        }], editRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=skills-section.component.js.map