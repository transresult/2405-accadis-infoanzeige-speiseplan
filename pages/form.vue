<template>
 
    <v-form ref="form" v-model="isValid" validate-on="input" @submit.prevent="submit">
      <v-container >

        <v-card class="py-2 py-sm-6 my-4 mb-sm-12">

        <v-row v-if="infoEvent">
          <v-col>
            <div class="text-h5 text-sm-h4 my-4 my-lg-8">{{ infoEvent.title }}</div>
            <div class="text-h6  mt-4 mt-sm-8 mb-2">{{ new Date(infoEvent.date ?? Date.now()).toUTCString() }}</div>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            <div class="text-h5 text-sm-h4 my-4 my-lg-8">{{ $t("global.infoEventMissing") }}</div>
              <div class="  mt-4 mt-sm-8 mb-2">--</div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div class="">{{ $t("global.paragraph1") }}</div>
              <div class="my-4">{{ $t("global.paragraph2") }}</div>
                <div class="my-4">{{ $t("global.paragraph3") }}</div>
                  <div class="my-4">{{ $t("global.paragraph4") }}</div>
                    <div class="my-4">{{ $t("global.paragraph5") }}</div>
          </v-col>
        </v-row>



        <v-card color="blue-lighten-5" class="pa-2 pa-sm-6 my-4 mb-sm-12">
          <v-card-title style="white-space: normal" class="mb-6">Kurze Formularheadeline, Ihre Kontaktdaten z.B.</v-card-title>
<v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
            variant="solo"
             rounded="0"
              :rules="firstNameRules"
              v-model="applicationStore.firstName"
              :label="$t('global.firstNameField.label')"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
            variant="solo"
             rounded="0"
              :rules="lastNameRules"
              v-model="applicationStore.lastName"
              :label="$t('global.lastNameField.label')"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field :label="$t('global.emailField.label')"  variant="solo"
             rounded="0" :rules="emailRules" v-model="applicationStore.email"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field :label="$t('global.phoneField.label')"  variant="solo"
             rounded="0" :rules="phoneRules" v-model="applicationStore.phone"></v-text-field>
          </v-col>
   
          <v-col cols="12" md="6">
            <v-select
              :label="$t('global.genderSelect.label')"
              variant="solo"
             rounded="0"
              :rules="genderRules"
              :items="genderOptions"
              item-value="value"
              item-title="text"
              v-model="applicationStore.gender"
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <div class="my-4 font-weight-bold">{{ $t("global.preferredLanguageRadioButton.label") }}</div>

            <v-radio-group  :rules="languageRules" inline v-model="applicationStore.language">
              <v-radio v-for="(item, index) in languageOptions" :label="item.text" :value="item.value"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" id="consentbox">
            <v-checkbox  :rules="consentRules" v-model="applicationStore.dataProtection" :label="$t('global.dataProtectionCheckbox.label')"></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-spacer class="hidden-xs"></v-spacer>
          <v-col class="my-6 d-flex justify-sm-end" sm="4" md="3" lg="2">
            <acc-button size="x-large" :loading="loading" type="submit" block  ><v-icon>mdi-file-send-outline</v-icon>{{ $t("global.submit") }}</acc-button>
          </v-col>
          
        </v-row>
        </v-card-text>
        </v-card>
      </v-card>
      </v-container>
    </v-form>
 
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useValidation } from "~/composables/useValidation";
import { useApplicationStore } from "~/store/application";
import { useInfoEventStore } from "~/store/info-events";

const applicationStore = useApplicationStore();
const infoEventStore = useInfoEventStore();
const { firstNameRules, lastNameRules, emailRules, phoneRules, genderRules, languageRules, consentRules } = useValidation();
const router = useRouter();
const i18n = useI18n();

const infoEvent = computed(() => infoEventStore.items.find((item) => item.id === applicationStore.infoEventId));

const languageOptions = computed(() => [
  { text: i18n.t("global.german"), value: "German" },
  { text: i18n.t("global.english"), value: "English" },
]);

const genderOptions = computed(() => [
  { text: i18n.t("global.male"), value: "Male" },
  { text: i18n.t("global.female"), value: "Female" },
  { text: i18n.t("global.diverse"), value: "Diverse" },
]);

const loading = ref(false);
const isValid = ref<boolean | null>(null);
const form = ref();
async function submit() {
  loading.value = true;
  const { valid } = await form.value.validate();
  if (valid) {
    const result = await applicationStore.submit();
    if (!result.ok) throw createError({ statusCode: 500, statusMessage: "Something went wrong." });
    router.push("/submit");
  }
  loading.value = false;
}
</script>

<style>

.v-selection__control{align-items: top;}


</style>