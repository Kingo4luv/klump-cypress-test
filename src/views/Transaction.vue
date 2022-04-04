<template>
	<div>
		<Header />
		<NavBar />
		<TransactionIndex />
		<Footer />
	</div>
</template>

<script>
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TransactionIndex from '../components/Transactions/Index';

export default {
	name: 'Transaction',
	components: {
		Header,
		NavBar,
		Footer,
		TransactionIndex
	}
};
</script>
