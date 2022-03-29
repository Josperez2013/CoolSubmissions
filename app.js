Vue.component('secret', {
    data: function(){
        return{
            codes: [
                {name:"Protagonist",
                codename:"Joker"
                },


                {name:"Anne",
                codename:"Panther"
                },


                {name:"Ryuji",
                codename:"Skull"
                }]
        }
   
    },
    template: '<div><div class="user" v-for="name in codes"><p>Name:{{codes.name}}</p></div></div>'
});



const app= new Vue ({
el: '#signup-form',
data:{
    name: '',
    email: '',
    errors:{
        name:true,
        email:true
            }       
    },


methods:{

    proccessForm: function(){
        console.log({name: this.name, email: this.email})
    },

    // checking error on HTML
   validateName(){
     this.errors.name=!window.isValidName(this.name)
                 },

     //checking errors on HTML           
   validateEmail(){
       this.errors.email=!window.isValidEmail(this.email)
                    },

}
});
//function to check the email from html
//regex found on W3Schools
function isValidEmail(email) {
   var re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


//checking name from html
function isValidName(name){
    if(name.length<2){
        return false
    }else{
        return true
    };
};
