<template>
  <Page class="page specialist">
    <ActionBar :currentPage="currentPage" />
    <StackLayout class="page-container">
      <ScrollView orientation="vertical" :height="screenHeight">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container">
            <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
              <StackLayout class="card-container">
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
                    <StackLayout>
                      <Label
                        textWrap="true"
                        :text="item.title"
                        class="font-bold text-lg text-green-600 leading-none"
                      />
                      <FlexboxLayout class="justify-start items-center">
                        <Label
                          text.decode="&#xf073;"
                          class="nt-icon calendar-icon mr-4 fas text-sm text-center"
                        />
                        <Label
                          :text="item.date"
                          class="text-white text-center mr-2 text-base"
                        />
                        <Label
                          text="(2343 Downloads)"
                          class="text-gray-300 text-center text-base"
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
                          class="control rounded-full px-2"
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
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import { Http } from "@nativescript/core";
import { shareUrl } from "@nativescript/social-share";
import ActionBar from "./ActionBar";
import { log, openUrl, screenHeight } from "../shared/utils";

export default {
  data() {
    return {
      currentPage: "NEWSLETTER",
      headTitle: "NEWSLETTERS",
      imgSrc: "~/asserts/img/svp.png",
      screenHeight: screenHeight,
      newsletters: [],
      host: "seaviewprimary-1-t3690344.deta.app",
      // host: "localhost:3000",
    };
  },

  mounted() {
    Http.getJSON("https://" + this.host + "/newsletters").then(
      (res) => {
        this.newsletters = res.items;
      },
      (e) => {}
    );
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
  background-color: #fdcc30;
}
.calendar-icon {
  color: #edd785;
}
.newsletter {
  background-color: #610018;
}

.seaview-color {
  color: #610018;
}

.find-slot {
  background-color: #78cec8;
}

.carousel-bottoms .bottoms .bottom {
  background: rgb(115, 34, 195);
  background: linear-gradient(0deg, rgba(115, 34, 195, 1) 25%, rgba(45, 196, 253, 1) 95%);
  background-color: #1e81b0;
}

.carousel-bottoms .bottoms {
  padding: 0 15px;
}
</style>
