<script setup lang="ts">
import { ref } from 'vue';
import { 
  HamburgerButton, 
  Close,
  HomeTwo,
  People,
  Mail
} from '@icon-park/vue-next';

const isShow = ref(false);
const handle = (show: boolean) => {
  isShow.value = show;
}
</script>

<template>
  <div class="container-wrap">
    <div class="container" :class="isShow ? 'show-nav' : ''">
      <div class="circle-container">
        <div class="circle">
          <div class="btn open" @click="handle(true)">
            <hamburger-button theme="filled" size="28" fill="#fff"/>
          </div>
          <div class="btn close" @click="handle(false)">
            <close theme="filled" size="28" fill="#fff"/>
          </div>
        </div>
      </div>

      <div class="content">
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Accusantium quia in ratione dolores cupiditate, maxime 
          aliquid impedit dolorem nam dolor omnis atque fuga labore 
          modi veritatis porro laborum minus, illo, maiores recusandae
          cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur
          sunt quia harum aut. Eum maxime dolorem provident natus veritatis
          molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
          molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas
          dolor dignissimos in error placeat quae temporibus minus optio eum soluta
          cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur 
          perferendis consequatur nobis exercitationem molestias fugiat commodi omnis.
          Asperiores quia tenetur nemo ipsa.
        </p>

        <h3>My Dog</h3>
        <img src="@/assets/images/myDog.avif" alt="小狗">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
          Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. 
          Perferendis totam placeat molestias illo laudantium? Minus id minima 
          doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet 
          temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores 
          explicabo provident. Voluptates sint, neque fuga cum illum, tempore 
          autem maxime similique laborum odio, magnam esse. Aperiam?
        </p>
      </div>
    </div>

    <nav>
      <ul>
        <li><home-two theme="filled" size="24" fill="#fff"/><span class="nav-title">HOME</span></li>
        <li><people theme="filled" size="24" fill="#fff"/><span class="nav-title">ABOUT</span></li>
        <li><mail theme="filled" size="24" fill="#fff"/><span class="nav-title">CONTACT</span></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.container-wrap {
  overflow-x: hidden;
  background-color: #333;

  .container {
    background-color: #fafafa;
    width: 100vw;
    min-height: 100vh;
    padding: 50px;
    transform-origin: top left;
    transition: transform 0.5s linear;

    .circle-container {
      position: fixed;
      top: -100px;
      left: -100px;
      z-index: 10;

      .circle {
        background-color: #ff7979;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: relative;
        transition: transform 0.5s linear;

        .btn {
          cursor: pointer;
          position: absolute;
        }

        .open {
          top: 60%;
          left: 60%;
        }

        .close {
          top: 60%;
          left: 40%;
          transform: rotate(90deg);
          transform-origin: top left;
        }
      }
    }

    .content {
      max-width: 1000px;
      margin: 50px auto;

      h3 {
        margin: 18px 0;
        color: #222;
      }

      img {
        max-width: 100%;
      }

      small {
        color: #555;
        font-style: italic;
      }

      p {
        color: #333;
        line-height: 1.5;
        margin: 16px 0;
      }
    }
  }

  .show-nav {
    transform: rotate(-20deg);

    .circle {
      transform: rotate(-70deg);
    }
  }

  .container.show-nav + nav li {
    transform: translateX(0);
    transition-delay: 0.3s;
  }

  nav {
    position: fixed;
    bottom: 40px;
    left: 0;
    z-index: 100;

    ul {
      list-style-type: none;
      padding-left: 30px;

      li {
        text-transform: uppercase;
        color: #fff;
        margin: 40px 0;
        transform: translateX(-100%);
        transition: transform 0.4s ease-in;
        vertical-align: top;

        .nav-title {
          display: inline-block;
          vertical-align: 2px;
          margin-left: 10px;
        }
      }
    }
  }

  nav ul li + li {
    margin-left: 15px;
    transform: translateX(-150%);
  }

  nav ul li + li + li {
    margin-left: 30px;
    transform: translateX(-200%);
  }
}
</style>