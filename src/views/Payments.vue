<template>
	<div>
		<Header />
		<NavBar />
		<PaymentIndex />
		<Footer />
	</div>
</template>

<script>
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PaymentIndex from '../components/Payments/Index';

export default {
	name: 'Payments',
	components: {
		Header,
		NavBar,
		Footer,
		PaymentIndex
	}
};
</script>
