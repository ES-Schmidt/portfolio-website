import React from 'react';
import Background from '../components/background';
import Navbar from '../components/navbar';
import Introduction from '../components/introduction';
import Qualifications from '../components/qualifications';
import Projects from '../components/projects';
import Contact from '../components/contact';
import './styles';

export default function App() {
	return (
		<div className="bg-transparent text-[#dddddd]">
			<Navbar />
			<div className="mx-auto max-w-[1366px] px-[30px]">
				<Introduction />
				<Qualifications />
				<Projects />
				<Contact />
			</div>
			<Background className="fixed top-0 left-0 z-[-1] min-h-[100vh] w-[100vw]" />
		</div>
	);
}
