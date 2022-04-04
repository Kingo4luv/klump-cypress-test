<template>
	<div>
		<Header />
		<NavBar />
		<PayoutIndex />
		<Footer />
	</div>
</template>

<script>
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PayoutIndex from '../components/Payouts/Index';

export default {
	name: 'Payouts',
	components: {
		Header,
		NavBar,
		Footer,
		PayoutIndex
	}
};
</script>
