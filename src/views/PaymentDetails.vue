<template>
	<div>
		<Header />
		<NavBar />
		<Detail />
		<Footer />
	</div>
</template>

<script>
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Detail from '../components/Payments/Details';

export default {
	name: 'PaymentDetails',
	components: {
		Header,
		NavBar,
		Footer,
		Detail
	}
};
</script>
