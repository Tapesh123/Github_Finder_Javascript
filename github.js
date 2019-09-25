class Github {
    constructor() {
      this.client_id = 'f0bc1fee1ec001daa8d6';
      this.client_secret = 'd81343578026b2edaafe349a23e3ffff559e811f';
      this.repos_count = 10;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json()
      const repos = await repoResponse.json()
  
      return {
        profile,
        repos
      }
    }
  }