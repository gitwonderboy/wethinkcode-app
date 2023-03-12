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

            <StackLayout>
              <StackLayout>
                <FlexboxLayout class="justify-center items-center mb-5">
                  <Label
                    text="Placement"
                    textWrap="true"
                    class="text-2xl uppercase font-extrabold text-gray-500"
                  />
                </FlexboxLayout>
                <FlexboxLayout class="justify-center items-center mb-10">
                  <Label
                    text="Candidate Portal"
                    textWrap="true"
                    class="text-2xl uppercase font-extrabold text-gray-500"
                  />
                </FlexboxLayout>
                <GridLayout rows="auto" columns="auto, *">
                  <TextField
                    col="1"
                    keyboardType="email"
                    :text="username"
                    hint="Username"
                    class="text-lg mt-2"
                  />
                </GridLayout>

                <GridLayout rows="auto" columns="auto, *" class="mt-5">
                  <TextField
                    col="1"
                    secure="true"
                    :text="password"
                    hint="Password"
                    class="text-lg mt-2"
                  />
                </GridLayout>
              </StackLayout>

              <StackLayout class="mt-10" @tap="onNavigationItemTap(HomePage)">
                <Button
                  text="SIGN IN"
                  class="login-btn text-lg text-white font-bold h-16"
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
                    class="text-lg p-x-5 border-x-4 border-blue-500 font-extrabold text-gray-500"
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

.action-bar {
  background-color: #ffffff;
}
</style>
