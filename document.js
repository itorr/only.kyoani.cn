
const v = new Vue({
    el,
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
            const whereIsFive = v.rollings.indexOf(4);

            if(v.check()) if(nowIndex === 4) return v.random();

            const nowValue = v.rollings[nowIndex];

            v.$set(v.rollings,whereIsFive,nowValue);
            v.$set(v.rollings,nowIndex,4);

            if(v.check()) return alert('win!');
        },
        canFlip(nowIndex){
            const whereIsFive = this.rollings.indexOf(4);
            return this.rollingsCanFlip[nowIndex].includes(whereIsFive);
        },
        random(){
            v.rollings = v.rollings.sort(()=>Math.random()-0.5);
        },
        check(){
            return this.rollings.every((item,index)=>item === index);
        }
    }
});