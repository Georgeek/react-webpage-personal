import React from 'react';

function About() {
	return(
		<div>
			<div className="mdl-grid">
				<div className="mdl-cell--12-col column-spacer"></div>
			</div>
			<div className="mdl-grid">
				<div className="mdl-cell--7-col">
					<h1>About me</h1>
					<h3>Front-end разработчик из Иркутска, Россия</h3>
					<p>
						Меня зовут Егор Мадьяров и мне 28 лет. Люблю Бусю, Пече и программировать! Очень люблю кататься на велосипеде :)
					</p>
				</div>
				<div className="mdl-cell--1-col"></div>
				<div className="mdl-cell--4-col">
					<div className="photo-avatar"> </div>
				</div>
			</div>
		</div>
	);
}

export default About;
