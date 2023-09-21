document.addEventListener('DOMContentLoaded', function () {
    const repoInput = document.getElementById('repoInput');
    const getRepoButton = document.getElementById('getRepoButton');
    const repoDetails = document.getElementById('repoDetails');
    getRepoButton.addEventListener('click', function () {
      const repoName = repoInput.value;
      if (!repoName) return;
      fetch(`https://api.github.com/repos/${repoName}`)
        .then(response => response.json())
        .then(data => {
          const repoHTML = `
            <h3>${data.full_name}</h3>
            <p>Description: ${data.description || 'N/A'}</p>
            <p>Stars: ${data.stargazers_count}</p>
            <p>Forks: ${data.forks_count}</p>
            <p>URL: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
          `;
          repoDetails.innerHTML = repoHTML;
        })
        .catch(error => {
          repoDetails.textContent = 'Error: Repository not found';
        });
    });
  });
