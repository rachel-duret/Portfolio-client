import React from 'react';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {};

function Profile({}: Props) {
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center ">
			<BackgroundCircles />
			<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
				Developpeuse Full Stack
			</h2>
			<h1 className="text-5xl lg:text-6xl font-semibold px-10">Rachel DURET</h1>

			<div className="pt-5">
				<Link href="#about">
					<button className="profileButton cursor-pointer hover:border-[#F7AB0A]/40 hover: text-[#F7AB0A]/40">
						About
					</button>
				</Link>
				<Link href="#expriences">
					<button className="profileButton hover:border-[#F7AB0A]/40 hover: text-[#F7AB0A]/40">
						experiences
					</button>
				</Link>
				<Link href="#skills">
					<button className="profileButton hover:border-[#F7AB0A]/40 hover: text-[#F7AB0A]/40">
						skills
					</button>
				</Link>
				<Link href="#projects">
					<button className="profileButton hover:border-[#F7AB0A]/40 hover: text-[#F7AB0A]/40">
						projects
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Profile;
