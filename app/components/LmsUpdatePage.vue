<template>
  <Page class="page specialist">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container px-2">
      <ScrollView orientation="vertical" :height="screenHeight">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container mt-5">
            <GridLayout
              v-for="item in newsletters"
              :key="item.key"
              columns="auto,*"
              rows="auto"
              class="newsletter mb-2 rounded-xl py-2"
            >
              <FlexboxLayout
                col="0"
                class="justify-center attach-icon items-center ml-4 bg-white rounded-full w-10 h-10"
              >
                <Label text.decode="&#xf013;" class="fas text-xl text-gray-700" />
              </FlexboxLayout>

              <FlexboxLayout col="1" class="justify-start ml-5 items-center">
                <StackLayout class="w-full">
                  <Label
                    textWrap="true"
                    :text="item.title"
                    class="font-bold text-lg text-green-600 leading-none mb-2"
                  />

                  <FlexboxLayout class="justify-start items-center">
                    <Label
                      text.decode="&#xf073;"
                      class="nt-icon calendar-icon w-10 mr-2 fas text-sm text-center text-blue-400"
                    />
                    <Label
                      :text="item.date"
                      class="text-gray-600 text-center mr-2 text-base font-extrabold"
                    />
                  </FlexboxLayout>

                  <FlexboxLayout class="justify-start items-center">
                    <Label
                      text.decode="&#xf121;"
                      class="nt-icon lms-icon w-10 mr-2 fas text-sm text-center text-gray-600"
                    />
                    <Label
                      :text="item.version"
                      class="text-gray-600 text-center mr-2 text-base font-extrabold"
                    />
                  </FlexboxLayout>
                </StackLayout>
              </FlexboxLayout>
            </GridLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBar from "./ActionBar";
import { screenHeight } from "../shared/utils";
export default {
  data() {
    return {
      screenHeight: screenHeight,
      newsletters: [
        {
          title: "LMS Release",
          date: "2023-02-14",
          version: "v1.9.6",
        },
        {
          title: "LMS Release",
          date: "2023-02-20",
          version: "v1.10.0",
        },
        {
          title: "LMS Release",
          date: "2023-03-1",
          version: "v1.10.1",
        },
      ],
    };
  },

  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
  },

  components: {
    ActionBar,
  },
};
</script>

<style scoped lang="css">
.controls .control {
  background-color: #f7c73e;
}

.newsletter {
  background-color: #f7f7f7;
}

.carousel-bottoms .bottoms {
  padding: 0 15px;
}
</style>
