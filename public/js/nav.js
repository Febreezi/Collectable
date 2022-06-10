const createNav = () => {
    let nav = document.querySelector('.navbar');
        
nav.innerHTML = `
<div class="nav">
                <img src="/public/img/collection.png" class="brand-logo" alt="" height="10">
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product">
                        <button class="search-btn">search</button>
                    </div>
                    <a href="#"><img src="/public/img/user.png" alt="" width="30" height="30"></a>
                    <a href="#"><img src="/public/img/shopping-cart-logo.png" alt="" width="50" height="40"></a>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="#" class="link">home</a></li>
                <li class="link-item"><a href="#" class="link">cards</a></li>
                <li class="link-item"><a href="#" class="link">hats</a></li>
                <li class="link-item"><a href="#" class="link">sneakers</a></li>
                <li class="link-item"><a href="#" class="link">action figures</a></li>
                <li class="link-item"><a href="#" class="link">stickers</a></li>
                <li class="link-item"><a href="#" class="link">backpacks</a></li>
            </ul>
`;
    
}

createNav();