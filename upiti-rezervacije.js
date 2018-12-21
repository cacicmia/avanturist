let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let date= document.getElementById('date');
date.innerHTML = `${month+1} ${year}`; 
let table = document.getElementById('calendar');
show(month, year);
function rerender(y,m){
    date.innerHTML = `${m+1} ${y}`; 
    let rowList =table.querySelectorAll('tr');
    for (let i=1; i<rowList.length; i++){
        rowList[i].remove();
    }
    show(month, year);
}
function monthBack(){
    year = (month === 0) ? year-1 : year;
    month = (month === 0) ? 11 : month-1;
    rerender(year, month)
}
function monthFwd(){
  year = (month === 11) ? year+1 : year;
  month= (month +1) % 12;
  rerender(year, month);
}


function show(mo, ye){
    
    let firstD = (new Date(ye, mo)).getDay();
    let daysInM = 32 - new Date(ye, mo, 32).getDay();
    let day=1;
    for (let i=0; i<6; i++){
        let row = table.insertRow(-1);
        for (let j=0; j<7; j++){
          if (i===0 && j<firstD){
              let cell = row.insertCell(-1);
              let content = document.createTextNode("");
              cell.appendChild(content);
             
          } else if (day>daysInM){
              break;
          } else {
              let cell= row.insertCell();
              let content=document.createTextNode(`${day}`);
              cell.appendChild(content);
              if (day === today.getDate() && ye === today.getFullYear() && mo === today.getMonth()) {
                  cell.style.color='red';     
                    }
                    cell.appendChild(content);
                   
                    day++; 
                                    };  
         
        }
       
     table.appendChild(row);
     
    }
    let tdList= document.querySelectorAll('td');
    listen(tdList);
}
function listen(list){
    for (let i=0; i<list.length; i++){
        list[i].addEventListener('click',alertDate);
    }
    function alertDate(){
        alert('Nema ponuda za odabrani dan.');
    }
}
