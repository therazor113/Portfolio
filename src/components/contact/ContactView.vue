<script>
export default {
  setup () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log(`Name: ${this.name} Email: ${this.email} Message: ${this.message}`)
    },
    handleName (e) {
      this.name = e.target.value
    },
    handleEmail (e) {
      this.email = e.target.value
    },
    handleMessage (e) {
      this.message = e.target.value
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Contact</h1>
    <div class="info">
      <h2>LinkedIn</h2>
      <h2>Email</h2>
    </div>
    <form
      name="EmailForm"
      @submit="onSubmit"
    >
      <div class="formHeader">
        <input
          required
          class="name"
          name="name"
          type="text"
          placeholder="Enter Name"
          @change="handleName"
        >
        <input
          required
          class="email"
          name="email"
          type="text"
          placeholder="Enter Email"
          @change="handleEmail"
        >
      </div>
      <textarea
        required
        class="message"
        name="message"
        placeholder="Enter Message"
        cols="30"
        rows="10"
        @change="handleMessage"
      />
      <input
        class="submitButton"
        type="submit"
      >
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 40vh;
    h1 {
      text-align: center;
      text-decoration: underline;
    }
    input {
      padding: 5px;
      background: black;
      border: none;
      border-radius: 5px;
      color: #eee;
    }
    form {
      width: 415px;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      margin: 0 auto;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .formHeader {
    display: flex;
    justify-content: space-between;
    input {
      width: 200px;
      height: 35px;
    }
  }
  .message {
    padding: 5px;
    background: black;
    resize: none;
    width: 415px;
    height: 275px;
    border: none;
    border-radius: 5px;
    color: #eee;
  }
  .submitButton {
    transition: background 0.3s;
    width: 75px;
    height: 30px;
    margin: 0 auto;
    &:hover {
      transition: background 0.3s;
      background: rgb(40, 40, 40);
      cursor: pointer;
    }
  }
</style>
