new Vue ({
    el: '#vue-app',
    data: {
        name: '',
        last: '',
        index: 0,
        grade: 0,
        arr: []
    },
  
    methods: {
        add: function (e) {
            this.arr.push({first: this.name, lastn: this.last, index: this.index, grade: this.grade});
            console.log(1);
        },
        saveFile1: function() {
          const data = JSON.stringify(this.arr)
          window.localStorage.setItem('arr', data);
          console.log(JSON.parse(window.localStorage.getItem('arr')));
        },
        saveFile: function() {
            const data = JSON.stringify(this.arr)
            window.localStorage.setItem('arr', data);
            console.log(JSON.parse(window.localStorage.getItem('arr')))
        }
  }
});