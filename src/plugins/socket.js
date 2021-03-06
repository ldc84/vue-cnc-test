import Vue from 'vue';
import io from 'socket.io-client';

const ip = 'http://10.250.55.157:3000';
const socket = io(ip);


const SocketPlugin = {
  install(vue) {
    vue.mixin({
    });

    vue.prototype.$sendMessage = ($payload) => {
      socket.emit('chat', {
        msg: $payload.msg,
        name: $payload.name,
        date: $payload.date
      });
    };

    // 인스턴스 메소드 추가
    vue.prototype.$socket = socket;
  },
};

Vue.use(SocketPlugin);