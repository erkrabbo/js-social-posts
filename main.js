const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const feedContainer = document.querySelector('.posts-list');

feedGenerator();

const likesNumber = document.querySelectorAll('#like-counter-1');
const likeButton = document.querySelectorAll('.like-button');
const likedPosts = [];

for (let i = 0; i < likeButton.length; i++){
    likeButton[i].addEventListener('click', likeUnlike);
    likeButton[i].setAttribute('id', i);
    likeButton[i].style.cursor = 'pointer';
}

function feedGenerator(){
    for (let i = 0; i < posts.length; i++){
        const post = document.createElement('div');
        const italianCreated = italianDate(i);
        post.classList.add('post');

        let nameFirstLetter;
        let surnameFirstLetter;
        let profPicture;
        
        if (posts[i].author['image'] != null){
            profPicture = `<img class="profile-pic" src="${posts[i].author['image']}" alt="${posts[i].author.name}">`;

        } else {
            nameFirstLetter = posts[i].author.name.split(' ')[0][0].toUpperCase();
            surnameFirstLetter = posts[i].author.name.split(' ')[1][0].toUpperCase();

            profPicture = `<span>${nameFirstLetter}${surnameFirstLetter}</span>`;
        }


        post.innerHTML = `
                        <div class="post__header">
                                <div class="post-meta">                    
                                    <div class="post-meta__icon profile-pic-default">`      
                                                + profPicture +
                                    `</div>
                                    <div class="post-meta__data">
                                        <div class="post-meta__author">${posts[i].author.name}</div>
                                        <div class="post-meta__time">${italianCreated}</div>
                                    </div>                    
                                </div>
                            </div>
                            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                            <div class="post__image">
                                <img src="${posts[i].media}" alt="">
                            </div>
                            <div class="post__footer">
                                <div class="likes js-likes">
                                    <div class="likes__cta">
                                        <a class="like-button  js-like-button" href="#" data-postid="1">
                                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                            <span class="like-button__label">Mi Piace</span>
                                        </a>
                                    </div>
                                    <div class="likes__counter">
                                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                                    </div>
                                </div> 
                            </div>
        `
        feedContainer.append(post);
    }

}


function likeUnlike(e){
    this.classList.toggle('like-button--liked');
    
    if (this.classList.contains('like-button--liked')){
        posts[this.id].likes++;

        likedPosts.push(this.id);
    } else {
        posts[this.id].likes--;

        likedPosts.splice(likedPosts.indexOf(this.id), 1);
    }
    
    likesNumber[this.id].innerHTML = `${posts[this.id].likes}`;
    e.preventDefault();
}

function italianDate(i){
    const date = posts[i].created.split('-');
    let itaVersion = [];

    for(i = date.length -1; i >= 0; i--){
        itaVersion.push(date[i]);
    }

    return itaVersion.join('-');
    
}