import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TopbarComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function TopbarComponent_button_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onLogout()); });
    i0.ɵɵtext(1, " Logout ");
    i0.ɵɵelementEnd();
} }
export class TopbarComponent {
    constructor() {
        this.isAuthenticated = false;
        this.showAdminActions = false;
        this.logoutRequested = new EventEmitter();
        this.isMenuOpen = false;
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    closeMenu() {
        this.isMenuOpen = false;
    }
    onLogout() {
        this.closeMenu();
        this.logoutRequested.emit();
    }
    onWindowResize() {
        if (typeof window !== 'undefined' && window.innerWidth > 820) {
            this.isMenuOpen = false;
        }
    }
    static { this.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TopbarComponent, selectors: [["app-topbar"]], hostBindings: function TopbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function TopbarComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { isAuthenticated: "isAuthenticated", showAdminActions: "showAdminActions" }, outputs: { logoutRequested: "logoutRequested" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 23, vars: 4, consts: [[1, "topbar", "topbar-nav"], [1, "brand-block"], [1, "eyebrow"], ["type", "button", "aria-controls", "mobile-nav", "aria-label", "Toggle navigation", 1, "menu-toggle", 3, "click"], ["id", "mobile-nav", 1, "section-nav"], ["href", "#about", 3, "click"], ["href", "#skills", 3, "click"], ["href", "#experience", 3, "click"], ["href", "#projects", 3, "click"], ["href", "#education", 3, "click"], ["href", "#contact", 3, "click"], [1, "topbar-actions"], ["class", "ghost-btn", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "ghost-btn", 3, "click"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
            i0.ɵɵtext(3, "Abhishek Pandey");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function TopbarComponent_Template_button_click_4_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelement(5, "span")(6, "span")(7, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "nav", 4)(9, "a", 5);
            i0.ɵɵlistener("click", function TopbarComponent_Template_a_click_9_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(10, "About");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "a", 6);
            i0.ɵɵlistener("click", function TopbarComponent_Template_a_click_11_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(12, "Skills");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 7);
            i0.ɵɵlistener("click", function TopbarComponent_Template_a_click_13_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(14, "Experience");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 8);
            i0.ɵɵlistener("click", function TopbarComponent_Template_a_click_15_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(16, "Projects");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "a", 9);
            i0.ɵɵlistener("click", function TopbarComponent_Template_a_click_17_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(18, "Education");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "a", 10);
            i0.ɵɵlistener("click", function TopbarComponent_Template_a_click_19_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(20, "Contact");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 11);
            i0.ɵɵtemplate(22, TopbarComponent_button_22_Template, 2, 0, "button", 12);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("aria-expanded", ctx.isMenuOpen);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("menu-open", ctx.isMenuOpen);
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngIf", ctx.showAdminActions && ctx.isAuthenticated);
        } }, dependencies: [CommonModule, i1.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  width: 46px;\n  height: 46px;\n  padding: 0;\n  border: 1px solid rgba(23, 32, 42, 0.12);\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.72);\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 18px;\n  height: 2px;\n  border-radius: 999px;\n  background: #17202a;\n}\n\n.menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n@media (max-width: 820px) {\n  .topbar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    align-items: start;\n    padding-right: 76px;\n  }\n\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    position: absolute;\n    top: 18px;\n    right: 18px;\n    z-index: 2;\n  }\n\n  .section-nav[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n    padding-top: 14px;\n  }\n\n  .section-nav.menu-open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .section-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    padding: 12px 14px;\n    border-radius: 16px;\n    background: rgba(255, 255, 255, 0.54);\n  }\n\n  .topbar-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 8px;\n  }\n\n  .topbar-actions[_ngcontent-%COMP%]   .ghost-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TopbarComponent, [{
        type: Component,
        args: [{ selector: 'app-topbar', standalone: true, imports: [CommonModule], template: "<section class=\"topbar topbar-nav\">\n  <div class=\"brand-block\">\n    <p class=\"eyebrow\">Abhishek Pandey</p>\n  </div>\n  <button\n    class=\"menu-toggle\"\n    type=\"button\"\n    (click)=\"toggleMenu()\"\n    [attr.aria-expanded]=\"isMenuOpen\"\n    aria-controls=\"mobile-nav\"\n    aria-label=\"Toggle navigation\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n  <nav class=\"section-nav\" [class.menu-open]=\"isMenuOpen\" id=\"mobile-nav\">\n    <a href=\"#about\" (click)=\"closeMenu()\">About</a>\n    <a href=\"#skills\" (click)=\"closeMenu()\">Skills</a>\n    <a href=\"#experience\" (click)=\"closeMenu()\">Experience</a>\n    <a href=\"#projects\" (click)=\"closeMenu()\">Projects</a>\n    <a href=\"#education\" (click)=\"closeMenu()\">Education</a>\n    <a href=\"#contact\" (click)=\"closeMenu()\">Contact</a>\n  </nav>\n  <div class=\"topbar-actions\">\n    <button class=\"ghost-btn\" *ngIf=\"showAdminActions && isAuthenticated\" type=\"button\" (click)=\"onLogout()\">\n      Logout\n    </button>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.menu-toggle {\n  display: none;\n  width: 46px;\n  height: 46px;\n  padding: 0;\n  border: 1px solid rgba(23, 32, 42, 0.12);\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.72);\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.menu-toggle span {\n  display: block;\n  width: 18px;\n  height: 2px;\n  border-radius: 999px;\n  background: #17202a;\n}\n\n.menu-toggle span + span {\n  margin-top: 4px;\n}\n\n@media (max-width: 820px) {\n  .topbar {\n    grid-template-columns: 1fr;\n    align-items: start;\n    padding-right: 76px;\n  }\n\n  .menu-toggle {\n    display: inline-flex;\n    position: absolute;\n    top: 18px;\n    right: 18px;\n    z-index: 2;\n  }\n\n  .section-nav {\n    display: none;\n    width: 100%;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n    padding-top: 14px;\n  }\n\n  .section-nav.menu-open {\n    display: flex;\n  }\n\n  .section-nav a {\n    width: 100%;\n    text-align: left;\n    padding: 12px 14px;\n    border-radius: 16px;\n    background: rgba(255, 255, 255, 0.54);\n  }\n\n  .topbar-actions {\n    width: 100%;\n    padding-top: 8px;\n  }\n\n  .topbar-actions .ghost-btn {\n    width: 100%;\n  }\n}\n"] }]
    }], null, { isAuthenticated: [{
            type: Input
        }], showAdminActions: [{
            type: Input
        }], logoutRequested: [{
            type: Output
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
//# sourceMappingURL=topbar.component.js.map