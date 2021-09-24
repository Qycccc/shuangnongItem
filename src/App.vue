<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <van-nav-bar
      :title='header'
    />
    <!-- 路由挂载点 -->
        <router-view/>
    <!-- 底部导航栏部分 -->
      <van-tabbar v-model="active" route>
          <van-tabbar-item  to="/safe" icon="home-o">平安乡村</van-tabbar-item>
          <van-tabbar-item  to="/ele" icon="search">电子围栏</van-tabbar-item>
          <van-tabbar-item  to="/beauty" icon="friends-o">美丽乡村</van-tabbar-item>
          <van-tabbar-item  to="/my" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      active: 0,
      header: '平安乡村'
    }
  },
  watch: {
    $route: {
      handler (newI) {
        this.header = newI.meta.title
      }
    }
  }
}
</script>

<style lang="less">
  h1 {
    font-size: 20px;
  };
  .van-nav-bar__title {
    font-weight: 600!important
  }
</style>
