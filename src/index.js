import 'babel-polyfill';
import App from './components/App';
import apiSettings from './urlConfig';
import {setVapidKey} from './utils/storageUtils';

new App().render();

// <!-- Step 3b: Fetch server identification (VAPID) key -->
// <!-- Step 3b: Fetch server identification (VAPID) key -->
