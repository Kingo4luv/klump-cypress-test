import Vue from 'vue';
import Router from 'vue-router';
import { requireAuth } from '../utils/auth';
import Home from '../views/Home.vue';

const SignUp = () => import(/* webpackChunkName: 'SignUp' */ '../views/Signup.vue');
const SignIn = () => import(/* webpackChunkName: 'SignIn' */ '../views/SignIn');
const ForgotPassword = () => import(/* webpackChunkName: 'ForgotPassword' */ '../views/ForgotPassword');
const TermsOfService = () => import(/* webpackChunkName: 'TermsOfService' */ '../views/TermsOfService');
const PrivacyPolicy = () => import(/* webpackChunkName: 'PrivacyPolicy' */ '../views/PrivacyPolicy');
const Transaction = () => import(/* webpackChunkName: 'Transaction' */ '../views/Transaction');
const TransactionDetails = () => import(/* webpackChunkName: 'TransactionDetails' */ '../views/TransactionDetails');
const TransactionSearch = () => import(/* webpackChunkName: 'TransactionSearch' */ '../views/TransactionSearch');
const Customers = () => import(/* webpackChunkName: 'Customers' */ '../views/Customers');
const CustomerDetails = () => import(/* webpackChunkName: 'CustomerDetails' */ '../views/CustomerDetails');
const CustomerSearch = () => import(/* webpackChunkName: 'CustomerSearch' */ '../views/CustomerSearch');
const Settings = () => import(/* webpackChunkName: 'Customers' */ '../views/Settings');
const Payouts = () => import(/* webpackChunkName: 'Payouts' */ '../views/Payouts');
const PayoutSearch = () => import(/* webpackChunkName: 'PayoutSearch' */ '../views/PayoutSearch');
const Payments = () => import(/* webpackChunkName: 'Payments' */ '../views/Payments');
const PaymentDetails = () => import(/* webpackChunkName: 'PaymentDetails' */ '../views/PaymentDetails');
const SinglePaymentPage = () => import(/* webpackChunkName: 'SinglePaymentPage' */ '../views/SinglePaymentPage');
const ChargeBacks = () => import(/* webpackChunkName: 'ChargeBacks' */ '../views/ChargeBacks');
const ChargeBackDetails = () => import(/* webpackChunkName: 'ChargeBackDetails' */ '../views/ChargeBackDetails');
const ChargeBackSearch = () => import(/* webpackChunkName: 'ChargeBackSearch' */ '../views/ChargeBackSearch');
const Logout = () => import(/* webpackChunkName: 'logout' */ '../views/Logout');
const Activate = () => import(/* webpackChunkName: 'Activate' */ '../views/Activate');
const ResetPassword = () => import(/* webpackChunkName: 'ResetPassword' */ '../views/ResetPassword');
const NotFound = () => import(/* webpackChunkName: 'NotFound' */ '../views/NotFound');

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/sign-up',
			name: 'SignUp',
			component: SignUp
		},
		{
			path: '/sign-in',
			name: 'SignIn',
			component: SignIn
		},
		{
			path: '/forgot-password',
			name: 'ForgotPassword',
			component: ForgotPassword
		},
		{
			path: '/terms-of-service',
			name: 'TermsOfService',
			component: TermsOfService
		},
		{
			path: '/privacy-policy',
			name: 'PrivacyPolicy',
			component: PrivacyPolicy
		},
		{
			path: '/logout',
			name: 'Logout',
			component: Logout,
			beforeEnter: requireAuth
		},
		{
			path: '/',
			name: 'home',
			component: Home,
			beforeEnter: requireAuth
		},
		{
			path: '/transactions',
			name: 'transaction',
			component: Transaction,
			beforeEnter: requireAuth
		},
		{
			path: '/transactions/search',
			name: 'transaction_search',
			component: TransactionSearch,
			beforeEnter: requireAuth
		},
		{
			path: '/transactions/:id',
			name: 'transaction_details',
			component: TransactionDetails,
			beforeEnter: requireAuth
		},
		{
			path: '/customers',
			name: 'customers',
			component: Customers,
			beforeEnter: requireAuth
		},
		{
			path: '/customers/search',
			name: 'customer_search',
			component: CustomerSearch,
			beforeEnter: requireAuth
		},
		{
			path: '/customers/:id',
			name: 'customer_details',
			component: CustomerDetails,
			beforeEnter: requireAuth
		},
		{
			path: '/settings',
			name: 'settings',
			component: Settings,
			beforeEnter: requireAuth
		},
		{
			path: '/payouts',
			name: 'payouts',
			component: Payouts,
			beforeEnter: requireAuth
		},
		{
			path: '/payouts/search',
			name: 'payout_search',
			component: PayoutSearch,
			beforeEnter: requireAuth
		},
		{
			path: '/payments',
			name: 'payments',
			component: Payments,
			beforeEnter: requireAuth
		},
		{
			path: '/payments/:id',
			name: 'payment_details',
			component: PaymentDetails,
			beforeEnter: requireAuth
		},
		{
			path: '/payment-checkout',
			name: 'payment_checkout',
			component: SinglePaymentPage,
			beforeEnter: requireAuth
		},
		{
			path: '/charges',
			name: 'charges',
			component: ChargeBacks,
			beforeEnter: requireAuth
		},
		{
			path: '/charges/search',
			name: 'charge_back_search',
			component: ChargeBackSearch,
			beforeEnter: requireAuth
		},
		{
			path: '/charges/:id',
			name: 'charge_details',
			component: ChargeBackDetails,
			beforeEnter: requireAuth
		},
		{
			path: '/auth/login',
			name: 'activate',
			component: Activate
		},
		{
			path: '/auth/reset-password/:id',
			name: 'reset-password',
			component: ResetPassword
		},
		{
			path: '*',
			name: 'not_found',
			component: NotFound
		}
	]
});

export default router;
