<template>
  <div>
    <Header />
    <NavBar />
    <ChargeBackIndex />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ChargeBackIndex from '../components/ChargeBacks/Index';

export default {
	name: 'ChargeBacks',
	components: {
		Header,
		NavBar,
		Footer,
		ChargeBackIndex
	}
};
</script>
