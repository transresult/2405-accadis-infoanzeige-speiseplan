import { VCard } from 'vuetify/lib/components/index.mjs';
<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-0">
        <header-bistro></header-bistro>

        <v-container class="pa-12">
          <v-row>
            <v-col cols="1" class="menucol">
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
            <v-col cols="" class="menucol active">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <calendar-bg-mo> </calendar-bg-mo>

                    <v-card-text>
                      <v-row><div class="text-h5 px-4 pr-16">magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</div></v-row>
                      <v-row><div class="px-4">Menü 2</div></v-row>
                      <v-row><div class="px-4">Dessert</div></v-row>
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

                    <v-card-text style="background-color: #eee">
                      <v-row>Menü 1</v-row>
                      <v-row>Menü 2</v-row>
                      <v-row>Dessert</v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="" class="menucol">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <calendar-bg-mi> </calendar-bg-mi>

                    <v-card-text style="background-color: #eee">
                      <v-row>Menü 1</v-row>
                      <v-row>Menü 2</v-row>
                      <v-row>Dessert</v-row>
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
                    <v-card-text style="background-color: #eee">
                      <v-row>Menü 1</v-row>
                      <v-row>Menü 2</v-row>
                      <v-row>Dessert</v-row>
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

                    <v-card-text style="background-color: #eee">
                      <v-row>Menü 1</v-row>
                      <v-row>Menü 2</v-row>
                      <v-row>Dessert</v-row>
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
