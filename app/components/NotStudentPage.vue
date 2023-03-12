<template>
  <Page class="page">
    <ActionBar class="action-bar" flat="true">
      <NavigationButton visibility="hidden" />
      <StackLayout>
        <GridLayout columns="auto">
          <!-- <Image col="0" class="globalonelogo" src="~/asserts/img/globalonelogo.png" /> -->
        </GridLayout>
      </StackLayout>
    </ActionBar>

    <StackLayout class="page-container">
      <GridLayout rows="*" columns="*" class="-mt-16">
        <FlexboxLayout row="0" class="justify-center items-center px-2">
          <StackLayout>
            <StackLayout>
              <Image
                class="w-32 h-32 mb-10"
                src="~/asserts/img/wtc-logo.png"
                stretch="aspectFill"
              />
            </StackLayout>

            <StackLayout class="mt-10">
              <StackLayout class="mt-10">
                <Button
                  text="APPLY NOW"
                  class="login-btn text-lg text-white font-bold h-14"
                ></Button>
                <Button
                  text="HIRE A DEV"
                  class="login-btn text-lg text-white font-bold h-14"
                ></Button>
                <Button
                  text="DONATE"
                  class="donate-btn text-lg text-white font-bold bg-green-400 h-14"
                ></Button>
              </StackLayout>

              <GridLayout rows="*" columns="*" class="mt-10">
                <FlexboxLayout
                  @tap="onNavigationItemTap(LoginPage)"
                  row="1"
                  class="justify-center items-center"
                >
                  <Label
                    text="BACK"
                    textWrap="true"
                    class="text-lg p-x-5 border-x-4 border-blue-400 font-extrabold text-gray-500"
                  />
                </FlexboxLayout>
              </GridLayout>
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
import LoginPage from "./LoginPage";
export default {
  data() {
    return {
      username: "",
      password: "",
      currentPage: "Global One",
      LoginPage: LoginPage,
    };
  },

  methods: {
    onNavigationItemTap(component) {
      this.$navigateTo(component, {
        clearHistory: true,
      });
    },
  },
};
</script>

<style scoped lang="css">
.key-icon {
  color: #1e81b0;
}

.login-btn {
  background-color: #4b82c2;
}

.donate-btn {
  background-color: #3dc391;
}

.action-bar {
  background-color: #ffffff;
}
</style>
