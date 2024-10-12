import Accordion from '@mui/material/Accordion';
import AboutAccordionTitle from '../../elements/About/AboutAccordionTitle';
import AboutAccordionDetails from '../../elements/About/AboutAccordionDetails';

const AboutAccordion = () => {
	return (
		<div>
			<Accordion sx={{ border: 'none', boxShadow: 'none' }}>
				<AboutAccordionTitle title={'what is game development'} />
				<AboutAccordionDetails
					text={
						"Game development is an umbrella term that encompasses the design, development, and release of a game. As a game developer, you may be involved in concept generation, artistic design, building, or testing games. You could be a programmer, a sound designer, an artist, and more. You might be coding the game's engine, using your artistic skills to create a character, or building level layouts for the players, but it's all for the same thing: making a fun game for the player. Whether you're one person making a game on your own or part of an international company, it takes a great deal of work to create a game."
					}
				/>
			</Accordion>

			<Accordion sx={{ border: 'none', boxShadow: 'none' }}>
				<AboutAccordionTitle
					title={'what skills do i need to be agame developer'}
				/>
				<AboutAccordionDetails
					text={
						"Game development is an umbrella term that encompasses the design, development, and release of a game. As a game developer, you may be involved in concept generation, artistic design, building, or testing games. You could be a programmer, a sound designer, an artist, and more. You might be coding the game's engine, using your artistic skills to create a character, or building level layouts for the players, but it's all for the same thing: making a fun game for the player. Whether you're one person making a game on your own or part of an international company, it takes a great deal of work to create a game."
					}
				/>
			</Accordion>

			<Accordion sx={{ border: 'none', boxShadow: 'none' }}>
				<AboutAccordionTitle
					title={
						'who is the best suitedfor acarrer in game development'
					}
				/>
				<AboutAccordionDetails
					text={
						"Game development is an umbrella term that encompasses the design, development, and release of a game. As a game developer, you may be involved in concept generation, artistic design, building, or testing games. You could be a programmer, a sound designer, an artist, and more. You might be coding the game's engine, using your artistic skills to create a character, or building level layouts for the players, but it's all for the same thing: making a fun game for the player. Whether you're one person making a game on your own or part of an international company, it takes a great deal of work to create a game."
					}
				/>
			</Accordion>
		</div>
	);
};
export default AboutAccordion;
