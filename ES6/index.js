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
 
}

const minhaLista = new TodoList();

function addNewTodo(){
  minhaLista.add('novo');
  
}