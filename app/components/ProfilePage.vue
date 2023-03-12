<template>
  <Page class="page view">
    <ActionBar />
    <GridLayout rows="auto, *" columns="*">
      <StackLayout class="home-page-container">
        <StackLayout class="carousel-bottoms white bg-white">
          <Image
            class="carousel-img w-60 h-60 mt-5 rounded-full z-50"
            src="~/asserts/img/student.png"
            stretch="aspectFill"
          />

          <StackLayout class="bottoms rounded-t-3xl rounded-b-3xl p-2">
            <FlexboxLayout @tap="onLogoutTap" class="justify-center items-center mt-2">
              <Label
                text="Sign Out"
                class="text-base uppercase border-x-4 border-blue-400 font-bold text-gray-500 p-2 rounded-full px-2"
              />
            </FlexboxLayout>
            <StackLayout>
              <GridLayout
                v-for="(item, index) in accounts"
                :key="index"
                columns="auto"
                rows="*"
                :class="item.wrapper"
                @tap="onNavigationItemTap(item.page)"
              >
                <FlexboxLayout col="0" class="bottom items-center ml-5">
                  <Image
                    class="livebetter w-10 h-10 mr-5"
                    :src="item.image"
                    stretch="aspectFill"
                  />
                  <StackLayout>
                    <Label :text="item.cohort" :class="item.style" />
                    <Label :text="item.name" class="text-gray-700 text-base font-bold" />
                    <FlexboxLayout>
                      <Label text="Gender : " class="text-gray-700 font-bold text-base" />
                      <Label :text="item.gender" class="text-gray-600 text-base" />
                    </FlexboxLayout>
                    <FlexboxLayout>
                      <Label
                        text="Performance : "
                        class="text-gray-700 font-bold text-base"
                      />
                      <Label :text="item.status" class="text-gray-600 text-base" />
                    </FlexboxLayout>
                    <FlexboxLayout class="mt-4">
                      <Label
                        col="0"
                        text.decode="&#xf005;"
                        class="w-10 text-yellow-400 nt-icon fas text-sm"
                      />
                      <Label
                        col="0"
                        text.decode="&#xf005;"
                        class="w-10 text-yellow-400 nt-icon fas text-sm"
                      />
                      <Label
                        col="0"
                        text.decode="&#xf005;"
                        class="w-10 text-yellow-400 nt-icon fas text-sm"
                      />
                      <Label
                        col="0"
                        text.decode="&#xf089;"
                        class="w-10 text-yellow-400 nt-icon fas text-sm"
                      />
                    </FlexboxLayout>
                  </StackLayout>
                </FlexboxLayout>
              </GridLayout>

              <GridLayout
                v-for="(item, index) in accounts"
                :key="index"
                columns="auto"
                rows="*"
                :class="item.wrapper"
                @tap="onNavigationItemTap(item.page)"
              >
                <FlexboxLayout col="0" class="bottom items-center ml-5">
                  <StackLayout>
                    <Label :text="item.campus" :class="item.style" />
                    <Label :text="item.username" class="text-gray-600 text-base" />
                    <Label :text="item.email" class="text-gray-600 text-base" />
                    <FlexboxLayout>
                      <Label
                        text="Elective : "
                        class="text-gray-700 font-bold text-base"
                      />
                      <Label :text="item.elective" class="text-gray-600 text-base" />
                    </FlexboxLayout>
                  </StackLayout>
                </FlexboxLayout>
              </GridLayout>
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";
import YearOnePage from "./YearOnePage";
import YearTwoPage from "./YearTwoPage";
import LoginPage from "./LoginPage";
import { showDrawer } from "~/shared/utils";

export default {
  data() {
    return {
      YearOnePage: YearOnePage,
      YearTwoPage: YearTwoPage,
      LoginPage: LoginPage,
      accounts: [
        {
          cohort: "Cohort : 2021",
          campus: "Campus : Durban",
          name: "Nokulunga Msabala",
          gender: "Female",
          username: "nokmsaba021",
          email: "nokmsaba021@student.wethinkcode.co.za",
          elective: "Quality Assurance",
          status: "Excelling",
          image: "~/asserts/img/user.png",
          wrapper: "bottom bg-white mt-4 py-2 rounded-t-3xl rounded-b-3xl",
          style: "bottom-title text-lg mb-2 text-blue-500 font-extrabold",
          page: YearOnePage,
        },
      ],
    };
  },

  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: false,
      });
    },

    onLogoutTap() {
      this.$navigateTo(LoginPage, {
        clearHistory: true,
      });
    },

    onDrawerButtonTap() {
      showDrawer();
    },
  },

  components: {
    ActionBar,
  },
};
</script>

<style scoped lang="css">
.carousel-bottoms .bottoms {
  margin-top: -10px;
}
.carousel-bottoms .bottoms-description {
  margin-top: -40px;
}
.size-button {
  background-color: #f7f7f7;
}
.bottoms {
  background-color: #f7f7f7;
}
</style>
