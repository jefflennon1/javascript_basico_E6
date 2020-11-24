class App{
  constructor(){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
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
      
      this.render();  
    }

    render(){
      this.listEl.innerHTML = '';

      this.repositories.forEach(repo => {
          let imgEl = document.createElement('img')
          imgEl.setAttribute('src', repo.avatar_url);

          let titleEl = document.createElement('strong');
          titleEl.appendChild(document.createTextNode(repo.name));

          let descriptionEl = document.createElement('p');
          descriptionEl.appendChild(document.createTextNode(repo.description));

          let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

          let listNewEl = document.createElement('li');
          listNewEl.appendChild(imgEl);
          listNewEl.appendChild(titleEl);
          listNewEl.appendChild(descriptionEl);
          listNewEl.appendChild(linkEl);

          this.listEl.appendChild(listNewEl);
      });
    }
}

new App();



