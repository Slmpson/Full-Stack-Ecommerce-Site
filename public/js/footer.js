const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="../images/logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="" class="footer-link">t-shirts</a></li>
                <li><a href="" class="footer-link">sweatshirts</a></li>
                <li><a href="" class="footer-link">shirts</a></li>
                <li><a href="" class="footer-link">jeans</a></li>
                <li><a href="" class="footer-link">trousers</a></li>
                <li><a href="" class="footer-link">shoes</a></li>
                <li><a href="" class="footer-link">casual</a></li>
                <li><a href="" class="footer-link">formals</a></li>
                <li><a href="" class="footer-link">sport</a></li>
                <li><a href="" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="" class="footer-link">t-shirts</a></li>
                <li><a href="" class="footer-link">sweatshirts</a></li>
                <li><a href="" class="footer-link">shirts</a></li>
                <li><a href="" class="footer-link">jeans</a></li>
                <li><a href="" class="footer-link">trousers</a></li>
                <li><a href="" class="footer-link">shoes</a></li>
                <li><a href="" class="footer-link">casual</a></li>
                <li><a href="" class="footer-link">formals</a></li>
                <li><a href="" class="footer-link">sport</a></li>
                <li><a href="" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, delectus tempore. Ipsa culpa officiis delectus provident in labore! Laudantium, omnis!</p>
    <p class="info">support emails - help@clothing.com, support@clothing.com</p>
    <p class="info">telephone - 01234 567890</p>
    <div class="footer-social-container">
        <div>
            <a href="" class="social-link">Terms & Services</a>
            <a href="" class="social-link">Privacy Page</a>
        </div>
        <div>
            <a href="" class="social-link">Instagram</a>
            <a href="" class="social-link">Facebook</a>
            <a href="" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>

    `
}

createFooter();