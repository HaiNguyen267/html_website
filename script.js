const skillNames = document.querySelectorAll(".skill-name")
const skills = document.querySelectorAll(".skill")

skillNames.forEach(skillNameElem => {
    
    skillNameElem.addEventListener("click", (e) => {
        unHighlightCurrentlyHightlighSkillName()
    
        // hightlight this skill name
        e.currentTarget.classList.add('hightlight')

        showCorrespondingSkillDescription(skillNameElem) 
    })
    
})

function unHighlightCurrentlyHightlighSkillName() {
    const hightlightElem = document.querySelector(".hightlight")
    
    if (hightlightElem) {
        hightlightElem.classList.remove("hightlight")
    }
}

function showCorrespondingSkillDescription(skillNameElem) {
    let index = [...skillNames].indexOf(skillNameElem)
    const shownSkill = document.querySelector(".skill-show")
    if (shownSkill) {
        shownSkill.classList.remove('skill-show')
    }
    skills[index].classList.add('skill-show') 
}