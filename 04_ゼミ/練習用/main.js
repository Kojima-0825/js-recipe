const hiroshi = {
    name: "ひろし",
    university: "立教",
    age: 22,
    hobby: ["アニメ", "バッティングセンター"],
    familly: {
      papa: "かずみ",
      mama: "としこ",
      sis: "ゆうり",
    },
    isMentor: false,
    isStudent: true,
    sayHello: function() {
      alert(`こんにちは${this.name}です！！`)
    },
  }
  console.log(hiroshi.name)
  hiroshi.sayHello()