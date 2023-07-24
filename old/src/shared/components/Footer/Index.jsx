import { StyledLink } from '../../styles/GlobalStyles';
import { Column, Container, Li, Ul, UlTitle } from './styles';

const Footer = () => {
	return (
		<Container>
			<Column>
				<StyledLink to='/'>
					<b>README </b>
					<span>project generator</span>
				</StyledLink>
			</Column>
			<Column>
				<span>
					Made with love by 💜
					<a
						href='https://github.com/joselatines'
						target='_blank'
						rel='noopener noreferrer'
					>
						Jose Latines
					</a>
				</span>
			</Column>
			<Column>
				<Ul>
					<UlTitle>Useful link</UlTitle>
					<Li>
						<a
							href='https://github.com/joselatines/readme-project-generator'
							target='_blank'
							rel='noopener noreferrer'
						>
							Fork this project
						</a>
					</Li>
					<Li>
						<a
							href='https://paypal.me/joselatines33?country.x=VE&locale.x=es_XC'
							target='_blank'
							rel='noopener noreferrer'
						>
							Support this project
						</a>
					</Li>
				</Ul>
			</Column>
		</Container>
	);
};

export default Footer;
