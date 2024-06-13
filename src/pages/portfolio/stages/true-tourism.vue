<script setup lang="ts">

import {definePageMeta} from "#imports";

definePageMeta({
  title: 'Stage chez True Tourism',
  content: 'Récapitulatif de mon stage chez True Tourism',
})

</script>

<template>
  <div class="container max-w-screen sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-screen-xl mx-auto pt-32">
    <section>
      <div class="pb-24 text-justify text-lg">
        <h1 class="text-4xl text-start font-extrabold mb-10">{{ $t('truetourism-title') }}</h1>

        <img src="/images/true-tourism/banner.webp" alt="Bannière True Tourism" class="mb-10" />

        <p class="mb-10" v-html="$t('truetourism-introduction')" />

        <div>
          <section id="reactApp">
            <h2 class="text-3xl text-start font-extrabold mt-10 mb-2">{{$t('truetourism-first-section-title')}}</h2>

            <p v-html="$t('truetourism-first-section-p1')" />

            <section id="tests">
              <h3 class="text-2xl text-start font-extrabold mt-14 mb-2">{{$t('truetourism-first-section-subtitle1')}}</h3>
              <div class="flex  flex-col items-center">
                <div class="flex md:flex-row gap-4 items-start relative mb-10">
                  <div class="w-1/2 pr-10 md:sticky top-36">
                    <p v-html="$t('truetourism-first-section-p2')" />
                  </div>
                  <div class="w-1/2 flex flex-col items-center gap-4">
                    <img id="maestroCode" src="/images/true-tourism/maestro-code.webp" :alt="$t('truetourism-img-maestro-code-alt')" />
                    <label for="maestroCode" class="font-kineticLight">{{ $t('truetourism-img-maestro-code-label') }}</label>
                  </div>
                </div>
                <div class="flex w-2/3 flex-col items-center gap-4">
                  <HlsVideo id="maestroVideo" src="/videos/maestro/maestro.m3u8" :autoplay="true" :muted="true" :loop="true" />
                  <label for="maestroVideo" class="font-kineticLight">{{$t('truetourism-video-maestro-label')}}</label>
                </div>
              </div>
            </section>
            <section id="reactQueryOptimization">
              <h3 class="text-2xl text-start font-extrabold mt-14 mb-2">{{$t('truetourism-first-section-subtitle5')}}</h3>
              <div class="flex flex-col gap-4 items-start">
                <p>
                  {{$t('truetourism-first-section-p16')}}
                </p>

                <p>
                  {{$t('truetourism-first-section-p17')}}
                </p>

                <p>
                  {{$t('truetourism-first-section-p18')}}
                </p>

                <img src="/images/true-tourism/reactQuery1.webp" :alt="$t('truetourism-first-section-react-query-alt')" />

                <p v-html="$t('truetourism-first-section-p19')" />

                <div class="flex flex-col items-center mt-10 mb-10">
                  <img
                      id="fetchPriceDetailsCallbackImage"
                      src="/images/true-tourism/fetchPriceDetailsCallback.webp"
                      :alt="$t('truetourism-first-section-fetchPriceDetailsCallback-alt')"
                      class="w-2/4"
                  />
                  <label for="fetchPriceDetailsCallbackImage" class="font-kineticLight"> {{$t('truetourism-first-section-fetchPriceDetailsCallback-label')}}</label>
                </div>

                <p v-html="$t('truetourism-first-section-p20')" />

                <div class="flex flex-col items-center mt-10 mb-10">
                  <img
                      id="useQueryImage"
                      src="/images/true-tourism/useQuery.webp"
                      :alt="$t('truetourism-first-section-useQuery-alt')"
                      class="w-2/4"
                  />
                  <label for="useQueryImage" class="font-kineticLight">{{$t('truetourism-first-section-useQuery-label')}}</label>
                </div>

                <div>
                  <p v-html="$t('truetourism-first-section-p21')" />

                  <ul class="flex flex-col gap-4 list-disc ml-10">
                    <li>
                      <p v-html="$t('truetourism-first-section-p22')" />
                    </li>
                    <li>
                      <p v-html="$t('truetourism-first-section-p23')" />
                    </li>
                    <li>
                      <p v-html="$t('truetourism-first-section-p24')" />
                      <ul class="list-disc ml-10">
                        <li>
                          <p v-html="$t('truetourism-first-section-p25')" />
                        </li>
                        <li>
                          <p v-html="$t('truetourism-first-section-p26')" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <p v-html="$t('truetourism-first-section-p27')" />
                  <ul class="list-disc ml-10">
                    <li>
                      <p v-html="$t('truetourism-first-section-p28')" />
                    </li>
                    <li>
                      <p v-html="$t('truetourism-first-section-p29')" />
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-xl text-start font-extrabold mb-2">{{$t('truetourism-first-section-sub-subtitle2')}}</h4>
                  <div>
                    <ul class="list-disc ml-10">
                      <li>
                        <p v-html="$t('truetourism-first-section-p30')" />
                      </li>
                      <li>
                        <p v-html="$t('truetourism-first-section-p31')" />
                      </li>
                      <li>
                        <p v-html="$t('truetourism-first-section-p32')" />
                      </li>
                      <li>
                        <p v-html="$t('truetourism-first-section-p33')" />
                      </li>
                    </ul>
                  </div>
                </div>

                <p>{{$t('truetourism-first-section-p34')}}</p>
              </div>
            </section>
            <section id="guideProfile">
              <h3 class="text-2xl text-start font-extrabold mt-14 mb-2">{{$t('truetourism-first-section-subtitle2')}}</h3>
              <div class="flex flex-row gap-4 items-start relative mt-10">
                <div class="w-1/2 flex flex-col gap-4">
                  <img src="/images/true-tourism/guide-profile.webp" :alt="$t('truetourism-img-guide-profile-alt')" class="w-1/2" />
                </div>
                <div class="w-1/2 pr-10 md:sticky top-36">
                  <p>
                    {{$t('truetourism-first-section-p3')}}
                  </p>
                </div>
              </div>
            </section>
            <section id="googleAuth">
              <h3 class="text-2xl text-start font-extrabold mt-14 mb-2">{{$t('truetourism-first-section-subtitle3')}}</h3>
              <div class="flex flex-col gap-4 items-start relative">
                <div class="flex flex-col gap-4">
                  <p>
                    {{$t('truetourism-first-section-p4')}}
                  </p>

                  <p>
                    {{$t('truetourism-first-section-p5')}}
                  </p>

                  <div class="flex flex-col items-center mt-10 mb-10">
                    <img
                        id="imageCodeGoogleSignIn"
                        src="/images/true-tourism/googleSignIn.webp"
                        :alt="$t('truetourism-img-google-signin-code-alt')"
                        class="w-1/2"
                    />
                    <label for="imageCodeGoogleSignIn" class="font-kineticLight">{{ $t('truetourism-img-google-signin-code-label') }}</label>
                  </div>

                  <p>
                    {{$t('truetourism-first-section-p6')}}
                  </p>

                  <p>
                    {{$t('truetourism-first-section-p7')}}
                  </p>

                  <div class="flex flex-row gap-4 w-full justify-center">
                    <div class="flex flex-col items-center md:mr-20 mt-10 mb-10">
                      <img
                          id="imageCodeGoogleSignUp"
                          src="/images/true-tourism/ancienne-creation-compte.webp"
                          :alt="$t('truetourism-img-old-signup-screen-alt')"
                          class="w-auto max-h-128"
                      />
                      <label for="imageCodeGoogleSignUp" class="font-kineticLight">{{ $t('truetourism-img-old-signup-screen-label') }}</label>
                    </div>

                    <div class="flex flex-col items-center md:ml-20 mt-10 mb-10">
                      <img
                          id="imageNewGoogleSignUp"
                          src="/images/true-tourism/newAccountCreationScreen.webp"
                          :alt="$t('truetourism-img-new-signup-screen-alt')"
                          class="w-auto max-h-128"
                      />
                      <label for="imageNewGoogleSignUp" class="font-kineticLight">{{ $t('truetourism-img-new-signup-screen-label') }}</label>
                    </div>
                  </div>

                  <p>
                    {{$t('truetourism-first-section-p8')}}
                  </p>

                  <p>
                    {{$t('truetourism-first-section-p9')}}
                  </p>

                  <p>
                    {{$t('truetourism-first-section-p10')}}
                  </p>

                  <p>
                    {{$t('truetourism-first-section-p11')}}
                  </p>

                  <p>
                    {{$t('truetourism-first-section-p12')}}
                  </p>

                  <p>
                    {{$t('truetourism-first-section-p13')}}
                  </p>

                  <p>
                    {{$t('truetourism-first-section-p14')}}
                  </p>

                  <div class="flex flex-col items-center mt-10 mb-10">
                    <img id="diagrammeImage" src="/images/true-tourism/diagramme.webp" :alt="$t('truetourism-img-diagram-alt')" />
                    <label for="diagrammeImage" class="font-kineticLight">{{ $t('truetourism-img-diagram-label') }}</label>
                  </div>
                </div>

                <section>
                  <h3 class="text-2xl text-start font-extrabold mt-14 mb-2">{{$t('truetourism-first-section-subtitle4')}}</h3>
                  <div class="pl-4">
                    <p>
                      {{$t('truetourism-first-section-p15')}}
                    </p>

                    <div class="mt-2">
                      <h4><b>{{$t('truetourism-first-section-sub-subtitle1')}}</b></h4>
                      <div>
                        <ul class="pl-10 list-disc">
                          <li class="pt-4">
                            <p v-html="$t('truetourism-first-section-skills1')" />
                          </li>
                          <li  class="pt-4">
                            <p v-html="$t('truetourism-first-section-skills2')" />
                          </li>
                          <li  class="pt-4">
                            <p v-html="$t('truetourism-first-section-skills3')" />
                          </li>
                          <li  class="pt-4">
                            <p v-html="$t('truetourism-first-section-skills4')" />
                          </li>
                          <li  class="pt-4">
                            <p v-html="$t('truetourism-first-section-skills5')" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </section>

          <section id="notion">
            <h2 class="text-3xl text-start font-extrabold mt-10 mb-5">{{$t('truetourism-second-section-title')}}</h2>
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-4">
                <p v-html="$t('truetourism-second-section-p1')" />

                <p>
                  {{$t('truetourism-second-section-p2')}}
                </p>

                <p class="mb-2">
                  {{$t('truetourism-second-section-p3')}}
                </p>

                <p>
                  {{$t('truetourism-second-section-p4')}}
                </p>

                <p>
                  {{$t('truetourism-second-section-p5')}}
                </p>

                <p>
                  {{$t('truetourism-second-section-p6')}}
                </p>

                <div class="flex flex-col items-center mt-10 mb-10">
                  <img src="/images/true-tourism/notion.webp" :alt="$t('truetourism-img-notion-alt')" class="w-2/3"/>
                  <label for="diagrammeImage" class="font-kineticLight">{{ $t('truetourism-img-notion-label')}}</label>
                </div>
              </div>

              <div>
                <h3 class="text-2xl text-start font-extrabold mt-14 mb-2">{{$t('truetourism-second-section-subtitle1')}}</h3>
                <div class="pl-4">
                  <p>
                    {{$t('truetourism-second-section-p7')}}
                  </p>

                  <div class="mt-2">
                    <h4><b>{{$t('truetourism-second-section-sub-subtitle2')}}</b></h4>
                    <div>
                      <ul class="pl-10 list-disc">
                        <li class="pt-4">
                          <p v-html="$t('truetourism-second-section-skills1')" />
                        </li>
                        <li  class="pt-4">
                          <p v-html="$t('truetourism-second-section-skills2')" />
                        </li>
                        <li  class="pt-4">
                          <p v-html="$t('truetourism-second-section-skills3')" />
                        </li>
                        <li  class="pt-4">
                          <p v-html="$t('truetourism-second-section-skills4')" />
                        </li>
                        <li  class="pt-4">
                          <p v-html="$t('truetourism-second-section-skills5')" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="conclusion">
            <h2 class="text-3xl text-start font-extrabold mt-10 mb-5">{{ $t('truetourism-ccl-section-title') }}</h2>
            <div class="flex flex-col gap-4">
              <p>
                {{$t('truetourism-ccl-section-p1')}}
              </p>
              <div class="mt-2">
                <h3 class="text-2xl text-start font-extrabold mt-14 mb-2">{{$t('truetourism-ccl-section-subtitle1')}}</h3>
                  <ul class="pl-10 list-disc">
                    <li class="pt-4">
                      <p v-html="$t('truetourism-ccl-section-skills1')" />
                    </li>
                    <li  class="pt-4">
                      <p v-html="$t('truetourism-ccl-section-skills2')" />
                    </li>
                    <li  class="pt-4">
                      <p v-html="$t('truetourism-ccl-section-skills3')" />
                    </li>
                    <li  class="pt-4">
                      <p  v-html="$t('truetourism-ccl-section-skills4')"/>
                    </li>
                  </ul>
              </div>

              <div class="mt-2">
                <h3 class="text-2xl text-start font-extrabold mt-14 mb-2">{{$t('truetourism-ccl-section-subtitle2')}}</h3>
                <div>
                  <ul class="pl-10 list-disc">
                    <li class="pt-4">
                      <p v-html="$t('truetourism-ccl-section-skills5')" />
                    </li>
                    <li  class="pt-4">
                      <p v-html="$t('truetourism-ccl-section-skills6')" />
                    </li>
                    <li  class="pt-4">
                      <p v-html="$t('truetourism-ccl-section-skills7')" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>

</style>
