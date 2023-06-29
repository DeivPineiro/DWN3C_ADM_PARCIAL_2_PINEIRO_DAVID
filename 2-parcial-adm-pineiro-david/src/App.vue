<template>
  <div style="position: relative;">
    <v-app>
      <span class="bg"></span>

      <template>
        <div>
          <v-app-bar
            src="https://fotografias.lasexta.com/clipping/cmsimages01/2022/11/29/1F3E89E0-6810-43BF-9387-CD3DAC15B490/cuales-son-frutas-verduras-temporada-diciembre_98.jpg?crop=6720,3781,x0,y36&width=1900&height=1069&optimize=low&format=webply">
            <v-img max-height="50" max-width="50" src="../src/assets/logo.png"></v-img>
            <v-toolbar-title class="white--text">Volvemos a ir de compras!!!</v-toolbar-title>
            <v-spacer></v-spacer>

          </v-app-bar>
        </div>
      </template>
      <template>
        <v-tabs fixed-tabs background-color="green lighten-3" dark>
          <v-tab>
            <router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link>
          </v-tab>
          <v-tab>
            <router-link style="text-decoration: none; color: inherit;" to="/lista">Lista</router-link>
          </v-tab>
          <v-tab>
            <router-link style="text-decoration: none; color: inherit;" to="/oferta">Oferta</router-link>
          </v-tab>

        </v-tabs>
      </template>

      <v-main>

        <router-view />

      </v-main>
      <template>



      </template>

      <template>
        <v-footer fixed padless color="green lighten-3">
          <v-col class="text-center white--text" cols="12">
            {{ new Date().getFullYear() }} — <strong class="white--text">Piñeiro David</strong>
          </v-col>
        </v-footer>
      </template>

    </v-app>



  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>


<style>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('https://img.freepik.com/vector-gratis/composicion-horizontal-frutas-verduras_1284-29854.jpg?w=2000') no-repeat center center;
  background-size: cover;
  background-color: red;
  transform: scale(1.1);
}

.footer {
  text-align: center;
  color: whitesmoke;
  width: 100%;
  position: absolute;
  bottom: 0;

}
</style>


