<template>
  <Page class="page branch">
    <ActionBar />
    <StackLayout class="page-container">
      <StackLayout class="mb-2">
        <SearchBar
          id="searchBar"
          hint="Search nearest branch"
          text=""
          clear="onClear"
          submit="oNSubmit"
        />
      </StackLayout>
      <ScrollView orientation="vertical" height="750">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container px-2">
            <Label
              text="Module 1 - Brownfields Software Development"
              textWrap="true"
              class="text-base text-gray-500 font-extrabold mb-2"
            />
            <GridLayout
              v-for="item in module1"
              :key="item.id"
              columns="auto"
              rows="*"
              class="branch-section mb-2 rounded-xl p-2"
            >
              <FlexboxLayout col="0">
                <StackLayout class="p-2">
                  <StackLayout class="mb-2">
                    <Label
                      textWrap="true"
                      :text="item.project"
                      class="font-bold capitalize text-xl text-blue-600 mb-2 break-normal"
                    />
                    <Label
                      textWrap="true"
                      :text="item.level"
                      class="font-bold text-base text-black"
                    />
                  </StackLayout>
                </StackLayout>
              </FlexboxLayout>
            </GridLayout>
          </StackLayout>

          <StackLayout class="card-container px-2">
            <Label
              text="Module 2 - Web Applications"
              textWrap="true"
              class="text-base text-gray-500 font-extrabold mb-2"
            />
            <GridLayout
              v-for="item in module2"
              :key="item.id"
              columns="auto"
              rows="*"
              class="branch-section mb-2 rounded-xl p-2"
            >
              <FlexboxLayout col="0">
                <StackLayout class="p-2">
                  <StackLayout class="mb-2">
                    <Label
                      textWrap="true"
                      :text="item.project"
                      class="font-bold capitalize text-xl text-blue-600 mb-2 break-normal"
                    />
                    <Label
                      textWrap="true"
                      :text="item.level"
                      class="font-bold text-base text-black"
                    />
                  </StackLayout>
                </StackLayout>
              </FlexboxLayout>
            </GridLayout>
          </StackLayout>

          <StackLayout class="card-container px-2">
            <Label
              text="Module 3 - System Integration"
              textWrap="true"
              class="text-base text-gray-500 font-extrabold mb-2"
            />
            <GridLayout
              v-for="item in module3"
              :key="item.id"
              columns="auto"
              rows="*"
              class="branch-section mb-2 rounded-xl p-2"
            >
              <FlexboxLayout col="0">
                <StackLayout class="p-2">
                  <StackLayout class="mb-2">
                    <Label
                      textWrap="true"
                      :text="item.project"
                      class="font-bold capitalize text-xl text-blue-600 mb-2 break-normal"
                    />
                    <Label
                      textWrap="true"
                      :text="item.level"
                      class="font-bold text-base text-black"
                    />
                  </StackLayout>
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

export default {
  data() {
    return {
      module1: [
        {
          id: "1",
          project: "Group Project\n(Robot Worlds)",
          level: " Level : 5",
        },
      ],
      module2: [
        {
          id: "1",
          project: "WeShare: A Social\nExpense Tracker",
          level: " Level : 5",
        },
      ],
      module3: [
        {
          id: "1",
          project: "Messy Data",
          level: " Level : 5",
        },
        {
          id: "2",
          project: "The Rest of the Backend",
          level: " Level : 5",
        },
        {
          id: "3",
          project: "Error Handling\nPanic Alerts",
          level: " Level : 4",
        },
        {
          id: "4",
          project: "Public Alerts",
          level: " Level : 5",
        },
      ],
    };
  },

  components: {
    ActionBar,
  },
};
</script>

<style scoped lang="css">
.branch-section {
  background-color: #f7f7f7;
}
</style>
