<script>
export default {
  setup() {
    const experiences = [
      {
        date: "FEBRUARY - MAY 2023",
        title: "System and Infrastructure Engineer Intern",
        description:
          "Deployed and managed Ubuntu servers, integrated StrongSwan and OpenVPN for secure network connections, and utilized tracerouting to identify network providers.",
      },
      {
        date: "AUGUST 2023 - PRESENT ",
        title: "QA Analyst",
        description:
          "responsibilities include manual testing of OS patches and creation of automation tests to ensure software quality and system reliability.",
      },
    ];
    return {
      experiences,
    };
  },
};
</script>

<template>
  <div class="text-md track ing-wide h-full w-full space-y-7">
    <div
      class="flex flex-col md:flex-row space-x-10"
      v-for="experience in experiences"
    >
      <div class="w-fit md:w-2/5 text-sm font-sans uppercase">
        {{ experience.date }}
      </div>
      <div class="text-slate-200 w-fit md:w-full">
        <h1>{{ experience.title }}</h1>
        <p class="text-sm text-slate-400 pt-1">
          {{ experience.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
