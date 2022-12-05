import { getMessaging, getToken } from "firebase/messaging";
import firebaseApp from "./components/firebase";
import React, { useEffect } from "react";

function App() {
  async function requestPermissiion(): Promise<any> {
    const permission: string = await Notification.requestPermission();
    if (permission === "granted") {
      const messaging = getMessaging(firebaseApp);
      const vapidKey = import.meta.env.VITE_VAPID_KEY;
      const currToken: string | void = await getToken(messaging, { vapidKey }).catch(
        (err: Error) => {
          console.log("Error Occured ", err);
        }
      );
      console.log("current token ", currToken);
    } else {
      console.log("notification not granted", permission);
    }
  }

  useEffect(() => {
    requestPermissiion();
  }, []);

  const handleButtonClick = (): void => {
    Notification.requestPermission().then(res => {
      if (res === 'granted') {
        return new Notification('Hello World')
      }
    })
  }

  return <div className='App'>

    <button onClick={handleButtonClick}>Click</button>
  </div>;
}

export default App;
