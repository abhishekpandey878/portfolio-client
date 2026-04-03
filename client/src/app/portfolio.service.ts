import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { buildApiUrl } from './app-config';
import {
  AuthUser,
  EditorSectionKey,
  LoginResponse,
  PortfolioProfile,
  SectionMutationResponse
} from './portfolio.types';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly http = inject(HttpClient);
  private readonly tokenKey = 'portfolio_admin_token';

  getProfile(): Observable<PortfolioProfile> {
    return this.http.get<PortfolioProfile>(buildApiUrl('/api/profile'));
  }

  updateSection<T>(section: EditorSectionKey, payload: unknown): Observable<SectionMutationResponse<T>> {
    return this.http.put<SectionMutationResponse<T>>(buildApiUrl(`/api/profile/sections/${section}`), payload, {
      headers: this.getAuthHeaders()
    });
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(buildApiUrl('/api/auth/login'), { email, password });
  }

  getSession(): Observable<{ user: AuthUser }> {
    return this.http.get<{ user: AuthUser }>(buildApiUrl('/api/auth/session'), {
      headers: this.getAuthHeaders()
    });
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken() {
    localStorage.removeItem(this.tokenKey);
  }

  hasToken() {
    return typeof localStorage !== 'undefined' && !!localStorage.getItem(this.tokenKey);
  }

  private getAuthHeaders() {
    const token = localStorage.getItem(this.tokenKey) || '';
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
}
