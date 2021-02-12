<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <v-bottom-navigation
        app
        v-model="value"
        :background-color="color"
        dark
        shift
        grow
    >
      <v-btn v-for="item in bottomNavigation" :key="item.name" :to="item.to">
        <span>{{ item.name }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>

</template>

<script>
export default {
  name: 'App',
  data: () => ({
    value: 1,
    bottomNavigation: [{
      name: '首页',
      icon: 'mdi-home-variant-outline',
      to: '/'
    }, {
      name: '购物车',
      icon: 'mdi-cart-outline',
      to: '/shoppingCart'
    }, {
      name: '个人中心',
      icon: 'mdi-account-outline',
      to: '/personalCenter'
    }]
  }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return 'blue-grey'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
        default:
          return 'blue-grey'
      }
    },
  }
};
</script>
