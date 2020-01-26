// question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }

};
cat.complain();

// question 2

const heading = document.querySelector("h3");



// question 3

heading.style.fontSize="2em";


// question 4
heading.classList.add("subheading");


// question 5
const paragraphs= document.querySelectorAll("p");


// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML ="<p>New paragraph</p>";
console.dir(resultsContainer);


// question 7
function catArray() {
    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    for(let i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }

}
catArray();

// question 8

function catArray() {
    let newHTML = "";
    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    for(let i = 0; i < cats.length; i++) {
        const name= `<h5>${cats[i].name}</h5>`;
        console.log(name);
    }

}
catArray();


// question 9
function catArray() {
    let newHTML = "";
    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    for(let i = 0; i < cats.length; i++) {
        resultsContainer.innerHTML =`<h5>${cats[i].name}</h5>`;
         console.log(resultsContainer.innerHTML);
    }


}
catArray();


// question 10

function catArray() {
   
    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    for(let i = 0; i < cats.length; i++) {
        let catAge= "Age unknown";
        if(cats[i].age){
            console.log(catAge);
;
        }
        const details = `<div>
                             <h5>${cats[i].name}</h5>
                             <p>${cats[i].age}</p>
                        </div>`;
                        console.log(details);
                       
    }
 

}
catArray();