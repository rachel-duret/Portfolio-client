import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './../components/Header';
import Profile from './../components/Profile';
import Skill from '../components/Skills';
import Experience from '../components/Experiences';
import About from './../components/About';
import Project from '../components/Projects';
import Contact from './../components/Contact';
import Experiences from './../components/Experiences';
import Skills from './../components/Skills';
import Projects from './../components/Projects';

export default function Home() {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 ">
			<Head>
				<title>Rachel's Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<section id="profile" className="snap-start">
				<Profile />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="expriences" className="snap-center">
				<Experiences />
			</section>

			<section id="skills" className="snap-start">
				<Skills />
			</section>

			<section id="projects" className="snap-start">
				<Projects />
			</section>

			<section id="contact" className="snap-start">
				<Contact />
			</section>
		</div>
	);
}
