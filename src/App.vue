<template>
  <div id="app">
    <h1>State Manager</h1>
    <div id="nav">
      <router-link to="/Registration">Registration</router-link>
      <router-link to="/Dashboard">Dashboard</router-link>
    </div>
    <router-view />
    <footer>
      <h1>@miaoziyin.copyright</h1>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app h1 {
  text-align: left;
}

#app #nav {
  text-align: right;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
