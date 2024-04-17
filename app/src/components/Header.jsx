const Header = () => {
	return (
		<nav class='navbar navbar-expand-md bg-transparent'>
			<div class='container-fluid'>
				<a class='navbar-brand' href='#home'>
					Caleb Morse
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div class='navbar-nav'>
						<a class='nav-link active' aria-current='page' href='#home'>
							Home
						</a>
						<a class='nav-link' href='#about'>
							About
						</a>
						<a class='nav-link' href='#projects'>
							Projects
						</a>
						<a class='nav-link' href='#skills'>
							Skills
						</a>
						<a class='nav-link' href='#recommendations'>
							Recommendations
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
