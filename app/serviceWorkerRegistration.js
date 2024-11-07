// app/serviceWorkerRegistration.js
export function register() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    console.log("Service Worker is supported");

    window.addEventListener("load", () => {
      console.log("Window loaded, attempting to register SW");

      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );

          registration.addEventListener("statechange", () => {
            console.log(
              "ServiceWorker state changed to: ",
              registration.active?.state
            );
          });
        })
        .catch((err) => {
          console.error("ServiceWorker registration failed: ", err);
        });
    });
  } else {
    console.log("Service Workers are not supported");
  }
}

export function unregister() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
        console.log("ServiceWorker unregistered");
      })
      .catch((err) => {
        console.error("ServiceWorker unregister failed: ", err);
      });
  }
}
