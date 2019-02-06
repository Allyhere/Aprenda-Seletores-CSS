let codeBlock = document.querySelectorAll(".code--container");
let tabItem = document.querySelectorAll(".nav--item");
let tabText0 = document.querySelector("#text0");
let tabText1 = document.querySelector("#text1");
let h1Text0 = document.querySelector("#h1text0");
let h1Text1 = document.querySelector("#h1text1");



let openTab = (item) =>{
    let caseItem = item.innerText;

    if(item.style.width < "calc(15vw)"){
        for(tab of tabItem){
            tab.style.width = "calc(100vw / 7)";
        }
        item.style.width = "calc(100vw / 7 * 2 )" //28

    }
    else{
        item.style.width = "calc(100vw / 7)" //14
    }
    
    switch(caseItem){
        case 'Espaço':
        h1Text0.innerText = item.innerText;
        tabText0.innerText = "Somente um espaço entre um seletor e outro seleciona todos os filhos dentro do seletor pai.\n \nPor exemplo: div p seleciona todos os elementos 'p' dentro de 'div'";
        break;

        case '>':
        h1Text0.innerText = item.innerText;
        tabText0.innerText = "loremasiudoiasjdiojasd";
        break;

        case '~':
        h1Text0.innerText = item.innerText;
        tabText0.innerText = "S111111111111111111111111111111";
        break;

        case '+':
        h1Text0.innerText = item.innerText;
        tabText0.innerText = "12222222222222222222222222222";
        break;

        case '[ ]':
        h1Text0.innerText = item.innerText;
        tabText0.innerText = "333333333333333333333333333";
        break;

        case '*':
        h1Text0.innerText = item.innerText;
        tabText0.innerText = "555555555555555555555";
        break;

        case 'Hover':
        h1Text1.innerText = item.innerText;
        tabText1.innerText = "okadopsakdasdkasd";
        break;

        case 'Active':
        h1Text1.innerText = item.innerText;
        tabText1.innerText = "kokokokokokokokok";
        break;

        case 'Focus':
        h1Text1.innerText = item.innerText;
        tabText1.innerText = "uhuhuhuhuhuhuhuh";
        break;

        case 'Disabled':
        h1Text1.innerText = item.innerText;
        tabText1.innerText = "adiadjaisdjaoisjdoiajsd";
        break;

        case 'Before':
        h1Text1.innerText = item.innerText;
        tabText1.innerText = "bwebriuwqbediuwqbe";
        break;

        case 'After':
        h1Text1.innerText = item.innerText;
        tabText1.innerText = "plplplplplplplPLpl";
        break;

        default:
        console.log("eita");
    }
}

