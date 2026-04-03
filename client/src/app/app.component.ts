import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  ViewEncapsulation,
  inject
} from '@angular/core';
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
import {
  AuthUser,
  EducationItem,
  EditorSectionKey,
  ExperienceItem,
  PortfolioProfile,
  ProjectItem,
  SectionTitles,
  SocialLink
} from './portfolio.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private readonly adminPath = '/abhishek-admin-user';
  private readonly portfolioService = inject(PortfolioService);
  private readonly trackedSectionIds = ['about', 'skills', 'experience', 'projects', 'education', 'contact'] as const;
  private feedbackTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private revealObserver: IntersectionObserver | null = null;
  private headlineTypingId: ReturnType<typeof setInterval> | null = null;
  private summaryTypingId: ReturnType<typeof setInterval> | null = null;

  profile: PortfolioProfile | null = null;
  editableProfile: PortfolioProfile | null = null;
  authUser: AuthUser | null = null;
  isLoading = true;
  isSaving = false;
  isLoginModalOpen = false;
  activeEditorSection: EditorSectionKey | null = null;
  pendingEditorSection: EditorSectionKey | null = null;
  statusMessage = '';
  errorMessage = '';
  loginEmail = '';
  loginPassword = '';
  loginError = '';
  isLoggingIn = false;
  animatedHeadline = '';
  animatedSummary = '';
  isSummaryVisible = false;
  isAdminRoute = false;

  constructor() {
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
        this.profile = this.cloneProfile(this.normalizeProfile(this.editableProfile!));
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

  openSectionEditor(section: EditorSectionKey) {
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

  removeHighlight(index: number) {
    this.editableProfile?.highlights.splice(index, 1);
  }

  addSkill() {
    this.editableProfile?.skills.push('');
  }

  removeSkill(index: number) {
    this.editableProfile?.skills.splice(index, 1);
  }

  addLink() {
    this.editableProfile?.socialLinks.push(this.emptyLink());
  }

  removeLink(index: number) {
    this.editableProfile?.socialLinks.splice(index, 1);
  }

  addExperience() {
    this.editableProfile?.experience.push(this.emptyExperience());
  }

  removeExperience(index: number) {
    this.editableProfile?.experience.splice(index, 1);
  }

  addProject() {
    this.editableProfile?.projects.push(this.emptyProject());
  }

  removeProject(index: number) {
    this.editableProfile?.projects.splice(index, 1);
  }

  addEducation() {
    this.editableProfile?.education.push(this.emptyEducation());
  }

  removeEducation(index: number) {
    this.editableProfile?.education.splice(index, 1);
  }

  getProjectStackValue(project: ProjectItem) {
    return project.stack.join(', ');
  }

  updateProjectStack(project: ProjectItem, value: string) {
    project.stack = value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  onPhotoSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file || !this.editableProfile) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.editableProfile!.profilePhoto = String(reader.result || '');
    };
    reader.readAsDataURL(file);
  }

  clearPhoto() {
    if (!this.editableProfile) {
      return;
    }

    this.editableProfile.profilePhoto = '';
  }

  trackByIndex(index: number) {
    return index;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateActiveSectionHash();
  }

  @HostListener('window:popstate')
  onWindowPopState() {
    this.syncRouteMode();
  }

  private openPendingEditorSection() {
    const section = this.pendingEditorSection || 'profile';
    this.pendingEditorSection = null;
    this.openSectionEditor(section);
  }

  private showTemporaryMessage(message: string) {
    this.statusMessage = message;

    if (this.feedbackTimeoutId) {
      clearTimeout(this.feedbackTimeoutId);
    }

    this.feedbackTimeoutId = setTimeout(() => {
      this.statusMessage = '';
      this.feedbackTimeoutId = null;
    }, 2000);
  }

  private syncRouteMode() {
    if (typeof window === 'undefined') {
      return;
    }

    const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
    this.isAdminRoute = normalizedPath === this.adminPath;
  }

  private restoreSession() {
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

  private handleProtectedActionError(message: string, status?: number) {
    this.errorMessage = message;

    if (status === 401 || !this.portfolioService.hasToken()) {
      this.portfolioService.clearToken();
      this.authUser = null;
      this.activeEditorSection = null;
    }
  }

  private startIntroAnimation() {
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
        clearInterval(this.headlineTypingId!);
        this.headlineTypingId = null;
        this.isSummaryVisible = true;
        this.startSummaryTyping();
      }
    }, 22);
  }

  private startSummaryTyping() {
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
        clearInterval(this.summaryTypingId!);
        this.summaryTypingId = null;
      }
    }, 14);
  }

  private setupRevealAnimations() {
    if (typeof document === 'undefined') {
      return;
    }

    setTimeout(() => {
      if (this.revealObserver) {
        this.revealObserver.disconnect();
      }

      const revealElements = document.querySelectorAll('.reveal-on-scroll');

      this.revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        {
          threshold: 0.16,
          rootMargin: '0px 0px -8% 0px'
        }
      );

      revealElements.forEach((element) => this.revealObserver?.observe(element));
    }, 0);
  }

  private updateActiveSectionHash() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const viewportOffset = 160;
    let activeSectionId: (typeof this.trackedSectionIds)[number] = this.trackedSectionIds[0];

    for (const sectionId of this.trackedSectionIds) {
      const element = document.getElementById(sectionId);

      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();

      if (rect.top <= viewportOffset) {
        activeSectionId = sectionId;
      } else {
        break;
      }
    }

    const nextHash = `#${activeSectionId}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', nextHash);
    }
  }

  private buildSectionPayload(section: EditorSectionKey) {
    const profile = this.normalizeProfile(this.editableProfile!);

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

  private normalizeProfile(profile: PortfolioProfile): PortfolioProfile {
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

  private cloneProfile(profile: PortfolioProfile): PortfolioProfile {
    return {
      ...JSON.parse(JSON.stringify(profile)),
      sectionTitles: this.normalizeSectionTitles(profile.sectionTitles)
    };
  }

  private defaultSectionTitles(): SectionTitles {
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

  private normalizeSectionTitles(sectionTitles?: Partial<SectionTitles> | null): SectionTitles {
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

  private emptyLink(): SocialLink {
    return {
      label: '',
      url: ''
    };
  }

  private emptyExperience(): ExperienceItem {
    return {
      role: '',
      company: '',
      period: '',
      description: ''
    };
  }

  private emptyProject(): ProjectItem {
    return {
      name: '',
      stack: [],
      description: '',
      link: ''
    };
  }

  private emptyEducation(): EducationItem {
    return {
      degree: '',
      institution: '',
      period: ''
    };
  }
}
