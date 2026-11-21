/* icons.js · Librería de íconos SVG (reemplaza el uso de emojis). Archivo NUEVO: no modifica nada existente.
   Uso:  icon('bolt')  ->  string <svg> en línea (hereda color con currentColor)
         icon('sun', 28)
         iconNames     ->  lista para el selector del panel admin */
(function(w){
  var P={
    bolt:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    panel:'<path d="M3 6h18l-2 10H5L3 6zM9 6l-1 10M15 6l1 10M4 11h16M12 16v4M8 20h8"/>',
    battery:'<rect x="2" y="8" width="16" height="8" rx="2"/><path d="M22 11v2M6 11v2M10 11v2"/>',
    wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z"/>',
    shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    home:'<path d="m3 11 9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>',
    building:'<path d="M4 21V3h10v18M14 9h6v12M8 7h2M8 11h2M8 15h2M3 21h18"/>',
    plug:'<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
    gauge:'<path d="m12 14 4-4M3.3 19a10 10 0 1 1 17.4 0"/>',
    leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5-6"/>',
    star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.8 1.2 6.9L12 17.800 5.800 21 7 14.100 2 9.300l6.900-1z"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    cart:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.700 13.400a2 2 0 0 0 2 1.600h9.700a2 2 0 0 0 2-1.600L23 6H6"/>',
    phone:'<path d="M22 16.900v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.300 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/>',
    mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    whatsapp:'<path d="M21 12a9 9 0 0 1-13.300 7.900L3 21l1.200-4.500A9 9 0 1 1 21 12z"/><path d="M9.500 8.500c.5 2 2.500 4.500 5 5.500l1.300-1.300-1.800-1-.9.800c-.9-.4-1.800-1.300-2.200-2.200l.8-.9-1-1.800L9.500 8.500z"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    x:'<path d="M18 6 6 18M6 6l12 12"/>',
    minus:'<path d="M5 12h14"/>',
    plus:'<path d="M12 5v14M5 12h14"/>'
  };
  w.iconLabels={bolt:"Rayo",sun:"Sol",panel:"Panel solar",battery:"Batería",wrench:"Herramienta",shield:"Escudo",home:"Casa",building:"Edificio",plug:"Enchufe",gauge:"Medidor",leaf:"Hoja",star:"Estrella",check:"Check",cart:"Carrito",phone:"Teléfono",mail:"Correo",pin:"Ubicación",clock:"Reloj",whatsapp:"WhatsApp"};
  w.iconNames=Object.keys(P);
  w.icon=function(n,s){
    s=s||20;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+(P[n]||P.bolt)+'</svg>';
  };
})(window);
