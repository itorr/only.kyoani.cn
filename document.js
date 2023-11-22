
const v = new Vue({
    el: '#app',
    data: {
        rollings:[
            0,1,2,
            3,4,5,
            6,7,8
        ]
    },
    methods:{
        flip(nowIndex){
            const whereIsFive = this.rollings.indexOf(4);

            if(this.check()){
                if(nowIndex === 4){ 
                    return this.random();
                }
            }

            const nowValue = this.rollings[nowIndex];

            if(
                [
                    nowIndex - 1,
                    nowIndex + 1,
                    nowIndex - 3,
                    nowIndex + 3
                ].includes(whereIsFive)
            ){
                this.$set(this.rollings,whereIsFive,nowValue);
                this.$set(this.rollings,nowIndex,4);
            }

            if(this.check()) return alert('win!');

        },
        canFlip(nowIndex){
            const whereIsFive = this.rollings.indexOf(4);
            return [
                nowIndex - 1,
                nowIndex + 1,
                nowIndex - 3,
                nowIndex + 3
            ].includes(whereIsFive);
        },
        random(){
            this.rollings = this.rollings.sort(()=>Math.random()-0.5);
        },
        check(){
            return this.rollings.every((item,index)=>{
                return item === index;
            });
        },
        reset(){
            rollings.splice(0,rollings.length);
            rollings.push(0,1,2,3,4,5,6,7,8);
        }
    }
});