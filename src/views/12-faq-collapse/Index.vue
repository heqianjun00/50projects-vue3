<script lang="ts" setup>
import { ref } from 'vue';
const list = [
  {
    id: 1,
    title: "Why shouldn't we trust atoms?",
    text: "They make up everything"
  },
  {
    id: 2,
    title: "What do you call someone with no body and no nose?",
    text: " Nobody knows."
  },
  {
    id: 3,
    title: "What's the object-oriented way to become wealthy?",
    text: "Inheritance."
  },
  {
    id: 4,
    title: "How many tickles does it take to tickle an octopus?",
    text: "Ten-tickles!"
  },
  {
    id: 5,
    title: "What is: 1 + 1?",
    text: " Depends on who are you asking."
  }
]

let visible = ref(true)
let activeIndex = ref(0)
const toggle = (index, isVisible) => {
  visible.value = isVisible
  activeIndex.value = index
}
</script>

<template>
  <div class="container-wrap">
    <div class="container">
      <h1>Frequently Asked Questions</h1>
      <div class="faq" :class="(item.id == activeIndex && !visible) ? 'active' : ''" v-for="item in list">
        <h3 class="faq-title">
          {{ item.title }}
        </h3>

        <p class="faq-text" v-show="(item.id == activeIndex && !visible)">
          {{ item.text }}
        </p>

        <button class="faq-toggle" @click="toggle(item.id, false)" :class="(item.id == activeIndex && visible) ? 'hide' : ''">
          <i class="fas fa-chevron-down"></i>
        </button>
        <button class="faq-toggle" @click="toggle(item.id, true)" v-if="(item.id == activeIndex && !visible)">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css";

.container-wrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f0f0f0;
  .container {
    width: 600px;
    margin: 0 auto;

    h1 {
      margin: 50px 0 30px;
      text-align: center;
    }

    .faq {
      background-color: transparent;
      border: 1px solid #9fa4a8;
      border-radius: 10px;
      margin: 20px 0;
      padding: 30px;
      position: relative;
      overflow: hidden;
      transition: 0.3s ease;

      .faq-title {
        margin: 0 35px 0 0;
      }

      .faq-text {
        margin: 30px 0 0;
      }

      .faq-toggle {
        background-color: transparent;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        padding: 0;
        position: absolute;
        top: 30px;
        right: 30px;
        height: 30px;
        width: 30px;
      }
    }

    .faq.active {
      background-color: #fff;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
    }

    .faq.active::before,
    .faq.active::after {
      content: '\f075';
      font-family: 'Font Awesome 5 Free';
      color: #2ecc71;
      font-size: 7rem;
      position: absolute;
      opacity: 0.2;
      top: 20px;
      left: 20px;
      z-index: 0;
    }

    .faq.active::before {
      color: #3498db;
      top: -10px;
      left: -30px;
      transform: rotateY(180deg);
    }

    .faq-toggle:focus {
      outline: 0;
    }


    .faq.active .faq-toggle .fa-times {
      color: #fff;
      display: block;
    }

    .faq.active .faq-toggle {
      background-color: #9fa4a8;
    }

    .hide {
      display: none;
    }
  
  }
}
</style>