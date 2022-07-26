<script>
export default {
  data () {
    return {
      nameText: '',
      emailText: '',
      messageText: ''
    }
  },
  methods: {
    onSubmit () {
      console.log(`Name: ${this.nameText} Email: ${this.emailText} Message: ${this.messageText}`)
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
      @submit.prevent="onSubmit"
    >
      <!-- @submit.prevent="onSubmit" might work for preventing default reload -->
      <div class="formHeader">
        <input
          v-model="nameText"
          required
          class="name"
          type="text"
          placeholder="Enter Name"
        >
        <input
          v-model="emailText"
          required
          class="email"
          type="text"
          placeholder="Enter Email"
        >
      </div>
      <textarea
        v-model="messageText"
        required
        class="message"
        placeholder="Enter Message"
        cols="30"
        rows="10"
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
    height: 475px;
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
    transition: background-color 0.3s;
    width: 75px;
    height: 30px;
    margin: 0 auto;
    &:hover {
      transition: background-color 0.3s;
      background-color: rgb(40, 40, 40);
      cursor: pointer;
    }
  }
</style>
