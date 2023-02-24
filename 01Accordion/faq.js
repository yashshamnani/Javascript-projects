const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody;
// const faqs = [];

// function showFaq() {
  
// }

function createFaq() {
  faqData.forEach(currentfaq => {

  // creating elements
   
  let accordian_body = document.querySelector(".accordian_body")
  let faq = document.createElement("div");
  let faq_header = document.createElement("div")
  let h3 = document.createElement("h3")
  let button =document.createElement("button");
 
  // adding classes
  faq.classList.add("faq");
  faq_header.classList.add("faq_header");
  button.classList.add("show_btn");

  //adding text
   
  h3.innerText = currentfaq.question;
  button.innerText = "+"

  // appending child

  accordian_body.appendChild(faq);
  faq.appendChild(faq_header);
  faq_header.appendChild(h3);
  faq_header.appendChild(button);

  //adding event 

  button.addEventListener("click",function(e){
     
    let closest = e.target.closest(".faq");
    let ans = closest.querySelector("p");
    if(ans){
         ans.remove();
    }
    else{
      let p = document.createElement("p");
      p.innerText = currentfaq.answer;
      faq.appendChild(p);
    }

  })
 
  })
}

// function btnStatusUpdate() {
  
// }


 createFaq()