<template>
  <div>
    <Header />
    <NavBar />
    <CustomersIndex />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CustomersIndex from '../components/Customers/Index';

export default {
	name: 'Customers',
	components: {
		Header,
		NavBar,
		Footer,
		CustomersIndex
	}
};
</script>
