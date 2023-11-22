
const v = new Vue({
    el: '#app',
    data: {
        rollings:[
            0,1,2,
            3,4,5,
            6,7,8
        ],
        rollingsCanFlip:[
            [1,3],
            [0,2,4],
            [1,5],
            [0,4,6],
            [1,3,5,7],
            [2,4,8],
            [3,7],
            [4,6,8],
            [5,7]
        ]
    },
    methods:{
        flip(nowIndex){
            const whereIsFive = this.rollings.indexOf(4);

            if(this.check()) if(nowIndex === 4) return this.random();

            const nowValue = this.rollings[nowIndex];

            this.$set(this.rollings,whereIsFive,nowValue);
            this.$set(this.rollings,nowIndex,4);

            if(this.check()) return alert('win!');
        },
        canFlip(nowIndex){
            const whereIsFive = this.rollings.indexOf(4);
            return this.rollingsCanFlip[nowIndex].includes(whereIsFive);
        },
        random(){
            this.rollings = this.rollings.sort(()=>Math.random()-0.5);
        },
        check(){
            return this.rollings.every((item,index)=>item === index);
        },
        reset(){
            rollings.splice(0,rollings.length);
            rollings.push(0,1,2,3,4,5,6,7,8);
        }
    }
});