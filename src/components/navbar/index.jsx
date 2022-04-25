import React from 'react';

export default function Navbar() {
	return (
		<nav className="sticky top-0 basis-12 bg-slate-800">
			<div className="mx-auto flex min-h-full max-w-[1366px] items-stretch justify-between px-12">
				<div className="flex items-center text-white">Logo-Link</div>
				<ul className="flex items-center gap-6">
					<li>Qualifications</li>
					<li>Projects</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	);
}
