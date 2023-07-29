<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import github from "./assets/social/github.svg";
import tailwind from "./assets/frameworks/tailwind.svg";
import vue from "./assets/frameworks/vuejs.svg";
import laravel from "./assets/frameworks/laravel.svg";
import spring from "./assets/frameworks/spring.svg";
import Experience from "./components/Experience.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue"
export default {
  components: {
    github,
    tailwind,
    vue,
    laravel,
    spring,
    Experience,
    About,
    Contact
},
  setup() {
    const frameworks = [spring, tailwind, vue, laravel];

    const activeSection = ref(null);
    const sectionRefs = ref([]);

    const handleScroll = () => {
      const scrollArea = document.getElementById("scrollarea");
      const scrollOffset = scrollArea.scrollTop;

      sectionRefs.value.forEach((sectionRef) => {
        const rect = sectionRef.getBoundingClientRect();
        if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
          activeSection.value = sectionRef.id;
        }
      });
    };

    window.addEventListener("DOMContentLoaded", () => {
      const scrollArea = document.getElementById("scrollarea");
      const initialScrollOffset = scrollArea.scrollTop;

      sectionRefs.value.forEach((sectionRef) => {
        const rect = sectionRef.getBoundingClientRect();
        if (
          rect.top <= initialScrollOffset &&
          rect.bottom >= initialScrollOffset
        ) {
          activeSection.value = sectionRef.id;
        }
      });
    });
    const isActive = (sectionId) => {
      return sectionId === activeSection.value;
    };

    onMounted(() => {
      activeSection.value = "aboutme";
      const scrollArea = document.getElementById("scrollarea");
      sectionRefs.value = Array.from(document.querySelectorAll("section"));
      scrollArea.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      const scrollArea = document.getElementById("scrollarea");
      scrollArea.removeEventListener("scroll", handleScroll);
    });

    return {
      frameworks,
      isActive,
      sectionRefs,
    };
  },
};
</script>

<template>
  <!-- main -->
  <main
    class="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-700 bg-gradient-to-r text-slate-300"
  >
    <div class="h-screen flex flex-row justify-between">
      <div class="mx-auto w-2/4 flex flex-col justify-around space-y-16 my-20">
        <div class="flex flex-col mx-auto space-y-2">
          <h1 class="text-6xl s font-bold tracking-tight">Miko Canares</h1>
          <h2 class="text-3xl font-semibold">Fullstack Developer</h2>
          <p class="text-base font-sans font-semibold pt-4 text-slate-400">
            Coding adventurer. Bug slayer. Experience conjurer.
          </p>
        </div>
        <div class="flex mx-auto text-lg flex-col space-y-2 p-">
          <ul>
            <li class="w-fit">
              <a href="#aboutme"> About </a>
              <hr
                :class="isActive('aboutme') ? 'w-full' : 'w-0'"
                class="border-t transition-all duration-700 ease-in-out border-white border"
              />
            </li>
            <li class="w-fit">
              <a href="#experience">
                Experience

                <hr
                  :class="isActive('experience') ? 'w-full' : 'w-0'"
                  class="border-t transition-all duration-700 ease-in-out border-white border"
                />
              </a>
            </li>
            <!-- <li class="w-fit">
              <a href="#skills">
                Skills

                <hr
                  :class="isActive('skills') ? 'w-full' : 'w-0'"
                  class="border-t transition-all duration-700 ease-in-out border-white border"
                />
              </a>
            </li> -->
            <li>
              <a href="#contact"> Contact </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-row justify-center space-x-5">
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
                    style="fill: #c0ccd3"
                    d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66 s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235 c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3 c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0 c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572 c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425 c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263 c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184 C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66 C264.008,196.668,231.69,239.992,186.462,256.625z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <button>
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
                    style="fill: #c0ccd3"
                    d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                  ></path>
                  <rect
                    x="-8.5"
                    y="348.4"
                    style="fill: #c0ccd3"
                    width="49.9"
                    height="159.7"
                  ></rect>
                  <path
                    style="fill: #c0ccd3"
                    d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"
                  ></path>
                  <path
                    style="fill: #c0ccd3"
                    d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <!-- scrollable -->
      <div
        class="flex flex-col space-y-4 justify-center w-2/3 mt-20 mb-16 mx-auto"
      >
        <div
          class="overflow-auto scrollbar flex flex-col space-y-64 w-5/6 text-gray-400 font-montserrat"
          id="scrollarea"
        >
          <section id="aboutme" class="h-fit">
            
           <About/>
          </section>
          <!-- EXPERIENCE SECTION -->
          <section id="experience" class="text-md tracking-wide h-full w-full space-y-7">
            <Experience/>
            <div class="flex flex-row"></div>
          </section>
          <!-- <section id="skills" class="h-full w-full">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col w-full h-full">
                <span class="mx-auto">Frameworks</span>
                <div
                  class="box-border rounded w-full duration-300 ease-in-out hover:scale-105 border"
                >
                  <div class="flex flex-row space-x-3 w-full">
                    <div v-for="(framework, index) in frameworks" :key="index">
                      <img :src="framework" alt="" class="w-7 h-7" />
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col w-full h-full">
                <span class="mx-auto">Langauge</span>
                <div
                  class="box-border rounded w-full duration-300 ease-in-out hover:scale-105 border"
                >
                  asd
                </div>
              </div>
              <div class="flex flex-col w-full h-full">
                <span class="mx-auto">database</span>
                <div
                  class="box-border rounded w-full duration-300 ease-in-out hover:scale-105 border"
                >
                  asd
                </div>
              </div>
              <div class="flex flex-col w-full h-full">
                <span class="mx-auto">tools</span>
                <div
                  class="box-border rounded w-full duration-300 ease-in-out hover:scale-105 border"
                >
                  asd
                </div>
              </div>
            </div>
            <h1>Project</h1>
          </section> -->
          <!-- <section id="contact">
           <Contact/>
          </section> -->
          <section id="none">
           <div class="text-xs text-center text-slate-500">
Build with <span class="text-slate-300">VueJS</span> and <span class="text-slate-300">TailwindCSS</span>
 by yours truly 
           </div>
          </section>
          <!-- Add more sections as needed -->
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
