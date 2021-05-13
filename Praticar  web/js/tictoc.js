var array=[["1","5","9"],["3","5","7"],["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"]];
var player=document.querySelector('.players');
var box=document.querySelector('.box');
var restart_game=document.querySelector('#restart_game');
function restart(){
    restart_game.addEventListener('click',function again(){
        location.reload(true);
    });
}
var red=[];
var blue=[];
var p1=[];
var p2=[];
console.log(player,box.children.length);
p=1;
cont=0;
cp1=0;
cp2=0;
function play(){
    for(let i=0;i<box.children.length;i++){
        c=0;
        box.children[i].addEventListener('click', function go(){
            if(c<box.children.length){
                c++;
                if(p==1){
                    p1[p1.length]=box.children[i].textContent;
                    console.log(p,p1);
                    box.children[i].innerHTML="X";
                    player.children[0].style.opacity=1;
                    player.children[1].style.opacity=.5;
                    p++;
                }else{
                    p2[p2.length]=box.children[i].textContent;
                    console.log(p,p2);
                    box.children[i].innerHTML="O";
                    player.children[0].style.opacity=.5;
                    player.children[1].style.opacity=1;
                    p--;
                }
            }
            if(p1.length>=3){
                console.log('p1');
                for(let l=0;l<array.length;l++){
                    for(let c=0;c<p1.length;c++){
                        for(let q=0;q<array[l].length;q++){
                            if(array[l][q]==p1[c]){
                                cp1++;
                                blue[blue.length]=p1[c];
                            }
                        }
                    }
                    if(cp1==3){
                        restart();
                        c=box.children.length;
                        for(let k=0;k<blue.length;k++){
                            box.children[blue[k]-1].style.backgroundColor='blue';
                            console.log(blue[k]);
                        }
                        var p1_win=true;
                        console.log('p1 win');
                        l=array.length;
                    }else{
                        blue=[];
                    }
                    cp1=0;
                }
            }
            if(p2.length>=3){
                console.log('p2');
                for(let l=0;l<array.length;l++){
                    for(let c=0;c<p2.length;c++){
                        for(let q=0;q<array[l].length;q++){
                            if(array[l][q]==p2[c]){
                                cp2++;
                                red[red.length]=p2[c];
                            }
                        }
                    }
                    if(cp2==3){
                        restart();
                        c=box.children.length;
                        console.log(red,'red');
                        for(let k=0;k<p2.length;k++){
                            box.children[parseInt(red[k])-1].style.backgroundColor='red';
                        }
                        var p2_win=true;
                        console.log('p2 win');
                        l=array.length;
                    }else{
                        red=[];
                    }
                    cp2=0;
                }
            }
            if(p1_win==true || p2_win==true){
                c=box.children.length;
            }else if(c>=box.children.length){
                restart();
            }
            else{
                box.children[i].removeEventListener('click',go);
            }
        });
    }
}
play();

