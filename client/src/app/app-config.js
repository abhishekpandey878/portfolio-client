function normalizeApiBaseUrl(value) {
    return (value || '').trim().replace(/\/+$/, '');
}
export function getApiBaseUrl() {
    if (typeof window === 'undefined') {
        return '';
    }
    return normalizeApiBaseUrl(window.__APP_CONFIG__?.apiBaseUrl);
}
export function buildApiUrl(path) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const apiBaseUrl = getApiBaseUrl();
    return apiBaseUrl ? `${apiBaseUrl}${normalizedPath}` : normalizedPath;
}
//# sourceMappingURL=app-config.js.map