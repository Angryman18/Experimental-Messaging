# Experimental-Messaging


this is an experimental project on firebase cloud messaging. this requires a firebase configurations to run.


How messaging works in firebase?


there are two away mesaging works. One is background message and another is foreground message. background message is when the app is active and foreground message is when the app is not active. for the background message firebase demands a function to run on mount which is `onMessageListener` and before that we need to request for notification permission and generate the token and send it to backend.

and for the foreground messaging we need service worker which has `onBackgroundSync` method helps to get the message and show notification based on that.
