import Home from './views/Home';
import Login from './views/Login';

const routers = [
  {
    id: 1,
    component: Login,
    path: '/login',
    private: false,
  },
  {
    id: 2, 
    component: Home,
    path: '/',
    private: true,
  },
];

export default routers;