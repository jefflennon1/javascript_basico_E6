class List {
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data)
  }
}

class TodoList extends List{
 constructor(){
   super();
   this.usuario = "jefferson"
 }

 showUser(){
   console.log(this.usuario);
 }
}

const minhaLista = new TodoList();

function addNewTodo(){
  minhaLista.add('novo');
  minhaLista.showUser();
}