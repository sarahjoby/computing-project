console.log("SCRIPT IS WORKING");

const clickBtn = document.getElementById("clickBtn");

if (clickBtn){
    clickBtn.addEventListener("click",()=>{
        window.location.href = "secondPage.html";
    });
}

const outfit = document.getElementById("outfit");
console.log(outfit);

const pinterestURL1 = 'https://i.pinimg.com/736x/0b/8b/dc/0b8bdc9dc3daa2937d78b03aa4e1cf52.jpg'
const pinterestURL2 = 'https://i.pinimg.com/736x/21/e5/68/21e568a9fb561684f28a8dbc9145d3db.jpg'
const pinterestURL3 = 'https://i.pinimg.com/736x/4d/6e/86/4d6e86bc5740ab500492d07304478350.jpg'
const pinterestURL4 = 'https://i.pinimg.com/736x/af/89/90/af8990edf897294fecc5cdb8a05d2087.jpg'
const pinterestURL5 = 'https://i.pinimg.com/736x/ff/09/cd/ff09cd9101db533be863c5b3bffd2b58.jpg'
const pinterestURL6 = 'https://i.pinimg.com/736x/b6/b1/2e/b6b12ea2f9e353062177ae2ce9601a08.jpg'
const pinterestURL7 = 'https://i.pinimg.com/1200x/4a/80/53/4a805320301060f361141d351aa34930.jpg'
const pinterestURL8 = 'https://i.pinimg.com/1200x/8c/ed/d1/8cedd1de29178e9a29d5a9ee74e4c84b.jpg'
const pinterestURL9 = 'https://i.pinimg.com/736x/66/da/53/66da537b3d3fb7268148127678053878.jpg'
const pinterestURL10 = 'https://i.pinimg.com/736x/be/bd/da/bebdda3cac44defe68a0bcd1a114e4de.jpg'
const pinterestURL11 = 'https://i.pinimg.com/736x/e4/b0/1a/e4b01a4bab58196467114e53f45af7bd.jpg'
const pinterestURL12 = 'https://i.pinimg.com/736x/2f/ce/25/2fce25f8a80b2e62a678c9f44a9c63a4.jpg'
const pinterestURL13 = 'https://i.pinimg.com/736x/86/25/57/8625575e435393b7d57fca0b5831486e.jpg'
const pinterestURL14 = 'https://i.pinimg.com/736x/1d/b1/6f/1db16fca0cc5bb97bc5b441f5c726c50.jpg'
const pinterestURL15 = 'https://i.pinimg.com/736x/6d/99/a6/6d99a6c39af9d32e5096179ae3039d56.jpg'
const pinterestURLs = [pinterestURL1, pinterestURL2, pinterestURL3, pinterestURL4, pinterestURL5, pinterestURL6, pinterestURL7, pinterestURL8, pinterestURL9, pinterestURL10, pinterestURL11, pinterestURL12, pinterestURL13, pinterestURL14, pinterestURL15];

function getRandomImage() {
    const randomIndex= Math.floor(Math.random() * pinterestURLs.length
);

return pinterestURLs[randomIndex];
}

if (outfit) {
    const img = document.createElement("img");
    img.src = getRandomImage();
    img.style.width = "200px";
    img.style.height = "220px";
    outfit.appendChild(img);
}


const makeup= document.getElementById("makeup");
console.log(makeup);

