new Vue({
  el: "#atm",
  data: {
    nyuryokugaku: 0,
    zanndaka:0,
    logs:[ ]
  },
  methods:{
      nyukin:function(){
          this.zanndaka += Number(this.nyuryokugaku)
          this.logs.push({
              date:new Date(),
              type:"入金",
              money: Number(this.nyuryokugaku)
          })
      },
      syukkin:function(){
          this.zanndaka -= Number(this.nyuryokugaku)
          this.logs.push({
              date:new Date(),
              type:"出金",
              money:Number(this.nyuryokugaku)
          })
      },


  },
  computed:{
    kieru:function(){
    if(Number(this.zanndaka)< Number(this.nyuryokugaku)){
      return true
    }
    }
  }
})
