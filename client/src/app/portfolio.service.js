import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { buildApiUrl } from './app-config';
import * as i0 from "@angular/core";
export class PortfolioService {
    constructor() {
        this.http = inject(HttpClient);
        this.tokenKey = 'portfolio_admin_token';
    }
    getProfile() {
        return this.http.get(buildApiUrl('/api/profile'));
    }
    updateSection(section, payload) {
        return this.http.put(buildApiUrl(`/api/profile/sections/${section}`), payload, {
            headers: this.getAuthHeaders()
        });
    }
    login(email, password) {
        return this.http.post(buildApiUrl('/api/auth/login'), { email, password });
    }
    getSession() {
        return this.http.get(buildApiUrl('/api/auth/session'), {
            headers: this.getAuthHeaders()
        });
    }
    saveToken(token) {
        localStorage.setItem(this.tokenKey, token);
    }
    clearToken() {
        localStorage.removeItem(this.tokenKey);
    }
    hasToken() {
        return typeof localStorage !== 'undefined' && !!localStorage.getItem(this.tokenKey);
    }
    getAuthHeaders() {
        const token = localStorage.getItem(this.tokenKey) || '';
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }
    static { this.ɵfac = function PortfolioService_Factory(t) { return new (t || PortfolioService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PortfolioService, factory: PortfolioService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PortfolioService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=portfolio.service.js.map