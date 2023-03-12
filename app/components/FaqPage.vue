<template>
  <Page class="page faqs">
    <ActionBar />
    <StackLayout class="faq-container">
      <ScrollView orientation="vertical" height="auto">
        <StackLayout class="page-wrapper" justifyContent="center" alignItems="center">
          <StackLayout class="card-container">
            <StackLayout>
              <GridLayout
                v-for="faq in faqs"
                :key="faq.id"
                columns="auto,*"
                rows="auto,auto"
                class="commons mb-2 mt-0 faq rounded-2xl p-4"
              >
                <FlexboxLayout
                  col="0"
                  row="0"
                  class="justify-center items-center h-11 mb-4 mr-4 rounded-full faq-q"
                >
                  <Label text="Q" class="text-xl text-white font-bold font-sans p-4" />
                </FlexboxLayout>

                <FlexboxLayout col="1" row="0" class="justify-start items-center">
                  <Label
                    textWrap="true"
                    :text="faq.question"
                    class="text-lg text-black leading-none"
                  />
                </FlexboxLayout>

                <FlexboxLayout
                  col="0"
                  row="1"
                  class="justify-center items-center h-11 mr-4 rounded-full faq-a"
                >
                  <Label text="A" class="text-xl text-white font-bold font-sans p-4" />
                </FlexboxLayout>

                <FlexboxLayout col="1" row="1" class="justify-start items-center">
                  <Label
                    textWrap="true"
                    :text="faq.answer"
                    class="text-lg text-black leading-none"
                  />
                </FlexboxLayout>
              </GridLayout>
            </StackLayout>
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
      faqs: [
        {
          question: "Who can apply ?",
          answer:
            "Our goal is to provide equal access to a higher education opportunity and remove as many barriers as possible.  We invite anyone between the ages of 17 and 35, who is able to study full-time for two years at one of our campuses in South Africa to apply. No prior education or coding experience is required.",
        },
        {
          question: "How do I apply ?",
          answer:
            "Apply on our website by filling in your personal details and take our entrance assessment online or book to use our campus facilities on an allocated assessment day. The assessment takes 1 hour to complete and requires stable internet connection.",
        },
        {
          question: "Where can I find the assessment instructions ?",
          answer:
            "There are no instructions, part of the test is figuring out the objective. Problems we face in the real world never come with clear instructions. We’re looking for critical thinkers and problem solvers.",
        },
        {
          question: "What is a Selection Bootcamp ?",
          answer:
            "The bootcamp is a 6 day selection process. It is a practical, hands on experience where applicants are presented with problems to solve both as individuals and in teams. The assessment is designed for both those with prior coding experience as well as applicants that have never coded before. We introduce applicants to new concepts and evaluate their ability to grasp the concepts and then apply them to solve problems.",
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
.page-wrapper {
  background-color: #f7f7f7;
}
.faqs .faq {
  background-color: #ffffff;
}

.faqs .faq-q {
  background-color: #4b82c2;
}

.faqs .faq-a {
  background-color: #3dc391;
}
</style>
