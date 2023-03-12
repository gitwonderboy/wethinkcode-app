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
              <StackLayout>
                <GridLayout rows="auto" columns="auto, *">
                  <Label
                    class="key-icon fas text-xl pl-3 mt-5 w-10"
                    col="0"
                    text.decode="&#xf0e0;"
                  />
                  <TextField
                    col="1"
                    keyboardType="email"
                    :text="username"
                    hint="Username"
                    class="text-lg mt-2"
                  />
                </GridLayout>

                <GridLayout rows="auto" columns="auto, *" class="mt-5">
                  <Label
                    class="key-icon fas text-xl pl-3 mt-5 w-10"
                    col="0"
                    text.decode="&#xf023;"
                  />
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

              <GridLayout rows="30, 100" columns="*" class="mt-10">
                <FlexboxLayout
                  row="0"
                  class="justify-center items-center"
                  @tap="onNavigationItemTap(AlumniPage)"
                >
                  <Label
                    text="ALUMNI"
                    textWrap="true"
                    class="text-lg border-b-4 border-blue-400 font-extrabold text-gray-600"
                  />
                </FlexboxLayout>

                <FlexboxLayout
                  row="1"
                  class="justify-center items-center"
                  @tap="onNavigationItemTap(NotStudentPage)"
                >
                  <Label
                    text="Not a Student"
                    textWrap="true"
                    class="text-lg p-x-5 border-x-4 border-red-300 font-extrabold text-gray-500"
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
import HomePage from "./HomePage";
import NotStudentPage from "./NotStudentPage";
import AlumniPage from "./AlumniPage";

export default {
  data() {
    return {
      username: "",
      password: "",
      currentPage: "Global One",
      HomePage: HomePage,
      NotStudentPage: NotStudentPage,
      AlumniPage,
      AlumniPage,
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
  color: #4b82c2;
}

.login-btn {
  background-color: #4b82c2;
}

.action-bar {
  background-color: #ffffff;
}
</style>
