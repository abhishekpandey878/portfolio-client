import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { LinksSectionComponent } from './components/links-section/links-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PortfolioService } from './portfolio.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function AppComponent_main_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 3)(1, "p");
    i0.ɵɵtext(2, "Loading portfolio...");
    i0.ɵɵelementEnd()();
} }
function AppComponent_app_topbar_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-topbar", 4);
    i0.ɵɵlistener("logoutRequested", function AppComponent_app_topbar_1_Template_app_topbar_logoutRequested_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.logout()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("isAuthenticated", ctx_r1.isAuthenticated())("showAdminActions", ctx_r1.isAdminRoute);
} }
function AppComponent_main_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.statusMessage);
} }
function AppComponent_main_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "app-hero-profile", 11);
    i0.ɵɵlistener("editRequested", function AppComponent_main_2_ng_container_2_Template_app_hero_profile_editRequested_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.openSectionEditor("profile")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "app-about-section", 12);
    i0.ɵɵlistener("editRequested", function AppComponent_main_2_ng_container_2_Template_app_about_section_editRequested_2_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.openSectionEditor("about")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "section", 13)(4, "app-skills-section", 12);
    i0.ɵɵlistener("editRequested", function AppComponent_main_2_ng_container_2_Template_app_skills_section_editRequested_4_listener() { i0.ɵɵrestoreView(_r13); const ctx_r15 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r15.openSectionEditor("skills")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "app-links-section", 12);
    i0.ɵɵlistener("editRequested", function AppComponent_main_2_ng_container_2_Template_app_links_section_editRequested_5_listener() { i0.ɵɵrestoreView(_r13); const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.openSectionEditor("links")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "app-experience-section", 12);
    i0.ɵɵlistener("editRequested", function AppComponent_main_2_ng_container_2_Template_app_experience_section_editRequested_6_listener() { i0.ɵɵrestoreView(_r13); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.openSectionEditor("experience")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "app-projects-section", 12);
    i0.ɵɵlistener("editRequested", function AppComponent_main_2_ng_container_2_Template_app_projects_section_editRequested_7_listener() { i0.ɵɵrestoreView(_r13); const ctx_r18 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r18.openSectionEditor("projects")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "app-education-section", 12);
    i0.ɵɵlistener("editRequested", function AppComponent_main_2_ng_container_2_Template_app_education_section_editRequested_8_listener() { i0.ɵɵrestoreView(_r13); const ctx_r19 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r19.openSectionEditor("education")); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "app-contact-section", 12);
    i0.ɵɵlistener("editRequested", function AppComponent_main_2_ng_container_2_Template_app_contact_section_editRequested_9_listener() { i0.ɵɵrestoreView(_r13); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.openSectionEditor("contact")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const profileData_r11 = ctx.ngIf;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("profile", profileData_r11)("animatedHeadline", ctx_r6.animatedHeadline)("animatedSummary", ctx_r6.animatedSummary)("isSummaryVisible", ctx_r6.isSummaryVisible)("showEditTools", ctx_r6.isAdminRoute);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("profile", profileData_r11)("showEditTools", ctx_r6.isAdminRoute);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("profile", profileData_r11)("showEditTools", ctx_r6.isAdminRoute);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("profile", profileData_r11)("showEditTools", ctx_r6.isAdminRoute);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("profile", profileData_r11)("showEditTools", ctx_r6.isAdminRoute);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("profile", profileData_r11)("showEditTools", ctx_r6.isAdminRoute);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("profile", profileData_r11)("showEditTools", ctx_r6.isAdminRoute);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("profile", profileData_r11)("showEditTools", ctx_r6.isAdminRoute);
} }
function AppComponent_main_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14)(1, "h2");
    i0.ɵɵtext(2, "No portfolio content yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Use the section edit buttons to sign in and update portfolio content.");
    i0.ɵɵelementEnd()();
} }
function AppComponent_main_2_section_5_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r21.loginError);
} }
function AppComponent_main_2_section_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 15);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_5_Template_section_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.closeLoginModal()); });
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_5_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "div", 17)(3, "h3");
    i0.ɵɵtext(4, "Admin Login");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 18);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_5_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r25.closeLoginModal()); });
    i0.ɵɵtext(6, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p", 19);
    i0.ɵɵtext(8, "Log in to edit portfolio content.");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AppComponent_main_2_section_5_p_9_Template, 2, 1, "p", 20);
    i0.ɵɵelementStart(10, "form", 21);
    i0.ɵɵlistener("ngSubmit", function AppComponent_main_2_section_5_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r23); const ctx_r26 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r26.login()); });
    i0.ɵɵelementStart(11, "input", 22);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_5_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.loginEmail = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 23);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_5_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r28 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r28.loginPassword = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 24);
    i0.ɵɵtext(14, "Login");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r9.loginError);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r9.loginEmail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r9.loginPassword);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r9.isLoggingIn);
} }
function AppComponent_main_2_section_6_div_10_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵelement(1, "img", 47);
    i0.ɵɵelementStart(2, "button", 48);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_10_div_33_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r38.clearPhoto()); });
    i0.ɵɵtext(3, "Remove photo");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r37.editableProfile.profilePhoto, i0.ɵɵsanitizeUrl);
} }
function AppComponent_main_2_section_6_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 36);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_10_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r40.editableProfile.name = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Headline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 37);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_10_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r42.editableProfile.headline = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 38);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_10_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r43 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r43.editableProfile.location = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 39);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_10_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r44 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r44.editableProfile.phone = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label")(18, "span");
    i0.ɵɵtext(19, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 40);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_10_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r45 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r45.editableProfile.email = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label")(22, "span");
    i0.ɵɵtext(23, "Resume path");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 41);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_10_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r46 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r46.editableProfile.resumePath = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "label", 42)(26, "span");
    i0.ɵɵtext(27, "Profile photo URL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "input", 43);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_10_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r47 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r47.editableProfile.profilePhoto = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label", 42)(30, "span");
    i0.ɵɵtext(31, "Upload profile photo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "input", 44);
    i0.ɵɵlistener("change", function AppComponent_main_2_section_6_div_10_Template_input_change_32_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r48 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r48.onPhotoSelected($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(33, AppComponent_main_2_section_6_div_10_div_33_Template, 4, 1, "div", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r29.editableProfile.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r29.editableProfile.headline);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r29.editableProfile.location);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r29.editableProfile.phone);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r29.editableProfile.email);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r29.editableProfile.resumePath);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r29.editableProfile.profilePhoto);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r29.editableProfile.profilePhoto);
} }
function AppComponent_main_2_section_6_div_11_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_11_div_14_Template_input_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r53); const i_r51 = restoredCtx.index; const ctx_r52 = i0.ɵɵnextContext(4); return i0.ɵɵresetView((ctx_r52.editableProfile.highlights[i_r51] = $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 48);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_11_div_14_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r53); const i_r51 = restoredCtx.index; const ctx_r54 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r54.removeHighlight(i_r51)); });
    i0.ɵɵtext(3, "Delete");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r51 = ctx.index;
    const ctx_r49 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r49.editableProfile.highlights[i_r51])("name", "modal-highlight-" + i_r51);
} }
function AppComponent_main_2_section_6_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "label", 42)(2, "span");
    i0.ɵɵtext(3, "About heading");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 49);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_11_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r55.editableProfile.sectionTitles.about = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label", 42)(6, "span");
    i0.ɵɵtext(7, "Summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "textarea", 50);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_11_Template_textarea_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r57 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r57.editableProfile.summary = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 51)(10, "div", 52)(11, "h4");
    i0.ɵɵtext(12, "Highlights");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 53);
    i0.ɵɵtemplate(14, AppComponent_main_2_section_6_div_11_div_14_Template, 4, 2, "div", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 33);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_11_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r56); const ctx_r58 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r58.addHighlight()); });
    i0.ɵɵtext(16, "Add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r30.editableProfile.sectionTitles.about);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r30.editableProfile.summary);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r30.editableProfile.highlights)("ngForTrackBy", ctx_r30.trackByIndex);
} }
function AppComponent_main_2_section_6_div_12_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_12_div_9_Template_input_ngModelChange_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r63); const i_r61 = restoredCtx.index; const ctx_r62 = i0.ɵɵnextContext(4); return i0.ɵɵresetView((ctx_r62.editableProfile.skills[i_r61] = $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 48);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_12_div_9_Template_button_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r63); const i_r61 = restoredCtx.index; const ctx_r64 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r64.removeSkill(i_r61)); });
    i0.ɵɵtext(3, "Delete");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const i_r61 = ctx.index;
    const ctx_r59 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r59.editableProfile.skills[i_r61])("name", "modal-skill-" + i_r61);
} }
function AppComponent_main_2_section_6_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 52)(2, "h4");
    i0.ɵɵtext(3, "Skills");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Skills heading");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 58);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_12_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r65 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r65.editableProfile.sectionTitles.skills = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 53);
    i0.ɵɵtemplate(9, AppComponent_main_2_section_6_div_12_div_9_Template, 4, 2, "div", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 33);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_12_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r66); const ctx_r67 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r67.addSkill()); });
    i0.ɵɵtext(11, "Add");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r31.editableProfile.sectionTitles.skills);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r31.editableProfile.skills)("ngForTrackBy", ctx_r31.trackByIndex);
} }
function AppComponent_main_2_section_6_div_13_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_13_div_9_Template_input_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r72); const link_r69 = restoredCtx.$implicit; return i0.ɵɵresetView(link_r69.label = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "URL");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_13_div_9_Template_input_ngModelChange_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r72); const link_r69 = restoredCtx.$implicit; return i0.ɵɵresetView(link_r69.url = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 48);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_13_div_9_Template_button_click_9_listener() { const restoredCtx = i0.ɵɵrestoreView(_r72); const i_r70 = restoredCtx.index; const ctx_r74 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r74.removeLink(i_r70)); });
    i0.ɵɵtext(10, "Delete");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const link_r69 = ctx.$implicit;
    const i_r70 = ctx.index;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", link_r69.label)("name", "modal-link-label-" + i_r70);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", link_r69.url)("name", "modal-link-url-" + i_r70);
} }
function AppComponent_main_2_section_6_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 52)(2, "h4");
    i0.ɵɵtext(3, "Links");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Links heading");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 59);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_13_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r76); const ctx_r75 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r75.editableProfile.sectionTitles.links = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 53);
    i0.ɵɵtemplate(9, AppComponent_main_2_section_6_div_13_div_9_Template, 11, 4, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 33);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_13_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r76); const ctx_r77 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r77.addLink()); });
    i0.ɵɵtext(11, "Add");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r32.editableProfile.sectionTitles.links);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r32.editableProfile.socialLinks)("ngForTrackBy", ctx_r32.trackByIndex);
} }
function AppComponent_main_2_section_6_div_14_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_14_div_9_Template_input_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r82); const item_r79 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r79.role = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Company");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_14_div_9_Template_input_ngModelChange_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r82); const item_r79 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r79.company = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_14_div_9_Template_input_ngModelChange_12_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r82); const item_r79 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r79.period = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "Description (one point per line)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "textarea", 63);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_14_div_9_Template_textarea_ngModelChange_16_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r82); const item_r79 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r79.description = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 48);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_14_div_9_Template_button_click_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r82); const i_r80 = restoredCtx.index; const ctx_r86 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r86.removeExperience(i_r80)); });
    i0.ɵɵtext(18, "Delete");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r79 = ctx.$implicit;
    const i_r80 = ctx.index;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r79.role)("name", "modal-experience-role-" + i_r80);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r79.company)("name", "modal-experience-company-" + i_r80);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r79.period)("name", "modal-experience-period-" + i_r80);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r79.description)("name", "modal-experience-description-" + i_r80);
} }
function AppComponent_main_2_section_6_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 52)(2, "h4");
    i0.ɵɵtext(3, "Experience");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Experience heading");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 62);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_14_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r87.editableProfile.sectionTitles.experience = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 53);
    i0.ɵɵtemplate(9, AppComponent_main_2_section_6_div_14_div_9_Template, 19, 8, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 33);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_14_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r88); const ctx_r89 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r89.addExperience()); });
    i0.ɵɵtext(11, "Add");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r33.editableProfile.sectionTitles.experience);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r33.editableProfile.experience)("ngForTrackBy", ctx_r33.trackByIndex);
} }
function AppComponent_main_2_section_6_div_15_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_15_div_9_Template_input_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r94); const project_r91 = restoredCtx.$implicit; return i0.ɵɵresetView(project_r91.name = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Stack (comma separated)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_15_div_9_Template_input_ngModelChange_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r94); const project_r91 = restoredCtx.$implicit; const ctx_r95 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r95.updateProjectStack(project_r91, $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Project link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_15_div_9_Template_input_ngModelChange_12_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r94); const project_r91 = restoredCtx.$implicit; return i0.ɵɵresetView(project_r91.link = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "textarea", 63);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_15_div_9_Template_textarea_ngModelChange_16_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r94); const project_r91 = restoredCtx.$implicit; return i0.ɵɵresetView(project_r91.description = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 48);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_15_div_9_Template_button_click_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r94); const i_r92 = restoredCtx.index; const ctx_r98 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r98.removeProject(i_r92)); });
    i0.ɵɵtext(18, "Delete");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const project_r91 = ctx.$implicit;
    const i_r92 = ctx.index;
    const ctx_r90 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", project_r91.name)("name", "modal-project-name-" + i_r92);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r90.getProjectStackValue(project_r91))("name", "modal-project-stack-" + i_r92);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", project_r91.link)("name", "modal-project-link-" + i_r92);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", project_r91.description)("name", "modal-project-description-" + i_r92);
} }
function AppComponent_main_2_section_6_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 52)(2, "h4");
    i0.ɵɵtext(3, "Projects");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Projects heading");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 64);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_15_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r100); const ctx_r99 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r99.editableProfile.sectionTitles.projects = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 53);
    i0.ɵɵtemplate(9, AppComponent_main_2_section_6_div_15_div_9_Template, 19, 8, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 33);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_15_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r100); const ctx_r101 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r101.addProject()); });
    i0.ɵɵtext(11, "Add");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r34.editableProfile.sectionTitles.projects);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r34.editableProfile.projects)("ngForTrackBy", ctx_r34.trackByIndex);
} }
function AppComponent_main_2_section_6_div_16_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Degree");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_16_div_9_Template_input_ngModelChange_4_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r106); const item_r103 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r103.degree = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Institution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_16_div_9_Template_input_ngModelChange_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r106); const item_r103 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r103.institution = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 56);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_16_div_9_Template_input_ngModelChange_12_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r106); const item_r103 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r103.period = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 48);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_16_div_9_Template_button_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r106); const i_r104 = restoredCtx.index; const ctx_r109 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r109.removeEducation(i_r104)); });
    i0.ɵɵtext(14, "Delete");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r103 = ctx.$implicit;
    const i_r104 = ctx.index;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r103.degree)("name", "modal-education-degree-" + i_r104);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r103.institution)("name", "modal-education-institution-" + i_r104);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r103.period)("name", "modal-education-period-" + i_r104);
} }
function AppComponent_main_2_section_6_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r111 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 52)(2, "h4");
    i0.ɵɵtext(3, "Education");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Education heading");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 65);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_16_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r111); const ctx_r110 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r110.editableProfile.sectionTitles.education = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 53);
    i0.ɵɵtemplate(9, AppComponent_main_2_section_6_div_16_div_9_Template, 15, 6, "div", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 33);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_div_16_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r111); const ctx_r112 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r112.addEducation()); });
    i0.ɵɵtext(11, "Add");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", ctx_r35.editableProfile.sectionTitles.education);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r35.editableProfile.education)("ngForTrackBy", ctx_r35.trackByIndex);
} }
function AppComponent_main_2_section_6_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "label", 42)(2, "span");
    i0.ɵɵtext(3, "Contact heading");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 66);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_17_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r114); const ctx_r113 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r113.editableProfile.sectionTitles.contact = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 67);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_17_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r114); const ctx_r115 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r115.editableProfile.location = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 68);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_17_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r114); const ctx_r116 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r116.editableProfile.email = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "Phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 69);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_17_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r114); const ctx_r117 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r117.editableProfile.phone = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label", 42)(18, "span");
    i0.ɵɵtext(19, "Resume path");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "input", 70);
    i0.ɵɵlistener("ngModelChange", function AppComponent_main_2_section_6_div_17_Template_input_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r114); const ctx_r118 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r118.editableProfile.resumePath = $event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r36.editableProfile.sectionTitles.contact);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r36.editableProfile.location);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r36.editableProfile.email);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r36.editableProfile.phone);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r36.editableProfile.resumePath);
} }
function AppComponent_main_2_section_6_Template(rf, ctx) { if (rf & 1) {
    const _r120 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 15);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_Template_section_click_0_listener() { i0.ɵɵrestoreView(_r120); const ctx_r119 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r119.closeSectionEditor()); });
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "div", 17)(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 27);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r120); const ctx_r122 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r122.closeSectionEditor()); });
    i0.ɵɵtext(7, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 28);
    i0.ɵɵelementContainerStart(9, 29);
    i0.ɵɵtemplate(10, AppComponent_main_2_section_6_div_10_Template, 34, 8, "div", 30);
    i0.ɵɵtemplate(11, AppComponent_main_2_section_6_div_11_Template, 17, 4, "div", 30);
    i0.ɵɵtemplate(12, AppComponent_main_2_section_6_div_12_Template, 12, 3, "div", 31);
    i0.ɵɵtemplate(13, AppComponent_main_2_section_6_div_13_Template, 12, 3, "div", 31);
    i0.ɵɵtemplate(14, AppComponent_main_2_section_6_div_14_Template, 12, 3, "div", 31);
    i0.ɵɵtemplate(15, AppComponent_main_2_section_6_div_15_Template, 12, 3, "div", 31);
    i0.ɵɵtemplate(16, AppComponent_main_2_section_6_div_16_Template, 12, 3, "div", 31);
    i0.ɵɵtemplate(17, AppComponent_main_2_section_6_div_17_Template, 21, 5, "div", 30);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 32)(19, "button", 33);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r120); const ctx_r123 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r123.closeSectionEditor()); });
    i0.ɵɵtext(20, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 34);
    i0.ɵɵlistener("click", function AppComponent_main_2_section_6_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r120); const ctx_r124 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r124.saveSection()); });
    i0.ɵɵtext(22, "Update");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Edit ", i0.ɵɵpipeBind1(5, 11, ctx_r10.activeEditorSection), "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngSwitch", ctx_r10.activeEditorSection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "profile");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "about");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "skills");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "links");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "experience");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "projects");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "education");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "contact");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r10.isSaving);
} }
function AppComponent_main_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 5);
    i0.ɵɵtemplate(1, AppComponent_main_2_p_1_Template, 2, 1, "p", 6);
    i0.ɵɵtemplate(2, AppComponent_main_2_ng_container_2_Template, 10, 19, "ng-container", 7);
    i0.ɵɵtemplate(3, AppComponent_main_2_ng_template_3_Template, 5, 0, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(5, AppComponent_main_2_section_5_Template, 15, 4, "section", 9);
    i0.ɵɵtemplate(6, AppComponent_main_2_section_6_Template, 23, 13, "section", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(4);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.statusMessage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.profile)("ngIfElse", _r7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.isLoginModalOpen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.activeEditorSection && ctx_r2.editableProfile);
} }
export class AppComponent {
    constructor() {
        this.adminPath = '/abhishek-admin-user';
        this.portfolioService = inject(PortfolioService);
        this.trackedSectionIds = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
        this.feedbackTimeoutId = null;
        this.revealObserver = null;
        this.headlineTypingId = null;
        this.summaryTypingId = null;
        this.profile = null;
        this.editableProfile = null;
        this.authUser = null;
        this.isLoading = true;
        this.isSaving = false;
        this.isLoginModalOpen = false;
        this.activeEditorSection = null;
        this.pendingEditorSection = null;
        this.statusMessage = '';
        this.errorMessage = '';
        this.loginEmail = '';
        this.loginPassword = '';
        this.loginError = '';
        this.isLoggingIn = false;
        this.animatedHeadline = '';
        this.animatedSummary = '';
        this.isSummaryVisible = false;
        this.isAdminRoute = false;
        this.syncRouteMode();
        this.restoreSession();
        this.loadProfile();
    }
    ngAfterViewInit() {
        this.setupRevealAnimations();
        this.updateActiveSectionHash();
    }
    ngOnDestroy() {
        if (this.feedbackTimeoutId) {
            clearTimeout(this.feedbackTimeoutId);
        }
        if (this.headlineTypingId) {
            clearInterval(this.headlineTypingId);
        }
        if (this.summaryTypingId) {
            clearInterval(this.summaryTypingId);
        }
        if (this.revealObserver) {
            this.revealObserver.disconnect();
        }
    }
    loadProfile() {
        this.isLoading = true;
        this.errorMessage = '';
        this.portfolioService.getProfile().subscribe({
            next: (profile) => {
                this.profile = this.cloneProfile(profile);
                this.editableProfile = this.cloneProfile(profile);
                this.startIntroAnimation();
                this.isLoading = false;
                this.setupRevealAnimations();
            },
            error: () => {
                this.errorMessage = 'Unable to load the portfolio content right now.';
                this.isLoading = false;
            }
        });
    }
    saveSection() {
        if (!this.editableProfile || !this.isAuthenticated() || !this.activeEditorSection) {
            return;
        }
        const section = this.activeEditorSection;
        this.isSaving = true;
        this.statusMessage = '';
        this.errorMessage = '';
        this.portfolioService.updateSection(section, this.buildSectionPayload(section)).subscribe({
            next: () => {
                this.profile = this.cloneProfile(this.normalizeProfile(this.editableProfile));
                this.editableProfile = this.cloneProfile(this.profile);
                this.showTemporaryMessage('Update done');
                this.isSaving = false;
                this.activeEditorSection = null;
            },
            error: (error) => {
                this.handleProtectedActionError('Unable to update portfolio content.', error?.status);
                this.isSaving = false;
            }
        });
    }
    openSectionEditor(section) {
        if (!this.isAdminRoute) {
            return;
        }
        if (!this.isAuthenticated()) {
            this.pendingEditorSection = section;
            this.openLoginModal();
            return;
        }
        if (this.profile) {
            this.editableProfile = this.cloneProfile(this.profile);
        }
        this.errorMessage = '';
        this.activeEditorSection = section;
    }
    closeSectionEditor() {
        this.activeEditorSection = null;
        this.pendingEditorSection = null;
        if (this.profile) {
            this.editableProfile = this.cloneProfile(this.profile);
        }
    }
    openLoginModal() {
        this.loginError = '';
        this.isLoginModalOpen = true;
    }
    closeLoginModal() {
        this.loginError = '';
        this.loginPassword = '';
        this.isLoginModalOpen = false;
    }
    login() {
        this.isLoggingIn = true;
        this.loginError = '';
        this.portfolioService.login(this.loginEmail.trim(), this.loginPassword).subscribe({
            next: (response) => {
                this.portfolioService.saveToken(response.token);
                this.authUser = response.user;
                this.loginPassword = '';
                this.isLoggingIn = false;
                this.isLoginModalOpen = false;
                this.openPendingEditorSection();
                this.showTemporaryMessage('Login successful');
            },
            error: () => {
                this.loginError = 'Invalid login details.';
                this.isLoggingIn = false;
            }
        });
    }
    logout() {
        this.portfolioService.clearToken();
        this.authUser = null;
        this.activeEditorSection = null;
        this.pendingEditorSection = null;
        this.loginPassword = '';
        this.loginError = '';
        this.showTemporaryMessage('Logged out');
    }
    isAuthenticated() {
        return !!this.authUser;
    }
    addHighlight() {
        this.editableProfile?.highlights.push('');
    }
    removeHighlight(index) {
        this.editableProfile?.highlights.splice(index, 1);
    }
    addSkill() {
        this.editableProfile?.skills.push('');
    }
    removeSkill(index) {
        this.editableProfile?.skills.splice(index, 1);
    }
    addLink() {
        this.editableProfile?.socialLinks.push(this.emptyLink());
    }
    removeLink(index) {
        this.editableProfile?.socialLinks.splice(index, 1);
    }
    addExperience() {
        this.editableProfile?.experience.push(this.emptyExperience());
    }
    removeExperience(index) {
        this.editableProfile?.experience.splice(index, 1);
    }
    addProject() {
        this.editableProfile?.projects.push(this.emptyProject());
    }
    removeProject(index) {
        this.editableProfile?.projects.splice(index, 1);
    }
    addEducation() {
        this.editableProfile?.education.push(this.emptyEducation());
    }
    removeEducation(index) {
        this.editableProfile?.education.splice(index, 1);
    }
    getProjectStackValue(project) {
        return project.stack.join(', ');
    }
    updateProjectStack(project, value) {
        project.stack = value
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean);
    }
    onPhotoSelected(event) {
        const input = event.target;
        const file = input.files?.[0];
        if (!file || !this.editableProfile) {
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.editableProfile.profilePhoto = String(reader.result || '');
        };
        reader.readAsDataURL(file);
    }
    clearPhoto() {
        if (!this.editableProfile) {
            return;
        }
        this.editableProfile.profilePhoto = '';
    }
    trackByIndex(index) {
        return index;
    }
    onWindowScroll() {
        this.updateActiveSectionHash();
    }
    onWindowPopState() {
        this.syncRouteMode();
    }
    openPendingEditorSection() {
        const section = this.pendingEditorSection || 'profile';
        this.pendingEditorSection = null;
        this.openSectionEditor(section);
    }
    showTemporaryMessage(message) {
        this.statusMessage = message;
        if (this.feedbackTimeoutId) {
            clearTimeout(this.feedbackTimeoutId);
        }
        this.feedbackTimeoutId = setTimeout(() => {
            this.statusMessage = '';
            this.feedbackTimeoutId = null;
        }, 2000);
    }
    syncRouteMode() {
        if (typeof window === 'undefined') {
            return;
        }
        const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
        this.isAdminRoute = normalizedPath === this.adminPath;
    }
    restoreSession() {
        if (!this.portfolioService.hasToken()) {
            return;
        }
        this.portfolioService.getSession().subscribe({
            next: (response) => {
                this.authUser = response.user;
            },
            error: () => {
                this.portfolioService.clearToken();
                this.authUser = null;
            }
        });
    }
    handleProtectedActionError(message, status) {
        this.errorMessage = message;
        if (status === 401 || !this.portfolioService.hasToken()) {
            this.portfolioService.clearToken();
            this.authUser = null;
            this.activeEditorSection = null;
        }
    }
    startIntroAnimation() {
        if (!this.profile) {
            return;
        }
        this.animatedHeadline = '';
        this.animatedSummary = '';
        this.isSummaryVisible = false;
        if (this.headlineTypingId) {
            clearInterval(this.headlineTypingId);
        }
        if (this.summaryTypingId) {
            clearInterval(this.summaryTypingId);
        }
        let headlineIndex = 0;
        this.headlineTypingId = setInterval(() => {
            if (!this.profile) {
                return;
            }
            headlineIndex += 1;
            this.animatedHeadline = this.profile.headline.slice(0, headlineIndex);
            if (headlineIndex >= this.profile.headline.length) {
                clearInterval(this.headlineTypingId);
                this.headlineTypingId = null;
                this.isSummaryVisible = true;
                this.startSummaryTyping();
            }
        }, 22);
    }
    startSummaryTyping() {
        if (!this.profile) {
            return;
        }
        let summaryIndex = 0;
        this.summaryTypingId = setInterval(() => {
            if (!this.profile) {
                return;
            }
            summaryIndex += 2;
            this.animatedSummary = this.profile.summary.slice(0, summaryIndex);
            if (summaryIndex >= this.profile.summary.length) {
                clearInterval(this.summaryTypingId);
                this.summaryTypingId = null;
            }
        }, 14);
    }
    setupRevealAnimations() {
        if (typeof document === 'undefined') {
            return;
        }
        setTimeout(() => {
            if (this.revealObserver) {
                this.revealObserver.disconnect();
            }
            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            this.revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, {
                threshold: 0.16,
                rootMargin: '0px 0px -8% 0px'
            });
            revealElements.forEach((element) => this.revealObserver?.observe(element));
        }, 0);
    }
    updateActiveSectionHash() {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }
        const viewportOffset = 160;
        let activeSectionId = this.trackedSectionIds[0];
        for (const sectionId of this.trackedSectionIds) {
            const element = document.getElementById(sectionId);
            if (!element) {
                continue;
            }
            const rect = element.getBoundingClientRect();
            if (rect.top <= viewportOffset) {
                activeSectionId = sectionId;
            }
            else {
                break;
            }
        }
        const nextHash = `#${activeSectionId}`;
        if (window.location.hash !== nextHash) {
            window.history.replaceState(null, '', nextHash);
        }
    }
    buildSectionPayload(section) {
        const profile = this.normalizeProfile(this.editableProfile);
        switch (section) {
            case 'profile':
                return {
                    name: profile.name,
                    headline: profile.headline,
                    location: profile.location,
                    email: profile.email,
                    phone: profile.phone,
                    profilePhoto: profile.profilePhoto,
                    resumePath: profile.resumePath
                };
            case 'about':
                return {
                    summary: profile.summary,
                    highlights: profile.highlights,
                    sectionTitles: { about: profile.sectionTitles.about }
                };
            case 'skills':
                return {
                    skills: profile.skills,
                    sectionTitles: { skills: profile.sectionTitles.skills }
                };
            case 'links':
                return {
                    socialLinks: profile.socialLinks,
                    sectionTitles: { links: profile.sectionTitles.links }
                };
            case 'experience':
                return {
                    experience: profile.experience,
                    sectionTitles: { experience: profile.sectionTitles.experience }
                };
            case 'projects':
                return {
                    projects: profile.projects,
                    sectionTitles: { projects: profile.sectionTitles.projects }
                };
            case 'education':
                return {
                    education: profile.education,
                    sectionTitles: { education: profile.sectionTitles.education }
                };
            case 'contact':
                return {
                    email: profile.email,
                    phone: profile.phone,
                    resumePath: profile.resumePath,
                    sectionTitles: { contact: profile.sectionTitles.contact }
                };
        }
    }
    normalizeProfile(profile) {
        return {
            ...profile,
            name: profile.name.trim(),
            headline: profile.headline.trim(),
            location: profile.location.trim(),
            email: profile.email.trim(),
            phone: profile.phone.trim(),
            summary: profile.summary.trim(),
            profilePhoto: profile.profilePhoto.trim(),
            resumePath: profile.resumePath.trim(),
            sectionTitles: this.normalizeSectionTitles(profile.sectionTitles),
            highlights: profile.highlights.map((item) => item.trim()).filter(Boolean),
            skills: profile.skills.map((item) => item.trim()).filter(Boolean),
            socialLinks: profile.socialLinks
                .map((link) => ({
                label: link.label.trim(),
                url: link.url.trim()
            }))
                .filter((link) => link.label || link.url),
            experience: profile.experience
                .map((item) => ({
                role: item.role.trim(),
                company: item.company.trim(),
                period: item.period.trim(),
                description: item.description.trim()
            }))
                .filter((item) => item.role || item.company || item.period || item.description),
            projects: profile.projects
                .map((project) => ({
                name: project.name.trim(),
                stack: project.stack.map((item) => item.trim()).filter(Boolean),
                description: project.description.trim(),
                link: project.link.trim()
            }))
                .filter((project) => project.name || project.description || project.link || project.stack.length),
            education: profile.education
                .map((item) => ({
                degree: item.degree.trim(),
                institution: item.institution.trim(),
                period: item.period.trim()
            }))
                .filter((item) => item.degree || item.institution || item.period)
        };
    }
    cloneProfile(profile) {
        return {
            ...JSON.parse(JSON.stringify(profile)),
            sectionTitles: this.normalizeSectionTitles(profile.sectionTitles)
        };
    }
    defaultSectionTitles() {
        return {
            about: 'Professional Snapshot',
            skills: 'Core Stack',
            links: 'Professional Profiles',
            experience: 'Professional Experience',
            projects: 'Selected Work',
            education: 'Academic Background',
            contact: "Let's Build Something Meaningful"
        };
    }
    normalizeSectionTitles(sectionTitles) {
        const defaults = this.defaultSectionTitles();
        return {
            about: sectionTitles?.about?.trim() || defaults.about,
            skills: sectionTitles?.skills?.trim() || defaults.skills,
            links: sectionTitles?.links?.trim() || defaults.links,
            experience: sectionTitles?.experience?.trim() || defaults.experience,
            projects: sectionTitles?.projects?.trim() || defaults.projects,
            education: sectionTitles?.education?.trim() || defaults.education,
            contact: sectionTitles?.contact?.trim() || defaults.contact
        };
    }
    emptyLink() {
        return {
            label: '',
            url: ''
        };
    }
    emptyExperience() {
        return {
            role: '',
            company: '',
            period: '',
            description: ''
        };
    }
    emptyProject() {
        return {
            name: '',
            stack: [],
            description: '',
            link: ''
        };
    }
    emptyEducation() {
        return {
            degree: '',
            institution: '',
            period: ''
        };
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, i0.ɵɵresolveWindow)("popstate", function AppComponent_popstate_HostBindingHandler() { return ctx.onWindowPopState(); }, false, i0.ɵɵresolveWindow);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 3, consts: [["class", "loading-state", 4, "ngIf"], [3, "isAuthenticated", "showAdminActions", "logoutRequested", 4, "ngIf"], ["class", "page-shell", 4, "ngIf"], [1, "loading-state"], [3, "isAuthenticated", "showAdminActions", "logoutRequested"], [1, "page-shell"], ["class", "floating-status", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["emptyState", ""], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "floating-status"], [3, "profile", "animatedHeadline", "animatedSummary", "isSummaryVisible", "showEditTools", "editRequested"], [3, "profile", "showEditTools", "editRequested"], [1, "content-grid"], [1, "empty-state"], [1, "modal-backdrop", 3, "click"], [1, "login-modal", 3, "click"], [1, "login-modal-header"], ["type", "button", "aria-label", "Close login", 1, "modal-close", 3, "click"], [1, "login-modal-copy"], ["class", "login-error modal-error", 4, "ngIf"], [1, "login-modal-form", 3, "ngSubmit"], ["name", "loginEmail", "type", "email", "placeholder", "Admin email", 3, "ngModel", "ngModelChange"], ["name", "loginPassword", "type", "password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "primary-btn", 3, "disabled"], [1, "login-error", "modal-error"], [1, "section-editor-modal", 3, "click"], ["type", "button", "aria-label", "Close editor", 1, "modal-close", 3, "click"], [1, "section-editor-body"], [3, "ngSwitch"], ["class", "modal-form-grid", 4, "ngSwitchCase"], ["class", "modal-list-block", 4, "ngSwitchCase"], [1, "modal-actions"], ["type", "button", 1, "ghost-btn", 3, "click"], ["type", "button", 1, "primary-btn", 3, "disabled", "click"], [1, "modal-form-grid"], ["name", "modal-name", 3, "ngModel", "ngModelChange"], ["name", "modal-headline", 3, "ngModel", "ngModelChange"], ["name", "modal-location", 3, "ngModel", "ngModelChange"], ["name", "modal-phone", 3, "ngModel", "ngModelChange"], ["name", "modal-email", 3, "ngModel", "ngModelChange"], ["name", "modal-resume", 3, "ngModel", "ngModelChange"], [1, "modal-full"], ["name", "modal-profile-photo", 3, "ngModel", "ngModelChange"], ["type", "file", "accept", "image/*", 3, "change"], ["class", "photo-editor modal-full", 4, "ngIf"], [1, "photo-editor", "modal-full"], ["alt", "Profile photo preview", 3, "src"], ["type", "button", 1, "ghost-btn", "danger-text", 3, "click"], ["name", "modal-about-heading", 3, "ngModel", "ngModelChange"], ["name", "modal-summary", "rows", "5", 3, "ngModel", "ngModelChange"], [1, "modal-list-block", "modal-full"], [1, "section-title-row"], [1, "repeat-list"], ["class", "repeat-item inline-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "repeat-item", "inline-item"], [3, "ngModel", "name", "ngModelChange"], [1, "modal-list-block"], ["name", "modal-skills-heading", 3, "ngModel", "ngModelChange"], ["name", "modal-links-heading", 3, "ngModel", "ngModelChange"], ["class", "repeat-item card-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "repeat-item", "card-item"], ["name", "modal-experience-heading", 3, "ngModel", "ngModelChange"], ["rows", "4", 3, "ngModel", "name", "ngModelChange"], ["name", "modal-projects-heading", 3, "ngModel", "ngModelChange"], ["name", "modal-education-heading", 3, "ngModel", "ngModelChange"], ["name", "modal-contact-heading", 3, "ngModel", "ngModelChange"], ["name", "modal-contact-location", 3, "ngModel", "ngModelChange"], ["name", "modal-contact-email", 3, "ngModel", "ngModelChange"], ["name", "modal-contact-phone", 3, "ngModel", "ngModelChange"], ["name", "modal-contact-resume", 3, "ngModel", "ngModelChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AppComponent_main_0_Template, 3, 0, "main", 0);
            i0.ɵɵtemplate(1, AppComponent_app_topbar_1_Template, 1, 2, "app-topbar", 1);
            i0.ɵɵtemplate(2, AppComponent_main_2_Template, 7, 5, "main", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isLoading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isLoading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isLoading);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.TitleCasePipe, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, i2.NgForm, TopbarComponent,
            HeroProfileComponent,
            AboutSectionComponent,
            SkillsSectionComponent,
            LinksSectionComponent,
            ExperienceSectionComponent,
            ProjectsSectionComponent,
            EducationSectionComponent,
            ContactSectionComponent], styles: [":host {\n  display: block;\n  min-height: 100vh;\n}\n\napp-topbar {\n  position: fixed;\n  top: 18px;\n  left: 24px;\n  right: 24px;\n  z-index: 30;\n  display: block;\n}\n\n.page-shell {\n  min-height: 100vh;\n  padding: 132px 24px 24px;\n  background:\n    radial-gradient(circle at top left, rgba(217, 119, 6, 0.14), transparent 24%),\n    radial-gradient(circle at 85% 0%, rgba(14, 165, 233, 0.12), transparent 22%),\n    linear-gradient(180deg, #f5f2ec 0%, #ebe6de 100%);\n  color: #17202a;\n}\n\n.reveal-on-scroll {\n  opacity: 0;\n  transform: translateY(26px);\n  transition:\n    opacity 0.7s ease,\n    transform 0.7s ease;\n}\n\n.reveal-on-scroll.revealed {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.topbar,\n.hero-card,\n.panel,\n.editor-shell,\n.empty-state,\n.page-footer {\n  border: 1px solid rgba(23, 32, 42, 0.08);\n  background: rgba(255, 255, 255, 0.82);\n  box-shadow: 0 24px 60px rgba(31, 41, 55, 0.08);\n  backdrop-filter: blur(18px);\n  transition:\n    background-color 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease,\n    transform 0.25s ease;\n}\n\n.topbar,\n.hero-card,\n.panel,\n.editor-shell,\n.empty-state,\n.page-footer {\n  border-radius: 28px;\n}\n\n.topbar {\n  position: relative !important;\n  top: auto !important;\n  left: auto !important;\n  right: auto !important;\n  width: 100%;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 18px;\n  align-items: center;\n  padding: 18px 22px;\n  margin: 0;\n  background: rgba(235, 228, 218, 0.95);\n  border-color: rgba(23, 32, 42, 0.12);\n  box-shadow: 0 20px 44px rgba(31, 41, 55, 0.12);\n  box-sizing: border-box;\n}\n\n.brand-block {\n  display: flex;\n  align-items: center;\n}\n\n.section-nav,\n.topbar-actions,\n.hero-actions,\n.hero-metrics,\n.skills-grid,\n.stack-row,\n.footer-actions,\n.section-header-actions,\n.modal-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.section-nav {\n  justify-content: center;\n}\n\n.section-nav a {\n  padding: 9px 14px;\n  border-radius: 999px;\n  color: #2b3642;\n  text-decoration: none;\n  font-size: 0.92rem;\n  font-weight: 700;\n  transition: background-color 0.2s ease;\n}\n\n.section-nav a:hover {\n  background: rgba(23, 32, 42, 0.06);\n}\n\n.eyebrow,\n.section-tag,\n.fact-row span:first-child,\n.metric-card span,\n.floating-note span {\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  font-size: 0.72rem;\n  color: #6b7280;\n}\n\n.hero-copy h1,\n.section-header h2,\n.timeline-head h3,\n.project-top h3,\n.page-footer h2,\n.editor-header h3,\n.editor-panel h4,\n.empty-state h2 {\n  margin: 0;\n  font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #101828;\n}\n\n.icon-btn,\n.primary-btn,\n.secondary-btn,\n.ghost-btn,\n.card-edit-btn,\n.modal-close {\n  font: inherit;\n}\n\n.icon-btn {\n  width: 44px;\n  height: 44px;\n  border: 1px solid rgba(23, 32, 42, 0.12);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #17202a;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n\n.icon-btn:hover,\n.card-edit-btn:hover,\n.primary-btn:hover,\n.secondary-btn:hover,\n.ghost-btn:hover {\n  transform: translateY(-1px);\n}\n\n.card-edit-btn {\n  width: 38px;\n  height: 38px;\n  border: 1px solid rgba(23, 32, 42, 0.1);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.96);\n  color: #17202a;\n  cursor: pointer;\n  flex: 0 0 auto;\n}\n\n.floating-status {\n  position: sticky;\n  top: 92px;\n  z-index: 20;\n  width: fit-content;\n  margin: 0 0 16px auto;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background: rgba(21, 128, 61, 0.95);\n  color: #f8fff8;\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\n.hero-card {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.85fr);\n  gap: 26px;\n  padding: 34px;\n}\n\n.hero-card > .card-edit-btn,\n.panel > .card-edit-btn,\n.page-footer > .card-edit-btn {\n  position: absolute;\n  top: 18px;\n  right: 18px;\n}\n\n.hero-copy h1 {\n  font-size: clamp(2.8rem, 5vw, 4.6rem);\n  line-height: 1.02;\n  margin-top: 10px;\n}\n\n.headline {\n  margin: 16px 0 0;\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #243447;\n  max-width: 40rem;\n}\n\n\n.summary {\n  margin: 16px 0 0;\n  max-width: 44rem;\n  color: #475467;\n  line-height: 1.85;\n}\n\n.hero-actions {\n  margin-top: 26px;\n}\n\n.primary-btn,\n.secondary-btn,\n.ghost-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  padding: 0 20px;\n  border-radius: 999px;\n  border: 0;\n  cursor: pointer;\n  text-decoration: none;\n  font-weight: 700;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease;\n}\n\n.primary-btn {\n  background: linear-gradient(135deg, #b45309, #ea580c);\n  color: #fffaf5;\n  box-shadow: 0 14px 30px rgba(194, 65, 12, 0.22);\n}\n\n.secondary-btn {\n  background: rgba(255, 255, 255, 0.92);\n  color: #17202a;\n  border: 1px solid rgba(23, 32, 42, 0.1);\n}\n\n.ghost-btn {\n  background: rgba(23, 32, 42, 0.06);\n  color: #17202a;\n}\n\n.hero-metrics {\n  margin-top: 30px;\n}\n\n.metric-card {\n  display: block;\n  min-width: 138px;\n  padding: 16px 18px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(23, 32, 42, 0.06);\n  color: inherit;\n  text-decoration: none;\n}\n\n.metric-card strong {\n  display: block;\n  font-size: 1.6rem;\n  color: #111827;\n}\n\n.hero-side {\n  display: grid;\n  gap: 18px;\n}\n\n.portrait-card,\n.profile-facts {\n  padding: 18px;\n  border-radius: 24px;\n  background: rgba(250, 248, 244, 0.9);\n  border: 1px solid rgba(23, 32, 42, 0.06);\n}\n\n.photo-frame {\n  width: 100%;\n  aspect-ratio: 4 / 5;\n  padding: 12px;\n  border-radius: 24px;\n  background: linear-gradient(135deg, rgba(245, 158, 11, 0.22), rgba(59, 130, 246, 0.16));\n}\n\n.photo-frame img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 18px;\n}\n\n.profile-facts {\n  display: grid;\n  gap: 12px;\n}\n\n.fact-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(23, 32, 42, 0.08);\n}\n\n.fact-row:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n\n.fact-row strong {\n  text-align: right;\n  color: #17202a;\n}\n\n.content-grid {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 22px;\n  margin-top: 24px;\n}\n\n.content-grid > app-skills-section,\n.content-grid > app-links-section,\n.content-grid > app-experience-section,\n.content-grid > app-projects-section,\n.content-grid > app-education-section {\n  display: contents;\n}\n\n.panel {\n  position: relative;\n  padding: 28px;\n}\n\n.panel-half {\n  grid-column: span 6;\n}\n\n.panel-full {\n  grid-column: span 12;\n}\n\n.section-header {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px;\n  align-items: end;\n  margin-bottom: 20px;\n  padding-right: 54px;\n}\n\n.section-header.compact-header {\n  grid-template-columns: 1fr;\n  align-items: start;\n}\n\n.section-header h2 {\n  font-size: 2rem;\n}\n\n.section-copy {\n  margin: 0;\n  color: #667085;\n  line-height: 1.75;\n}\n\n.section-header-actions {\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n\n.about-panel {\n  margin-top: 24px;\n  background:\n    radial-gradient(circle at top right, rgba(14, 165, 233, 0.08), transparent 24%),\n    rgba(255, 255, 255, 0.84);\n}\n\n.about-panel > .about-edit-btn {\n  position: absolute !important;\n  top: 18px !important;\n  right: 18px !important;\n  left: auto !important;\n  z-index: 2;\n}\n\n.about-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);\n  gap: 22px;\n}\n\n.about-summary {\n  padding: 22px;\n  border-radius: 24px;\n  background: rgba(248, 250, 252, 0.86);\n  border: 1px solid rgba(23, 32, 42, 0.06);\n}\n\n.about-summary p {\n  margin: 0;\n  color: #475467;\n  line-height: 1.9;\n}\n\n.highlights-grid {\n  display: grid;\n  gap: 14px;\n}\n\n.highlight-card {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  padding: 18px 20px;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(23, 32, 42, 0.06);\n}\n\n.highlight-card p {\n  margin: 0;\n  line-height: 1.75;\n  color: #344054;\n}\n\n.highlight-dot {\n  width: 10px;\n  height: 10px;\n  margin-top: 8px;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #ea580c, #f59e0b);\n  flex: 0 0 auto;\n}\n\n.skills-grid {\n  gap: 12px;\n}\n\n.skill-card {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 14px;\n  border: 1px solid rgba(23, 32, 42, 0.08);\n  background: rgba(248, 250, 252, 0.88);\n}\n\n.skill-card img {\n  width: 20px;\n  height: 20px;\n  object-fit: contain;\n}\n\n.skill-card span {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #243447;\n}\n\n.link-list,\n.timeline,\n.project-grid {\n  display: grid;\n  gap: 16px;\n}\n\n.link-card,\n.project-card,\n.timeline-item {\n  border-radius: 24px;\n  border: 1px solid rgba(23, 32, 42, 0.06);\n  background: rgba(248, 250, 252, 0.88);\n  transition:\n    background-color 0.22s ease,\n    border-color 0.22s ease,\n    box-shadow 0.22s ease,\n    transform 0.22s ease;\n}\n\n.highlight-card,\n.skill-card,\n.metric-card,\n.portrait-card,\n.profile-facts,\n.link-card,\n.project-card,\n.timeline-item,\n.contact-item {\n  transition:\n    background-color 0.22s ease,\n    border-color 0.22s ease,\n    box-shadow 0.22s ease,\n    transform 0.22s ease;\n}\n\n.highlight-card:hover,\n.skill-card:hover,\n.metric-card:hover,\n.portrait-card:hover,\n.profile-facts:hover,\n.link-card:hover,\n.project-card:hover,\n.timeline-item:hover,\n.contact-item:hover {\n  background: rgba(236, 231, 223, 0.96);\n  border-color: rgba(23, 32, 42, 0.14);\n  box-shadow: 0 18px 38px rgba(31, 41, 55, 0.12);\n  transform: translateY(-2px);\n}\n\n.link-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 20px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.link-label {\n  margin: 0 0 6px;\n  font-weight: 700;\n  color: #111827;\n}\n\n.link-card strong {\n  color: #667085;\n  font-size: 0.88rem;\n  word-break: break-all;\n}\n\n.link-arrow {\n  font-weight: 700;\n  color: #111827;\n}\n\n.timeline-item {\n  padding: 22px 24px;\n}\n\n.timeline-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n}\n\n.timeline-head h3 {\n  font-size: 1.28rem;\n}\n\n.timeline-company {\n  margin: 8px 0 0;\n  font-weight: 700;\n  color: #475467;\n}\n\n.timeline-period {\n  flex: 0 0 auto;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(23, 32, 42, 0.06);\n  color: #111827;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.experience-points {\n  margin: 16px 0 0;\n  padding-left: 20px;\n  color: #344054;\n  line-height: 1.8;\n}\n\n.experience-points li + li {\n  margin-top: 6px;\n}\n\n.project-grid-wide {\n  grid-template-columns: 1fr;\n}\n\n.project-card {\n  padding: 22px;\n}\n\n.project-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.project-top h3 {\n  font-size: 1.2rem;\n}\n\n.project-caption {\n  margin: 6px 0 0;\n  color: #667085;\n  font-size: 0.9rem;\n}\n\n.project-top a {\n  color: #111827;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.project-description {\n  margin: 16px 0;\n  color: #475467;\n  line-height: 1.85;\n}\n\n.stack-row span {\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid rgba(23, 32, 42, 0.08);\n  font-size: 0.84rem;\n  font-weight: 700;\n}\n\n.page-footer {\n  position: relative;\n  display: grid;\n  gap: 20px;\n  margin-top: 24px;\n  padding: 26px 28px;\n  justify-items: center;\n  background: rgba(255, 255, 255, 0.82);\n  border: 1px solid rgba(23, 32, 42, 0.08);\n}\n\n.contact-facts {\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 48px;\n  margin-top: 10px;\n  padding-top: 6px;\n}\n\n.page-footer h2 {\n  font-size: 1.9rem;\n  margin-top: 8px;\n}\n\n.contact-heading {\n  width: 100%;\n  max-width: 100%;\n}\n\n.contact-symbol {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #17202a;\n  width: 1.1rem;\n  height: 1.1rem;\n  flex: 0 0 auto;\n}\n\n.contact-symbol svg {\n  width: 100%;\n  height: 100%;\n  fill: currentColor;\n}\n\n.contact-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #17202a;\n  text-decoration: none;\n  min-width: 0;\n  line-height: 1.4;\n}\n\n.contact-item strong {\n  color: inherit;\n  font-size: 0.98rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.empty-state {\n  padding: 40px 28px;\n  text-align: center;\n}\n\n.section-title-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n\n.section-title-row {\n  align-items: center;\n  justify-content: space-between;\n}\n.repeat-item {\n  display: grid;\n  gap: 8px;\n}\n\ninput,\ntextarea {\n  width: 100%;\n  border: 1px solid rgba(23, 32, 42, 0.14);\n  border-radius: 16px;\n  padding: 12px 14px;\n  font: inherit;\n  color: #17202a;\n  background: rgba(255, 255, 255, 0.96);\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.photo-editor {\n  display: grid;\n  gap: 12px;\n  margin-top: 12px;\n  padding: 14px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.58);\n  border: 1px solid rgba(31, 41, 51, 0.08);\n}\n\n.photo-editor img {\n  width: min(100%, 220px);\n  aspect-ratio: 4 / 5;\n  object-fit: cover;\n  border-radius: 18px;\n}\n\n.repeat-list {\n  display: grid;\n  gap: 16px;\n}\n\n.repeat-item {\n  padding: 16px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.58);\n  border: 1px solid rgba(31, 41, 51, 0.08);\n}\n\n.inline-item {\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n}\n\n.card-item {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.card-item button,\n.card-item label:last-of-type {\n  grid-column: span 2;\n}\n\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  background: rgba(20, 26, 32, 0.42);\n}\n\n.login-modal,\n.section-editor-modal {\n  width: min(100%, 420px);\n  padding: 24px;\n  border-radius: 24px;\n  background: #fffaf4;\n  border: 1px solid rgba(78, 64, 44, 0.12);\n  box-shadow: 0 24px 70px rgba(35, 28, 18, 0.2);\n}\n\n.section-editor-modal {\n  width: min(100%, 840px);\n  display: flex;\n  flex-direction: column;\n  max-height: min(90vh, 920px);\n}\n\n.login-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.login-modal-header h3 {\n  margin: 0;\n  font-size: 1.45rem;\n}\n\n.login-modal-copy {\n  margin: 10px 0 16px;\n  color: #5c6976;\n}\n\n.modal-close {\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 999px;\n  background: rgba(23, 32, 42, 0.06);\n  color: #17202a;\n  cursor: pointer;\n  font-size: 1.3rem;\n}\n\n.login-modal-form {\n  display: grid;\n  gap: 12px;\n}\n\n.section-editor-body {\n  flex: 1 1 auto;\n  margin-top: 18px;\n  overflow: auto;\n  padding-right: 4px;\n  padding-bottom: 12px;\n}\n\n.modal-form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.modal-list-block {\n  display: grid;\n  gap: 14px;\n}\n\n.modal-full {\n  grid-column: span 2;\n}\n\n.modal-actions {\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 0;\n  padding-top: 16px;\n  border-top: 1px solid rgba(78, 64, 44, 0.12);\n  background: #fffaf4;\n  position: sticky;\n  bottom: 0;\n  z-index: 1;\n}\n\n.login-error {\n  width: fit-content;\n  margin: 0 0 14px;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background: rgba(138, 45, 17, 0.14);\n  color: #8a2d11;\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\n#about,\n#skills,\n#links,\n#experience,\n#projects,\n#education,\n#contact {\n  scroll-margin-top: 168px;\n}\n\n.loading-state {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(180deg, #f5f2ec 0%, #ebe6de 100%);\n  color: #17202a;\n}\n\n\n@media (max-width: 1100px) {\n  .hero-card,\n  .about-layout,\n  .section-header,\n  .project-grid-wide,\n  .modal-form-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .topbar {\n    grid-template-columns: 1fr;\n  }\n\n  .section-nav {\n    justify-content: flex-start;\n  }\n\n  .content-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .panel-half,\n  .panel-full {\n    grid-column: span 1;\n  }\n\n  .modal-full {\n    grid-column: span 1;\n  }\n\n}\n\n@media (max-width: 720px) {\n  app-topbar {\n    top: 12px;\n    left: 16px;\n    right: 16px;\n  }\n\n  .page-shell {\n    padding: 112px 16px 16px;\n  }\n\n  .topbar,\n  .hero-card,\n  .panel,\n  .editor-shell,\n  .empty-state,\n  .page-footer {\n    padding: 20px;\n    border-radius: 24px;\n  }\n\n  .hero-copy h1 {\n    font-size: 2.6rem;\n    white-space: normal;\n  }\n\n  .hero-card {\n    gap: 20px;\n  }\n\n  .hero-metrics,\n  .skills-grid,\n  .stack-row {\n    gap: 10px;\n  }\n\n  .metric-card,\n  .skill-card,\n  .stack-row span {\n    width: 100%;\n    justify-content: flex-start;\n  }\n\n  .timeline-head,\n  .topbar-actions,\n  .hero-actions,\n  .fact-row,\n  .section-header-actions,\n  .link-card,\n  .project-top {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .page-footer {\n    padding: 20px;\n  }\n\n  .contact-facts {\n    flex-direction: column;\n    align-items: center;\n    gap: 14px;\n    margin-top: 16px;\n    padding-top: 0;\n  }\n\n  .contact-item {\n    justify-content: center;\n  }\n\n  .modal-actions {\n    flex-direction: row;\n    align-items: center;\n    justify-content: stretch;\n  }\n\n  .fact-row strong {\n    text-align: left;\n  }\n\n  .inline-item,\n  .card-item {\n    grid-template-columns: 1fr;\n  }\n\n  .card-item button,\n  .card-item label:last-of-type {\n    grid-column: span 1;\n  }\n\n  .section-editor-modal,\n  .login-modal {\n    padding: 20px;\n  }\n\n  .modal-actions .primary-btn,\n  .modal-actions .ghost-btn {\n    width: 100%;\n  }\n}\n"], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    TopbarComponent,
                    HeroProfileComponent,
                    AboutSectionComponent,
                    SkillsSectionComponent,
                    LinksSectionComponent,
                    ExperienceSectionComponent,
                    ProjectsSectionComponent,
                    EducationSectionComponent,
                    ContactSectionComponent
                ], encapsulation: ViewEncapsulation.None, template: "<main class=\"loading-state\" *ngIf=\"isLoading\">\n  <p>Loading portfolio...</p>\n</main>\n\n<app-topbar\n  *ngIf=\"!isLoading\"\n  [isAuthenticated]=\"isAuthenticated()\"\n  [showAdminActions]=\"isAdminRoute\"\n  (logoutRequested)=\"logout()\"></app-topbar>\n\n<main class=\"page-shell\" *ngIf=\"!isLoading\">\n  <p class=\"floating-status\" *ngIf=\"statusMessage\">{{ statusMessage }}</p>\n\n  <ng-container *ngIf=\"profile as profileData; else emptyState\">\n    <app-hero-profile\n      [profile]=\"profileData\"\n      [animatedHeadline]=\"animatedHeadline\"\n      [animatedSummary]=\"animatedSummary\"\n      [isSummaryVisible]=\"isSummaryVisible\"\n      [showEditTools]=\"isAdminRoute\"\n      (editRequested)=\"openSectionEditor('profile')\">\n    </app-hero-profile>\n\n    <app-about-section\n      [profile]=\"profileData\"\n      [showEditTools]=\"isAdminRoute\"\n      (editRequested)=\"openSectionEditor('about')\">\n    </app-about-section>\n\n    <section class=\"content-grid\">\n      <app-skills-section\n        [profile]=\"profileData\"\n        [showEditTools]=\"isAdminRoute\"\n        (editRequested)=\"openSectionEditor('skills')\">\n      </app-skills-section>\n\n      <app-links-section\n        [profile]=\"profileData\"\n        [showEditTools]=\"isAdminRoute\"\n        (editRequested)=\"openSectionEditor('links')\">\n      </app-links-section>\n\n      <app-experience-section\n        [profile]=\"profileData\"\n        [showEditTools]=\"isAdminRoute\"\n        (editRequested)=\"openSectionEditor('experience')\">\n      </app-experience-section>\n\n      <app-projects-section\n        [profile]=\"profileData\"\n        [showEditTools]=\"isAdminRoute\"\n        (editRequested)=\"openSectionEditor('projects')\">\n      </app-projects-section>\n\n      <app-education-section\n        [profile]=\"profileData\"\n        [showEditTools]=\"isAdminRoute\"\n        (editRequested)=\"openSectionEditor('education')\">\n      </app-education-section>\n    </section>\n\n    <app-contact-section\n      [profile]=\"profileData\"\n      [showEditTools]=\"isAdminRoute\"\n      (editRequested)=\"openSectionEditor('contact')\">\n    </app-contact-section>\n  </ng-container>\n\n  <ng-template #emptyState>\n    <section class=\"empty-state\">\n      <h2>No portfolio content yet</h2>\n      <p>Use the section edit buttons to sign in and update portfolio content.</p>\n    </section>\n  </ng-template>\n\n  <section class=\"modal-backdrop\" *ngIf=\"isLoginModalOpen\" (click)=\"closeLoginModal()\">\n    <div class=\"login-modal\" (click)=\"$event.stopPropagation()\">\n      <div class=\"login-modal-header\">\n        <h3>Admin Login</h3>\n        <button class=\"modal-close\" type=\"button\" (click)=\"closeLoginModal()\" aria-label=\"Close login\">\n          &times;\n        </button>\n      </div>\n      <p class=\"login-modal-copy\">Log in to edit portfolio content.</p>\n      <p class=\"login-error modal-error\" *ngIf=\"loginError\">{{ loginError }}</p>\n      <form class=\"login-modal-form\" (ngSubmit)=\"login()\">\n        <input [(ngModel)]=\"loginEmail\" name=\"loginEmail\" type=\"email\" placeholder=\"Admin email\" />\n        <input [(ngModel)]=\"loginPassword\" name=\"loginPassword\" type=\"password\" placeholder=\"Password\" />\n        <button class=\"primary-btn\" type=\"submit\" [disabled]=\"isLoggingIn\">Login</button>\n      </form>\n    </div>\n  </section>\n\n  <section class=\"modal-backdrop\" *ngIf=\"activeEditorSection && editableProfile\" (click)=\"closeSectionEditor()\">\n    <div class=\"section-editor-modal\" (click)=\"$event.stopPropagation()\">\n      <div class=\"login-modal-header\">\n        <h3>Edit {{ activeEditorSection | titlecase }}</h3>\n        <button class=\"modal-close\" type=\"button\" (click)=\"closeSectionEditor()\" aria-label=\"Close editor\">\n          &times;\n        </button>\n      </div>\n\n      <div class=\"section-editor-body\">\n        <ng-container [ngSwitch]=\"activeEditorSection\">\n          <div *ngSwitchCase=\"'profile'\" class=\"modal-form-grid\">\n            <label>\n              <span>Name</span>\n              <input [(ngModel)]=\"editableProfile.name\" name=\"modal-name\" />\n            </label>\n            <label>\n              <span>Headline</span>\n              <input [(ngModel)]=\"editableProfile.headline\" name=\"modal-headline\" />\n            </label>\n            <label>\n              <span>Location</span>\n              <input [(ngModel)]=\"editableProfile.location\" name=\"modal-location\" />\n            </label>\n            <label>\n              <span>Phone</span>\n              <input [(ngModel)]=\"editableProfile.phone\" name=\"modal-phone\" />\n            </label>\n            <label>\n              <span>Email</span>\n              <input [(ngModel)]=\"editableProfile.email\" name=\"modal-email\" />\n            </label>\n            <label>\n              <span>Resume path</span>\n              <input [(ngModel)]=\"editableProfile.resumePath\" name=\"modal-resume\" />\n            </label>\n            <label class=\"modal-full\">\n              <span>Profile photo URL</span>\n              <input [(ngModel)]=\"editableProfile.profilePhoto\" name=\"modal-profile-photo\" />\n            </label>\n            <label class=\"modal-full\">\n              <span>Upload profile photo</span>\n              <input type=\"file\" accept=\"image/*\" (change)=\"onPhotoSelected($event)\" />\n            </label>\n            <div class=\"photo-editor modal-full\" *ngIf=\"editableProfile.profilePhoto\">\n              <img [src]=\"editableProfile.profilePhoto\" alt=\"Profile photo preview\" />\n              <button type=\"button\" class=\"ghost-btn danger-text\" (click)=\"clearPhoto()\">Remove photo</button>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'about'\" class=\"modal-form-grid\">\n            <label class=\"modal-full\">\n              <span>About heading</span>\n              <input [(ngModel)]=\"editableProfile.sectionTitles.about\" name=\"modal-about-heading\" />\n            </label>\n            <label class=\"modal-full\">\n              <span>Summary</span>\n              <textarea [(ngModel)]=\"editableProfile.summary\" name=\"modal-summary\" rows=\"5\"></textarea>\n            </label>\n            <div class=\"modal-list-block modal-full\">\n              <div class=\"section-title-row\">\n                <h4>Highlights</h4>\n              </div>\n              <div class=\"repeat-list\">\n                <div class=\"repeat-item inline-item\" *ngFor=\"let highlight of editableProfile.highlights; let i = index; trackBy: trackByIndex\">\n                  <input [(ngModel)]=\"editableProfile.highlights[i]\" [name]=\"'modal-highlight-' + i\" />\n                  <button type=\"button\" class=\"ghost-btn danger-text\" (click)=\"removeHighlight(i)\">Delete</button>\n                </div>\n              </div>\n              <button type=\"button\" class=\"ghost-btn\" (click)=\"addHighlight()\">Add</button>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'skills'\" class=\"modal-list-block\">\n            <div class=\"section-title-row\">\n              <h4>Skills</h4>\n            </div>\n            <label>\n              <span>Skills heading</span>\n              <input [(ngModel)]=\"editableProfile.sectionTitles.skills\" name=\"modal-skills-heading\" />\n            </label>\n            <div class=\"repeat-list\">\n              <div class=\"repeat-item inline-item\" *ngFor=\"let skill of editableProfile.skills; let i = index; trackBy: trackByIndex\">\n                <input [(ngModel)]=\"editableProfile.skills[i]\" [name]=\"'modal-skill-' + i\" />\n                <button type=\"button\" class=\"ghost-btn danger-text\" (click)=\"removeSkill(i)\">Delete</button>\n              </div>\n            </div>\n            <button type=\"button\" class=\"ghost-btn\" (click)=\"addSkill()\">Add</button>\n          </div>\n\n          <div *ngSwitchCase=\"'links'\" class=\"modal-list-block\">\n            <div class=\"section-title-row\">\n              <h4>Links</h4>\n            </div>\n            <label>\n              <span>Links heading</span>\n              <input [(ngModel)]=\"editableProfile.sectionTitles.links\" name=\"modal-links-heading\" />\n            </label>\n            <div class=\"repeat-list\">\n              <div class=\"repeat-item card-item\" *ngFor=\"let link of editableProfile.socialLinks; let i = index; trackBy: trackByIndex\">\n                <label>\n                  <span>Label</span>\n                  <input [(ngModel)]=\"link.label\" [name]=\"'modal-link-label-' + i\" />\n                </label>\n                <label>\n                  <span>URL</span>\n                  <input [(ngModel)]=\"link.url\" [name]=\"'modal-link-url-' + i\" />\n                </label>\n                <button type=\"button\" class=\"ghost-btn danger-text\" (click)=\"removeLink(i)\">Delete</button>\n              </div>\n            </div>\n            <button type=\"button\" class=\"ghost-btn\" (click)=\"addLink()\">Add</button>\n          </div>\n\n          <div *ngSwitchCase=\"'experience'\" class=\"modal-list-block\">\n            <div class=\"section-title-row\">\n              <h4>Experience</h4>\n            </div>\n            <label>\n              <span>Experience heading</span>\n              <input [(ngModel)]=\"editableProfile.sectionTitles.experience\" name=\"modal-experience-heading\" />\n            </label>\n            <div class=\"repeat-list\">\n              <div class=\"repeat-item card-item\" *ngFor=\"let item of editableProfile.experience; let i = index; trackBy: trackByIndex\">\n                <label>\n                  <span>Role</span>\n                  <input [(ngModel)]=\"item.role\" [name]=\"'modal-experience-role-' + i\" />\n                </label>\n                <label>\n                  <span>Company</span>\n                  <input [(ngModel)]=\"item.company\" [name]=\"'modal-experience-company-' + i\" />\n                </label>\n                <label>\n                  <span>Period</span>\n                  <input [(ngModel)]=\"item.period\" [name]=\"'modal-experience-period-' + i\" />\n                </label>\n                <label>\n                  <span>Description (one point per line)</span>\n                  <textarea [(ngModel)]=\"item.description\" [name]=\"'modal-experience-description-' + i\" rows=\"4\"></textarea>\n                </label>\n                <button type=\"button\" class=\"ghost-btn danger-text\" (click)=\"removeExperience(i)\">Delete</button>\n              </div>\n            </div>\n            <button type=\"button\" class=\"ghost-btn\" (click)=\"addExperience()\">Add</button>\n          </div>\n\n          <div *ngSwitchCase=\"'projects'\" class=\"modal-list-block\">\n            <div class=\"section-title-row\">\n              <h4>Projects</h4>\n            </div>\n            <label>\n              <span>Projects heading</span>\n              <input [(ngModel)]=\"editableProfile.sectionTitles.projects\" name=\"modal-projects-heading\" />\n            </label>\n            <div class=\"repeat-list\">\n              <div class=\"repeat-item card-item\" *ngFor=\"let project of editableProfile.projects; let i = index; trackBy: trackByIndex\">\n                <label>\n                  <span>Name</span>\n                  <input [(ngModel)]=\"project.name\" [name]=\"'modal-project-name-' + i\" />\n                </label>\n                <label>\n                  <span>Stack (comma separated)</span>\n                  <input\n                    [ngModel]=\"getProjectStackValue(project)\"\n                    (ngModelChange)=\"updateProjectStack(project, $event)\"\n                    [name]=\"'modal-project-stack-' + i\"\n                  />\n                </label>\n                <label>\n                  <span>Project link</span>\n                  <input [(ngModel)]=\"project.link\" [name]=\"'modal-project-link-' + i\" />\n                </label>\n                <label>\n                  <span>Description</span>\n                  <textarea [(ngModel)]=\"project.description\" [name]=\"'modal-project-description-' + i\" rows=\"4\"></textarea>\n                </label>\n                <button type=\"button\" class=\"ghost-btn danger-text\" (click)=\"removeProject(i)\">Delete</button>\n              </div>\n            </div>\n            <button type=\"button\" class=\"ghost-btn\" (click)=\"addProject()\">Add</button>\n          </div>\n\n          <div *ngSwitchCase=\"'education'\" class=\"modal-list-block\">\n            <div class=\"section-title-row\">\n              <h4>Education</h4>\n            </div>\n            <label>\n              <span>Education heading</span>\n              <input [(ngModel)]=\"editableProfile.sectionTitles.education\" name=\"modal-education-heading\" />\n            </label>\n            <div class=\"repeat-list\">\n              <div class=\"repeat-item card-item\" *ngFor=\"let item of editableProfile.education; let i = index; trackBy: trackByIndex\">\n                <label>\n                  <span>Degree</span>\n                  <input [(ngModel)]=\"item.degree\" [name]=\"'modal-education-degree-' + i\" />\n                </label>\n                <label>\n                  <span>Institution</span>\n                  <input [(ngModel)]=\"item.institution\" [name]=\"'modal-education-institution-' + i\" />\n                </label>\n                <label>\n                  <span>Period</span>\n                  <input [(ngModel)]=\"item.period\" [name]=\"'modal-education-period-' + i\" />\n                </label>\n                <button type=\"button\" class=\"ghost-btn danger-text\" (click)=\"removeEducation(i)\">Delete</button>\n              </div>\n            </div>\n            <button type=\"button\" class=\"ghost-btn\" (click)=\"addEducation()\">Add</button>\n          </div>\n\n          <div *ngSwitchCase=\"'contact'\" class=\"modal-form-grid\">\n            <label class=\"modal-full\">\n              <span>Contact heading</span>\n              <input [(ngModel)]=\"editableProfile.sectionTitles.contact\" name=\"modal-contact-heading\" />\n            </label>\n            <label>\n              <span>Location</span>\n              <input [(ngModel)]=\"editableProfile.location\" name=\"modal-contact-location\" />\n            </label>\n            <label>\n              <span>Email</span>\n              <input [(ngModel)]=\"editableProfile.email\" name=\"modal-contact-email\" />\n            </label>\n            <label>\n              <span>Phone</span>\n              <input [(ngModel)]=\"editableProfile.phone\" name=\"modal-contact-phone\" />\n            </label>\n            <label class=\"modal-full\">\n              <span>Resume path</span>\n              <input [(ngModel)]=\"editableProfile.resumePath\" name=\"modal-contact-resume\" />\n            </label>\n          </div>\n        </ng-container>\n      </div>\n\n      <div class=\"modal-actions\">\n        <button class=\"ghost-btn\" type=\"button\" (click)=\"closeSectionEditor()\">Cancel</button>\n        <button class=\"primary-btn\" type=\"button\" (click)=\"saveSection()\" [disabled]=\"isSaving\">Update</button>\n      </div>\n    </div>\n  </section>\n</main>\n", styles: [":host {\n  display: block;\n  min-height: 100vh;\n}\n\napp-topbar {\n  position: fixed;\n  top: 18px;\n  left: 24px;\n  right: 24px;\n  z-index: 30;\n  display: block;\n}\n\n.page-shell {\n  min-height: 100vh;\n  padding: 132px 24px 24px;\n  background:\n    radial-gradient(circle at top left, rgba(217, 119, 6, 0.14), transparent 24%),\n    radial-gradient(circle at 85% 0%, rgba(14, 165, 233, 0.12), transparent 22%),\n    linear-gradient(180deg, #f5f2ec 0%, #ebe6de 100%);\n  color: #17202a;\n}\n\n.reveal-on-scroll {\n  opacity: 0;\n  transform: translateY(26px);\n  transition:\n    opacity 0.7s ease,\n    transform 0.7s ease;\n}\n\n.reveal-on-scroll.revealed {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.topbar,\n.hero-card,\n.panel,\n.editor-shell,\n.empty-state,\n.page-footer {\n  border: 1px solid rgba(23, 32, 42, 0.08);\n  background: rgba(255, 255, 255, 0.82);\n  box-shadow: 0 24px 60px rgba(31, 41, 55, 0.08);\n  backdrop-filter: blur(18px);\n  transition:\n    background-color 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease,\n    transform 0.25s ease;\n}\n\n.topbar,\n.hero-card,\n.panel,\n.editor-shell,\n.empty-state,\n.page-footer {\n  border-radius: 28px;\n}\n\n.topbar {\n  position: relative !important;\n  top: auto !important;\n  left: auto !important;\n  right: auto !important;\n  width: 100%;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 18px;\n  align-items: center;\n  padding: 18px 22px;\n  margin: 0;\n  background: rgba(235, 228, 218, 0.95);\n  border-color: rgba(23, 32, 42, 0.12);\n  box-shadow: 0 20px 44px rgba(31, 41, 55, 0.12);\n  box-sizing: border-box;\n}\n\n.brand-block {\n  display: flex;\n  align-items: center;\n}\n\n.section-nav,\n.topbar-actions,\n.hero-actions,\n.hero-metrics,\n.skills-grid,\n.stack-row,\n.footer-actions,\n.section-header-actions,\n.modal-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.section-nav {\n  justify-content: center;\n}\n\n.section-nav a {\n  padding: 9px 14px;\n  border-radius: 999px;\n  color: #2b3642;\n  text-decoration: none;\n  font-size: 0.92rem;\n  font-weight: 700;\n  transition: background-color 0.2s ease;\n}\n\n.section-nav a:hover {\n  background: rgba(23, 32, 42, 0.06);\n}\n\n.eyebrow,\n.section-tag,\n.fact-row span:first-child,\n.metric-card span,\n.floating-note span {\n  text-transform: uppercase;\n  letter-spacing: 0.16em;\n  font-size: 0.72rem;\n  color: #6b7280;\n}\n\n.hero-copy h1,\n.section-header h2,\n.timeline-head h3,\n.project-top h3,\n.page-footer h2,\n.editor-header h3,\n.editor-panel h4,\n.empty-state h2 {\n  margin: 0;\n  font-family: 'Roboto', 'Segoe UI', Arial, sans-serif;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: #101828;\n}\n\n.icon-btn,\n.primary-btn,\n.secondary-btn,\n.ghost-btn,\n.card-edit-btn,\n.modal-close {\n  font: inherit;\n}\n\n.icon-btn {\n  width: 44px;\n  height: 44px;\n  border: 1px solid rgba(23, 32, 42, 0.12);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n  color: #17202a;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n\n.icon-btn:hover,\n.card-edit-btn:hover,\n.primary-btn:hover,\n.secondary-btn:hover,\n.ghost-btn:hover {\n  transform: translateY(-1px);\n}\n\n.card-edit-btn {\n  width: 38px;\n  height: 38px;\n  border: 1px solid rgba(23, 32, 42, 0.1);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.96);\n  color: #17202a;\n  cursor: pointer;\n  flex: 0 0 auto;\n}\n\n.floating-status {\n  position: sticky;\n  top: 92px;\n  z-index: 20;\n  width: fit-content;\n  margin: 0 0 16px auto;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background: rgba(21, 128, 61, 0.95);\n  color: #f8fff8;\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\n.hero-card {\n  position: relative;\n  display: grid;\n  grid-template-columns: minmax(0, 1.55fr) minmax(280px, 0.85fr);\n  gap: 26px;\n  padding: 34px;\n}\n\n.hero-card > .card-edit-btn,\n.panel > .card-edit-btn,\n.page-footer > .card-edit-btn {\n  position: absolute;\n  top: 18px;\n  right: 18px;\n}\n\n.hero-copy h1 {\n  font-size: clamp(2.8rem, 5vw, 4.6rem);\n  line-height: 1.02;\n  margin-top: 10px;\n}\n\n.headline {\n  margin: 16px 0 0;\n  font-size: 1.18rem;\n  font-weight: 700;\n  color: #243447;\n  max-width: 40rem;\n}\n\n\n.summary {\n  margin: 16px 0 0;\n  max-width: 44rem;\n  color: #475467;\n  line-height: 1.85;\n}\n\n.hero-actions {\n  margin-top: 26px;\n}\n\n.primary-btn,\n.secondary-btn,\n.ghost-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  padding: 0 20px;\n  border-radius: 999px;\n  border: 0;\n  cursor: pointer;\n  text-decoration: none;\n  font-weight: 700;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    background-color 0.2s ease;\n}\n\n.primary-btn {\n  background: linear-gradient(135deg, #b45309, #ea580c);\n  color: #fffaf5;\n  box-shadow: 0 14px 30px rgba(194, 65, 12, 0.22);\n}\n\n.secondary-btn {\n  background: rgba(255, 255, 255, 0.92);\n  color: #17202a;\n  border: 1px solid rgba(23, 32, 42, 0.1);\n}\n\n.ghost-btn {\n  background: rgba(23, 32, 42, 0.06);\n  color: #17202a;\n}\n\n.hero-metrics {\n  margin-top: 30px;\n}\n\n.metric-card {\n  display: block;\n  min-width: 138px;\n  padding: 16px 18px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(23, 32, 42, 0.06);\n  color: inherit;\n  text-decoration: none;\n}\n\n.metric-card strong {\n  display: block;\n  font-size: 1.6rem;\n  color: #111827;\n}\n\n.hero-side {\n  display: grid;\n  gap: 18px;\n}\n\n.portrait-card,\n.profile-facts {\n  padding: 18px;\n  border-radius: 24px;\n  background: rgba(250, 248, 244, 0.9);\n  border: 1px solid rgba(23, 32, 42, 0.06);\n}\n\n.photo-frame {\n  width: 100%;\n  aspect-ratio: 4 / 5;\n  padding: 12px;\n  border-radius: 24px;\n  background: linear-gradient(135deg, rgba(245, 158, 11, 0.22), rgba(59, 130, 246, 0.16));\n}\n\n.photo-frame img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 18px;\n}\n\n.profile-facts {\n  display: grid;\n  gap: 12px;\n}\n\n.fact-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(23, 32, 42, 0.08);\n}\n\n.fact-row:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n\n.fact-row strong {\n  text-align: right;\n  color: #17202a;\n}\n\n.content-grid {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 22px;\n  margin-top: 24px;\n}\n\n.content-grid > app-skills-section,\n.content-grid > app-links-section,\n.content-grid > app-experience-section,\n.content-grid > app-projects-section,\n.content-grid > app-education-section {\n  display: contents;\n}\n\n.panel {\n  position: relative;\n  padding: 28px;\n}\n\n.panel-half {\n  grid-column: span 6;\n}\n\n.panel-full {\n  grid-column: span 12;\n}\n\n.section-header {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px;\n  align-items: end;\n  margin-bottom: 20px;\n  padding-right: 54px;\n}\n\n.section-header.compact-header {\n  grid-template-columns: 1fr;\n  align-items: start;\n}\n\n.section-header h2 {\n  font-size: 2rem;\n}\n\n.section-copy {\n  margin: 0;\n  color: #667085;\n  line-height: 1.75;\n}\n\n.section-header-actions {\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n\n.about-panel {\n  margin-top: 24px;\n  background:\n    radial-gradient(circle at top right, rgba(14, 165, 233, 0.08), transparent 24%),\n    rgba(255, 255, 255, 0.84);\n}\n\n.about-panel > .about-edit-btn {\n  position: absolute !important;\n  top: 18px !important;\n  right: 18px !important;\n  left: auto !important;\n  z-index: 2;\n}\n\n.about-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);\n  gap: 22px;\n}\n\n.about-summary {\n  padding: 22px;\n  border-radius: 24px;\n  background: rgba(248, 250, 252, 0.86);\n  border: 1px solid rgba(23, 32, 42, 0.06);\n}\n\n.about-summary p {\n  margin: 0;\n  color: #475467;\n  line-height: 1.9;\n}\n\n.highlights-grid {\n  display: grid;\n  gap: 14px;\n}\n\n.highlight-card {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  padding: 18px 20px;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(23, 32, 42, 0.06);\n}\n\n.highlight-card p {\n  margin: 0;\n  line-height: 1.75;\n  color: #344054;\n}\n\n.highlight-dot {\n  width: 10px;\n  height: 10px;\n  margin-top: 8px;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #ea580c, #f59e0b);\n  flex: 0 0 auto;\n}\n\n.skills-grid {\n  gap: 12px;\n}\n\n.skill-card {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 14px;\n  border: 1px solid rgba(23, 32, 42, 0.08);\n  background: rgba(248, 250, 252, 0.88);\n}\n\n.skill-card img {\n  width: 20px;\n  height: 20px;\n  object-fit: contain;\n}\n\n.skill-card span {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #243447;\n}\n\n.link-list,\n.timeline,\n.project-grid {\n  display: grid;\n  gap: 16px;\n}\n\n.link-card,\n.project-card,\n.timeline-item {\n  border-radius: 24px;\n  border: 1px solid rgba(23, 32, 42, 0.06);\n  background: rgba(248, 250, 252, 0.88);\n  transition:\n    background-color 0.22s ease,\n    border-color 0.22s ease,\n    box-shadow 0.22s ease,\n    transform 0.22s ease;\n}\n\n.highlight-card,\n.skill-card,\n.metric-card,\n.portrait-card,\n.profile-facts,\n.link-card,\n.project-card,\n.timeline-item,\n.contact-item {\n  transition:\n    background-color 0.22s ease,\n    border-color 0.22s ease,\n    box-shadow 0.22s ease,\n    transform 0.22s ease;\n}\n\n.highlight-card:hover,\n.skill-card:hover,\n.metric-card:hover,\n.portrait-card:hover,\n.profile-facts:hover,\n.link-card:hover,\n.project-card:hover,\n.timeline-item:hover,\n.contact-item:hover {\n  background: rgba(236, 231, 223, 0.96);\n  border-color: rgba(23, 32, 42, 0.14);\n  box-shadow: 0 18px 38px rgba(31, 41, 55, 0.12);\n  transform: translateY(-2px);\n}\n\n.link-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 20px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.link-label {\n  margin: 0 0 6px;\n  font-weight: 700;\n  color: #111827;\n}\n\n.link-card strong {\n  color: #667085;\n  font-size: 0.88rem;\n  word-break: break-all;\n}\n\n.link-arrow {\n  font-weight: 700;\n  color: #111827;\n}\n\n.timeline-item {\n  padding: 22px 24px;\n}\n\n.timeline-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n}\n\n.timeline-head h3 {\n  font-size: 1.28rem;\n}\n\n.timeline-company {\n  margin: 8px 0 0;\n  font-weight: 700;\n  color: #475467;\n}\n\n.timeline-period {\n  flex: 0 0 auto;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(23, 32, 42, 0.06);\n  color: #111827;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.experience-points {\n  margin: 16px 0 0;\n  padding-left: 20px;\n  color: #344054;\n  line-height: 1.8;\n}\n\n.experience-points li + li {\n  margin-top: 6px;\n}\n\n.project-grid-wide {\n  grid-template-columns: 1fr;\n}\n\n.project-card {\n  padding: 22px;\n}\n\n.project-top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.project-top h3 {\n  font-size: 1.2rem;\n}\n\n.project-caption {\n  margin: 6px 0 0;\n  color: #667085;\n  font-size: 0.9rem;\n}\n\n.project-top a {\n  color: #111827;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.project-description {\n  margin: 16px 0;\n  color: #475467;\n  line-height: 1.85;\n}\n\n.stack-row span {\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid rgba(23, 32, 42, 0.08);\n  font-size: 0.84rem;\n  font-weight: 700;\n}\n\n.page-footer {\n  position: relative;\n  display: grid;\n  gap: 20px;\n  margin-top: 24px;\n  padding: 26px 28px;\n  justify-items: center;\n  background: rgba(255, 255, 255, 0.82);\n  border: 1px solid rgba(23, 32, 42, 0.08);\n}\n\n.contact-facts {\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  gap: 48px;\n  margin-top: 10px;\n  padding-top: 6px;\n}\n\n.page-footer h2 {\n  font-size: 1.9rem;\n  margin-top: 8px;\n}\n\n.contact-heading {\n  width: 100%;\n  max-width: 100%;\n}\n\n.contact-symbol {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #17202a;\n  width: 1.1rem;\n  height: 1.1rem;\n  flex: 0 0 auto;\n}\n\n.contact-symbol svg {\n  width: 100%;\n  height: 100%;\n  fill: currentColor;\n}\n\n.contact-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #17202a;\n  text-decoration: none;\n  min-width: 0;\n  line-height: 1.4;\n}\n\n.contact-item strong {\n  color: inherit;\n  font-size: 0.98rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.empty-state {\n  padding: 40px 28px;\n  text-align: center;\n}\n\n.section-title-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n}\n\n.section-title-row {\n  align-items: center;\n  justify-content: space-between;\n}\n.repeat-item {\n  display: grid;\n  gap: 8px;\n}\n\ninput,\ntextarea {\n  width: 100%;\n  border: 1px solid rgba(23, 32, 42, 0.14);\n  border-radius: 16px;\n  padding: 12px 14px;\n  font: inherit;\n  color: #17202a;\n  background: rgba(255, 255, 255, 0.96);\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.photo-editor {\n  display: grid;\n  gap: 12px;\n  margin-top: 12px;\n  padding: 14px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.58);\n  border: 1px solid rgba(31, 41, 51, 0.08);\n}\n\n.photo-editor img {\n  width: min(100%, 220px);\n  aspect-ratio: 4 / 5;\n  object-fit: cover;\n  border-radius: 18px;\n}\n\n.repeat-list {\n  display: grid;\n  gap: 16px;\n}\n\n.repeat-item {\n  padding: 16px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.58);\n  border: 1px solid rgba(31, 41, 51, 0.08);\n}\n\n.inline-item {\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n}\n\n.card-item {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.card-item button,\n.card-item label:last-of-type {\n  grid-column: span 2;\n}\n\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  background: rgba(20, 26, 32, 0.42);\n}\n\n.login-modal,\n.section-editor-modal {\n  width: min(100%, 420px);\n  padding: 24px;\n  border-radius: 24px;\n  background: #fffaf4;\n  border: 1px solid rgba(78, 64, 44, 0.12);\n  box-shadow: 0 24px 70px rgba(35, 28, 18, 0.2);\n}\n\n.section-editor-modal {\n  width: min(100%, 840px);\n  display: flex;\n  flex-direction: column;\n  max-height: min(90vh, 920px);\n}\n\n.login-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.login-modal-header h3 {\n  margin: 0;\n  font-size: 1.45rem;\n}\n\n.login-modal-copy {\n  margin: 10px 0 16px;\n  color: #5c6976;\n}\n\n.modal-close {\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 999px;\n  background: rgba(23, 32, 42, 0.06);\n  color: #17202a;\n  cursor: pointer;\n  font-size: 1.3rem;\n}\n\n.login-modal-form {\n  display: grid;\n  gap: 12px;\n}\n\n.section-editor-body {\n  flex: 1 1 auto;\n  margin-top: 18px;\n  overflow: auto;\n  padding-right: 4px;\n  padding-bottom: 12px;\n}\n\n.modal-form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.modal-list-block {\n  display: grid;\n  gap: 14px;\n}\n\n.modal-full {\n  grid-column: span 2;\n}\n\n.modal-actions {\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 0;\n  padding-top: 16px;\n  border-top: 1px solid rgba(78, 64, 44, 0.12);\n  background: #fffaf4;\n  position: sticky;\n  bottom: 0;\n  z-index: 1;\n}\n\n.login-error {\n  width: fit-content;\n  margin: 0 0 14px;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background: rgba(138, 45, 17, 0.14);\n  color: #8a2d11;\n  font-size: 0.92rem;\n  font-weight: 700;\n}\n\n#about,\n#skills,\n#links,\n#experience,\n#projects,\n#education,\n#contact {\n  scroll-margin-top: 168px;\n}\n\n.loading-state {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(180deg, #f5f2ec 0%, #ebe6de 100%);\n  color: #17202a;\n}\n\n\n@media (max-width: 1100px) {\n  .hero-card,\n  .about-layout,\n  .section-header,\n  .project-grid-wide,\n  .modal-form-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .topbar {\n    grid-template-columns: 1fr;\n  }\n\n  .section-nav {\n    justify-content: flex-start;\n  }\n\n  .content-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .panel-half,\n  .panel-full {\n    grid-column: span 1;\n  }\n\n  .modal-full {\n    grid-column: span 1;\n  }\n\n}\n\n@media (max-width: 720px) {\n  app-topbar {\n    top: 12px;\n    left: 16px;\n    right: 16px;\n  }\n\n  .page-shell {\n    padding: 112px 16px 16px;\n  }\n\n  .topbar,\n  .hero-card,\n  .panel,\n  .editor-shell,\n  .empty-state,\n  .page-footer {\n    padding: 20px;\n    border-radius: 24px;\n  }\n\n  .hero-copy h1 {\n    font-size: 2.6rem;\n    white-space: normal;\n  }\n\n  .hero-card {\n    gap: 20px;\n  }\n\n  .hero-metrics,\n  .skills-grid,\n  .stack-row {\n    gap: 10px;\n  }\n\n  .metric-card,\n  .skill-card,\n  .stack-row span {\n    width: 100%;\n    justify-content: flex-start;\n  }\n\n  .timeline-head,\n  .topbar-actions,\n  .hero-actions,\n  .fact-row,\n  .section-header-actions,\n  .link-card,\n  .project-top {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .page-footer {\n    padding: 20px;\n  }\n\n  .contact-facts {\n    flex-direction: column;\n    align-items: center;\n    gap: 14px;\n    margin-top: 16px;\n    padding-top: 0;\n  }\n\n  .contact-item {\n    justify-content: center;\n  }\n\n  .modal-actions {\n    flex-direction: row;\n    align-items: center;\n    justify-content: stretch;\n  }\n\n  .fact-row strong {\n    text-align: left;\n  }\n\n  .inline-item,\n  .card-item {\n    grid-template-columns: 1fr;\n  }\n\n  .card-item button,\n  .card-item label:last-of-type {\n    grid-column: span 1;\n  }\n\n  .section-editor-modal,\n  .login-modal {\n    padding: 20px;\n  }\n\n  .modal-actions .primary-btn,\n  .modal-actions .ghost-btn {\n    width: 100%;\n  }\n}\n"] }]
    }], function () { return []; }, { onWindowScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }], onWindowPopState: [{
            type: HostListener,
            args: ['window:popstate']
        }] }); })();
//# sourceMappingURL=app.component.js.map