<template>
  <div class="hello">
    <h1>
      세미콜론 커뮤니티에 오신 여러분을 환영합니다!<br>
      <a href="https://github.com/JeonJongYook" target="_blank" rel="noopener">JeonJongYookGitHub</a>.
    </h1>
  </div>
  <br>
  <div>

  </div>
  <br>
  <div>
    사용할 닉네임 :  <input name="namevalue" type="text">
    <br>
    <br>
    사용할 비밀번호 : <input name="password" type="password">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
