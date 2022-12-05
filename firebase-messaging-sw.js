importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: `%VITE_API_KEY%`,
  authDomain: `%VITE_AUTH_DOMAIN%`,
  projectId: `%VITE_PROJECT_ID%`,
  storageBucket: `%VITE_STORAGE_BUCKET%`,
  messagingSenderId: `%VITE_MESSAGING_SENDER_ID%`,
  appId: `%VITE_APP_ID%`,
  measurementId: `%VITE_MEASUREMENT_ID%`,
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