const makeupURL1 = 'https://i.pinimg.com/736x/4b/be/da/4bbedaf953b6c8367d0fcd6a5767b23b.jpg'
const makeupURL2 = 'https://i.pinimg.com/736x/cb/39/4a/cb394a0c0838870dab7949beede817b7.jpg'
const makeupURL3 = 'https://i.pinimg.com/736x/bf/bf/f7/bfbff72077078e40c1d1a03cd8d2f1a1.jpg'
const makeupURL4 = 'https://i.pinimg.com/736x/c7/07/90/c707906a2a934d7f761ffb431b503d34.jpg'
const makeupURL5 = 'https://i.pinimg.com/1200x/75/76/fc/7576fc05a98c5d2c93a6a2593b2675a7.jpg'
const makeupURL6 = 'https://i.pinimg.com/736x/04/dc/89/04dc89ce25f7b7e4e1905343513e5888.jpg'
const makeupURL7 = 'https://i.pinimg.com/736x/4e/7d/bb/4e7dbb53818ed66d017d0d40799bb6b5.jpg'
const makeupURL8 = 'https://i.pinimg.com/1200x/ae/37/bd/ae37bd22c48650747a3977d243cf48b5.jpg'
const makeupURL9 = 'https://i.pinimg.com/736x/3f/11/65/3f11653339b4e75d6d6de5baa9aec6e1.jpg'
const makeupURL10 = 'https://i.pinimg.com/1200x/ef/3d/eb/ef3debd75313b062a7cdb5a6bc7431ef.jpg'
const makeupURL11 = 'https://i.pinimg.com/1200x/03/84/85/038485007285a4c65bf0404ab3bb4790.jpg'
const makeupURL12 = 'https://i.pinimg.com/1200x/9d/a9/87/9da987fb828fd412d3d785b99c678121.jpg'
const makeupURL13 = 'https://i.pinimg.com/1200x/68/ca/70/68ca7047cf7aeb663cd90c2acf3ccb44.jpg'
const makeupURL14 = 'https://i.pinimg.com/736x/28/b6/58/28b6584212eb6467c4c414858351ad5a.jpg'
const makeupURL15 = 'https://i.pinimg.com/736x/05/a6/34/05a634d43c6d8a8fc56bd14a88d29516.jpg'

const makeupURLs = [makeupURL1, makeupURL2, makeupURL3, makeupURL4, makeupURL5, makeupURL6, makeupURL7, makeupURL8, makeupURL9, makeupURL10, makeupURL11, makeupURL12, makeupURL13, makeupURL14, makeupURL15];

function getRandommakeup() {
    const randomIndex= Math.floor(Math.random() * makeupURLs.length
);

return makeupURLs[randomIndex];
}

if (makeup) {
    const img = document.createElement("img");
    img.src = getRandommakeup();

    img.style.width = "200px";
    img.style.height = "220px";

    makeup.appendChild(img);
}

const colour= document.getElementById("colour");
console.log(colour);

const colourURL1 = 'https://i.pinimg.com/1200x/f4/09/17/f409171cb1c681d76f0521ddbb2529b7.jpg'
const colourURL2 = 'https://i.pinimg.com/736x/5f/b4/22/5fb42213846e3ee0425248a9143bd413.jpg'
const colourURL3 = 'https://i.pinimg.com/736x/83/ad/98/83ad989e3e670cdef7597e6a6613ab1e.jpg'
const colourURL4 = 'https://i.pinimg.com/1200x/f9/4b/ca/f94bca9f27bc76fba7409e7c6802efe9.jpg'
const colourURL5 = 'https://i.pinimg.com/736x/82/48/9a/82489a0b7fc847e8ebe5c3f89f46d66e.jpg'
const colourURL6 = 'https://i.pinimg.com/736x/8f/bc/65/8fbc651a66a4d33644a6643fc0dfa002.jpg'
const colourURL7 = 'https://i.pinimg.com/736x/c7/34/19/c734197c6f7dec0d93d4ff446cd30f3f.jpg'
const colourURL8 = 'https://i.pinimg.com/736x/2e/5d/40/2e5d409a5c5a7794b66556cae3058369.jpg'
const colourURL9 = 'https://i.pinimg.com/736x/3e/12/35/3e12359a409204820436dc2549fa933a.jpg'
const colourURL10 = 'https://i.pinimg.com/736x/4e/9f/c2/4e9fc2c2e87109d60b6044c12bc9531e.jpg'
const colourURL11 = 'https://i.pinimg.com/736x/cb/55/63/cb5563ccacb22ffa99148dd1f969a334.jpg'
const colourURL12 = 'https://i.pinimg.com/736x/0b/f7/e3/0bf7e3342210396a582abc555cb431b9.jpg'
const colourURL13 = 'https://i.pinimg.com/736x/a0/2e/20/a02e2068d6cf365299bdb5f29926e6d7.jpg'
const colourURL14 = 'https://i.pinimg.com/736x/3e/07/88/3e0788c112a8ef6e4968c3afa75b9901.jpg'
const colourURL15 = 'https://i.pinimg.com/736x/87/86/d6/8786d61cf769a6bd5306be2a99354357.jpg'

const colourURLs = [colourURL1, colourURL2, colourURL3, colourURL4, colourURL5, colourURL6, colourURL7, colourURL8, colourURL9, colourURL10, colourURL11, colourURL12, colourURL13, colourURL14, colourURL15];

