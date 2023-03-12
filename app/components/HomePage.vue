<template>
  <Page class="page view">
    <ActionBar />
    <GridLayout rows="auto, *" columns="*">
      <StackLayout class="home-page-container">
        <StackLayout class="carousel-bottoms white bg-white">
          <Image
            class="carousel-img w-60 mt-5 rounded-t-lg"
            src="~/asserts/img/student.png"
            stretch="aspectFill"
          />

          <StackLayout class="bottoms rounded-t-3xl rounded-b-3xl p-2">
            <ScrollView row="0" orientation="vertical Session" height="310">
              <StackLayout>
                <GridLayout
                  v-for="(item, index) in accounts"
                  :key="index"
                  columns="230,*"
                  rows="100"
                  :class="item.wrapper"
                >
                  <FlexboxLayout col="0" class="bottom items-center ml-5">
                    <Image
                      class="livebetter w-10 h-10 mr-2"
                      :src="item.image"
                      stretch="aspectFill"
                    />
                    <StackLayout>
                      <Label :text="item.name" :class="item.style" />
                      <FlexboxLayout>
                        <Label text="Status: " class="text-gray-600 text-base" />
                        <Label :text="item.status" class="text-gray-600 text-base" />
                      </FlexboxLayout>
                    </StackLayout>
                  </FlexboxLayout>

                  <FlexboxLayout col="1" class="bottom-controls items-center">
                    <Label
                      :text="item.ballance"
                      class="text-black text-lg font-bold"
                      textWrap="true"
                    />
                  </FlexboxLayout>
                </GridLayout>
              </StackLayout>
            </ScrollView>
          </StackLayout>
        </StackLayout>
      </StackLayout>

      <FlexboxLayout row="1" class="px-4 justify-center items-center">
        <GridLayout columns="*,*,*" rows="70" class="action-button">
          <FlexboxLayout
            col="0"
            class="size-button justify-center items-center rounded-xl mr-1"
          >
            <StackLayout>
              <Image class="capiteclogo w-8" src="~/asserts/img/user.png" />
              <Label text="Profile" class="text-gray-600 text-base" />
            </StackLayout>
          </FlexboxLayout>
          <FlexboxLayout
            col="1"
            class="size-button justify-center items-center rounded-xl mr-1"
          >
            <StackLayout>
              <Image class="capiteclogo w-8" src="~/asserts/img/message.png" />
              <Label text="Messages" class="text-gray-600 text-base" />
            </StackLayout>
          </FlexboxLayout>
          <FlexboxLayout
            @tap="onDrawerButtonTap"
            col="2"
            class="size-button justify-center items-center rounded-xl"
          >
            <StackLayout>
              <Image class="capiteclogo w-8" src="~/asserts/img/dashboard.png" />
              <Label text="Menu" class="text-gray-600 text-base" />
            </StackLayout>
          </FlexboxLayout>
        </GridLayout>
      </FlexboxLayout>
    </GridLayout>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";
import { showDrawer } from "~/shared/utils";

export default {
  data() {
    return {
      accounts: [
        {
          name: "First Year",
          status: "Completed",
          image: "~/asserts/img/savings.png",
          ballance: "Score: 4.0",
          wrapper: "bottom bg-white rounded-t-3xl rounded-b-3xl",
          style: "bottom-title text-base text-blue-500 font-extrabold",
        },
        {
          name: "Second Year",
          status: "Completed",
          image: "~/asserts/img/livebetter.png",
          ballance: "Score: 4.4",
          wrapper: "bottom bg-white rounded-t-3xl rounded-b-3xl mt-2",
          style: "bottom-title text-base text-blue-700 font-extrabold",
        },
        {
          name: "Assessments",
          status: "Completed",
          image: "~/asserts/img/livebetter.png",
          ballance: "Score: 5.0",
          wrapper: "bottom bg-white rounded-t-3xl rounded-b-3xl mt-2",
          style: "bottom-title text-base text-blue-700 font-extrabold",
        },
        {
          name: "Reviews",
          image: "~/asserts/img/credit.png",
          ballance: "Total: 36",
          wrapper: "bottom bg-white rounded-t-3xl rounded-b-3xl mt-2",
          style: "bottom-title text-base text-blue-400 font-extrabold",
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
