<template>
  <!-- START NAVIGATIONBAR -->

  <v-app-bar color="#DEDEDE" class="pa-4" extended :extension-height="0">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img class="mt-4" src="/img/logo.svg" max-width="150" />
        </v-col>
        <v-spacer />
        <v-col cols="5" class="text-right pr-12" align-self="center">
          <div class="text-h4 font-weight-regular" style="color: #7d7c7d">accadis <span class="font-weight-bold">Family
              Bistro</span></div>
        </v-col>
        <v-img src="/img/icon-restaurant.png" class="mr-2" />
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- END NAVIGATIONBAR -->

  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-0">

        <!-- START HEADER -->

        <v-container id="hero" class="pa-0 mt-4">
          <v-card color="grey" class="">
            <v-img color="white" height="180" src="/img/biologisch.png" cover>
              <div class="text-center text-h3 pb-2 pt-10 font-weight-bold" style="color: #7d7d7d">Menü der Woche</div>
              <div class="text-h4 text-center font-weight-regular px-8 pt-1" style="color: #7d7d7d">{{
                formattedDate(firstDayCurrentWeekshow) }} -
                {{ formattedDate(lastDayCurrentWeekshow) }}</div>
              <div class="text-center pt-3 text-caption" style="color: #7d7d7d">
                Alle Angaben ohne Gewähr. Informationen zu Zusatzstoffen und Allergenen siehe Aushang.
              </div>

            </v-img>
          </v-card>
        </v-container>

        <!-- END HEADER -->

        <v-container class="pa-8 pl-10">
          <v-row>

            <!-- START DESCRIPTION -->

            <v-col style="max-width: 160px" class="active menucol">
              <v-card class="calendar-bg">
                <v-card-text class="">
                  <v-card class="my-2 mb-6 pa-3">
                    <v-card-text>
                      <v-row>
                        <div class="text-center turkis text-h5">Rohkost</div>
                        <div class="d-flex">
                          <v-chip variant="elevated" size="small" color="#80BA27" prepend-icon="mdi-leaf"
                            text-color="white" class="mr-1">vegetarisch</v-chip>
                        </div>
                      </v-row>
                      <v-row>
                        <div class="text-center turkis text-h5">Menü <br /><span
                            class="font-weight-light text-h2">1</span></div>
                      </v-row>
                      <v-row>
                        <div class="text-center turkis text-h5">Menü <br /><span
                            class="font-weight-light text-h2">2</span></div>
                      </v-row>
                      <v-row>
                        <div class="text-center turkis text-h5">Dessert <br /><span
                            class="font-weight-light text-h2"></span></div>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- END DESCRIPTION -->

            <!-- START MENUE -->

            <v-col cols="" class="menucol" v-for="item in weeklyMenu" :key="item.id">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <div class="px-2 pb-2 card-date">
                      <div class="card-date-box d-flex align-items-end">
                        <div class="card-date-content flex-column justify-content-center align-center">
                          <div class="text-h4 font-weight-bold text-center">Mo <span class="text-h5">03.06.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">{{ item.fb_rawfood }}
                            <div class="d-flex" v-if="item.fb_rawfood_is?.length">
                              <v-chip v-if="item.fb_rawfood_is?.find(str => str.includes('bio'))" variant="elevated"
                                color="#80BA27" text-color="white" class="mr-1">bio</v-chip>
                              <v-chip v-if="item.fb_rawfood_is?.find(str => str.includes('vegetarian'))"
                                variant="elevated" color="#80BA27" prepend-icon="mdi-leaf" text-color="white"
                                class="mr-1">vegetarisch</v-chip>
                            </div>
                          </div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">{{ item.fb_menue1 }}</div>
                          <div class="d-flex" v-if="item.fb_menue1_is?.length">
                            <v-chip v-if="item.fb_menue1_is?.find(str => str.includes('bio'))" variant="elevated"
                              color="#80BA27" text-color="white" class="mr-1">bio</v-chip>
                            <v-chip v-if="item.fb_menue1_is?.find(str => str.includes('vegetarian'))" variant="elevated"
                              color="#80BA27" prepend-icon="mdi-leaf" text-color="white"
                              class="mr-1">vegetarisch</v-chip>
                          </div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pb-3">{{ item.fb_menue2 }}</div>
                          <div class="d-flex" v-if="item.fb_menue2_is?.length">
                            <v-chip v-if="item.fb_menue2_is?.find(str => str.includes('bio'))" variant="elevated"
                              color="#80BA27" text-color="white" class="mr-1">bio</v-chip>
                            <v-chip v-if="item.fb_menue2_is?.find(str => str.includes('vegetarian'))" variant="elevated"
                              color="#80BA27" prepend-icon="mdi-leaf" text-color="white"
                              class="mr-1">vegetarisch</v-chip>
                          </div>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5">{{ item.fb_dessert }}</div>
                          <div class="d-flex" v-if="item.fb_dessert_is?.length">
                            <v-chip v-if="item.fb_dessert_is?.find(str => str.includes('bio'))" variant="elevated"
                              color="#80BA27" text-color="white" class="mr-1">bio</v-chip>
                            <v-chip v-if="item.fb_dessert_is?.find(str => str.includes('vegetarian'))"
                              variant="elevated" color="#80BA27" prepend-icon="mdi-leaf" text-color="white"
                              class="mr-1">vegetarisch</v-chip>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>

                  </v-card>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- END MENUE -->

            <!-- <v-col cols="" class="menucol">
              <v-card>
                <v-card-text>
                  <v-card class="calendar-bg my-2 mb-6 pa-3">
                    <div class="px-2 pb-2 card-date">
                      <div class="card-date-box d-flex align-items-end">
                        <div class="card-date-content flex-column justify-content-center align-center">
                          <div class="text-h4 font-weight-bold text-center">Mo <span class="text-h5">03.06.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Paprika</div>
                        </v-col>
                      </v-row>

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
                          <div class="d-flex">
                            <v-chip variant="elevated" color="#80BA27" text-color="white" class="mr-1">Bio</v-chip>

                            <v-chip variant="elevated" color="#80BA27" prepend-icon="mdi-leaf" text-color="white"
                              class="mr-1">vegetarisch</v-chip>
                          </div>
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
                    <div class="px-2 pb-2 card-date">
                      <div class="card-date-box d-flex align-items-end">
                        <div class="card-date-content d-flex flex-row align-end">
                          <div class="text-h4 font-weight-bold text-center">Di <span class="text-h5">04.06.</span></div>
                        </div>
                      </div>
                    </div>
                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Bio-Möhren</div>
                          <v-chip variant="elevated" color="#80BA27" text-color="white" class="mr-1">Bio</v-chip>
                        </v-col>
                      </v-row>
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
                    <div class="px-2 pb-2 card-date">
                      <div class="card-date-box d-flex align-items-end">
                        <div class="card-date-content flex-column justify-content-center align-center">
                          <div class="text-h4 font-weight-bold text-center">Mi <span class="text-h5">05.06.</span></div>
                        </div>
                      </div>
                    </div>
                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Mais-Salat</div>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Brokkolicremesuppe mit Lachs</div>
                          <div class="text-h5 pr-16 pb-3">Vollkornbrotscheibe</div>
                        </v-col>
                        <div class="d-flex">
                          <v-chip variant="elevated" color="#80BA27" text-color="white" class="mr-1">Bio</v-chip>

                          <v-chip variant="elevated" color="#80BA27" prepend-icon="mdi-leaf" text-color="white"
                            class="mr-1">vegetarisch</v-chip>
                        </div>
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
                    <div class="px-2 pb-2 card-date">
                      <div class="card-date-box d-flex align-items-end">
                        <div class="card-date-content flex-column justify-content-center align-center">
                          <div class="text-h4 font-weight-bold text-center">Do <span class="text-h5">06.06.</span></div>
                        </div>
                      </div>
                    </div>
                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Gurken</div>
                        </v-col>
                      </v-row>
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
                    <div class="px-2 pb-2 card-date">
                      <div class="card-date-box d-flex align-items-end">
                        <div class="card-date-content flex-column justify-content-center align-center">
                          <div class="text-h4 font-weight-bold text-center">Fr <span class="text-h5">07.06.</span></div>
                        </div>
                      </div>
                    </div>
                    <v-card-text>
                      <v-row>
                        <v-col class="pa-0">
                          <div class="text-h5 pr-16 pb-3">Salat</div>
                          <div class="text-h5 pr-16 pb-3">Yoghurt-Dressing</div>
                        </v-col>
                      </v-row>
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
            </v-col> -->

          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface IFBMenue {
  date: string | null
  id: number
  status: string
  fb_rawfood: string | null
  fb_menue1: string | null
  fb_menue2: string | null
  fb_dessert: string | null
  fb_rawfood_is: string[] | null
  fb_dessert_is: string[] | null
  fb_menue1_is: string[] | null
  fb_menue2_is: string[] | null
}

