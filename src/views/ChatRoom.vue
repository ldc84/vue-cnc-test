<template>
  <div class="inner-wrap" fluid fill-height inner-wrap>
    <Message-List :msgs="msgDatas" class="msg-list"></Message-List>
    <Message-From v-on:submitMessage="sendMessage" class="msg-form" ></Message-From>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import MessageList from '~@/Chat/List';
import MessageForm from '~@/Chat/Form.vue';
import Constant from '@/store/Constant';

export default {
  name: 'ChatRoom',
  data() {
    return {
      datas: [],
    };
  },
  components: {
    'Message-List': MessageList,
    'Message-From': MessageForm,
  },
  computed: {
    ...mapState({
      'msgDatas': state => state.socket.msgDatas,
    }),
  },
  created() {
    const $ths = this;
    this.$socket.on('chat', (data) => {
      this.pushMsgData(data);
      $ths.datas.push(data);
    });
  },
  methods: {
    ...mapMutations({
      'pushMsgData': Constant.PUSH_MSG_DATA,
    }),
    sendMessage(msg) {
      this.pushMsgData({
        from: {
          name: '나',
        },
        msg,
      });
      this.$sendMessage({
        name: this.$route.params.user,
        msg,
      });
    },
  },
};
</script>

<style>
  html {
    overflow-y:hidden;
  }
  .msg-form {
    bottom: -24px;
    position: absolute;
    left: 10px;
    right: 10px;
  }
  .msg-list {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 60px;
    overflow-x:hidden;
    overflow-y: auto;
  }
</style>