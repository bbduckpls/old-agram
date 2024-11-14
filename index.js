const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (let i = 0; i < posts.length; i++) {

    let fullPost = document.getElementById("full-post")
    fullPost.innerHTML += `
        <div class="post-header container">
            <img class="avatar" src="${posts[i].avatar}" alt="">
            <div class="post-header-details">
                <h2 class="bold">${posts[i].name}</h2>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>
        <img class="post-img image-${i}" src="${posts[i].post}" alt="">
        <div class="small-container">
            <div class="icons">
                <img class="icon" src="images/icon-comment.png" alt="message bubble outline icon.">
                <img class="heart icon heart-${i}" src="images/icon-heart.png" alt="heart outline icon.">
                <img class="icon" src="images/icon-dm.png" alt="paper airplane outline icon.">
            </div>
            <h3 class="bold likes like-count-${i}">${posts[i].likes} likes</h3>
            <p class="bold">${posts[i].username} <span class="post-desc">${posts[i].comment}</span></p>
        </div>
    `
}

const allPostImages = document.querySelectorAll(".post-img")
const allHeartIcons = document.querySelectorAll(".heart")

function addLikes(i) {
    const likeCount = document.querySelector(`.like-count-${i}`)
    let newLikeCount = likeCount.innerText.split(" ")[0]
    newLikeCount = (+newLikeCount) + 1
    likeCount.textContent = newLikeCount + " likes"
}

for (let i = 0; i < allPostImages.length; i++) {
    allPostImages[i].addEventListener("dblclick", function () {
        addLikes(i)
    })

    allHeartIcons[i].addEventListener("click", function () {
        addLikes(i)
    })
}