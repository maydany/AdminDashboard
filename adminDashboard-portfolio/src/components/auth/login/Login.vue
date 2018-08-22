<template>
  <div class="login">
    <h2>임성훈의 포트폴리오에 오신걸 환영합니다!</h2>
    <form @submit.prevent="onSignin" method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="email" v-model="email" id="email" required="required"/>
          <label class="control-label" for="email">이메일</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input pattern=".{6,}" title="비밀번호는 6자 이상입니다." type="password" v-model="password" id="password" required="required"/>
          <label class="control-label" for="password">비밀번호</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center down-container">
        <button class="btn btn-primary mt-3" type="submit">
          로그인
        </button>
        <div class="mt-3 mx-auto"> <router-link class='link' :to="{name: 'signup'}"><strong>회원 가입하기</strong></router-link></div>
      </div>
      <div class="mt-4 ml-10">  <router-link class='link' :to="{name: 'dashboard'}"><strong>게스트로 접속</strong></router-link></div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/dashboard')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
    }
  }
</script>
<style lang="scss">
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }

    .ml-10 {
      margin-left: 200px;
    }
  }
</style>
