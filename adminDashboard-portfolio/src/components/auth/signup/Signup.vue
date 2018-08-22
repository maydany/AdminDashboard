<template>
  <div class="signup">
    <h2>회원 가입</h2>
    <form method="post" @submit.prevent="onSignUp" action="/auth/signup" name="signup">
      <div class="form-group">
        <div class="input-group">
          <input type="email" id="email" v-model="email" required="required"/>
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input pattern=".{6,}" title="비밀번호는 6자 이상입니다." type="password" id="password" v-model="password" required="required"/>
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <vuestic-checkbox
        :id="'checkbox1'"
        v-model="checkboxOneModel">
        <template slot="label">
          <router-link to=""></router-link>
        </template>
        입력하신 정보는 Firebase DB에 저장됩니다.
      </vuestic-checkbox>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit" :disabled="okSign">
          {{'auth.signUp' | translate}}
        </button>
        <router-link class='link' :to="{name: 'dashboard'}"><strong>게스트로 접속</strong></router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'signup',
    data () {
      return {
        checkboxOneModel: false,
        email: '',
        password: ''
      }
    },
    computed: {
      okSign () {
        if (this.checkboxOneModel === true) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      onSignUp () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        this.$router.push('/auth/login')
      }
    }
  }
</script>

<style lang="scss">
  .signup {
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
      margin-top: 2.6875rem;
    }
  }
</style>
