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
                <Label text.decode="&#xf56d;" class="seaview-color fas text-xl" />
              </FlexboxLayout>

              <FlexboxLayout col="1" class="justify-start ml-5 items-center">
                <StackLayout class="w-full">
                  <Label
                    textWrap="true"
                    text="Performance Team"
                    class="font-bold text-lg text-blue-400 leading-none"
                  />
                  <Label
                    textWrap="true"
                    :text="item.title"
                    class="font-bold text-base text-blue-700 leading-none"
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

                  <FlexboxLayout class="controls justify-end my-2">
                    <FlexboxLayout
                      @tap="downloadFile(item.title, item.link)"
                      class="control rounded-full px-2 mr-3"
                    >
                      <Label
                        text="Download"
                        class="text-gray-800 font-medium text-center text-sm"
                      />
                    </FlexboxLayout>

                    <FlexboxLayout
                      @tap="shareFile(item.title, item.link)"
                      class="control rounded-full px-2 mr-3"
                    >
                      <Label
                        text="Share"
                        class="text-gray-800 font-medium text-center text-sm"
                      />
                    </FlexboxLayout>
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
import { shareUrl } from "@nativescript/social-share";
import ActionBar from "./ActionBar";
import { openUrl, screenHeight } from "../shared/utils";

export default {
  data() {
    return {
      screenHeight: screenHeight,
      newsletters: [
        {
          title: "Year 1 Semester 1 Report",
          date: "2021-11-10",
          link: "https://www.simplepay.co.za/login",
        },
        {
          title: "Year 2 Semester 2 Report",
          date: "2022-04-25",
          link: "https://www.simplepay.co.za/login",
        },
        {
          title: "Final Progress Report",
          date: "2023-01-30",
          link: "https://www.simplepay.co.za/login",
        },
      ],
    };
  },

  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },

    async downloadFile(file_url) {
      openUrl(file_url);

      // let filePath;

      // Permissions.requestPermissions([
      //   android.Manifest.permission.READ_EXTERNAL_STORAGE,
      //   android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
      // ])
      //   .then((res) => {
      //     if (isAndroid) {
      //       filePath = android.os.Environment.getExternalStoragePublicDirect(
      //         android.os.Environment.DIRECTORY_DOWNLOADS
      //       ).toString();
      //     } else {
      //       filePath = knownFolders.documents().path;
      //     }

      //     const downloadPath = path.join(filePath);

      //     Http.getFile(file_url, downloadPath)
      //       .then((resultFile) => {
      //         log(resultFile);
      //         resolve(resultFile);
      //       })
      //       .catch((e) => {
      //         log(e);
      //         reject(e);
      //       });
      //   })
      //   .catch((err) => {
      //     reject(err);
      //   });
    },

    async shareFile(fileName, file_url) {
      await shareUrl(
        file_url,
        fileName,
        "Stay updated with Sea View Primary Newsletters."
      );
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

.seaview-color {
  color: #610018;
}

.carousel-bottoms .bottoms {
  padding: 0 15px;
}
</style>
