<template>
  <div class="flex flex-col space-y-10 font-playfair">
    <div class="space-y-2" v-for="experience in experiences">
      <h1 class="text-xl font-semibold text-accent">
        {{ experience.title }}
      </h1>
      <h2 class="text-lg italic text-accent">{{ experience.date }}</h2>
      <p class="pl-8 pt-2 text-lg text-neutral">
        {{ experience.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const experiences = [
      {
        date: "AUGUST 2023 - PRESENT ",
        title: "QA Analyst",
        description:
          "responsibilities include manual testing of OS patches and creation of automation tests to ensure software quality and system reliability.",
      },
      {
        date: "FEBRUARY - MAY 2023",
        title: "System and Infrastructure Engineer Intern",
        description:
          "Deployed and managed Ubuntu servers, integrated StrongSwan and OpenVPN for secure network connections, and utilized tracerouting to identify network providers.",
      },
    ];
    return {
      experiences,
    };
  },
};
</script>

<style lang="scss" scoped></style>
