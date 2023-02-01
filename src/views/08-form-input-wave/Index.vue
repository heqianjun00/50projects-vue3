<script lang="ts" setup>
</script>

<template>
  <div class="container-wrap">
    <div class="container">
      <h1>Please Login</h1>
      <form>
        <div class="form-control">
          <input type="text" required>
          <label>
            <span style="transition-delay: 0ms">E</span>
            <span style="transition-delay: 50ms">m</span>
            <span style="transition-delay: 100ms">a</span>
            <span style="transition-delay: 150ms">i</span>
            <span style="transition-delay: 200ms">l</span>
          </label>
        </div>
        <div class="form-control">
          <input type="password" required>
          <label>
            <span style="transition-delay: 0ms">P</span>
            <span style="transition-delay: 50ms">a</span>
            <span style="transition-delay: 100ms">s</span>
            <span style="transition-delay: 150ms">s</span>
            <span style="transition-delay: 200ms">w</span>
            <span style="transition-delay: 250ms">o</span>
            <span style="transition-delay: 300ms">r</span>
            <span style="transition-delay: 350ms">d</span>
          </label>
        </div>
        <button class="btn">Login</button>
        <p class="text">Don't have an account? <a href="#">Register</a> </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-wrap {
  background-color: steelblue;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

  .container {
    background-color: rgba($color: #000000, $alpha: .4);
    padding: 20px 40px;
    border-radius: 5px;

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    a {
      text-decoration: none;
      color: lightblue;
    }

    .btn {
      cursor: pointer;
      display: inline-block;
      width: 100%;
      background-color: lightblue;
      padding: 15px;
      font-family: inherit;
      font-size: 16px;
      border: 0;
      border-radius: 5px;
    }

    .btn:focus {
      outline: 0;
    }

    .btn:active {
      transform: scale(0.98);
    }

    .text {
      margin-top: 30px;
    }

    .form-control {
      position: relative;
      margin: 20px 0 40px;
      width: 300px;

      input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
        color: #fff;
      }

      input:focus, input:valid {
        outline: 0;
        border-bottom-color: lightblue;
      }

      label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;

        span {
          display: inline-block;
          font-size: 18px;
          min-width: 5px;
          transition: .3s cubic-bezier(.68, -.55, .256, 1.55);
        }
      }

      input:focus + label span, 
      input:valid + label span {
        color: lightblue;
        // 字母跳动
        transform: translateY(-30px);
      }
    }
  }
}
</style>