<template>
<div>
    <p>------------------------------Props------------------------------------------------</p>
    <h1 class="homeHeader">
        Home Component {{name}} {{ lastName }}
    </h1>
    <!-- <h1 v-on:mousemove="moveMouse()" class="homeHeader">
        Home Component {{name}} {{ lastName }}
    </h1> -->
    <p>------------------------------Function & Methods------------------------------------------------</p>
    <h1>My age is {{ getAge("26") }}</h1>
    <h1>My email is {{ getEmailAddress("saad.ahmed2696@gmail.com") }}</h1>
    <p>Complete profile : {{ getCompleteData().email }}</p>
    <p>Events in VUEJS</p>
    <p>------------------------------EVENTS------------------------------------------------</p>
    <button v-on:click="clicked()">Click Me </button>
    <button v-on:dblclick="clickedDouble()"> Double clicked </button>
    <p>{{count}}</p>
    <button v-on:click="counter()">Counter</button>

    <p>----------------------------------Two way binding--------------------------------------------</p>
    <input type="text" v-model="count">
    <p>--------------------------------------Input fields----------------------------------------</p>
    <input type="text" placeholder="enter email" v-model="email">
    <br>
    <br>
    <input type="password" placeholder="enter password" v-model="password">
    <br>
    <br>
    <button v-on:click="getData()">Get form Data</button>

    <p>--------------------------------------Check Box---------------------------------------</p>

    <input type="checkbox" value="java" id="java" v-model="technologies">
    <label for="java">Java</label>
    <br>
    <input type="checkbox" value="php" id="php" v-model="technologies">
    <label for="php">PHP</label>
    <br>
    <p>Selected technologies {{ technologies }}</p>
    <p>--------------------------------------Radio Button---------------------------------------</p>
    <h3>Who am i?</h3>
    <input type="radio" value="student" id="student" name="profession" v-model="profession">
    <label for="Student">Student</label>
    <br>
    <input type="radio" value="developer" id="developer" name="proffession" v-model="profession">
    <label for="developer">Developer</label>
    <br>
    <p>WHo am i {{ profession }}</p>
    <p>--------------------------------------Loops on Array Vue Js---------------------------------------</p>
    <br>
    <ul>
        <li v-for="item in tech" :key="item">
            {{ item }}
        </li>
    </ul>

    <p>--------------------------------------Loops on Array of Objects Vue Js---------------------------------------</p>
    <ul>
        <li v-for="item in user" :key="item.name">
            Name: {{ item['name'] }}
            <br>
            Title : {{item['title'] }}
            <p>-------------</p>
        </li>
    </ul>
    <p>--------------------------------------Parent to child component Data travelling---------------------------------------</p>
    <Child name="Saad Ahmed" :user=user :getData=clicked></Child>

    <p>--------------------------------------Component Re-use in VUE JS---------------------------------------</p>
    <User></User>
    <p>--------------------------------------HTML Binding---------------------------------------</p>
    <div v-html="tag"></div>
    <p>Using multiple tags in one wrapper div</p>
    <div v-html="tag + tagTwo + tagThree "></div>
    <p>-------------------------------------Conditional Style Class Binding--------------------------------------</p>
    <div :class="applyCoolness">
        <p>{{ isMyDivCool? "i am cool as a cucumber": "Damn... I am not cool any more"}}</p>
    </div>
    <button v-on:click="coolerMethod()">Make me {{ isMyDivCool? "not so cool" : "cool" }}</button>
    <p>-------------------------------------Child to parent data transfer--------------------------------------</p>
    <User :getUser='getUserName'></User>
    <p>User name is {{userName }}</p>

    <p>-------------------------------------Ref in VUE JS --------------------------------------</p>
    <RefComp></RefComp>
    <SimpleForm></SimpleForm>
    <Computed></Computed>
    <Watchers></Watchers>
    <Slots name="saad">
        <h1>Hello there </h1>
    </Slots>

    <p>--------------------------------------Slots multi---------------------------</p>

    <MultiSlots>
        <template v-slot:header>
            <h3>Phone</h3>
        </template>

        <template v-slot:content>
            <h3>iPhone 15 pro max</h3>
        </template> <template v-slot:footer>
            <button>Buy now</button>
        </template>

    </MultiSlots>

    <br>

    <MultiSlots>
        <template v-slot:header>
            <h3>Laptop</h3>
        </template>

        <template v-slot:content>
            <h3>Macbook Pro 2022</h3>
        </template> <template v-slot:footer>
            <button>Buy now</button>
        </template>

    </MultiSlots>
    <br>

    <MultiSlots>
        <template v-slot:header>
            <h3> Headphones </h3>
        </template>

        <template v-slot:content>
            <h3>Airpods max</h3>
        </template> <template v-slot:footer>
            Out of stock
        </template>

    </MultiSlots>

    <p>--------------------------------------Dynamic component-------------------------</p>

    <button @click="tab='Java'">Load Java</button>
    <button @click="tab='Node'">Load Node</button>
    <button @click="tab='Php'">Load PHP</button>
    <button @click="tab='C'">Load C</button>

    <component :is="tab" />

    <p>--------------------------------------TelePort Component-------------------------</p>

