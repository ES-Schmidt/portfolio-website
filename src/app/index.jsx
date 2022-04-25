import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import './styles';

export default function App() {
	return (
		<>
			<section id="intro" className="flex min-h-screen flex-col flex-nowrap items-stretch">
				<Navbar />
				<Header />
			</section>
		</>
	);
}