function getRandomcolour() {
    const randomIndex= Math.floor(Math.random() * colourURLs.length
);

return colourURLs[randomIndex];
}

if (colour) {
    const img = document.createElement("img");
    img.src = getRandomcolour();

    img.style.width = "200px";
    img.style.height = "260px";

    colour.appendChild(img);
}

const song= document.getElementById("song");
console.log(song);

const songURL1 = 'https://i.pinimg.com/736x/56/aa/38/56aa387d6b155ef84ecf3815c5bd6f02.jpg'
const songURL2 = 'https://i.pinimg.com/736x/a7/f3/cd/a7f3cd4cd963ce080f4bf18383050ef9.jpg'
const songURL3 = 'https://i.pinimg.com/736x/83/3c/55/833c55c18bc4bc3142695a2e43cfe57a.jpg'
const songURL4 = 'https://i.pinimg.com/1200x/c5/97/62/c597623f949d57b9edf41e85a1e80ac9.jpg'
const songURL5 = 'https://i.pinimg.com/736x/78/e7/d9/78e7d9e4d17ec0f492677003a02655b0.jpg'
const songURL6 = 'https://i.pinimg.com/736x/c0/68/42/c06842190ba49f86ec1784950ed14b2b.jpg'
const songURL7 = 'https://i.pinimg.com/736x/de/9f/06/de9f06390dc90ceb8e2b46ffb9c7f0b1.jpg'
const songURL8 = 'https://i.pinimg.com/736x/25/c4/3d/25c43d264f9d48fe95dec85454b92d2f.jpg'
const songURL9 = 'https://i.pinimg.com/736x/23/a7/04/23a704a2590ee89d3c71f67b1418e15a.jpg'
const songURL10 = 'https://i.pinimg.com/736x/59/cb/bb/59cbbbc31a7ee159375c665b3c50afb8.jpg'
const songURL11 = 'https://i.pinimg.com/736x/03/b4/c3/03b4c385044ed9842712f2e130d2f90c.jpg'
const songURL12 = 'https://i.pinimg.com/736x/c7/6a/42/c76a42c12f1c7d85c6230c389846f65e.jpg'
const songURL13 = 'https://i.pinimg.com/736x/9e/64/90/9e649073e4fd6803bb44f17c5285fa31.jpg'
const songURL14 = 'https://i.pinimg.com/736x/6c/9f/2e/6c9f2e5a6e659a210efdf4187ed78527.jpg'
const songURL15 = 'https://i.pinimg.com/736x/19/72/43/1972433442bf78157db7db6c5e8216c0.jpg'

const songURLs = [songURL1, songURL2, songURL3, songURL4, songURL5, songURL6, songURL7, songURL8, songURL9, songURL10, songURL11, songURL12, songURL13, songURL14, songURL15];

function getRandomsong() {
    const randomIndex= Math.floor(Math.random() * songURLs.length
);

return songURLs[randomIndex];
}

if (song) {
    const img = document.createElement("img");
    img.src = getRandomsong();

    img.style.width = "200px";
    img.style.height = "260px";

    song.appendChild(img);
}

const movie= document.getElementById("movie");
console.log(movie);

const movieURL1 = 'https://i.pinimg.com/736x/4a/dd/68/4add68b472f49fa0e7a1aed7c0768336.jpg'
const movieURL2 = 'https://i.pinimg.com/1200x/b0/9c/c9/b09cc9d5b7c0ceadf417c4cecd7e1915.jpg'
const movieURL3 = 'https://i.pinimg.com/1200x/c8/7f/bc/c87fbcac83094f16e7f839d07815d239.jpg'
const movieURL4 = 'https://i.pinimg.com/736x/55/76/2a/55762afd25bee9ce447e47b3abd6df39.jpg'
const movieURL5 = 'https://i.pinimg.com/736x/75/cc/0f/75cc0f25af49794e97132b64f769944b.jpg'
const movieURL6 = 'https://i.pinimg.com/736x/75/39/ba/7539ba9dd8f105ca3830bddb9d2d2939.jpg'
const movieURL7 = 'https://i.pinimg.com/736x/60/75/2f/60752f7f2c2f667ebf66ffbba3224c3b.jpg'
const movieURL8 = 'https://i.pinimg.com/1200x/df/05/3f/df053fee7de3cbd5a64594d40adec292.jpg'
const movieURL9 = 'https://i.pinimg.com/736x/1e/3d/b8/1e3db8df2e87cd50a379c9772d691fa5.jpg'
const movieURL10 = 'https://i.pinimg.com/1200x/c8/9b/8b/c89b8b6434629a53218f4fc84f0ae833.jpg'
const movieURL11 = 'https://i.pinimg.com/736x/6c/a5/d8/6ca5d87c0e6094e87f3ab5c573bd6e59.jpg'
const movieURL12 = 'https://i.pinimg.com/736x/1f/d2/59/1fd25920934652da83ab149594606935.jpg'
const movieURL13 = 'https://i.pinimg.com/736x/6e/21/9e/6e219ec3eab506ee885c1f15718b2529.jpg'
const movieURL14 = 'https://i.pinimg.com/1200x/5d/e9/fb/5de9fb82e60d531c26ed7a6536de63a2.jpg'
const movieURL15 = 'https://i.pinimg.com/736x/08/5c/f3/085cf3c820572c1d983996d5d76004e2.jpg'

