<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="shrink col-12 text-center">
        <v-text-field
          label="대화명"
          v-model="user"
          @keyup.enter="submit"
        ></v-text-field>
        <v-btn 
          rounded 
          color="primary" 
          dark 
          large
          :disabled="!user"
          @click="submit"
        >Join</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Constant from '@/store/Constant';

export default {
  name: 'login',
  data(){
    return {
      valid: false,
      lazy: false,
      user: null
    }
  },
  created() {
    this.$store.commit(Constant.CLEAR_DATA);
  },
  methods: {
    submit(){
      window.localStorage.removeItem('msg');
      this.$router.push(`/chat/${this.user}`);
    }
  }
}
</script>
