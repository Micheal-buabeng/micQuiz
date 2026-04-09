/*Saved Mode*/
const savedMode= localStorage.getItem("mode");
if(savedMode=== "green"){
    document.body.classList.remove("body-darkmode")
}


/*Overlay Display*/

const overlay=document.getElementById("overlay")
setTimeout(()=>{
overlay.classList.add("hidden")
},2000)

/*Green and Aqua Mode*/
const inputEl=document.getElementById("input")
inputEl.addEventListener("change",()=>{
    if(inputEl.checked){
        document.body.classList.add("body-darkmode")
        localStorage.setItem("mode","green")
    }else{
        document.body.classList.remove("body-darkmode")
        localStorage.setItem("mode","aqua")
    }
})



/* logo display animation*/


const logo =[
    {
        image:"images/images (7).jpeg"
    },
    {
        image:"images/Coat_of_arms_of_Ghana.svg"
    }
]



const logobox=document.getElementById("logoImage")
let currentIndex=0;


setInterval(()=>{
    UpdateLogo()

},5000)

function UpdateLogo(){
    logobox.style.opacity="0"
   

    setTimeout(()=>{
        logobox.style.opacity="1"
         logobox.src=logo[currentIndex].image;


        
    currentIndex++
    if(currentIndex===logo.length){
        currentIndex=0;
    }

    },500)
 
}


/* Subtopic Data */
const subtopics = {
    immigration: ["CONSTITUTION AND THE REPULBLIC  OF GHANA", 
                  "CITIZENSHIP ACT,2000 AND REGULATION",
                  "IMMIGRATION ACT,2000 AND REGULATIONS"
                 ],


    security: ["ANTI TOURRISM ACT, 2008 AND REGULATIONS (2012)",
               "CRIMINAL AND OTHER OFFENCES ACT,1960", 
               "SECURITY AND INTELLIGENCE AGENCIES ACT 1996"
              ],
    investment: ["FOREIGN EXCHANGE ACT, 2006",
                 "FREE ZONE ACT 1995 AND REGULATIONS",
                 "INTERNATIONAL PROTOCOLS"]
};

/* Modal Logic */
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalSubtopics = document.getElementById("modal-subtopics");
const modalClose = document.getElementById("modal-close");

function openModal(category) {
    modalTitle.textContent = category.toUpperCase() + " LAWS";
    modalSubtopics.innerHTML = "";

    subtopics[category].forEach(topic => {
        const btn = document.createElement("button");
        btn.classList.add("subtopic-btn");
        btn.textContent = topic;
        btn.addEventListener("click", () => {
            localStorage.setItem("category", category);
            localStorage.setItem("subtopic", topic);
            window.location.href = "quiz.html";
        });
        modalSubtopics.appendChild(btn);
    });

    modalOverlay.classList.add("show");
}

modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("show");
});

/* Wire up buttons */
document.getElementById("btn-immigration").addEventListener("click", () => openModal("immigration"));
document.getElementById("btn-security").addEventListener("click", () => openModal("security"));
document.getElementById("btn-investment").addEventListener("click", () => openModal("investment"));


