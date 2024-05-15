import { VCard } from 'vuetify/lib/components/index.mjs';
<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-0">
        <header-bistro></header-bistro>

        <v-container class="pa-12">
          <v-row>
            <v-col cols="1" class="active menucol">
              <v-card>
                <v-card-text class="">
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <v-card-text>
                      <v-row><div class="text-h5 font-weight-bold">Menü 1</div></v-row>
                      <v-row><div class="text-h5 font-weight-bold">Menü 2</div></v-row>
                      <v-row><div class="text-h5 font-weight-bold">Dessert</div></v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="" class="menucol">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <calendar-bg-mo> </calendar-bg-mo>

                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Tortelloni Spinat und Ricotta</div>
                          <div class="text-h5 pr-16 pb-3">Spinatsahnesauce</div>
                          <div class="text-h5 pr-16 pb-3">Reibekäse</div>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pb-3">Rinderfrikadelle</div>
                          <div class="text-h5 pb-3">Reis</div>
                          <div class="text-h5 pb-3">Brokkoli-Blumenkohl-Rahmgemüse</div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5">Golden Donut (mit Zucker bestreut) (Stück)</div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="" class="menucol">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <calendar-bg-di> </calendar-bg-di>

                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Gnocchi-Auflauf mit Erbsen und Käsesauce</div>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pb-3">Zucchinicremesuppe mit Grünkern</div>
                          <div class="text-h5 pb-3">Baguette</div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5">Obst der Saison</div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="" class="menucol active">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <calendar-bg-mi> </calendar-bg-mi>

                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Brokkolicremesuppe mit Lachs</div>
                          <div class="text-h5 pr-16 pb-3">Vollkornbrotscheibe</div>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pb-3">Fladenbrot</div>
                          <div class="text-h5 pb-3">Hähnchen Kebab</div>
                          <div class="text-h5 pb-3">Krautsalat</div>
                          <div class="text-h5 pb-3">Tzaziki</div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5">Pfirsich-Maracuja-Joghurt</div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="" class="menucol">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <calendar-bg-do> </calendar-bg-do>

                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Eier gekocht</div>
                          <div class="text-h5 pr-16 pb-3">Grüne Sauce</div>
                          <div class="text-h5 pr-16 pb-3">Salzkartoffeln</div>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pb-3">Gemüsegulasch (Karotten, Brokkoli, Blumenkohl, Tomate)</div>

                          <div class="text-h5 pb-3">Bulgur</div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5">Obst der Saison</div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="" class="menucol">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <calendar-bg-fr> </calendar-bg-fr>

                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Hähnchenbrustfilet paniert</div>
                          <div class="text-h5 pr-16 pb-3">Erbsenrahmgemüse</div>
                          <div class="text-h5 pr-16 pb-3">Eierknöpfle</div>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pb-3">Rindergeschnetzeltes (Champignons)</div>

                          <div class="text-h5 pb-3">Kartoffelknödel</div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5">Erdbeerquark mit Schokosplitter</div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="less">
.calendar-bg {
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
