const container = document.querySelector('#container');


//initialize 16 rows and add to main container div 
const row1 = document.createElement('div');
row1.classList.add('row1', 'row');
container.appendChild(row1);
const row2 = document.createElement('div');
row2.classList.add('row2', 'row');
container.appendChild(row2);
const row3 = document.createElement('div');
row3.classList.add('row3', 'row');
container.appendChild(row3);
const row4 = document.createElement('div');
row4.classList.add('row4', 'row');
container.appendChild(row4);
const row5 = document.createElement('div');
row5.classList.add('row5', 'row');
container.appendChild(row5);
const row6 = document.createElement('div');
row6.classList.add('row6', 'row');
container.appendChild(row6);
const row7 = document.createElement('div');
row7.classList.add('row7', 'row');
container.appendChild(row7);
const row8 = document.createElement('div');
row8.classList.add('row8', 'row');
container.appendChild(row8);
const row9 = document.createElement('div');
row9.classList.add('row9', 'row');
container.appendChild(row9);
const row10 = document.createElement('div');
row10.classList.add('row10', 'row');
container.appendChild(row10);
const row11 = document.createElement('div');
row11.classList.add('row11', 'row');
container.appendChild(row11);
const row12 = document.createElement('div');
row12.classList.add('row12', 'row');
container.appendChild(row12);
const row13 = document.createElement('div');
row13.classList.add('row13', 'row');
container.appendChild(row13);
const row14 = document.createElement('div');
row14.classList.add('row14', 'row');
container.appendChild(row14);
const row15 = document.createElement('div');
row15.classList.add('row15', 'row');
container.appendChild(row15);
const row16 = document.createElement('div');
row16.classList.add('row16', 'row');
container.appendChild(row16);


//makes columns stay inline for each row
const allRows = document.querySelectorAll('div.row').forEach(element => {
    element.style.display = 'flex';
    
});


//adds 16 columns to each row 
for(let a = 1; a <= 16; a++ ){
    const cols = document.querySelector(`div.row${a}`);

    for(let i = 1; i <= 16; i++){
        const col = document.createElement('div');
        col.classList.add(`row1col${i}`);
        cols.appendChild(col);
    }

}









   
  
