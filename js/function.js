// =/=/=/=/=/=/=/   like increase system /=/=/=/=/=/=/=/=/=/

// -/-/-/-/-/-/-/-/-/-/- by getElementsByClassName /-/-/-/-/-/-/-/-/-/-
function increaseLike(n) {
    const likes = document.getElementsByClassName('like');
    const like = likes[n];
    let likeIncrease = + like.innerText;
    likeIncrease++;
    like.innerText = likeIncrease;
    like.style.color = 'red';
    const likeIn = document.getElementsByClassName('liked');
    const liked = likeIn[n];
    liked.style.color = 'green';
}
// -/-/-/-/-/-/-/-/-/-/- by querySelectorAll /-/-/-/-/-/-/-/-/-/-
// function increaseLike(n) {
//     const likes = document.querySelectorAll('.like');
//     const like = likes[n];
//     let likeIncrease = + like.innerText;
//     likeIncrease++;
//     like.innerText = likeIncrease;
//     like.style.color = 'red';
//     const likeIn = document.querySelectorAll('.liked');
//     const liked = likeIn[n];
//     liked.style.color = 'green';
// }

// /=/=/=/=/=/=/=/=/=/ comment publish system /=/=/=/=/=/=/=/=/=/=/=

// -/-/-/-/-/-/-/-/-/-/- by getElementsByClassName /-/-/-/-/-/-/-/-/-/-
// function commentPost(n) {
//     const commentBoxes = document.getElementsByClassName('textarea');
//     const comment = commentBoxes[n].value;
//     const newComment = document.createElement('p');
//     newComment.innerText = comment;
//     const post = 'post' + n;
//     document.getElementById(post).appendChild(newComment);
//     commentBoxes[n].value = '';
// }

// -/-/-/-/-/-/-/-/-/-/- by querySelectorAll /-/-/-/-/-/-/-/-/-/-
function commentPost(n) {
    const commentBoxes = document.querySelectorAll('.textarea');
    const comment = commentBoxes[n].value;
    const newComment = document.createElement('p');
    newComment.innerText = comment;
    const posts = document.getElementsByClassName('post');
    const post = posts[n];
    post.appendChild(newComment);
    // const post = 'post' + n;
    // document.getElementById(post).appendChild(newComment);
    commentBoxes[n].value = '';
}