</div>

<Teleport to="#footer">
    <FooterBottom />
</Teleport>
</template>

<script>
import Child from './Child.vue'
import User from './User.vue'
import RefComp from './RefComp.vue'
import SimpleForm from './SimpleForm.vue'
import Computed from './Computed.vue'
import Watchers from './Watchers.vue'
import Slots from './Slots.vue'
import MultiSlots from './MultiSlots.vue'
import Java from '../components/dynamic-components/Java.vue'
import Php from '../components/dynamic-components/Php.vue'
import Node from '../components/dynamic-components/Node.vue'
import C from '../components/dynamic-components/C.vue'
import FooterBottom from './FooterBottom.vue'

export default {
    name: 'HomeComp',
    components: {
        Child,
        User,
        RefComp,
        SimpleForm,
        Computed,
        Watchers,
        Slots,
        MultiSlots,
        Java,
        Node,
        Php,
        C,
        FooterBottom
    },
    props: {
        name: String
    },
    data() {
        return {
            lastName: 'Ahmed',
            userName: null,
            count: 0,
            email: null,
            password: null,
            technologies: [],
            tech: ['java', 'php', 'node', 'ROR'],
            profession: null,
            isMyDivCool: true,
            tab: 'Java',
            user: [{
                    name: 'Saad',
                    title: 'Software Engineer'
                },
                {
                    name: 'Bruce',
                    title: 'Senior Software Engineer'
                },
                {
                    name: 'Wayne',
                    title: 'Associate Software Engineer'
                }

            ],
            getAge(age) {
                return age
            },
            tag: '<h3>HTML Binded context</h3>',
            tagTwo: '<p>Second</p>',
            tagThree: '<p>Third</p>',
            coolerMethod() {
                if (this.isMyDivCool) {
                    this.isMyDivCool = false
                } else {
                    this.isMyDivCool = true
                }
            }
        }
    },
    computed: {
        applyCoolness() {
            return {
                cool: this.isMyDivCool,
                fool: !this.isMyDivCool,
                other: true
            };
        }
    },

    methods: {
        getEmailAddress(email) {
            return email
        },
        getCompleteData() {
            return {
                phoneNumber: "+923001122334",
                email: this.getEmailAddress('test')
            }
        },
        clicked() {
            alert('i am clicked')
        },
        clickedDouble() {
            alert('i am double clicked')
        },
        moveMouse() {
            alert('i am hover event')
        },
        counter() {
            this.count = this.count + 1
        },
        getData() {
            alert(`Email ${this.email}, Password ${this.password}`)
        },
        getUserName(name) {
            this.userName = name
        }
    }
}
</script>

<style scoped>
/* .homeHeader{
    color: green;
} */

/* other way */
/* Scopped  */

h1 {
    color: orange;

}

.cool {
    background-color: turquoise;
    padding: 2%;
}

.fool {
    background-color: red;
    padding: 2%;
}

.other {
    font-size: 25px;
}
</style>
