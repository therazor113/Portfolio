<script>
export default {
  data () {
    return {
      sentence: '',
      sentenceArr: ['Front-end Developer', 'JavaScript Tinkerer', 'Space Enjoyer', 'Gaming Enthusiast'],
      tempArr: [],
      count: 0
    }
  },
  created () {
    this.start()
  },
  methods: {
    async start () {
      for (let i = 0; i < this.sentenceArr.length; i++) {
        this.tempArr = this.sentenceArr[this.count].split('')
        await this.changeText(true, 125)
        await this.changeText(false, 100)
        this.count++
      }
      this.count = 0
      this.start()
    },
    changeText (e, n) {
      return new Promise(resolve => {
        for (let i = 0; i < this.tempArr.length; i++) {
          setTimeout(() => {
            if (e) {
              this.sentence += this.tempArr[i]
            } else if (!e) {
              this.sentence = this.sentence.slice(0, -1)
            }
            if (i === this.tempArr.length - 1) {
              setTimeout(resolve, 1000)
            }
          }, i * n)
        }
      })
    }
  }
}
</script>

<template>
  <div class="introContainer">
    <div class="intro">
      <h1>Hello! 👋</h1>
      <h1>I'm Zachary Burtcher</h1>
      <h2>
        <span class="typed">{{ sentence }}<span class="inputCursor" />
        </span>
      </h2>
    </div>
    <div>
      <a
        title="Linkedin"
        href="https://www.linkedin.com/in/zachary-burtcher-473634209/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#444444"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </a>
      <a
        title="Github"
        href="https://github.com/therazor113"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#444444"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a
        title="Resume"
        href="/downloads/Resume.pdf"
        rel="nofollow"
        download
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#444444"
          viewBox="0 0 384 512"
        >
          <path
            d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  .introContainer {
    text-align: center;
    margin-top: 3rem;
    width: 100%;
    min-height: 92vh;
    max-height: 1075px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    padding-bottom: 4rem;
  }
  .intro {
    h1 {
      color: rgba(255, 255, 255, 0.9);
      font-size: 40px;
      font-weight: 600;
    }
  }
  .typed {
    color: rgb(60, 170, 125);
    font-size: 25px;
  }
 .inputCursor {
    display: inline-block;
    width: 2px;
    height: 20px;
    background-color: rgb(60, 170, 125);
    margin-left: 2px;
  }
  @keyframes blink {
    0% {opacity: 1;}
    40% {opacity: 1;}
    60% {opacity: 0;}
    100% {opacity: 0;}
  }
  .inputCursor {
    animation: blink .6s linear infinite alternate;
  }
  a {
    cursor: default;
  }
  svg {
    margin: 1rem;
    transition: transform 0.2s, fill 0.2s;
    &:hover {
      transform: scale(1.1);
      fill: rgb(60, 170, 125);
      cursor: pointer;
    }
  }
</style>
