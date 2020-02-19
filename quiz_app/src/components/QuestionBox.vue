<template>
    <div class='question-box-container'>
        <b-jumbotron>

                <template v-slot:lead>
                {{ currentQuestion.question }}
                </template>

                <hr class="my-4">
                
                <b-list-group>
                        <b-list-group-item v-for="(answer, index) in shuffledAnswers" 
                        :key="index"
                        @click="selectAnswer(index)"
                        :class="answerClass(index)"
                        >
                                {{ answer }}
                        </b-list-group-item>
                </b-list-group>

                <b-button 
                        variant="primary"
                        v-on:click="submitAnswer"
                        :disabled="selectedAnsIndex === null || questionAnswered" 
                >
                        Submit
                </b-button>
                <b-button variant="success" href="#" @click="nextQuestion">
                        Next Question
                </b-button>
        </b-jumbotron>
</div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    nextQuestion: Function,
    increment: Function
  },
  data() {
    return {
      selectedAnsIndex: null,
      shuffledAnswers: [],
      questionAnswered: false,
      correctIndex: null
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    }
  },
  watch: {
    currentQuestion: {
      // The other way to ensure shuffle occurs on first instance, with immediate
      immediate: true,
      handler() {
        this.selectedAnsIndex = null;
        this.questionAnswered = false;
        this.shuffleAnswers();
      }
    }
  },
  methods: {
    // Pick an answer based on index at @click
    // Need to save this in the component - data
    selectAnswer(index) {
      this.selectedAnsIndex = index;
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedAnsIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.questionAnswered = true;
      this.increment(isCorrect);
    },
    answerClass(index) {
      let answerClass = "";

      if (!this.questionAnswered && this.selectedAnsIndex === index) {
        answerClass = "selected";
      } else if (this.questionAnswered && this.correctIndex === index) {
        answerClass = "correct";
      } else if (
        this.questionAnswered &&
        this.selectedAnsIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = "incorrect";
      }
      return answerClass;
    }
  }
  // One way to shuffle answers every time - even first load of app.
  // mounted() {
  //         this.shuffleAnswers();
  // }
};
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}
.btn {
  margin: 5px;
}
.selected {
  background-color: lightblue;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: lightcoral;
}
</style>

