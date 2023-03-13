<template>
  <ActionBar class="action-bar -ml-4">
    <NavigationButton visibility="hidden" />
    <StackLayout>
      <GridLayout columns="*, auto" class="mt-2 px-4">
        <FlexboxLayout col="0" class="justify-start items-start">
          <Image class="globalonelogo w-32 mt-3" src="~/asserts/img/wtclogo-text.png" />
        </FlexboxLayout>
        <FlexboxLayout class="mt-2 justify-end items-end">
          <Label
            col="1"
            class="action-icons-top text-blue-400 fas text-xl p-2 w-10 h-10 text-center bg-white rounded-full mr-3"
            text.decode="&#xf0f3;"
          />
          <Label
            col="2"
            class="action-icons-top text-blue-400 fas text-xl p-2 w-10 h-10 text-center bg-white rounded-full"
            text.decode="&#xf073;"
          />
        </FlexboxLayout>
      </GridLayout>

      <GridLayout columns="*, *, *, *, *">
        <FlexboxLayout
          col="0"
          class="justify-center items-center"
          @tap="onNavigationItemTap(HomePage)"
        >
          <FlexboxLayout class="mt-1 justify-end items-end">
            <Label
              class="action-icons fas text-2xl p-2 w-12 h-12 text-center rounded-full mr-2"
              text.decode="&#xf015;"
            />
          </FlexboxLayout>
        </FlexboxLayout>

        <FlexboxLayout col="1" class="justify-center items-center">
          <FlexboxLayout class="mt-1 justify-end items-end">
            <Label
              class="action-icons fas text-2xl p-2 w-12 h-12 text-center rounded-full mr-2"
              text.decode="&#xf007;"
            />
          </FlexboxLayout>
        </FlexboxLayout>

        <FlexboxLayout
          col="2"
          class="justify-center items-center"
          @tap="onNavigationItemTap(HomePage)"
        >
          <StackLayout class="bg-white p-2 rounded-tl-2xl rounded-tr-2xl">
            <Image class="svp-logo w-10" src="~/asserts/img/wtc-logo.png" />
          </StackLayout>
        </FlexboxLayout>

        <FlexboxLayout col="3" class="justify-center items-center">
          <FlexboxLayout class="mt-1 justify-end items-end">
            <Label
              class="action-icons fas text-2xl p-2 w-12 h-12 text-center rounded-full mr-2"
              text.decode="&#xf658;"
            />
          </FlexboxLayout>
        </FlexboxLayout>

        <FlexboxLayout
          col="4"
          class="justify-center items-center"
          @tap="onDrawerButtonTap"
        >
          <FlexboxLayout class="mt-1 justify-end items-end">
            <Label
              class="action-icons fas text-2xl p-2 w-12 h-12 text-center rounded-full mr-2"
              text.decode="&#xf1de;"
            />
          </FlexboxLayout>
        </FlexboxLayout>
      </GridLayout>
    </StackLayout>
  </ActionBar>
</template>

<script>
import HomePage from "./HomePage";
import { showDrawer } from "~/shared/utils";

export default {
  data() {
    return {
      HomePage: HomePage,
      active: "active-icon bg-white pt-3 px-3 rounded-tl-full rounded-tr-full",
      inactive: "inactive-icon fas text-blue-400 text-center text-xl font-extrabold",
    };
  },

  methods: {
    activeNav() {},

    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: false,
      });
    },

    onDrawerButtonTap() {
      showDrawer();
    },
  },
};
</script>

<style scoped lang="css">
.action-bar {
  background-color: #f7f7f7;
}

.action-icons {
  color: #4b82c2;
}

.action-icons-top {
  color: #636363;
}
</style>
