function increaseLike() {
    const like = document.getElementById('like');
    let likeIncrease = + like.innerText;
    likeIncrease++;
    document.getElementById('like').innerText = likeIncrease;
    like.style.color = 'red';
    document.getElementById('liked').style.color = 'green';
}
function commentPost() {
    const comment = document.getElementById('comment-box').value;
    const newComment = document.createElement('p');
    newComment.innerText = comment;
    document.getElementById('post').appendChild(newComment);
    document.getElementById('comment-box').value = '';
}


// /-/-/-/- 2nd post /-/-/-/-//-
function increaseLike1() {
    const like = document.getElementById('like1');
    let likeIncrease = + like.innerText;
    likeIncrease++;
    document.getElementById('like1').innerText = likeIncrease;
    like.style.color = 'red';
    document.getElementById('liked1').style.color = 'green';
}
function commentPost1() {
    const comment = document.getElementById('comment-box1').value;
    const newComment = document.createElement('p');
    newComment.innerText = comment;
    document.getElementById('post1').appendChild(newComment);
    document.getElementById('comment-box1').value = '';
}
// / - /-/ - /- 3nd post / - /-/ - /-/ / -

function increaseLike2() {
    const like = document.getElementById('like2');
    let likeIncrease = + like.innerText;
    likeIncrease++;
    document.getElementById('like2').innerText = likeIncrease;
    like.style.color = 'red';
    document.getElementById('liked2').style.color = 'green';
}
function commentPost2() {
    const comment = document.getElementById('comment-box2').value;
    const newComment = document.createElement('p');
    newComment.innerText = comment;
    document.getElementById('post2').appendChild(newComment);
    document.getElementById('comment-box2').value = '';
}
// / - /-/ - /- 3nd post / - /-/ - /-/ / -

function increaseLike3() {
    const like = document.getElementById('like3');
    let likeIncrease = + like.innerText;
    likeIncrease++;
    document.getElementById('like3').innerText = likeIncrease;
    like.style.color = 'red';
    document.getElementById('liked3').style.color = 'green';
}
function commentPost3() {
    const comment = document.getElementById('comment-box3').value;
    const newComment = document.createElement('p');
    newComment.innerText = comment;
    document.getElementById('post3').appendChild(newComment);
    document.getElementById('comment-box3').value = '';
}