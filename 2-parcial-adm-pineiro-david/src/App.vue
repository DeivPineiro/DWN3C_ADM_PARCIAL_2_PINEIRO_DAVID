<template>
  
  <v-app>
    <span class="bg"></span>
    <template>
      <div>
        <v-app-bar color="deep-purple accent-4"
          src="https://fotografias.lasexta.com/clipping/cmsimages01/2022/11/29/1F3E89E0-6810-43BF-9387-CD3DAC15B490/cuales-son-frutas-verduras-temporada-diciembre_98.jpg?crop=6720,3781,x0,y36&width=1900&height=1069&optimize=low&format=webply">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title class="white--text">Volvemos a ir de compras!!!</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
              </v-btn>
            </template>
          </v-menu>
        </v-app-bar>
      </div>
    </template>
    <template>
      <v-tabs fixed-tabs background-color="green lighten-3" dark>
        <v-tab>
          <router-link style="text-decoration: none; color: inherit;" to="/"><v-tab>Home</v-tab></router-link>
        </v-tab>
        <v-tab>
          <router-link style="text-decoration: none; color: inherit;" to="/lista"><v-tab>Lista</v-tab></router-link>
        </v-tab>
        <v-tab>
          <router-link style="text-decoration: none; color: inherit;" to="/oferta"> <v-tab>Oferta</v-tab></router-link>
        </v-tab>

      </v-tabs>
    </template>

    <v-main>
     
        <router-view />
      
    </v-main>
  </v-app>
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
    background: url( 'https://img.freepik.com/vector-gratis/composicion-horizontal-frutas-verduras_1284-29854.jpg?w=2000') no-repeat center center;
    background-size: cover;
    background-color: red;
    transform: scale(1.1);
  }

</style>


