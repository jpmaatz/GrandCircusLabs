

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.reddit.com/r/aww/.json')
        .then(response => response.json())
        .then(data => {
            const posts = data.data.children;
            const postsContainer = document.getElementById('posts');

            posts.forEach(post => {
                const postData = post.data;
                const postElement = document.createElement('div');
                postElement.classList.add('post');

        });
    })

});