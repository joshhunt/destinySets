export function getDebugProfile(path) {}

export function saveDebugInfo(debugData, pathPrefix = 'debug') {}

export function setUser() {}

export function trackError(...args) {
  const { Raven } = window;

  if (!Raven) {
    return null;
  }

  Raven.captureException(...args);
}

export function setExtraUserContext(data) {
  const { Raven } = window;

  if (!Raven) {
    return null;
  }

  Raven.setExtraContext(data);
}

export function trackBreadcrumb(data) {
  const { Raven } = window;

  if (!Raven) {
    return null;
  }

  Raven.captureBreadcrumb(data);
}

export function errorPrompt(ev) {
  if (ev && ev.preventDefault) {
    ev.preventDefault();
  }

  const { Raven } = window;

  if (!Raven) {
    window.alert(
      'Unable to load error library. Maybe an adblocker interferred?'
    );
    return null;
  }

  Raven.showReportDialog();
}
