class UI {
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body">
          <div class ="row">
           <div class ="col-3">
           <img src= "${user.avatar_url}" class="img-fluid">
           <a href="${user.html_url}" target="_blank" class ="btn btn-primary btn-block mt-3">View Profile</a>
           </div>
           <div class="col-9">
           <span class="badge bg-primary">Public Gist: ${user.public_gists}</span>
           <span class="badge bg-danger">Public Repos: ${user.public_repos}</span>
           <span class="badge bg-secondary">Followers: ${user.followers}</span>
           <span class="badge bg-warning">Following: ${user.following}</span>
           <br><br>
           <ul class="list-group list-group-flush">
           <li class="list-group-item">Company: ${user.company}</li>
           <li class="list-group-item">Member Since: ${user.created_at}</li>
           <li class="list-group-item">Hireable: ${user.hireable}</li>
           <li class="list-group-item">Location: ${user.location}</li>
         </ul>
           </div>
          </div>
        </div>
        <h3>Latest Repos</h3>
        <div id = 'repos'></div>
        `
    };
    //showrepos
    showRepos(repos){
      let output = '';
     repos.forEach((repo) => {
      output += `
      <div class = 'card card-body mb-2'>
       <div class ='row'>
        <div class = 'col'>
          <a href ='${repo.html_url}' target ='_blank'>${repo.name}</a>
        </div>
        <div class = 'col'>
        <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge bg-danger">Watchers: ${repo.watchers_count}</span>
        <span class="badge bg-secondary">Forks: ${repo.forks_count}</span>
        </div>
       </div>
      </div>
      `
     })
     document.getElementById('repos').innerHTML = output; 
    }

    clearProfile() {
      this.profile.innerHTML = '';
    }

    showAlert(message, className) {
      this.clearAlert();
      const div = document.createElement('div');
      div.className = className;
     const divText = document.createTextNode(message);
     div.appendChild(divText);
     const alertSpace = document.getElementById('alertSpace');
     alertSpace.appendChild(div);
    // remove after three seconds
     setTimeout(() => {
      this.clearAlert();
     }, 3000)
    }

    clearAlert(){
      const currentAlert = document.querySelector('.alert');
      if(currentAlert){
        currentAlert.remove();
      }
    }
    constructor(){
        this.profile = document.getElementById('inputusers');
    }
}