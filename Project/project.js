window.addEventListener('load', () => {
  randomHeaderColors();
  manageCommentForm();
});


function randomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + color;
}

function randomHeaderColors() {
  const articleHeaders = document.querySelectorAll('.articol-ultim h4');
  setInterval(() => {
    articleHeaders.forEach((header) => {
      header.style.color = randomColor();
    });
  }, 2000);
}

function manageCommentForm() {
  const form = document.getElementById('comment_form');
  const comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
  renderComments();
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const comment = {
      name: formData.get('name'),
      message: formData.get('message'),
    };
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
  });

  function renderComments() {
    const comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
    const commentsList = document.getElementById('comments');
    commentsList.innerHTML = '';
    comments.forEach((comment) => {
      const li = document.createElement('li');
      li.innerText = `${comment.name}: ${comment.message}`;
      commentsList.appendChild(li);
    });
  }

}
