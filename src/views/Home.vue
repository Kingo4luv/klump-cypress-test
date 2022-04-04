<template>
  <div>
    <Header />
    <NavBar />
    <HomeIndex />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HomeIndex from '../components/Home/Index';

export default {
	name: 'Home',
	components: {
		Header,
		NavBar,
		Footer,
		HomeIndex
	}
};
</script>
