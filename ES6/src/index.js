class App{
  constructor(){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.registerHandles();
  }
  registerHandles(){
       this.formEl.onsubmit = event => this.addRepository(event);
    }
    addRepository(event){
      event.preventDefault();
        this.repositories.push({
          name: 'jefflennon1',
          description: 'qualquer coisa',
          avatar_url: 'https://avatars2.githubusercontent.com/u/53300744?v=4',
          html_url: 'https://api.github.com/users/jefflennon1'
        });
        console.log(this.repositories);
        
    }
}

new App();



