<template>
    <section id="subpHero">
        <h2 data-subp-header> </h2>
            <div class="common-inner" data-subp-bottom v-for="item in navGroup">
                
                    <ul data-subp-tap>
                        <router-link v-for="subItem in item.childrens" :to="subItem.subTo">
                            
                            <li v-if="item.childrens.find(e => e.subTo === useRoute().path)" :class="{'recent-page':subItem.subTo == useRoute().path}">{{ subItem.subTitle }}</li>
                            <!-- <li :class="{'recent-page':subItem.subTo == useRoute().path}">{{ subItem.subTitle }}</li> -->
                        </router-link>
                    </ul>
                
            </div>
    </section>
</template>

<script setup>
    import { useRoute } from 'vue-router'
    //store에서 영역별 데이터 import
    import { usehfStore } from '@/store/hfStore'
    import { storeToRefs } from 'pinia';

    const hfStore = usehfStore()
    const { navGroup } = storeToRefs(hfStore)


</script>

<style lang="scss" scoped>
    #subpHero {
        @apply w-full relative flex flex-col justify-end items-center overflow-hidden;

        margin-top: 6.25rem;
        height: 31.25rem;
        background-image: url(/subp_back.jpg);
        background-position: center center;
        background-size: cover;

    }

    [data-subp-header] {
        @apply absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 5rem;
        color: rgb(var(--white));
    }

    [data-subp-bottom] {
        @apply w-full;

        max-width: 40rem;
    }

    [data-subp-tap] {
        @apply flex;

        gap: .25rem;

        > a {
            @apply w-full;
        }

        li {
            @apply flex justify-center items-center cursor-pointer w-full;

            background-color: rgba(var(--white), .8);
            border-radius: .25rem .25rem 0 0;
            // max-width: 10rem;
            padding: 1.2rem 0;

            &.recent-page {
                background-color: rgba(var(--white), 1);
            }
        }
    }

    //mediaquery
    @media (max-width: 767px){
        #subpHero {
            height: 25rem;
        }

        [data-subp-tap] li {
            padding: .5rem 0;
        }
    }
</style>