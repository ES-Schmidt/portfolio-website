import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
	return (
		<nav className="z-999 sticky top-0 flex min-h-[3rem] w-[100vw] bg-[#1a1a1a]">
			<div className="mx-auto flex min-h-full max-w-[1366px] grow items-center justify-between px-[2rem]">
				<h1>
					<a
						href="#introduction"
						className="flex cursor-pointer items-center gap-x-[5px] whitespace-nowrap text-[20px] font-semibold"
					>
						<FontAwesomeIcon icon={faCode} color="#ef7a26" />
						Ethan Schmidt
					</a>
				</h1>
				<ul className="flex items-center gap-6 font-medium">
					<li className="cursor-pointer">
						<a href="#qualifications">Qualifications</a>
					</li>
					<li className="cursor-pointer">
						<a href="#projects">Projects</a>
					</li>
					<li className="cursor-pointer">
						<a href="#contact">Contact</a>
					</li>
					<li className="flex flex-col items-center">
						<FontAwesomeIcon
							className="cursor-pointer text-[22px] transition-all duration-150 ease-in-out hover:text-[#9c490e]"
							onClick={function openGithub() {
								window.open('https://github.com/ES-Schmidt');
							}}
							icon={faGithubSquare}
							color="#ef7a26"
						/>
					</li>
					<li>
						<button className="flex items-center gap-2 rounded-md border-2 border-solid border-[#d66718] bg-[#ef7a26] px-2 text-[16px] font-medium text-[#111111] shadow-md transition-all duration-150 ease-in-out hover:bg-[#9c490e] hover:text-[white]">
							<FontAwesomeIcon className="text-[14px]" icon={faDownload} />
							Resume
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
