/* Stub: કોઈ Firebase Cloud Messaging નથી — કેટલાક ક્લાયન્ટ આ URL પર GET કરે છે. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