const movieURLs = [movieURL1, movieURL2, movieURL3, movieURL4, movieURL5, movieURL6, movieURL7, movieURL8, movieURL9, movieURL10, movieURL11, movieURL12, movieURL13, movieURL14, movieURL15];

function getRandommovie() {
    const randomIndex= Math.floor(Math.random() * movieURLs.length
);

return movieURLs[randomIndex];
}

if (movie) {
    const img = document.createElement("img");
    img.src = getRandommovie();

    img.style.width = "200px";
    img.style.height = "260px";

    movie.appendChild(img);
}

const activity= document.getElementById("activity");
console.log(activity);

const activityURL1 = 'https://i.pinimg.com/1200x/65/65/d3/6565d37382eec75b53293db590555802.jpg'
const activityURL2 = 'https://i.pinimg.com/736x/d2/5a/4e/d25a4ea3218958103fc5a75ef27c425f.jpg'
const activityURL3 = 'https://i.pinimg.com/736x/51/ec/8f/51ec8fe64773434a94ec09853fbbd8b5.jpg'
const activityURL4 = 'https://i.pinimg.com/736x/0d/00/cf/0d00cf23079cee1e4d17c0269e12d4d8.jpg'
const activityURL5 = 'https://i.pinimg.com/1200x/eb/81/61/eb8161bb957eae784d9de385a22c3ba1.jpg'
const activityURL6 = 'https://i.pinimg.com/736x/cf/a4/b0/cfa4b0aebe12978f288c70afe3a15ce7.jpg'
const activityURL7 = 'https://i.pinimg.com/736x/40/4e/d6/404ed60b809d8cd9db0be72c9eaabe6c.jpg'
const activityURL8 = 'https://i.pinimg.com/736x/5b/bd/20/5bbd20db37d4f7fc77087c6abae054b8.jpg'
const activityURL9 = 'https://i.pinimg.com/736x/0e/94/18/0e94181421445afd0e23771d752000e5.jpg'
const activityURL10 = 'https://i.pinimg.com/736x/4e/cf/42/4ecf42ca5dc354d15898b837a94ca331.jpg'
const activityURL11 = 'https://i.pinimg.com/1200x/88/c9/f4/88c9f4a61187e69435c34fa593b91738.jpg'
const activityURL12 = 'https://i.pinimg.com/736x/32/a5/82/32a58250b749e9239c7c7dec9a26a658.jpg'
const activityURL13 = 'https://i.pinimg.com/736x/08/fe/51/08fe512efd0024d99c36fad9b753d9c8.jpg'
const activityURL14 = 'https://i.pinimg.com/1200x/79/4b/17/794b179edb374a1579c7fd623f150d9e.jpg'
const activityURL15 = 'https://i.pinimg.com/1200x/ad/8d/21/ad8d21619107d2864ce2ce90fedcf086.jpg'

const activityURLs = [activityURL1, activityURL2, activityURL3, activityURL4, activityURL5, activityURL6, activityURL7, activityURL8, activityURL9, activityURL10, activityURL11, activityURL12, activityURL13, activityURL14, activityURL15];

function getRandomactivity() {
    const randomIndex= Math.floor(Math.random() * activityURLs.length
);

return activityURLs[randomIndex];
}

if (activity) {
    const img = document.createElement("img");
    img.src = getRandomactivity();

    img.style.width = "200px";
    img.style.height = "220px";

    activity.appendChild(img);
}


 if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker Registered"));
}