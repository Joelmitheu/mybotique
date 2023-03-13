const createNav = () =>{
	let nav = document.querySelector(".navbar");
	nav.innerHTML = `
		<div class="nav">
			<img src="{% static 'img/logo.jpg' %}" alt="logo" class="brand-logo" >
			<div class="nav-items">
				<div class="search">
					<input type="text" name="" class="search-box" placeholder="search brand, product">
					<button class="search-btn">search</button>
				</div>
				<a href="#"><img src="img/user.png" alt="user"></a>
				<a href="#"><img src="img/cart.png" alt="cart"></a>
			</div>
		</div>
		<ul class="links-container">
			<li class="link-item"><a href="#" class="link">Home</a></li>
			<li class="link-item"><a href="#" class="link">Water ATM</li>
			<li class="link-item"><a href="#" class="link">Oil ATM</li>
			<li class="link-item"><a href="#" class="link">Milk ATM</li>
		</ul>
	`;
}
createNav();