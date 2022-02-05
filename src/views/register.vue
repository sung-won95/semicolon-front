<template>
  <div class="hello">
    <h1>
      세미콜론 커뮤니티에 오신 여러분을 환영합니다!<br>
    </h1>
    <div v-if="user.isLogin">{{this.user.userNickname}}({{this.user.userName}})님,
      <span v-html="user.greetingHtml"></span>
    </div>
    <div v-else>다양한 서비스를 즐기기 위해 회원가입을 진행해주세요.</div>
    <div class="container">
      <form>
        <br>
        <div>
          <label for="email_label" id="email_label">이메일(Email) </label>
          <input type="text" ref="email_Id"/> @ <input type="text" ref="email_Domain"/>
          <input type="email" id="email_input">
          <select name="email_Domain" @change="emailRulesCheck" v-model="email.emailChoice">
            <option disabled value = "직접 입력">본인의 이메일을 선택해주세요</option>
            <option value = "" >직접입력</option>
            <option :value = "{email: 'naver.com'}">naver.com</option>
            <option :value = "{email: 'kakao.com'}">kakao.com</option>
            <option :value = "{email: 'gmail.com'}">gmail.com</option>
            <option :value = "{email: 'hanmail.net'}">hanmail.net</option>
          </select>
        </div>
        <br>
        <div>
          <label for="nickname">닉네임(Nickname) </label>
          <input type="text" id="nickname" v-model="signup.nickname" /> <button name="confirm_check_button" @click="confirm_check">중복체크 </button>
        </div>
        <br>
        <div>
          <label for="password" name="Password">비밀번호(Password) </label>
          <input type="password" id="password" v-model="signup.password" />
        </div>
        <br>
        <div>
          <label for="passwordConfirm" name="PasswordConfirm">비밀번호 확인(Password Confirm) </label>
          <input type="password" id="passwordConfirm" v-model="signup.passwordConfirm" />
        </div>
        <br>
        <br>
        <button @click="goLoginPage">회원가입</button>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SignupForm',
  data () {
    return {
      email: {
        emailChoice: ''
      },
      user: {
        userNickname: 'JeonJongYook#1352',
        userName: '종욱',
        greetingHtml: '<span style="color:#0a45c7">안녕하세요.</span>',
        emailid: '',
        emaildomain: '',
        isLogin: false
      },
      signup: {
        email_Id: '',
        email_Domain: '',
        nickname: '',
        password: '',
        passwordConfirm: ''
      },
      login: {
        email: '',
        nickname: '',
        password: ''
      }
    }
  },
  methods: {
    emailRulesCheck (e) {
      e.preventDefault()
    },
    confirm_check (e) {
      e.preventDefault()
      alert('confirm checked')
    },
    goLoginPage (e) {
      e.preventDefault()
      if (this.signup.email === '' || this.signup.password === '' || this.signup.nickname === '' || this.signup.passwordConfirm === '') {
        alert('모든 항목에 응답해주셔야 해요!')
      }
      if (this.signup.email_Id === this.user.emailid) {
        alert('이메일 1이 일치 합니다.')
      }
      if (this.signup.email_Domain === this.user.emaildomain) {
        alert('이메일 2가 일치 합니다.')
      }
      if (this.signup.password === this.signup.passwordConfirm) {
        alert('비밀번호와 확인이 모두 일치합니다.')
      } else {
        return function (e) {
          e.preventDefault()
          alert('님 환영합니다!')
        }
      }
    }
  },
  computed: {
  }
}

</script>

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
