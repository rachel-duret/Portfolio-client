import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src="https://pbs.twimg.com/profile_images/1314165969791614977/S_ntW8X4_400x400.jpg"
				alt=""
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
			/>

			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">Developpeur Web</h4>
				<h5 className="text-3xl text-gray-400">Open Classrooms</h5>
				<p className="font-bold text-2xl mt-1">valide with 7 projects</p>

				<div className="flex space-x-2 my-2">
					<img
						className="h-10 w-10 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
						alt=""
					/>
				</div>
				<p className="uppercase py-5 ">Started work: - Ended :</p>

				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>Summary point</li>
					<li>Summary point</li>
					<li>Summary point</li>
					<li>Summary point</li>
					<li>Summary point</li>
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
