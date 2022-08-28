// =/=/=/=/=/=/=/   like increase system /=/=/=/=/=/=/=/=/=/

function increaseLike(n) {
    const likes = document.querySelectorAll('.like');
    const like = likes[n];
    let likeIncrease = + like.innerText;
    likeIncrease++;
    like.innerText = likeIncrease;
    like.style.color = 'red';
    const likeIn = document.querySelectorAll('.liked');
    const liked = likeIn[n];
    liked.style.color = 'green';
}

// /=/=/=/=/=/=/=/=/=/ comment publish system /=/=/=/=/=/=/=/=/=/=/=

function commentPost(n) {
    const commentBoxes = document.querySelectorAll('.textarea');
    const comment = commentBoxes[n].value;
    const newComment = document.createElement('p');
    newComment.innerText = comment;
    const post = 'post' + n;
    document.getElementById(post).appendChild(newComment);
    commentBoxes[n].value = '';
}