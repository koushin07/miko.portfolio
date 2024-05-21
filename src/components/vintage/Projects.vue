<template>
  <div class="flex flex-col space-y-10">
    <div class="" v-for="project in projects">
      <a
        :href="project.link"
        target="_blank"
        class="text-accent cursor-pointer flex gap-2 hover:scale-105 transition-all ease-in-out"
      >
        <span class="text-2xl">{{ project.title }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-6 h-6 mt-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>

      <div class="p-2 pl-12">
        <p class="text-lg text-neutral">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const projects = [
      {
        title: "ERIS: Equipment Resource Information System",
        link: "https://github.com/koushin07/ERIS",

        description:
          "It provides information on the region's equipment resources, including their status, movement, and backtrack, allowing the RDRRMC Region 10 and local DRRM offices to monitor resources",
      },
      {
        title: "Date Me: Dating website",
        link: "https://date-me-three.vercel.app",
        description:
          "Date Me offers users the opportunity to upload captivating profile images and engage in real-time chat, fostering meaningful connections in the online dating realm.",
      },
      {
        title: "ReadMindMe: Social Media",
        link: "https://read-mind-me.vercel.app",
        description:
          "where faith meets expression. Share your beliefs, thoughts, and perspectives on our unique social platform. Whether you're religious or not",
      },
    ];
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped></style>
