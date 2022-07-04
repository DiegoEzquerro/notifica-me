import React from 'react';
import { requestForToken } from './firebase';
//import toast, { Toaster } from 'react-hot-toast';

const Notification = () => {
    const [notification, setNotification] = useState({ title: '', body: '' });

    //requestForToken();
    //....

    useEffect(() => {
        if (notification?.title) {
            console.info('NOTIFICACIÓN HA LLEGADO');
            //notify();
        }
    }, [notification])

    onMessageListener()
        .then((payload) => {
            setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
        })
        .catch((err) => console.log('failed: ', err));

    return (
        <div>
            {notification}
        </div>
    )
}

export default Notification