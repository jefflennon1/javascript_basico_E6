import api from './api';


class App{
  constructor(){
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.inpuEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');
    this.registerHandles();
  }
  registerHandles(){
       this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
      if(loading == true){
        const loadingEl = document.createElement('span');
          loadingEl.setAttribute('id', 'loading');
          loadingEl.appendChild(document.createTextNode('Carregando...'));
          this.formEl.appendChild(loadingEl);
      }else{
        document.getElementById('loading').remove();
      }
    }


  async  addRepository(event){
      event.preventDefault();
        const repoInputEl = this.inpuEl.value;

      if(repoInputEl.length === 0)
      return;

      this.setLoading();

     try{ const response = await api.get(`/${repoInputEl}`);

      const { name, bio, avatar_url, url } = response.data;
      
        this.repositories.push({
          name,
          description: bio,
          avatar_url,
          html_url: url
        });
      
      this.render(); 
     }catch(error){
       alert('O usuário nao existe!');
     }
     this.setLoading(false);
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
