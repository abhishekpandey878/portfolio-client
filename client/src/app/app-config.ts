declare global {
  interface Window {
    __APP_CONFIG__?: {
      apiBaseUrl?: string;
    };
  }
}

function normalizeApiBaseUrl(value: string | undefined) {
  return (value || '').trim().replace(/\/+$/, '');
}

export function getApiBaseUrl() {
  if (typeof window === 'undefined') {
    return '';
  }

  return normalizeApiBaseUrl(window.__APP_CONFIG__?.apiBaseUrl);
}

export function buildApiUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const apiBaseUrl = getApiBaseUrl();

  return apiBaseUrl ? `${apiBaseUrl}${normalizedPath}` : normalizedPath;
}
