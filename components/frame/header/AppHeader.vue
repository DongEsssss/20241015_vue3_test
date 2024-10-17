<template>
    <section class="flex items-center justify-between px-5 py-1 z-10">
        <img src="@/assets/logo/logo.svg" alt="LOGO" class="w-auto max-w-[150px]" />

        <nav>
            <div @click="toggleSidebar" class="lg:hidden cursor-pointer">
                <i class="pi pi-align-justify text-2xl"></i>
            </div>

            <div v-if="isSidebarOpen" @click="closeSidebar" class="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-10">
            </div>

            <aside :class="{ 'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen }"
                class="fixed right-0 top-0 h-full bg-gray-50 text-slate-900 transform transition-transform duration-500 lg:relative lg:flex lg:flex-row lg:translate-x-0 lg:bg-transparent lg:w-auto lg:p-0 w-[200px] z-10">

                <div class="flex justify-end w-full lg:hidden p-5">
                    <img src="@/assets/logo/logo.svg" alt="LOGO" class="w-auto max-w-[150px]" />
                </div>

                <ul class="flex flex-col gap-5 lg:flex-row lg:gap-5 text-right p-5">
                    <li @click="logName('Home')" class="font-bold text-slate-900 hover:text-emerald-500 cursor-pointer">
                        Home</li>
                    <li @click="logName('About')"
                        class="font-bold text-slate-900 hover:text-emerald-500 cursor-pointer">About</li>
                    <li @click="logName('Contact')"
                        class="font-bold text-slate-900 hover:text-emerald-500 cursor-pointer">Contact</li>
                </ul>
            </aside>
        </nav>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
    isSidebarOpen.value = false;
};

const logName = (name) => {
    console.log(name);
};
</script>
