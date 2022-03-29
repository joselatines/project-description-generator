import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import showdown from 'showdown';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';

import { Btn } from '../shared/Buttons';

export const GeneratedPage = () => {
	const { state } = useLocation();
	const {
		project_title,
		description,
		installation,
		features,
		social_links,
		tools,
		languages,
		frameworks,
	} = state;

	const [template, setTemplate] = useState(``);
	const [templateHTML, setTemplateHTML] = useState(``);

	useEffect(() => {
		const socialMediaLinks = () =>
			social_links
				.map(
					(el) =>
						`<a href="${el.content}" target="_blank"><img width="20" height="20" src="https://img.shields.io/badge/${el.name}-%230077B5.svg??style=social&logo=${el.name}&logoColor=white"/></a>`
				)
				.join(' ');

		const featuresList = () => features.map((e) => `- ${e.content}`).join('\n');

		const toolsList = (type) =>
			type
				.map((el) => `<img width="30" height="30" src="${el.img}"/>`)
				.join(' ');

		const converter = new showdown.Converter();

		const md =
			`# ${project_title} 💻\n` +
			`## Description 📚\n` +
			` ${description} \n` +
			`## Installation 🛠\n` +
			` ${installation} \n` +
			`## App features 💎\n` +
			`${featuresList()} \n` +
			`## Languages 🛠 \n` +
			`${toolsList(languages)} \n` +
			`## Frameworks 🧰\n` +
			`${toolsList(frameworks)} \n` +
			`## Tools used ⚙\n` +
			`${toolsList(tools)} \n` +
			`## Lets connect! 📲\n` +
			`${socialMediaLinks()}`;

		const html = converter.makeHtml(md);
		setTemplate(md);
		setTemplateHTML(html);
	}, []);

	return (
		<Container>
			<Toaster position='bottom-right' />
			{/* 	<ReadmeContainer>{template}</ReadmeContainer> */}
			<Preview>
				{parse(templateHTML)}
				<div className='buttons'>
					<CopyToClipboard text={template}>
						<Btn
							onClick={() => toast.success('Copied')}
							className='copy-clipboard'
						>
							<i className='fa-solid fa-copy'></i>
						</Btn>
					</CopyToClipboard>
				</div>
			</Preview>
			<Link to='/generator'>
				<Btn>
					<i className='fa-solid fa-arrow-left'></i>Back to edit
				</Btn>
			</Link>
		</Container>
	);
};

const Container = styled.main`
	display: grid;
	gap: 1.5rem;
	.buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		position: absolute;
		right: 0;
		bottom: 0;
	}
`;

const Preview = styled.section`
	img {
		width: auto;
	}
	font-size: 1.3rem;
	padding: 2rem 4rem;
	position: relative;
	// Neumorphism
	border-radius: 10px;
	background: #ffffff;
	box-shadow: inset 20px 20px 60px #d9d9d9, inset -20px -20px 60px #ffffff;
`;

const ReadmeContainer = styled(Preview)`
	display: grid;
	padding: 2rem;
	font-size: 1.3rem;
	// Neomorphism
	border-radius: 10px;
	background: #faf6ff;
	box-shadow: inset 20px 20px 60px #d5d1d9, inset -20px -20px 60px #ffffff;
`;
