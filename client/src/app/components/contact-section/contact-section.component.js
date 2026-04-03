import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ContactSectionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function ContactSectionComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editRequested.emit()); });
    i0.ɵɵtext(1, " \u270E ");
    i0.ɵɵelementEnd();
} }
export class ContactSectionComponent {
    constructor() {
        this.showEditTools = false;
        this.editRequested = new EventEmitter();
    }
    encodeEmail(value) {
        return encodeURIComponent(value);
    }
    static { this.ɵfac = function ContactSectionComponent_Factory(t) { return new (t || ContactSectionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactSectionComponent, selectors: [["app-contact-section"]], inputs: { profile: "profile", showEditTools: "showEditTools" }, outputs: { editRequested: "editRequested" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 27, vars: 7, consts: [["id", "contact", 1, "page-footer", "reveal-on-scroll"], ["class", "card-edit-btn", "type", "button", "aria-label", "Edit contact", "style", "position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;", 3, "click", 4, "ngIf"], [1, "section-header", "compact-header", "contact-heading"], [1, "section-tag"], [1, "profile-facts", "contact-facts"], [1, "contact-item", 3, "href"], ["aria-hidden", "true", 1, "contact-symbol"], ["viewBox", "0 0 24 24", "focusable", "false"], ["d", "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.19 2.47.56 3.58a1 1 0 0 1-.24 1.01z"], ["target", "_blank", "rel", "noreferrer", 1, "contact-item", 3, "href"], ["d", "M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5"], [1, "contact-item"], ["d", "M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10zm0-8.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5z"], ["type", "button", "aria-label", "Edit contact", 1, "card-edit-btn", 2, "position", "absolute", "top", "18px", "right", "18px", "left", "auto", "z-index", "2", 3, "click"]], template: function ContactSectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "footer", 0);
            i0.ɵɵtemplate(1, ContactSectionComponent_button_1_Template, 2, 0, "button", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "Contact");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 4)(9, "a", 5)(10, "span", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(11, "svg", 7);
            i0.ɵɵelement(12, "path", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(13, "strong");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "a", 9)(16, "span", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(17, "svg", 7);
            i0.ɵɵelement(18, "path", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(19, "strong");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 11)(22, "span", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(23, "svg", 7);
            i0.ɵɵelement(24, "path", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(25, "strong");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showEditTools);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.profile.sectionTitles.contact);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("href", "tel:" + ctx.profile.phone, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.profile.phone);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("href", "https://mail.google.com/mail/?view=cm&fs=1&to=" + ctx.encodeEmail(ctx.profile.email), i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.profile.email);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.profile.location);
        } }, dependencies: [CommonModule, i1.NgIf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactSectionComponent, [{
        type: Component,
        args: [{ selector: 'app-contact-section', standalone: true, imports: [CommonModule], template: "<footer class=\"page-footer reveal-on-scroll\" id=\"contact\">\n  <button\n    class=\"card-edit-btn\"\n    *ngIf=\"showEditTools\"\n    type=\"button\"\n    (click)=\"editRequested.emit()\"\n    aria-label=\"Edit contact\"\n    style=\"position: absolute; top: 18px; right: 18px; left: auto; z-index: 2;\">\n    &#9998;\n  </button>\n  <div class=\"section-header compact-header contact-heading\">\n    <div>\n      <p class=\"section-tag\">Contact</p>\n      <h2>{{ profile.sectionTitles.contact }}</h2>\n    </div>\n  </div>\n  <div class=\"profile-facts contact-facts\">\n    <a class=\"contact-item\" [href]=\"'tel:' + profile.phone\">\n      <span class=\"contact-symbol\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.19 2.47.56 3.58a1 1 0 0 1-.24 1.01z\"/>\n        </svg>\n      </span>\n      <strong>{{ profile.phone }}</strong>\n    </a>\n    <a\n      class=\"contact-item\"\n      [href]=\"'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeEmail(profile.email)\"\n      target=\"_blank\"\n      rel=\"noreferrer\">\n      <span class=\"contact-symbol\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5\"/>\n        </svg>\n      </span>\n      <strong>{{ profile.email }}</strong>\n    </a>\n    <div class=\"contact-item\">\n      <span class=\"contact-symbol\" aria-hidden=\"true\">\n        <svg viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10zm0-8.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5z\"/>\n        </svg>\n      </span>\n      <strong>{{ profile.location }}</strong>\n    </div>\n  </div>\n</footer>\n" }]
    }], null, { profile: [{
            type: Input,
            args: [{ required: true }]
        }], showEditTools: [{
            type: Input
        }], editRequested: [{
            type: Output
        }] }); })();
//# sourceMappingURL=contact-section.component.js.map