/* Iconos SVG de Factor Solar Chile. Uso: icon('sun', 24). */
(function (global) {
  "use strict";
  const paths = {
    bolt: '<path d="M13 2 4 14h7l-1 8 10-12h-7z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    panel: '<path d="M3 6h18l-2 11H5L3 6Zm6 0-1 11m7-11 1 11M4 11h16M12 17v4m-4 0h8"/>',
    battery: '<rect x="3" y="7" width="17" height="10" rx="2"/><path d="M23 10v4M7 10v4m5-4v4"/>',
    inverter: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6m-6 4h6m-6 4h2"/>',
    plug: '<path d="M12 22v-5m-3-9V2m6 6V2m3 6v5a6 6 0 0 1-12 0V8z"/>',
    home: '<path d="m3 11 9-8 9 8M5 10v11h14V10m-9 11v-6h4v6"/>',
    building: '<path d="M4 21V3h11v18M15 9h5v12M8 7h3m-3 4h3m-3 4h3m6-2h1m-1 4h1M3 21h18"/>',
    factory: '<path d="M3 21V9l6 3V8l6 4V5h6v16H3Zm4-4h2m3 0h2m3 0h2"/>',
    leaf: '<path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-7 10-16Z"/><path d="M4 21c2-5 6-8 12-11"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    camera: '<path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="4"/>',
    cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9zM9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4"/>',
    'clipboard-check': '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4.5h6V2H9zm-1 9 2 2 5-5"/>',
    wrench: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4l-5.8 5.8a2 2 0 0 0 2.8 2.8l5.8-5.8a5 5 0 0 0 6.4-6.4L14 12l-2-2 2.7-3.7Z"/>',
    truck: '<path d="M3 6h11v12H3zM14 10h4l3 3v5h-7z"/><circle cx="7.5" cy="19" r="1.5"/><circle cx="18" cy="19" r="1.5"/>',
    bank: '<path d="m3 10 9-7 9 7M5 10v9m5-9v9m8-9v9M3 21h18M2 19h20"/>',
    cash: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9h.01M18 15h.01"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.1 0l3-3A5 5 0 0 0 13 2.9l-1.7 1.7m2.7 6.4a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    whatsapp: '<path d="M21 12a9 9 0 0 1-13.3 7.9L3 21l1.2-4.5A9 9 0 1 1 21 12Z"/><path d="M9.5 8.5c.5 2 2.5 4.5 5 5.5l1.3-1.3-1.8-1-.9.8c-.9-.4-1.8-1.3-2.2-2.2l.8-.9-1-1.8-1.2.9Z"/>',
    facebook: '<path d="M15 21v-8h3l.5-4H15V7c0-1.2.4-2 2-2h2V1.4c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2V9H8v4h3v8z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
    plus: '<path d="M12 5v14m-7-7h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash: '<path d="M3 6h18m-2 0-.9 14H5.9L5 6m4 0V4h6v2m-5 4v6m4-6v6"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    x: '<path d="m18 6-12 12M6 6l12 12"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    filter: '<path d="M4 6h16M7 12h10m-7 6h4"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'arrow-right': '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/>',
    alert: '<path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 4h.01"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.8 1.2 6.9L12 17.8 5.8 21 7 14.1 2 9.3l6.9-1z"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    upload: '<path d="M12 16V4m-5 5 5-5 5 5M4 20h16"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
    key: '<circle cx="8" cy="15" r="5"/><path d="m12 12 9-9m-4 4 3 3m-6-1 3 3"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    'eye-off': '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.1 3.9M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7a10.7 10.7 0 0 0 3-.4"/>',
    chart: '<path d="M3 3v18h18M8 15v3m5-7v7m5-12v12"/>',
    qr: '<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3zm4 4h3v3h-3zm-4 3v-1"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 21h16"/>',
    copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    archive: '<path d="M3 4h18v4H3zM5 8v12h14V8m-9 4h4"/>',
    drag: '<path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01"/>',
    refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.5 9a7 7 0 0 1 12-2L20 12M4 12l2.5 5a7 7 0 0 0 12-2"/>',
    'external-link': '<path d="M14 3h7v7m0-7L10 14"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    undo: '<path d="M3 7v6h6M4 13a8 8 0 1 0 2-6L3 10"/>',
    message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
    logo: '<path d="M4 16h16l-2-7H6l-2 7Z"/><path d="M7 9a5 5 0 0 1 10 0M8 12l-1 4m5-4v4m5-4 1 4M12 1v3M5 3l2 3m10-3-2 3M2 8l4 1m14-1-4 1"/>'
  };
  const aliases = { 'shield-check': 'shield', 'map-pin': 'pin', x: 'close' };
  global.icon = function (name, size) {
    const key = aliases[name] || name;
    const content = paths[key] || paths.sun;
    const px = Number.isFinite(Number(size)) ? Number(size) : 24;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + px + '" height="' + px +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      content + '</svg>';
  };
  global.iconNames = Object.keys(paths);
})(window);
