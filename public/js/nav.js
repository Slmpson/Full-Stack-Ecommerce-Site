const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="../images/logo.png" class="brand-logo" alt="logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a><i class="fas fa-user-circle"></i>
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="/cart"><i class="fas fa-shopping-cart"></i></a>
            </div>
            
        </div>
        <ul class="links-container">
                <li class="link-item"><a href="/" class="link">Home</a></li>
                <li class="link-item"><a href="" class="link">Women</a></li>
                <li class="link-item"><a href="" class="link">Men</a></li>
                <li class="link-item"><a href="" class="link">Kids</a></li>
                <li class="link-item"><a href="" class="link">Accessories</a></li>
        </ul>
    `;
}

createNav();

//nav popup

const userImageButton = document.querySelector('.fa-user-circle');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //means user is logged in
        popuptext.innerHTML = `logged in as, ${user.login}`;
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

//search box

const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`
    }
})
