import React from 'react';

import NavLink from './components/NavLink';

class App extends React.Component {
	render() {
		return (
			<div className="mdl-layout mdl-layout--fixed-header">
				<header className="mdl-layout__header mdl-layout__header--transparent">
					<div className="mdl-layout__header-row">
						<span className="mdl-layout-title">Some Title!</span>
						<div className="mdl-layout-spacer"></div>
						<nav className="mdl-navigation">
							<NavLink to="/" onlyActiveOnIndex={true} className="mdl-navigation__link">Главная</NavLink>
							<NavLink to="portfolio" className="mdl-navigation__link">Портфолио</NavLink>
							<NavLink to="about" className="mdl-navigation__link">Обо мне</NavLink>
						</nav>
					</div>
				</header>
				
				<main className="mdl-layout__content">
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default App;
