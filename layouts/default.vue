<template>
  <v-app style="background-color: lightslategray">
    <!-- Full HD Anzeiger-->
    <v-container style="width: 1920px; height: 1080px; background-color: white">
      <navigation-bar />
      <v-main>
        <slot />
      </v-main>
    </v-container>
  </v-app>
</template>
