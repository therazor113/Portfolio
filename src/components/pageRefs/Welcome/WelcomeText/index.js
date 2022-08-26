export default {
  data () {
    return {
      sentence: '',
      sentenceArr: ['Full Stack Developer', 'JavaScript Tinkerer', 'Gaming Enthusiast', 'Space Enjoyer'],
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
