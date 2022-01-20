<template>
  <div class="hello">
    <h1>
      세미콜론 커뮤니티에 오신 여러분을 환영합니다!<br>
    </h1>

    <form @submit.prevent="submitForm">
      <br>
      <div>
        <label for="email" name="email">이메일(Email) </label>
        <input type="text" id="email" v-model="email"/> @ <input type="text" name="e_domain">
        &nbsp;
        <select name="domain" onchange="domainCheck();">
          <option value = "" selected="selected">직접입력</option>
          <option value = "naver.com" >naver.com</option>
          <option value = "kakao.com">kakao.com</option>
          <option value = "gmail.com">gmail.com</option>
          <option value = "hanmail.net">hanmail.net</option>
        </select>
<!--        <div v-if="!">-->
<!--          유효하지 않은 이메일 형식 입니다.-->
<!--        </div>-->
        <br>
      </div>
      <br>
      <div>
        <label for="nickname">닉네임(Nickname) </label>
        <input type="text" id="nickname" v-model="nickname" /> <button type="submit" name="confirmcheckbutton">중복체크 </button>
      </div>
      <br>
      <div>
        <label for="password" name="emaillb">비밀번호(Password) </label>
        <input type="password" id="password" v-model="password" />
      </div>
      <br>
      <div>
        <label for="passwordConfirm" name="emaillb">비밀번호 확인(Password Confirm) </label>
        <input type="password" id="passwordConfirm" v-model="passwordConfirm" />
      </div>
      <br>
      <br>
      <button type="submit" name="emaillb" @click="goLoginPage">회원가입 </button>
    </form>
  </div>
</template>

<script>
// import {validateEmail} from '../utils/validation'
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }

export default {
  name: 'SignupForm',
  data() {
    return {
      signup: {
        email: '',
        nickname: '',
        password: '',
        passwordConfirm: ''
      },
      login: {
        email: '',
        nickname: '',
        password: ''
      },
    };
  },
  methods: {
    goLoginPage () {
      if (this.signup.email == null || this.signup.password == null || this.signup.nickname == null || this.signup.passwordConfirm == null ){
        alert('모든 항목을 입력해주세요!')
        return
      }
      if (!this.PWValid) {
        alert('비밀번호 형식에 올바르지 않습니다.')
        return
      }
      if (!this.NicknameValid) {
        alert('닉네임 형식에 올바르지 않습니다.')
        return
      }
      if (!this.PWconfirmValid) {
        alert('비밀번호 형식에 올바르지 않습니다.')
        return
      }
      if (this.signup.password === this.signup.passwordConfirm){
        alert('비밀번호 둘다 일치')
      }
  },
    // emailVaild () {
    //   if (this.signup.email == )
    // },
  computed: {
    emailValid () {
      return /^[A-Za-z0-9]+$/.test(this.signup.email)
    },
  },
},
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle&family=Mochiy+Pop+P+One&display=swap');

* {
  align-items: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