const itemsUrl = "https://accadis-bildung-gmbh-headless.web40.transresult.net/items/Speiseplan_Family_Bistro"
const { data, error, status } = useFetch<{ data: Array<IFBMenue> }>(itemsUrl)

const validStatus = "published"
const isLoading = computed(() => status.value === "pending")

// var today = new Date("01 august 2024 00:01");
var today = new Date();

function getMonday(m: Date) {
  m = new Date(m);
  var day = m.getDay(),
    diff = m.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(m.setDate(diff));
};

const firstDayCurrentWeek = getMonday(today);
firstDayCurrentWeek.setHours(-2)

const firstDayCurrentWeekshow = getMonday(today);
const lastDayCurrentWeekshow = new Date(firstDayCurrentWeekshow.getTime() + (4 * 24 * 60 * 60 * 1000));

const lastDayCurrentWeek = new Date(firstDayCurrentWeekshow.getTime() + (4 * 24 * 60 * 60 * 1000));
lastDayCurrentWeek.setHours(+2)

function formattedDate(date: Date) {
  const formatDate = new Date(date);
  return `${formatDate.toLocaleDateString("de-DE", { year: "numeric", month: "2-digit", day: "2-digit" })}`;
};

const weeklyMenu = computed(() => {
  return data.value?.data
    ?.filter((item) => validStatus.includes(item.status))
    .filter((item) => firstDayCurrentWeek.getTime() <= new Date(item.date ?? '').getTime())
    .filter((item) => lastDayCurrentWeek.getTime() >= new Date(item.date ?? '').getTime())
    .sort((a, b) => new Date(a.date ?? '').getTime() - new Date(b.date ?? '').getTime()) ?? []
})

</script>

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
