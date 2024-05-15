import { VCard } from 'vuetify/lib/components/index.mjs';
<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-0">
        <v-container id="hero" class="pa-0 mt-4">
          <v-card color="" class="">
            <v-row>
              <v-col cols="9">
                <v-img height="100%" cover src="img/header-gemuese.jpg">
                  <div class="text-white pa-8 pb-4">Öffnungszeiten accadis Family Bistro</div>
                  <div class="text-h5 px-8 text-white pb-4">Mo. - Fr. 11:30 Uhr - 14:00 Uhr</div>
                  <div class="px-8 text-white">Hinweis: 22.06.24 geschlossen</div>
                </v-img>
              </v-col>
              <v-col cols="3" class="pr-14 pt-6">
                <div class="text-h3 py-4 text-right">Menü der Woche</div>
                <div class="text-h5 py-4 text-right">20.06.2024 - 24.06.2024</div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>

        <v-container class="px-0">
          <v-card color="grey-lighten-4" class="pa-3 pt-6">
            <v-card-text>
              <v-card class="featuredevent my-2 mb-6 pa-3">
                <div
                  class="px-4 py-0 card-date"
                  style="
                    position: absolute;
                    top: -10px;
                    right: 0;
                    border-color: primary;
                    border-radius: 10px;
                    border-width: 1px;
                    border-color: rgb(0, 76, 147);
                    border-top-width: 10px;
                    border-style: solid;
                  "
                >
                  <div class="card-date-box d-flex align-items-end w-100">
                    <div class="card-date-content w-100 flex-column justify-content-center align-center">
                      <div class="text-h5 font-weight-bold text-center">04</div>
                      <div class="text-center">März</div>
                    </div>
                  </div>
                </div>

                <v-card-title>Infotag Bachelor Management</v-card-title>
                <v-card-subtitle class="py-4">
                  <v-row>
                    <v-col><v-icon>mdi mdi-calendar</v-icon>12.03.2024</v-col>

                    <v-col><v-icon>mdi mdi-map-marker</v-icon>vor Ort oder online</v-col>

                    <v-spacer></v-spacer> </v-row
                ></v-card-subtitle>
                <v-card-text class="px-8 pb-1">
                  <v-row>Speiseplan Family Bistro </v-row>
                </v-card-text>
                <v-card-actions
                  ><v-spacer></v-spacer> <v-btn>Zum Event<v-icon>mdi mdi-chevron-right</v-icon></v-btn></v-card-actions
                >
              </v-card>
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="less">
.featuredevent {
  &.v-card {
    overflow: visible;
  }

  .v-card-title {
    overflow: auto;
    white-space: normal;
    line-height: 1.4 !important;
    margin-right: 50px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>
