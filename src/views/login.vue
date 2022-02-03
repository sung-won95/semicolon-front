<template>
  <div class="login">
    <img src="@/assets/logo.png" >
    <h1>
      세미콜론 커뮤니티<br>
    </h1>
    <form @submit.prevent="submitForm">
      <br>
      <div>
        <label for="Nickname">닉네임(Nickname) </label>
        <input type="text" id="Nickname" v-model="nickname" >
      </div>
      <br>
      <div>
        <label for="Password" name="pw">비밀번호(Password) </label>
        <input type="password" id="Password" v-model="password" >
      </div>
      <br>
      <button type="submit" name="login" @click="LoginConfirm"> 로그인 </button>
      <div>
        <br>
        <a href="http://localhost:8080/register">회원가입</a>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'LoginForm',
  data() {
    return {
      signup: {
        email: '',
        nickname: '',
        password: '',
      },
      login: {
        nickname: '',
        password: '',
      },
    };
  },
  methods: {
    PWValid: false,
    NicknameValid: false,
    LoginConfirm() {
      if (this.login.password == null || this.login.nickname == null) {
        alert('모든 항목을 입력해주세요!');
        return;
      }
      if (!this.PWValid) {
        alert('비밀번호가 올바르지 않습니다.');
        return;
      }
      if (!this.NicknameValid) {
        alert('닉네임이 존재하지 않습니다.');
      }
      if(this.PWValid && this.NicknameValid) {
        alert('환영합니다');
      }
    },
    computed: {
      emailValid() {
        return /^[A-Za-z0-9]+$/.test(this.login.email);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
* {
  align-items: center;
}
* {margin: 0; padding: 0; box-sizing: border-box;}
body {
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: aqua no-repeat center;
  background-size: cover;
}
body::before{
  content: "";
  position: absolute; z-index: 1;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.3);
}
.login-form {position: relative; z-index: 2;}
.login-form h1 {
  font-size: 32px; color: #fff;
  text-align: center;
  margin-bottom: 60px;
}
.int-area{
  width: 400px; position: relative;
  margin-top: 20px;
}
.int-area:first-child {margin-top: 0;}
.int-area input {
  width: 100%;
  padding: 20px 10px 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #999;
  outline: none;
}
.int-area label {
  position: absolute; left: 10px; top: 15px;
  font-size: 18px; color: #999;
  transition: all .5s ease;
}
.int-area input:focus + label,
.int-area input:valid + label {
  top: -2px;
  font-size: 13px; color: #166cea;
}
.btn-area {margin-top: 30px;}
.btn-area button {
  width: 100%; height: 50px;
  background: #166cea;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}
a {
  color: #999;
  font-size: 15px;
  text-decoration: none;
}
</style>
