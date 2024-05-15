import { VCard } from 'vuetify/lib/components/index.mjs';
<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-0">
        <v-container id="hero" class="pa-0 mt-10">
          <v-card color="" class="">
            <v-row>
              <v-col cols="9" class="px-12 my-W12">
                <div class="text-h2 py-4 pt-8">Menü der Woche</div>
                <div class="text-h5 py-4 pt-8">30.05.2024 - 04.06.2024</div>
              </v-col>
              <v-col cols="3"> <v-img contain src="img/kv.webp"></v-img></v-col>
            </v-row>
          </v-card>
        </v-container>

        <v-container id="introduction">
          <v-card color="" class="px-6 py-4">
            <div class="text-h6 font-weight-regular">
              Es gibt zahlreiche Möglichkeiten, die accadis Hochschule und ihre Studiengänge näher kennenzulernen. Studieninfotage, Schnupper-Vorlesung,
              Bildungsmessen - besuche unsere Angebote und finde heraus, welches Studium am besten passt.
            </div>
          </v-card>
        </v-container>

        <v-container id="upcoming">
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
                    <v-col><v-icon>mdi mdi-clock</v-icon>18:00</v-col>
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
      items: [
        {
          Datum: "10.05.2024",
          name: "Infotag Bachelor Management",
          Format: "online",
          stock: true,
        },
        {
          Datum: "10.05.2024",
          name: "Infotag Bachelor Management",
          Format: "online",
          stock: true,
        },
        {
          Datum: "10.05.2024",
          name: "Infotag Bachelor Management",
          Format: "online",
          stock: true,
        },
        {
          Datum: "10.05.2024",
          name: "Infotag Bachelor Management",
          Format: "online",
          stock: true,
        },
      ],
    };
  },
};
</script>
