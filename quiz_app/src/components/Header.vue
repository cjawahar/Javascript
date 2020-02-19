<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
            <b-nav-item disabled>Counter: {{numCorrect}} / {{numTotal}} </b-nav-item>
            <b-nav-item disabled>Category: {{category}}</b-nav-item>
            <b-nav-item disabled>Difficulty: {{difficulty}}</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
  props: {
    difficulty: Object,
    category: Object,
    numCorrect: Object,
    numTotal: Object
  },
  computed: {}
};
</script>

