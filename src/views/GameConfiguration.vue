<template>
    <section class="py-16">
        <h1 class="text-center text-gray-100 text-2xl my-">
        {{ t("config_question_lbl") }}
    </h1>
    <div class="flex flex-col py-8 gap-y-12">
        <TextWrapper 
        v-for="(menu, index) in menus" 
        @click="goToSelectedItem(menu)"
        class="py-8 cursor-pointer hover:transition-all hover:shadow-md duration-300"
        :key="index"
         :label="t(menu.label)" 
        :color="menu.color"/>
    </div>
    </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import TextWrapper from '../components/TextWrapper.vue';
import { Menu } from '../utils/types';
import { menus } from "../utils/data";

const { t } = useI18n({
  useScope: "global",
  inheritLocale: true,
});

const emit = defineEmits(["selected-menu"]);
const goToSelectedItem = (menu: Menu): void => {
    emit("selected-menu", menu)
}
</script>