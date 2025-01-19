let current="X";
let arr=Array(9).fill(null);

function checkW(){
    if(
        (arr[0]!==null && arr[0]==arr[1] && arr[1]==arr[2]) ||
        (arr[3]!==null && arr[3]==arr[4] && arr[4]==arr[5]) ||
        (arr[6]!==null && arr[6]==arr[7] && arr[7]==arr[8]) ||
        (arr[0]!==null && arr[0]==arr[3] && arr[3]==arr[6]) ||
        (arr[1]!==null && arr[1]==arr[4] && arr[4]==arr[7]) ||
        (arr[2]!==null && arr[2]==arr[5] && arr[5]==arr[8])
    ){
        document.write( `<div style="text-align: center; color: pink; font-size: 150px; background-color: blue; margin-top:120px; padding:150px; font-weight: bold;">Winner is ${current}</div>`);

        return;
    }
    if(!arr.some(e=>e===null)){
        document.write('<div style="text-align: center; color: pink; font-size: 150px; background-color: blue; margin-top:120px; padding:150px; font-weight: bold;">It\'s a draw</div>');
        return;
    }
}

function handleClick(el){
const id=Number(el.id);
if(arr[id]!==null) return;
arr[id]=current
el.innerText=current;
checkW();
current=current==="X" ? "O" : "X";

}