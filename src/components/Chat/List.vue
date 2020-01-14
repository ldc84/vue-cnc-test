<template>
  <v-list class="list" v-auto-bottom="msgs">
    <transition-group name="list" >
      <div v-for="(msg,index) in msgs" v-bind:key="index">
        <div class="d-flex align-center" :class="{'me' : msg.from.name == '나'}">
          <p class="name">{{msg.from.name}}</p>
          <p class="msg">
            <span>{{msg.msg}}</span>
          </p>
          <p class="time">{{msg.date}}</p>
        </div>
      </div>
    </transition-group>
  </v-list>
</template>

<script>
export default {
  name: 'MessageList',
  props: ['msgs'],
};
</script>

<style lang="scss">
  .list {
    padding:10px;
    p {
      margin:3px;
    }
    .name {
      width:80px;
      font-size:12px;
      font-weight:700;
    }
    .msg {
      span {
        display:inline-block;
        padding:3px 10px;
        font-size:13px;
        background-color:rgba(255,255,255,0.2);
        border-radius:10px;
      }
    }
    .time {
      font-size:11px;
      font-weight:300;
      opacity:0.3;
    }
    .me {
      flex-flow: row-reverse;
      .name {
        text-align:right;
        width:26px;
      }
    }
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }
</style>