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
                    <a>
                        <img src="/public/img/user.png" id="user-img" alt="" width="30" height="30">
                        <div class="login-logout-popup hide">
                            <p class="account-info">Logged in as, name</p>
                            <button class="btn" id="user-btn">Log out</button>
                        </div>
                    </a>
                    <a href="#"><img src="/public/img/shopping-cart-logo.png" alt="" width="50" height="40"></a>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="/public/index.html" class="link">home</a></li>
                <li class="link-item"><a href="/404.html" class="link">cards</a></li>
                <li class="link-item"><a href="/404.html" class="link">hats</a></li>
                <li class="link-item"><a href="/public/product.html" class="link">sneakers</a></li>
                <li class="link-item"><a href="/404.html" class="link">action figures</a></li>
                <li class="link-item"><a href="/404.html" class="link">stickers</a></li>
                <li class="link-item"><a href="/404.html" class="link">backpacks</a></li>
            </ul>
`;
    
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null) {
        //means user is logged in
        popuptext.innerHTML = `logged in as, ${user.name}`
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        }) 
    }
}