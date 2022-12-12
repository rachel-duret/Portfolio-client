import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About Me
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{ once: true }}
				src="https://pbs.twimg.com/profile_images/1314165969791614977/S_ntW8X4_400x400.jpg"
				className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a <span className="uppercase"> little</span> background about
					me
				</h4>
				<p classname="text-base">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
					cupiditate expedita asperiores vel amet dolorem natus, ea
					necessitatibus deleniti labore quis autem officia itaque aliquid
					possimus pariatur, dicta quaerat minus quae nisi cum perspiciatis
					quisquam. Voluptatum, ex alias. Praesentium perspiciatis sed molestiae
					libero, illum doloribus possimus eaque soluta? Explicabo temporibus
					reprehenderit numquam necessitatibus quam! Exercitationem mollitia,
					possimus, eveniet rerum fugit ducimus illum amet ipsum doloremque
					quidem, perspiciatis culpa odio quam fuga. Deserunt quam, quod fuga
					aperiam nulla illo consequatur recusandae delectus culpa dolores
					dolorum ratione earum hic voluptatum a excepturi eum distinctio odio
					dignissimos iste, architecto ipsa! Animi recusandae vitae a culpa,
					minus fugit corrupti sint consectetur aperiam esse quidem accusantium
					obcaecati, nam, commodi dolor facilis itaque ratione possimus. Vero,
					eveniet eius laborum sit voluptatibus nemo accusamus unde, quam
					quibusdam iusto nesciunt officia culpa provident velit veniam illum
					omnis alias porro sunt architecto aperiam quasi fugiat quaerat.
					Necessitatibus cupiditate quasi adipisci, eveniet recusandae explicabo
					quidem mollitia incidunt tempore, commodi itaque atque, culpa sed!
				</p>
			</div>
		</motion.div>
	);
}

export default About;
