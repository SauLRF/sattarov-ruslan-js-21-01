
document.getElementsByClassName("createRow")[0].onclick=function(){
const tbody=document.getElementsByClassName("table_homework")[0].getElementsByTagName("tbody")[0];   
const row=document.createElement("tr")
const values=document.getElementsByClassName("table_input")[0].value.split(" ");
values.forEach(element => {
   const td=document.createElement('td');
   td.append(document.createTextNode(element));
   row.append(td)
});
const button=document.createElement("BUTTON");
button.append(document.createTextNode("удалить"));
button.className="delete";
button.type="button";
row.append(button);
tbody.append(row);
deleteRow();
};


function deleteRow(){
    const button=document.querySelectorAll(".delete");
            button.forEach((i,index)=>{
                i.onclick=function(){
                    const tbody=document.getElementsByClassName("table_homework")[0].getElementsByTagName("tbody")[0];
                    tbody.children[index+1].remove();
                }
            })
    console.log(button)
};
deleteRow();

function color(className,st){
   document.querySelector(className).onchange=function(){
        document.querySelector(".table_homework").style[st]=document.querySelector(className).value;
    
    }
}
color(".color-table","backgroundColor");
color(".color-table_text","color");