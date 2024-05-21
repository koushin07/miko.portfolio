<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import github from "./assets/social/github.svg";
import tailwind from "./assets/frameworks/tailwind.svg";
import vue from "./assets/frameworks/vuejs.svg";
import laravel from "./assets/frameworks/laravel.svg";
import spring from "./assets/frameworks/spring.svg";
import Experience from "./components/Experience.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Projects from "./components/Projects.vue";
export default {
  components: {
    github,
    tailwind,
    vue,
    laravel,
    spring,
    Experience,
    About,
    Contact,
    Projects,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <!-- main -->
  <!-- bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-800 -->
  <main class="bg-primary h-screen p-10 font-playfair">
    <div
      class="h-full md:h-[90vh] flex flex-col md:flex-row justify-between border box-border border-black"
    >
      <div
        class="mx-1 md:mx-auto w-full md:w-2/4 flex flex-col justify-around space-y-16 md:my-20"
      >
        <div class="flex flex-col mx-auto space-y-2">
          <h1
            class="text-2xl text-neutral md:text-6xl font-bold tracking-wider italic"
          >
            Miko Canares
          </h1>
          <h2 class="text-1xl text-neutral md:text-3xl font-semibold">
            Fullstack Developer
          </h2>
          <!-- <p
            class="text-sm md:text-base font-sans font-semibold pt-4 text-slate-400"
          >
            Coding adventurer. Bug slayer. Experience conjurer.
          </p> -->
        </div>
        <div class="hidden md:flex mx-auto text-lg flex-col space-y-2">
          <ul class="font-semibold text-accent list-disc list-outside">
            <li class="cursor-pointer hover:italic transition-all ease-in-out">
              <router-link to="/">About</router-link>
            </li>
            <li class="cursor-pointer hover:italic transition-all ease-in-out">
              <router-link to="/experience">Experience </router-link>
            </li>
            <li class="cursor-pointer hover:italic transition-all ease-in-out">
              <router-link to="/project">Project</router-link>
            </li>
          </ul>
        </div>
        <div class="hidden md:flex flex-row justify-center space-x-5">
          <a target="_blank" href="https://github.com/koushin07" class="">
            <svg
              class="h-7 w-7"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 291.32 291.32"
              xml:space="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    style="fill: #3a4d39"
                    d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66 s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235 c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3 c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0 c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572 c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425 c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263 c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184 C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66 C264.008,196.668,231.69,239.992,186.462,256.625z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmiko-ca%25C3%25B1ares-772525292%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DIwZXh0bgNhZW0CMTAAAR2oedQdaVB9ILkflxZGN-nHUKhaqgklxm2exMJofb4e7mM3-CzCqRlqL3k_aem_ARoeh5SxrVILPjZMaumSx78rA2nvjKEt7RPNA05NG1Vu7NfBg-gUv0C-rwSQO4JO7jOE_H1s0agzS9BiZbAZajf5&h=AT2VXKPKIMaHwb85RBdBvx-uKClGou5YmcKLjooPHYj5-NbT_dMnBW0DkvtusWC8Me8-7oP7teRfpyyjyM2gvDeTawSLl-YEppoNTBbX0Bf0BKE_rJZI2p9MeMufJC3qFCq3TiY9yD0zMZyog_rluw"
            target="_blank"
          >
            <svg
              class="h-7 w-7"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    style="fill: #3a4d39"
                    d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                  ></path>
                  <rect
                    x="-8.5"
                    y="348.4"
                    style="fill: #3a4d39"
                    width="49.9"
                    height="159.7"
                  ></rect>
                  <path
                    style="fill: #3a4d39"
                    d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"
                  ></path>
                  <path
                    style="fill: #3a4d39"
                    d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <!-- scrollable -->
      <div class="md:w-2/3 md:mx-auto">
        <h1
          class="flex justify-center translate-y-6 font-bold text-neutral text-2xl font-playfair italic"
        >
          {{ currentRouteName }}
        </h1>
        <div
          class="bg-[#e6dabd] flex flex-col p-10 h-[85%] rounded-lg shadow-inner m-10 overflow-y-auto"
        >
          <router-view></router-view>
        </div>
      </div>

      <!-- <h1 class="text-4xl m-auto">picture in here</h1> -->
    </div>
  </main>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

html {
  scroll-behavior: smooth;
}
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
