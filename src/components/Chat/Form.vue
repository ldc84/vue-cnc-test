<template>
  <div class="inner-wrap">
    <v-text-field
      v-model="msg"
      label="chat"
      placeholder="메세지 입력.."
      solo
      @keyup.13="submitMessageFunc"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'MessageForm',
  data() {
    return {
      msg: '',
      date: null
    };
  },
  methods: {
    submitMessageFunc() {
      if (this.msg.length === 0) return false;
      this.now()
      this.$emit('submitMessage', this.msg, this.date);
      this.msg = '';
      return true;
    },
    now() {

      var date = new Date();
      // var aaaa = date.getUTCFullYear();
      var gg = date.getUTCDate();
      var mm = (date.getUTCMonth() + 1);

      if (gg < 10)
          gg = "0" + gg;

      if (mm < 10)
          mm = "0" + mm;

      var cur_day = mm + "-" + gg;
      var hours = date.getUTCHours() + 9
      var minutes = date.getUTCMinutes()
      var seconds = date.getUTCSeconds();

      if (hours < 10)
        hours = "0" + hours;
      if (minutes < 10)
        minutes = "0" + minutes;
      if (seconds < 10)
        seconds = "0" + seconds;
      return this.date = cur_day + " " + hours + ":" + minutes;
    }
  },
};
</script>