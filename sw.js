/* 悄悄话 · Web Push Service Worker */
const CACHE = 'qiaohua-sw-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (_) {}
  const title = data.title || '悄悄话 · 新消息';
  const options = {
    body: data.body || '你有一条新消息',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'qiaohua-msg-' + (data.sender || 'chat'),
    renotify: true,
    data: { url: data.url || '/chat.html' },
    actions: [{ action: 'open', title: '查看消息' }],
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

async function focusOrOpen(url) {
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  for (const c of clients) {
    if (new URL(c.url).pathname === '/chat.html') {
      await c.navigate(url);
      return c.focus();
    }
  }
  return self.clients.openWindow(url);
}

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/chat.html';
  event.waitUntil(focusOrOpen(url));
});
