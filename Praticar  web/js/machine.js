machine_screen=document.querySelector('.machine_screen');
machine_options=document.querySelector('.machine_options');
machine_operations=document.querySelector('.machine_operations');
machine_digits=document.querySelector('.machine_digits');
console.log(machine_screen.children[0]);

function symbol(){
    for(let i=0;i<machine_operations.children.length;i++){
        machine_operations.children[i].addEventListener('click',function operation(){
            console.log(machine_operations.children[i].innerHTML);
        });
    }
}
function add(){
    
    for(let i=0;i<machine_options.children.length;i++){
        if(i!=1 && i!=machine_options.children.length-1 ){
            machine_options.children[i].addEventListener('click',function options(){
                console.log(machine_options.children[i].innerHTML);
            });
        }
        else if(i==1){
            machine_options.children[1].addEventListener('click',function pi(){
                machine_options.children[1].textContent=3.14;
                console.log(machine_options.children[i].innerHTML);
            });
        }
        /// clean
    }
}
function numbers(){
    for(let i=0;i<machine_digits.children.length;i++){
        machine_digits.children[i].addEventListener('click',function number(){
            console.log(machine_digits.children[i].innerHTML);
            machine_screen.children[0].innerHTML+=parseInt(machine_digits.children[i].innerHTML);
        });
    }
}
numbers();
add();
symbol();
