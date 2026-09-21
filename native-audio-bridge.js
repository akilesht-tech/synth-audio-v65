(() => {
  // Capacitor does not automatically expose third-party plugins on window.Capacitor.Plugins
  // in every build style. Register the native-audio proxy explicitly so the plain JS app
  // can use it from a Capacitor WebView without a bundler-specific import.
  try {
    const cap = window.Capacitor;
    if (!cap || typeof cap.registerPlugin !== 'function' || !cap.isNativePlatform?.()) return;
    const plugin = cap.registerPlugin('AudioPlayer');
    if (plugin) window.SYNTH_NATIVE_AUDIO = plugin;
  } catch (e) {
    console.error('SYNTH AUDIO native audio bridge initialization failed', e);
  }
})();
