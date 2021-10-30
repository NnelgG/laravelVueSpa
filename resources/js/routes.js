import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

export default {
	mode: 'history',
	linkActiveClass: 'font-semibold',
	routes : [
		{
			path: '*',
			component: NotFound
		},	
		{
			// path: '/',
			path: '/laravel/LaravelVueSPA/',
			component: Home,
			name: 'Home'
		},
		{
			// path: '/about',
			path: '/laravel/LaravelVueSPA/about',
			component: About
		},
		{
			// path: '/login',
			path: '/laravel/LaravelVueSPA/login',
			component: Login,
			name: 'Login',
		},
		{
			// path: '/register',
			path: '/laravel/LaravelVueSPA/register',
			component: Register
		},
		{
			// path: '/dashboard',
			path: '/laravel/LaravelVueSPA/dashboard',
			component: Dashboard,
			name: 'Dashboard',
			beforeEnter: (to, form, next) => {
				axios.get('/laravel/LaravelVueSPA/api/athenticated').then(()=> {
			  	next()
				}).catch(()=> {
			  	return next({ name: 'Login'})
				})
			}			
		}								
	]
}