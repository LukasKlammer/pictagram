
// writes the html part of the stories-slider
function templateStory(story) {
    return /*html*/ `
        <div class="story">
            <div class="story-circle">
                <img src="${story.image}" alt="">
        </div>
            <span>${story.nickname}</span>
        </div>
    `;
}


// writes the html part of the posts, exceptet the comments
function templatePost(post, i) {
    return /*html*/ `
        <div class="post">

            <div class="post-header">
                <div class="post-header-circle">
                    <img class="post-profile-image" src="${post.profile_image}" alt="">
                </div>
                 <span class="nickname">${post.nickname}</span>
            </div>
            <img class="post-image" src="${post.post_image}" alt="">
            <div class="reactions">
                <div class="reactions-left">
                    <img onclick="like(${i})" src="img/icons/round_favorite_border_black_24dp.png" alt="" class="" id="not-like-image-${i}">
                    <img onclick="dislike(${i})" src="img/icons/hearts-24.png" alt="" class="d-none fadeIn" id="like-image-${i}">
                    <img onclick="notImplemented()" src="img/icons/round_chat_bubble_outline_black_24dp.png" alt="">
                    <img onclick="notImplemented()" src="img/icons/send_24_30deg.png" alt="">
                </div>
                <div class="reactions-right">
                    <img onclick="notImplemented()" src="img/icons/baseline_bookmark_border_black_24dp.png" alt="">
                </div>
            </div>
            <div class="description-container">
                <span class="nickname">${post.nickname}:</span>
                <span>${post.description}</span>
            </div>

            <div class="comments-container" id="comments-container-${i}">
                <!-- here will be rendered all the comments from this post -->
                <!-- the function that do this is in the Javacript script.js -->
                </div>

            <div class="commentate-container">
                <img src="img/icons/baseline_sentiment_satisfied_alt_black_24dp.png" alt="">
                <textarea class="input-comment" id="comment-post-${i}" placeholder="Kommentieren ..."
                    rows="2"></textarea>
                <button class="submit-button" onclick="addComment(${i})">Posten</button>
            </div>
        </div>
`;
}


function templateComment(singleComment) {
    return /*html*/ `
        <div>
            <span class="comment-author">${singleComment.author_of_comment}:</span>
            <span>${singleComment.comment}</span>
        </div>
`;
}


function templateSuggestedUser(suggestedUser) {
    return /*html*/ `
        <div class="suggested-user">
            <img src="${suggestedUser.image}" alt="">
            <div class="suggestions-designation">
                <span class="nickname">${suggestedUser.nickname}</span>
                <span class="account-additional-infos">Vorschläge für dich</span>
            </div>
            <button class="submit-button" onclick="notImplemented()">Folgen</button>
        </div>
`;
}
