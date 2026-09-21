// Native Capacitor routing. Set SYNTH_PUBLIC_SERVER_URL at build time or change synthServerUrl locally.
window.SYNTH_SERVER_URL = window.SYNTH_PUBLIC_SERVER_URL || localStorage.getItem('synthServerUrl') || 'http://10.90.82.78:3000';
