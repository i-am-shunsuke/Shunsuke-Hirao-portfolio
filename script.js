let introduction=document.querySelector("#introduction");
let education=document.querySelector("#education");
let skill=document.querySelector("#skill");
let experience=document.querySelector("#experience");
let work=document.querySelector("#work");
let project=document.querySelector("#project");

let options={
    rootMargin:"10px",
    threshold:0,
};
let setItemActive=(entries)=>{
    console.log(entries);
    entries.map((entry)=>{
        entry.isIntersecting?entry.target.classList.add("active"):null;
    });
};

let observer = new IntersectionObserver(setItemActive, options);

observer.observe(introduction);
observer.observe(education);
observer.observe(skill);
observer.observe(experience);
observer.observe(work);
observer.observe(project);
