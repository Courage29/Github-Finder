class Github {
    constructor() {
        this.client_id = '052a4ec096cc71552427';
        this.client_secret = '0206001bdb919a97ef2ad04121692efc795e3e5a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
      }
       
        async getUser(user){
            const profileresponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

            const reporesponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

            const profileData = await profileresponse.json();

            const repoData = await reporesponse.json();

            return {
                profileData,
                repoData
            }
    }
}