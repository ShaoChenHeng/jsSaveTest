<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="words" placeholder="edit me">
    <button v-on:click="renameWords()">click</button>
    <ul>
      <li>Copy vue-demo to directory emacs-applications-framework/app/</li>
      <li>Write vue.js code and use command <div class="command">npm run serve</div> for test</li>
      <li>Send PR, EAF will run command <div class="command">npm run build</div> before run app</li>
    </ul>

  </div>
</template>

<script>
import { QWebChannel } from "qwebchannel";

export default {
  name: 'HelloWorld',
  data () {
    return {
      words : '',
    }
  },
  props: {
    msg: String,
    
  },
  mouted() {
    window.renameWords = this.renameWords;
  },

  methods: {
    renameWords() {
       window.pyobject.rename_words(this.words);
     },
  },
  created() {
     // eslint-disable-next-line no-undef
     new QWebChannel(qt.webChannelTransport, channel => {
       window.pyobject = channel.objects.pyobject;
     });
   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h1 {
   margin-bottom: 60px;
   font-size: 30px;
 }

 .command {
   font-size: 18px;
   display: inline-block;
   color: #490AEF;
 }
</style>
