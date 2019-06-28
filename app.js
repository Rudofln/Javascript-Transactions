
document.addEventListener(`DOMContentLoaded`,function(){
    let todos = getTodosFromStroge();
    todos.forEach(function(todo){
        newItemUI(todo)
    });
});


document.getElementById(`ajax`).addEventListener(`click`,newItemUI);


function newItemUI(employees){

        const xhr = new XMLHttpRequest();
            xhr.open(`get`,`employes.json`,true);
            xhr.onload = function(){
                    let list = document.getElementById(`employees`);
                    if(xhr.status == 200){
                        
                        const employees = JSON.parse(this.responseText);
                            addTodoStroge(employees);
                            let i = 0;
                            employees.forEach((employess) => {
                                    list.innerHTML += `
                                    <tr>
                                    <td>1</td>
                                    <td>${employess.name}</td>  
                                    <td>${employess.deparment}</td>  
                                    <td>${employess.salary}</td>  
                                    </tr>
                                    `;
                            });
                       
                    }
                
            }
            xhr.send();
            
    };
function getTodosFromStroge(){
    let todos;

    if(localStorage.getItem(`todos`)===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem(`todos`));//JSON.parse Yazıları Arraya çeivriyoruz
    }
    return todos;
}
function addTodoStroge(employees){
    let todos = getTodosFromStroge();

    todos.push(employees);
        localStorage.setItem(`todos`,JSON.stringify(todos));//JSON.Stringifty kullanarak ekledğimiz localastrgoe ekliyoruz dizi halinde.


}