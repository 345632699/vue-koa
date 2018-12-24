<template>
  <el-container class="app-container">
    <el-aside class="app-side" style="width: 200px">
      <side></side>
    </el-aside>
    <el-container style="overflow-x: auto">
      <el-header class="app-header" :height="headerHeight + 'px'">
        <app-header @switch="handleSideSwitch" @set-theme="handleSetTheme"
                    @hide-side="handleSwitchHideSide"></app-header>
      </el-header>
      <el-main class="app-body">
        <el-container style="height: 100%;min-height: 100%;overflow: auto" id="appBody">
          <el-main class="app-page-body">
            <router-view></router-view>
          </el-main>
          <el-footer class="app-footer" :height="footerHeight + 'px'">
            <app-footer></app-footer>
          </el-footer>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppFooter from '@/components/layout/app-footer'
import AppHeader from '@/components/layout/Header'
import Side from '@/components/layout/Side'

export default {
  name: 'home',
  data () {
    return {
      isCollapse: false,
      hideSide: false,
      sideWidth: 200,
      footerHeight: 50,
      headerHeight: 50,
      theme: {
        theme: {}
      }
    }
  },
  methods: {
    handleSideSwitch (val) {
      this.isCollapse = val
      this.sideWidth = val ? 60 : 200
    },
    handleSwitchHideSide () {
      this.hideSide = !this.hideSide
    },
    handleSetTheme (theme) {
      this.theme = theme
    }
  },
  components: {
    AppHeader,
    AppFooter,
    Side
  }
}
</script>

<style scoped lang="less">
  .app-container {
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .app-container .app-header {
    padding: 0;
    background: #16aad8;
    overflow: visible;
    z-index: 100;
  }

  .app-container .app-side {
    width: 200px;
    transition: all 0.5s ease;
  }

  .app-container .app-body {
    background: #ecf0f5;
    padding: 0;
    height: 1px;
  }

  .app-container .app-footer {
    background: #fff;
    border-top: solid 1px rgba(48, 54, 62, 0.14);
  }

  .app-container .app-page-body {
    overflow: visible;
    padding: 0;
  }

  .app-header-logo-box {
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .app-header-logo-box .header-logo {
    height: 42px;
    margin-top: -17px;
    margin-right: 5px;
    vertical-align: middle;
  }

  .app-header-logo-box .header-logo-text {
    font-size: 20px;
    font-weight: bold;
    opacity: 1;
  }

  /*mini-side*/

  .app-container.mini-side .app-side {
    overflow: visible;
  }

  .app-container.mini-side .app-side .el-menu--collapse {
    width: 60px;
  }

  .app-container.mini-side .header-logo {
    margin-left: -10px;
  }

  .app-container.mini-side .header-logo-text {
    opacity: 0;
  }

  /*hide-side*/

  .app-container.hide-side .app-side {
    display: none;
  }

  .app-container .app-side {
    background: #303133;
    width: 200px;
  }
</style>
