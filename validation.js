//validation script

const inputs = document.querySelectorAll("input");
const patterns ={
    telephone:/^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,
    email:/^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/
};

//^signals this has to be at the begginng $ signals that the expression had to be before /d is digits
//username: i means case insesitive /d is meta character equal to 0-9 {5,12} characters long
// password \w means [a-z 0-9 _] and @ - are legal for password so they are added
// it has to be \. because . is a special character and will mean something else without the \
// what if you want .co.uk addresses but the second .uk is optional? (\.[a-z]{2,8})? (requires paranthesis) ? lets the last part be optional

//validation funciton
function validate(field,regex){
    if(regex.test(field.value)){
        field.className='valid';
    }else{field.className='invalid';

    }
}

inputs.forEach((input)=> {
    input.addEventListener('keyup',(e)=>{
        //console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});

