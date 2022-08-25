function increaseLike() {
    let like = document.getElementById('like').innerText;
    let likeIncrease = + like;
    likeIncrease++;
    document.getElementById('like').innerText = likeIncrease;
}
function commentPost() {
    let comment = document.getElementById('comment-box').value;
    let newComment = document.createElement('p');
    newComment.innerText = comment;
    document.getElementById('post').appendChild(newComment);
    document.getElementById('comment-box').value = '';
}


// /-/-/-/- 2nd post /-/-/-/-//-
function increaseLike1() {
    let like = document.getElementById('like1').innerText;
    let likeIncrease = + like;
    likeIncrease++;
    document.getElementById('like1').innerText = likeIncrease;
}
function commentPost1() {
    let comment = document.getElementById('comment-box1').value;
    let newComment = document.createElement('p');
    newComment.innerText = comment;
    document.getElementById('post1').appendChild(newComment);
    document.getElementById('comment-box1').value = '';
}
// / - /-/ - /- 3nd post / - /-/ - /-/ / -

function increaseLike2() {
    let like = document.getElementById('like2').innerText;
    let likeIncrease = + like;
    likeIncrease++;
    document.getElementById('like2').innerText = likeIncrease;
}
function commentPost2() {
    let comment = document.getElementById('comment-box2').value;
    let newComment = document.createElement('p');
    newComment.innerText = comment;
    document.getElementById('post2').appendChild(newComment);
    document.getElementById('comment-box2').value = '';
}
// / - /-/ - /- 3nd post / - /-/ - /-/ / -

function increaseLike3() {
    let like = document.getElementById('like3').innerText;
    let likeIncrease = + like;
    likeIncrease++;
    document.getElementById('like3').innerText = likeIncrease;
}
function commentPost3() {
    let comment = document.getElementById('comment-box3').value;
    let newComment = document.createElement('p');
    newComment.innerText = comment;
    document.getElementById('post3').appendChild(newComment);
    document.getElementById('comment-box3').value = '';
}