export function getDefaultDevicePixelRatio() {
  if (window.devicePixelRatio != undefined) {
    return window.devicePixelRatio;
  } else {
    return 1;
  }
}
