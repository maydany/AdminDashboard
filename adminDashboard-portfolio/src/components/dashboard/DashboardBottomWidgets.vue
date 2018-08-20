<template>
  <div class="row bottom-widgets">

    <div class="col-md-12 d-flex">
      <vuestic-widget class="business-posts">
        <vuestic-social-news class="vuestic-social-news" :news="news" :url="'https://www.google.co.kr/search?q=%EB%A3%A8%EB%AF%B8%EB%8B%88&rlz=1C1ZKTG_koKR718KR718&source=lnms&tbm=nws&sa=X&ved=0ahUKEwimm4D-wfjcAhVEw7wKHZlIBEIQ_AUIDSgE&biw=1284&bih=865'"></vuestic-social-news>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard-bottom-widgets',

    data () {
      return {
        news: [
          {
            photoURL: 'https://i1.wp.com/www.venturesquare.net/wp-content/uploads/2018/04/180409-lulu-lab-001.jpg?resize=768%2C432'
          },
          {
            photoURL: 'http://pimg.daara.co.kr/kidd/photo/2018/06/27/thumbs/thumb_520390_1530092379_16.jpg'
          },
          {
            photoURL: 'https://i0.wp.com/www.venturesquare.net/wp-content/uploads/2018/05/180504-lulu-lab-001.jpg?resize=768%2C450'
          },
          {
            photoURL: 'http://img.etnews.com/photonews/1707/977895_20170726173258_506_0001.jpg'
          },
          {
            photoURL: 'http://img.etnews.com/photonews/1802/1040135_20180202094949_921_0001.jpg'
          },
          {
            photoURL: 'https://i1.wp.com/www.venturesquare.net/wp-content/uploads/2018/04/180409-lulu-lab-001.jpg?resize=768%2C432'
          },
          {
            photoURL: 'https://post-phinf.pstatic.net/MjAxNzEwMjJfMTQ3/MDAxNTA4NjA5MzE3MjY5.ftNjZZzDffiNy9JP8-kMkwG0qXSjU4r06Fuwz6Zxzj0g.ZwfACY-u_HW62qeaDo6okFgb7nxNOnRn9vHmIgUKJ5cg.JPEG/lumini_data04-1200x838.jpg?type=w1200'
          },
          {
            photoURL: 'https://i2.wp.com/i-db.co.kr/wp-content/uploads/2018/06/001_640px-2.jpg?w=640'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-widgets {
    > div[class^='col'] {
      & > div {
        width: 100%;
      }
    }
  }
</style>
