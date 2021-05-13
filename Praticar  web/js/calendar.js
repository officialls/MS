var year=document.querySelector('#year');
var month=document.querySelector('#month');
var prev_ym=document.querySelector('#prev_ym');
var next=document.querySelector('#next');
var day=document.querySelector('.day');
var all_month=['Jan','Fev','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function next_all(){
    var today= new Date();
    var xxx=0;
    var cur_year=new Date().getFullYear();
    var cur_mouth=new Date().getMonth();
    var l=0;
    var cm=cur_mouth;
    var inc_days=0
    var first_day=new Date();
    first_day.setDate(1);
    var last_day=new Date(cur_year,cur_mouth+1,0);
    month.innerHTML=all_month[cur_mouth];
    var prev_days=new Date(cur_year,cur_mouth,0);
    var prev_day=prev_days.getDate();
    for(var f=0;f<day.children.length;f++){
        day.children[f].innerHTML='';
    }
    for(let i=first_day.getDay();i<=last_day.getDate();i++){
        inc_days++;
        day.children[i].innerHTML=inc_days;
    }
    for(let i=0;i<day.children.length;i++){
        if((day.children[i].innerHTML==today.getDate()) && today.getFullYear()==cur_year && today.getMonth()==cm)
        {
            day.children[i].setAttribute('id','today');
        }
    }
    for(let z=inc_days+1;z<day.children.length;z++){
        xxx=xxx+1;
        day.children[z].innerHTML=xxx;
        day.children[z].style.opacity=.5;
    }
    for(let t=prev_days.getDay();t>=0;t--){
        if(day.children[t].innerHTML==''){
            day.children[t].innerHTML=prev_day;
            prev_day=prev_day-1;
            day.children[t].style.opacity=.5;
        }
    }
    inc_days=0;
    var p=0;
    next.addEventListener('click',function(){
        for(let i=0;i<day.children.length;i++){
            day.children[i].removeAttribute('id','today');
            
        }
        
        inc_days=0;
        l++;
        first_day.setDate(1);
        if(cur_mouth+l<=11){
            cm++;
            first_day.setMonth(cm);
            last_day.setFullYear(cur_year);
            last_day.setMonth(cm+1);
            last_day.setDate(0);
            month.innerHTML=all_month[cur_mouth+l];
            p=first_day.getDay();
            prev_days=new Date(cur_year,cm,0);
            prev_day=prev_days.getDate();
        }else{
            l=0;
            cur_mouth=0;
            cur_year=cur_year+1
            month.innerHTML=all_month[cur_mouth];
            year.innerHTML=cur_year;
            last_day.setFullYear(cur_year);
            last_day.setMonth(cm+1);
            last_day.setDate(0);
            cm=0;
            first_day.setMonth(cm);
            first_day.setFullYear(cur_year);
            p=first_day.getDay();
            prev_days=new Date(cur_year,cur_mouth,0);
            prev_day=prev_days.getDate();
        }
        console.log(last_day.getFullYear());
        for(var f=0;f<day.children.length;f++){
            day.children[f].innerHTML='';
            day.children[f].style.opacity=1;
        }
        for(let i=1;i<=last_day.getDate();i++){
            day.children[p].innerHTML=i;
            p++;
        }
        xxx=0;
        for(let z=p;z<day.children.length;z++){
            xxx=xxx+1;
            day.children[z].innerHTML=xxx;
            day.children[z].style.opacity=.5;
        }
        for(let t=prev_days.getDay();t>=0;t--){
            if(day.children[t].innerHTML==''){
                day.children[t].innerHTML=prev_day;
                prev_day=prev_day-1;
                day.children[t].style.opacity=.5;
            }
        }
    });
}
next_all();
