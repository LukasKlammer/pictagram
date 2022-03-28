

// render the dynamic content of the site, calls the single render functions
function render() {
    loadFromLocalStorage();
    renderStories();
    renderPosts(posts);
    renderSuggestedUsers();
}


// renders the stories-slider
function renderStories() {
    let storyContainer = document.getElementById('stories');
    storyContainer.innerHTML = '';

    for (let i = 0; i < stories.length; i++) {
        const story = stories[i];
        storyContainer.innerHTML += templateStory(story);
    }
}


// renders the feed with the posts, we give to this function the array with the posts, that are to render (for example the filtered array or the full array)
function renderPosts(postsToRender) {
    let postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    for (let i = 0; i < postsToRender.length; i++) {
        const postToRender = postsToRender[i];
        postsContainer.innerHTML += templatePost(postToRender, i);
        renderComments(i); // renders all the comments of the single post
    }
}


/*** renders the comments of the posts */
function renderComments(i) {
    let commentContainer = document.getElementById('comments-container-' + i);
    commentContainer.innerHTML = '';
    let post = posts[i]; // doppelter Code, könnte es vielleicht von oben irgendwie übergeben werden?

    for (let j = 0; j < post.comments.length; j++) {
        const singleComment = post.comments[j];
        commentContainer.innerHTML += templateComment(singleComment);
    }
}


/*** function is called, when you let a key in the input field in the header. Then renders the new array */
function renderSearchedPosts() {
    let foundPosts = getSearchedPosts();
    renderPosts(foundPosts);
}


/** function gets the value of the header-input field and looks in all posts for the input text - gives back a new array with the found posts*/
function getSearchedPosts() {
    let searchInput = document.getElementById('search-post-text').value;
    let foundPosts = posts.filter(post => post.nickname.includes(searchInput) || post.location.includes(searchInput));
    return foundPosts;
}


// adds a comment and the author to the array and deletes the input field
function addComment(i) {
    let mycomment = document.getElementById('comment-post-' + i)

    if (mycomment.value != '') {
        pushCommentToArray(mycomment, i);
        saveToLocalStorage();
        renderComments(i); // renders only the comment-container, where the comment was added
    } else {
        alert('Bitte Kommentar eingeben.');
    }
}


// push the comments to array
function pushCommentToArray(mycomment, i) {
    let dataToPush = {
        'author_of_comment': 'nice nickname',
        'comment': mycomment.value,
    };
    posts[i].comments.push(dataToPush);
    mycomment.value = '';
}


// renders the suggestions on the right side
function renderSuggestedUsers() {
    let suggestedUsersContainer = document.getElementById('suggested-users');
    suggestedUsersContainer.innerHTML = '';

    for (let i = 0; i < suggestedUsers.length; i++) {
        const suggestedUser = suggestedUsers[i];
        suggestedUsersContainer.innerHTML += templateSuggestedUser(suggestedUser);
    }
}


/** */
function like(i) {
    document.getElementById('not-like-image-' + i).classList.add('d-none');
    document.getElementById('like-image-' + i).classList.remove('d-none');
}


/** */
function dislike(i) {
    document.getElementById('like-image-' + i).classList.add('d-none');
    document.getElementById('not-like-image-' + i).classList.remove('d-none');
}


// info for user, that this function isn't already implemented
function notImplemented() {
    alert('work in progress - Funktion wird zu späterem Zeitpunkt freigeschaltet');
}


function saveToLocalStorage() {
    let postsAsText = JSON.stringify(posts); // convert array to text
    localStorage.setItem('posts', postsAsText); // save text to localStorage - KEY "posts"
}


function loadFromLocalStorage() {
    let postsAsText = localStorage.getItem('posts'); // pull text from localStorage, KEY "posts"

    if (postsAsText) {
        posts = JSON.parse(postsAsText); // text to array and give to the variable posts
    }
}