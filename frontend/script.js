/* function addTwoIntegers(firstInteger, secondInteger)
{
    //console.log(firstInteger + secondInteger)
    //return firstInteger + secondInteger;
    //return "hello";
    if(typeof firstInteger === "number" && typeof secondInteger === "number"){
        return firstInteger + secondInteger
    }else{
        return "valamelyik argumentum nem szám ezért nem elvégezhető";
    }
}

console.log( addTwoIntegers(12, 13) );
console.log( addTwoIntegers(1920, 85) );
console.log(0==="0"); */

function loadEvent(eventObject){
    //console.log(eventObject);
    const rootElement = document.getElementById("root");
    //console.dir(document);
    console.dir(rootElement);
    
    
    const listOfSectionElements = document.querySelectorAll("section");
    console.log(listOfSectionElements);

    const i = document.querySelector("article h2");
    console.log(i);
    

    //rootElement.classList.add("newClass");
   /*  listOfSectionElements[0].classList.add("newClass");
    listOfSectionElements[1].classList.add("newClass");
    listOfSectionElements[2].classList.add("newClass");
    listOfSectionElements[3].classList.add("newClass");
    listOfSectionElements[4].classList.add("newClass"); */
    
    
    let anchors = "";


    for (let index = 0; index < listOfSectionElements.length; index++) {
        anchors += `
            <a href="#${ listOfSectionElements[index].id }">
                ${ listOfSectionElements[index].id }
            </a>
            `;
        
    }
    

    for (const sectionElement of listOfSectionElements) {
        // sectionElement.classList.add("newClass");
        //anchors = anchors + `<a> ${ sectionElement.id } </a>`
        anchors += `<a href="#${ sectionElement.id }">  ${ sectionElement.id } </a>`;
    }
    console.log(anchors);
    rootElement.insertAdjacentHTML("afterbegin", `<header>${ anchors }</header>`)
} 
window.addEventListener("load", loadEvent);


function miez(barmi) {

    //ha ez egy szám adjuk vissza az értékét, irjuk ki hogy ez bizony egyx szám
    //ha string adjuk vissza csak fűzzünk hozzá egy !-t

    if (typeof barmi === "number") {
        console.log(barmi, "ez bizony egy szám")
        return barmi
    }if (typeof barmi === "string"){
        console.log(barmi + "!")
        return barmi + "!"
    }
    return 0

    
}
console.log( miez() )
let asd = miez(5)