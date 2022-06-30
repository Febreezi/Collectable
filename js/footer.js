function createFooter() {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
    <img src="/public/img/collection.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Sneakers</li>
            <li><a href="#" class="footer-link">Air Jordan 1</a></li>
            <li><a href="#" class="footer-link">Air Jordan 3</a></li>
            <li><a href="#" class="footer-link">Air Jordan 4</a></li>
            <li><a href="#" class="footer-link">Nike Dunks</a></li>
            <li><a href="#" class="footer-link">NikeSB Dunks</a></li>
            <li><a href="#" class="footer-link">Yeezy 350</a></li>
            <li><a href="#" class="footer-link">Yeezy 700</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Action Figures</li>
            <li><a href="#" class="footer-link">Attack On Titan</a></li>
            <li><a href="#" class="footer-link">Demon Slayer</a></li>
            <li><a href="#" class="footer-link">Jujutsu Kaisen</a></li>
            <li><a href="#" class="footer-link">Marvel</a></li>
            <li><a href="#" class="footer-link">My Hero Academia</a></li>
            <li><a href="#" class="footer-link">Naruto</a></li>
            <li><a href="#" class="footer-link">One Piece</a></li>
        </ul>
        <ul class="category">                                                   
            <li class="category-title">Funko Pops</li>
            <li><a href="#" class="footer-link">Animated Shows</a></li>
            <li><a href="#" class="footer-link">Anime</a></li>
            <li><a href="#" class="footer-link">Movies</a></li>
            <li><a href="#" class="footer-link">Game Characters</a></li>
            <li><a href="#" class="footer-link">Shows</a></li>
            <li><a href="#" class="footer-link">Naruto  </a></li>
            <li><a href="#" class="footer-link">One Piece</a></li>
        </ul>
    </div>   
    </div>
    <p class="footer-title">about collectable</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae a dolor nobis magni velit deserunt iusto, temporibus illo aliquid autem, et totam praesentium laboriosam ea officia commodi architecto deleniti ex doloremque repellat quasi perspiciatis eius impedit dolore. Culpa excepturi doloremque laborum ab tempore voluptate cupiditate earum neque, quam voluptatem illo ducimus doloribus deleniti impedit fuga, quibusdam quis voluptatum suscipit molestias. Voluptatem minus libero perferendis veniam distinctio pariatur laboriosam odio quidem? Eos error incidunt expedita perferendis, ea optio nam! Nulla libero hic repudiandae odit eveniet commodi ducimus nihil corporis eaque accusantium cumque veritatis nesciunt, suscipit ea magnam quas porro error iure!</p>
    <p class="info">support email - help@collectable.com</p>
    <p class="info">telephone - 1(555)-555-555</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">tiktok</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Collectable, The Best Marketplace For Original Collectables</p>
    `;
}

createFooter();