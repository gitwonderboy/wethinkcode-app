<template class="drawer">
  <GridLayout rows="*, auto">
    <StackLayout row="1">
      <GridLayout columns="auto,*" class="user-icon">
        <FlexboxLayout class="justify-center items-center">
          <StackLayout col="0" class="py-4 ml-4">
            <Image src="~/asserts/img/codelad.png" class="logo rounded-full w-16 h-16" />
          </StackLayout>
          <StackLayout col="1" class="ml-4">
            <Label
              text="Mr WT Mthiyane"
              class="card-title text-lg font-bold uppercase text-white"
            />
            <Label
              textWrap="true"
              text="1560031240"
              class="card-title text-sm text-white"
            />
          </StackLayout>
        </FlexboxLayout>
      </GridLayout>
    </StackLayout>

    <ScrollView row="0" class="page-scroller nt-drawer__body">
      <StackLayout class="bg-slate-100">
        <GridLayout columns="50, *" class="py-3" @tap="onNavigationItemTap(HomePage)">
          <Image
            col="0"
            class="w-7"
            src="~/asserts/img/wtc-logo.png"
            stretch="aspectFill"
          />
          <Label col="1" text="Home" class="p-l-12 font-bold text-base" />
        </GridLayout>

        <GridLayout
          columns="50, *"
          class="py-3 pl-4"
          @tap="onNavigationItemTap(HomePage)"
        >
          <Label col="0" text.decode="&#xf51c;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="Year One" class="font-bold text-base" />
        </GridLayout>

        <GridLayout
          columns="50, *"
          class="py-3 pl-4"
          @tap="onNavigationItemTap(HomePage)"
        >
          <Label col="0" text.decode="&#xf51c;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="Year Two" class="font-bold text-base" />
        </GridLayout>

        <GridLayout
          columns="50, *"
          class="py-3 pl-4"
          @tap="onNavigationItemTap(HomePage)"
        >
          <Label col="0" text.decode="&#xf121;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="Reviews" class="font-bold text-base" />
        </GridLayout>

        <GridLayout
          columns="50, *"
          class="py-3 pl-4"
          @tap="onNavigationItemTap(HomePage)"
        >
          <Label col="0" text.decode="&#xf073;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="Calendar" class="font-bold text-base" />
        </GridLayout>

        <GridLayout
          columns="50, *"
          class="py-3 pl-4"
          @tap="onNavigationItemTap(HomePage)"
        >
          <Label col="0" text.decode="&#xf4fe;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="LMS Updates" class="font-bold text-base" />
        </GridLayout>

        <GridLayout
          columns="50, *"
          class="pl-2 py-3"
          @tap="onNavigationItemTap(HomePage)"
        >
          <Image
            col="0"
            class="w-5 mr-2"
            src="~/asserts/img/pay.png"
            stretch="aspectFill"
          />
          <Label col="1" text="SimplePay" class="font-bold text-base" />
        </GridLayout>

        <StackLayout class="hr" />

        <GridLayout columns="50, *" class="pl-4 py-3">
          <Image
            col="0"
            class="w-5 h-5 mr-5"
            src="~/asserts/img/slack.png"
            stretch="aspectFill"
          />
          <Label col="1" text="Slack" class="font-bold text-base" />
        </GridLayout>

        <GridLayout columns="50, *" class="pl-4 py-3">
          <Image
            col="0"
            class="w-5 h-5 mr-5"
            src="~/asserts/img/gallery.png"
            stretch="aspectFill"
          />
          <Label col="1" text="Gallery" class="font-bold text-base" />
        </GridLayout>

        <GridLayout columns="50, *" class="pl-4 py-3">
          <Label col="0" text.decode="&#xf129;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="Curriculum" class="font-bold text-base" />
        </GridLayout>

        <GridLayout columns="50, *" class="pl-4 py-3" @tap="onNavigationItemTap(Faq)">
          <Label col="0" text.decode="&#xf086;" class="w-10 nt-icon fas text-lg" />
          <Label col="1" text="FAQS" class="font-bold text-base" />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import HomePage from "./HomePage";
import Branch from "./BranchPage";
import Tip from "./TipPage";
import Faq from "./FaqPage";
import LoginPage from "./LoginPage";

import * as utils from "~/shared/utils";

export default {
  data() {
    return {
      HomePage: HomePage,
      Branch: Branch,
      Tip: Tip,
      Faq: Faq,
      LoginPage: LoginPage,
    };
  },

  components: {
    HomePage,
    Branch,
    Tip,
    Faq,
    LoginPage,
  },

  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: false,
      });
      utils.closeDrawer();
    },

    onLogoutTap() {
      this.$navigateTo(LoginPage, {
        clearHistory: true,
      });
      utils.closeDrawer();
    },
  },
};
</script>

<style scoped lang="css">
.size-button {
  background: rgb(30, 129, 176);
  background: linear-gradient(180deg, rgba(30, 129, 176, 1) 13%, rgba(0, 72, 109, 1) 73%);
}

.user-icon {
  background: rgb(27, 117, 157);
  background: linear-gradient(
    235deg,
    rgba(27, 117, 157, 1) 0%,
    rgba(75, 130, 194, 1) 77%
  );
}

.nt-icon {
  color: #00486d;
}
</style>
