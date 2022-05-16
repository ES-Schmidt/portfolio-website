import React from 'react';
import HeaderGraphic from './graphics';

export default function Header() {
	return (
		// use an `id` attribute to provide a link to the component on webpages; fragments.
		<div className="mx-auto flex w-[min(1366px,100%)] grow items-stretch outline outline-1 outline-gray-100">
			<div className="flex basis-[61.8%] flex-col items-center justify-center bg-stone-900">
				<HeaderCard />
			</div>
			<HeaderGraphic />
		</div>
	);
}

function HeaderCard() {
	return (
		<section className="relative left-[15%] flex max-h-[61.8%] min-h-fit w-[95%] flex-col justify-between bg-stone-900 px-[5%] py-[20%] shadow-[0_20px_30px_10px_rgba(0,0,0,0.2)]">
			{/* introductory text */}
			<p className="font-primary text-[clamp(9px,9px_+_1vw,16px)] text-yellow-400">
				Hello, my name is{' '}
				<span className="block text-[clamp(40%,40%_+_5vw,67.77px)] text-white">Ethan</span>
			</p>

			{/* context heading */}
			<h2 className="font-secondary block text-[clamp(40%,40%_+_5vw,67.77px)]">lorem ipsum</h2>

			{/* explination text */}
			<p className="font-primary text-[clamp(9px,9px_+_1vw,16px)] leading-[2.618] text-yellow-400">
				Voluptatum nobis cupiditate similique adipisci consequatur ad, possimus eum quos, vero
				eligendi veniam nisi sint, doloribus laborum perferendis!
			</p>
		</section>
	);
}
