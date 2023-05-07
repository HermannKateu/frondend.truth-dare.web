<template>
  <section class="w-full relative">
    <BaseImage path="welcome.png" class="w-full" />
    <ButtonWrapper
      @click="goToLayoutPage"
      class="py-2 bg-blue-300 rounded-lg px-12 w-72 mx-auto font-semibold absolute bottom-[148px] right-14"
    >
      {{ t("start_btn") }}
    </ButtonWrapper>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import BaseImage from "../components/BaseImage.vue";
import ButtonWrapper from "../components/ButtonWrapper.vue";

const { t } = useI18n({
  useScope: "global",
  inheritLocale: true,
});

const router = useRouter();
const goToLayoutPage = async (): Promise<void> => {
  await router.push("/layout");
};
</script>
