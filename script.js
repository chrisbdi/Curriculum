let menuVisible = false;
function showHideMenu()
{
//shows or hidens menu
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select()
{
//hides menu once the option is selected
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function efectSkills()
{
//applies animations to the skills
    var skills = document.getElementById("skills");
    var skillDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillDistance >= 300){
        let skill = document.getElementsByClassName("progress");
        skill[0].classList.add("javascript");
        skill[1].classList.add("htmlcss");
        skill[2].classList.add("photoshop");
        skill[3].classList.add("wordpress");
        skill[4].classList.add("communication");
        skill[5].classList.add("teamwork");
        skill[6].classList.add("creativity");
        skill[7].classList.add("dedication");
    }
}

window.onscroll = function()
{
//applies scroll to the animation of the skill bar
    efectSkills();
}  