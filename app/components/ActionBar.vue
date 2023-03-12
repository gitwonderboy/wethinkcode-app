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

      <FlexboxLayout
        col="1"
        class="justify-center items-center"
        @tap="onNavigationItemTap()"
      >
        <StackLayout :class="active">
          <Image class="capiteclogo w-8" src="~/asserts/img/wtc-logo.png" />
        </StackLayout>
      </FlexboxLayout>
    </StackLayout>
  </ActionBar>
</template>

<script>
import { showDrawer } from "~/shared/utils";

export default {
  data() {
    return {
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
</style>
