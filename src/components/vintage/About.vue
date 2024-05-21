<template>
  <div class="flex flex-col font-playfair text-neutral">
    <p class="text-lg">
      Greetings!
      <br />
      <br />
      <span class="text-secondary"> I'm Miko</span>, a confident Fullstack
      Developer with a passion for crafting timeless web experiences. I embrace
      challenges with enthusiasm and a problem-solving mindset. My expertise
      spans across various technologies:
    </p>

    <ul class="pt-10 text-lg" v-for="skill in skills">
      <li class="">
        <span class="text-normal font-semibold text-secondary">
          {{ skill.title }}
        </span>

        <ul class="list-disc list-inside pl-2" v-for="item in skill.items">
          <li class="text-normal text-accent">{{ item }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const skills = [
      {
        title: "Frontend Technologies",
        items: [
          "HTML5",
          "CSS3",
          "TailwindCSS",
          "Angular",
          "VueJS",
          "primeNG",
          "NGxBootstrap",
        ],
      },
      {
        title: "Backend Technologies",
        items: ["ASP.NET Core", "Spring boot", "Laravel"],
      },
      {
        title: "Database Management",
        items: ["MySQL", "PostgreSQL"],
      },
      {
        title: "Others",
        items: [
          "SignalR",
          "PusherJS",
          "InertiaJS",
          "Cycle Labs",
          "Manual Testing",
          "Linux",
        ],
      },
    ];
    return {
      skills,
    };
  },
};
</script>

<style lang="scss" scoped></style>
