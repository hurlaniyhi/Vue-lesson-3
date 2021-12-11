// MULTIPLE INSTANCES

// var one = new Vue({
//     el: '#vue-one',
//     data: {
//         title: "Section One"
//     },
//     methods: {  
       
//     },

//     computed: {
//        greet: function(){
//            return "Hello from section one"
//        }
//     }
// })

// var two = new Vue({
//     el: '#vue-two',
//     data: {
//         title: "Section Two"
//     },
//     methods: {  
//        changeInstanceOne: function(){
//            one.title = "My title has been changed"
//        }
//     },

//     computed: {
//        greet: function(){
//            return "Hello from section two"
//        }
//     }
// })

// // any info inside any instances can also be changed automatically outside the instances without have to set up an event
// one.title = "Mr first"



// COMPONENTS

// Vue.component('greeting', {
//     template: '<p>Hello world, I am {{name}}. <button @click="changeName">Change Name</button><p>',
//     data: function(){
//         return{
//             name: "Ridwan"
//         }
//     },
//     methods: {
//         changeName: function(){
//             this.name = "Habeeb",
//             one.title = "Changed"
//         }
//     }
// })


// var one = new Vue({
//     el: "#vue-app-one",
//     data: {
//         title: "yup"
//     }
// })

// new Vue({
//     el: "#vue-app-two"
// })



// REFs

new Vue({
    el: "#vue-app",
    data: {
        output: "food"
    },
    methods: {
        readRefs: function(){
            this.output = this.$refs.foodie.value
            this.$refs.p.style.color = "green"
        }
    }
})