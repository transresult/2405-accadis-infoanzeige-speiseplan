<template>
  <v-app>
    <!-- Full HD Anzeiger-->
    <v-container class="px-0 pt-6" style="width: 1920px; height: 1080px; border: 1px solid #ccc">
      <v-main>
        <slot></slot>
      </v-main>
    </v-container>
  </v-app>
</template>
