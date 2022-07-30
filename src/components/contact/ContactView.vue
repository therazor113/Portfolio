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
  <h1 class="title">
    Contact
  </h1>
  <div class="contactContainer">
    <div>
      <h2>Send an email:</h2>
      <form
        name="EmailForm"
        @submit.prevent="onSubmit"
      >
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
    <div class="info">
      <h2>LinkedIn:</h2>
      <h2>Email:</h2>
      <h2>GitHub:</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    color: #fff;
    font-size: 40px;
    text-align: center;
    margin-bottom: 1rem;
  }
  .contactContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2rem;
    width: 95%;
    height: 400px;
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
    }
  }
  .info {
    display: flex;
    flex-direction: column;
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
