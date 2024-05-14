
import { VCard } from 'vuetify/lib/components/index.mjs';
<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-0">

        <v-container id="hero" fluid class="pa-0 mt-10">
          <v-card color="grey-lighten-2" class="">

            <v-row>

              <v-col cols="6" class="px-12 my-sm-12">
                <div class="text-h4 text-lg-h3 font-weight-bold text-md-h2 py-4 pt-8 ">In­fo-Events</div>
                <div class=" pt-">
                  <v-chip class="mr-1 mb-1 font-weight-bold" color="primary" variant="outlined">Infosessions</v-chip>
                  <v-chip class="mr-1 mb-1 font-weight-bold" color="primary" variant="outlined">Infotage</v-chip>
                  <v-chip class="mr-1 mb-1 font-weight-bold" color="primary"
                    variant="outlined">Schnuppervorlesungen</v-chip>
                  <v-chip class="mr-1 mb-1 font-weight-bold" color="primary" variant="outlined">Messen</v-chip>
                  <v-chip class="mr-1 mb-1 font-weight-bold" color="primary" variant="outlined">Schulvorträge</v-chip>
                  <v-chip class="mr-1 mb-1 font-weight-bold" color="primary" variant="outlined">Webinare</v-chip>
                </div>

              </v-col>
              <v-col cols="6"> <v-img contain src="img/kv.webp"></v-img></v-col>


            </v-row>


          </v-card>
        </v-container>

        <v-container id="introduction">
          <v-card color="" class="px-6 py-4">

            <div class="text-h6 font-weight-regular">
              Es gibt zahlreiche Möglichkeiten, die accadis Hochschule und ihre Studiengänge näher kennenzulernen.
              Studieninfotage, Schnupper-Vorlesung, Bildungsmessen - besuche unsere Angebote und finde heraus, welches
              Studium am besten passt.
            </div>
          </v-card>
        </v-container>

        <v-container id="upcoming">
          <v-card color="grey-lighten-4" class="pa-3 pt-6">
            <v-card-title class="text-h4 text-lg-h3 font-weight-bold text-md-h2 py-4 pb-8  ">Kommende
              Termine</v-card-title>
            <v-card-text>

              <v-card class="featuredevent my-2 mb-6 pa-3">


                <div class="px-4 py-0 card-date"
                  style=" position: absolute; top: -10px; right:0 ;border-color:primary; border-radius: 10px; border-width:1px; border-color:rgb(0, 76, 147); border-top-width:10px; border-style: solid;">
                  <div class="card-date-box d-flex align-items-end w-100">
                    <div class="card-date-content w-100 flex-column justify-content-center align-center">
                      <div class="text-h5 font-weight-bold  text-center">04</div>
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

                    <v-spacer></v-spacer>
                  </v-row></v-card-subtitle>
                <v-card-text class="px-8 pb-1">

                  <v-row>Bei unserem Infotag erfährst Du alles rund um das Bachelor-Studium an der accadis Hochschule Bad
                    Homburg im Fachbereich Management. </v-row>
                </v-card-text>
                <v-card-actions><v-spacer></v-spacer> <v-btn>Zum Event<v-icon>mdi
                      mdi-chevron-right</v-icon></v-btn></v-card-actions>
              </v-card>

              <v-card class="featuredevent my-2 mb-6 pa-3">


                <div class="px-4 py-0 card-date"
                  style=" position: absolute; top: -10px; right:0 ;border-color:primary; border-radius: 10px; border-width:1px; border-color:rgb(0, 76, 147); border-top-width:10px; border-style: solid;">
                  <div class="card-date-box d-flex align-items-end w-100">
                    <div class="card-date-content w-100 flex-column justify-content-center align-center">
                      <div class="text-h5 font-weight-bold  text-center">12</div>
                      <div class="text-center">März</div>
                    </div>
                  </div>
                </div>

                <v-card-title>Infosession Zertifizierte Weiterbildung Systemischer Business Coach and Change
                  Manager</v-card-title>
                <v-card-subtitle class="py-4">
                  <v-row>
                    <v-col><v-icon>mdi mdi-calendar</v-icon>12.03.2024</v-col>
                    <v-col><v-icon>mdi mdi-clock</v-icon>18:00</v-col>
                    <v-col><v-icon>mdi mdi-map-marker</v-icon>online</v-col>

                    <v-spacer></v-spacer>
                  </v-row></v-card-subtitle>
                <v-card-text class="px-8 pb-1">

                  <v-row>Bei unserem Infotag erfährst Du alles rund um das Bachelor-Studium an der accadis Hochschule Bad
                    Homburg im Fachbereich Management. </v-row>
                </v-card-text>
                <v-card-actions><v-spacer></v-spacer> <v-btn>Zum Event<v-icon>mdi
                      mdi-chevron-right</v-icon></v-btn></v-card-actions>
              </v-card>



            </v-card-text>



          </v-card>
        </v-container>

        <v-container id="allevents">


          <v-card class="pa-3 pt-4" rounded="0" variant="flat" style="background-color: transparent">
            <v-card-title class="text-h4 text-lg-h3 font-weight-bold text-md-h2 py-4 pb-8  ">Alle
              Events</v-card-title>

            <v-card flat style="width: 100%">
              <v-container class="pt-2">
                <v-row class="my-0">

                  <v-col class="py-0" cols="12" sm="6">
                    <v-select chips variant="outlined" label="Veranstaltungsart"></v-select>
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <v-select variant="outlined" label="Ort" chips></v-select>
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <v-select variant="outlined" label="Veranstaltungsformat" chips item-value="value"></v-select>
                  </v-col>
                  <v-col class="py-0" cols="12" sm="6">
                    <v-select variant="outlined" label="Zeitraum" chips item-value="value"></v-select>
                  </v-col>
                </v-row>

                <v-data-table v-model:search="search" :items="items">
                  <template v-slot:header.stock>
                    <div class=""></div>

                  </template>


                  <template v-slot:item.stock="{ item }">
                    <div class="text-end">
                      <v-btn variant="text" append-icon="mdi mdi-chevron-right" text="Zum Event " class="text-uppercase"
                        size="small" label></v-btn>
                    </div>
                  </template>


                </v-data-table>




              </v-container>
            </v-card>

          </v-card>


        </v-container>


        <v-container id="Schulvortraege-webinare">
          <v-card variant="tonal" color="grey-lighten-4" class="pa-3 pt-6">

            <v-row>


              <v-col cols="12" sm="6" md="4">
                <v-card class="pa-3 pt-4" height="100%">
                  <v-card-title>Infotage</v-card-title>
                  <v-card-text>Entdecken Sie unser vielfältiges Studienprogramm des Studienbereichs Management in
                    Vorträgen unserer Dozenten. Achten Sie auf Termin-Aushänge in Ihrer Schule.</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4"><v-card class="pa-3 pt-4" height="100%">
                  <v-card-title>Infosessions</v-card-title>
                  <v-card-text>Auf zahlreichen Messen beraten wir Sie gern zu unserem Studienangebot. Wir freuen uns über
                    Ihren Besuch an unserem Messestand!</v-card-text>

                </v-card></v-col>

              <v-col cols="12" sm="6" md="4">
                <v-card class="pa-3 pt-4" height="100%">
                  <v-card-title>Schnuppervorlesung</v-card-title>
                  <v-card-text>Entdecken Sie unser vielfältiges Studienprogramm des Studienbereichs Management in
                    Vorträgen unserer Dozenten. Achten Sie auf Termin-Aushänge in Ihrer Schule.</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4"><v-card class="pa-3 pt-4" height="100%">
                  <v-card-title>Bildungsmessen</v-card-title>
                  <v-card-text>Auf zahlreichen Messen beraten wir Sie gern zu unserem Studienangebot. Wir freuen uns über
                    Ihren Besuch an unserem Messestand!</v-card-text>

                </v-card></v-col>


              <v-col cols="12" sm="6" md="4">
                <v-card class="pa-3 pt-4" height="100%">
                  <v-card-title>Schulvorträge</v-card-title>
                  <v-card-text>Entdecken Sie unser vielfältiges Studienprogramm des Studienbereichs Management in
                    Vorträgen unserer Dozenten. Achten Sie auf Termin-Aushänge in Ihrer Schule.</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4"><v-card class="pa-3 pt-4" height="100%">
                  <v-card-title>Bildungsmessen</v-card-title>
                  <v-card-text>Auf zahlreichen Messen beraten wir Sie gern zu unserem Studienangebot. Wir freuen uns über
                    Ihren Besuch an unserem Messestand!</v-card-text>

                </v-card></v-col>

            </v-row>
          </v-card>
        </v-container>


        <v-container id="Kontakt">
          <v-card class="pa-3 pt-2 ">
            <v-card-title class="text-h4 text-lg-h3 font-weight-bold text-md-h2 py-4 pb-8  ">
              Kontakt
            </v-card-title>
            <v-card-text>

              <div class="text-h6 font-weight-regular">
                Es gibt zahlreiche Möglichkeiten, die accadis Hochschule und ihre Studiengänge näher kennenzulernen.
                Studieninfotage, Schnupper-Vorlesung, Bildungsmessen - besuche unsere Angebote und finde heraus, welches
                Studium am besten passt.
              </div>
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
      search: '',
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
    }
  },
}
</script>