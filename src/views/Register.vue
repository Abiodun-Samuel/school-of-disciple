<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <router-link to='/' class="d-flex align-items-center btn border mt-3 mx-4 border-success">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
      </svg>
      Home
    </router-link>
    <div class="container d-flex justify-content-center align-items-center mt-5 mb-5">
        <div class="card" style="width: 32rem;">
            <div class="card-header">
                <h4 class="mt-3">Register and Start Learning</h4>
            </div>
      <div>
        <form @submit.prevent="handleSubmit" class="form mx-4 my-3">
            <div class="mb-3">
                <label for="surname" class="form-label">Surname</label>
                <input v-model="formData.Surname" placeholder="Your Name" name="Surname" class="form-control" type="text" required />
            </div>
            <div class="mb-3">
                <label for="otherNames" class="form-label">Other Names</label>
                <input v-model="formData.OtherNames" placeholder="Your Other Names" class="form-control" name="OtherNames" type="text" required />

            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="formData.Email" placeholder="Your Email" name="Email" type="text" class="form-control"  required>

            </div>
            <div class="mb-3">
                <label for="phoneNumber" class="form-label">Phone Number</label>
                <input v-model="formData.PhoneNumber" placeholder="Your Phone Number" class="form-control no-spinner" name="PhoneNumber" type="number" required />
            </div>
            <div class="mb-3">
                <label for="state" class="form-label">State</label>
                <select v-model="formData.State" placeholder="Your State" class="form-select" name="State" type="text" >
                   <option  value="" disabled>--Select Student Type--</option>
                    <option  value="Home within(Nigeria)">Home within(Nigeria)</option>
                    <option value="Foreign(Outside the country)">Foreign(Outside the country)</option>
                </select> 
            </div>
          <button type="submit" class="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import Toastify from 'toastify-js';
  import 'toastify-js/src/toastify.css';
  
  export default {
    setup() {
      // Reactive form data
      const formData = ref({
        Surname: '',
        Email: '',
        OtherNames: '',
        State: '',
        PhoneNumber: ''
      });
  
      // Function to handle form submission
      const handleSubmit = (e) => {
        // Prevent default form submission
        e.preventDefault();
        
        // Create FormData object from form
        const formEle = e.target;
        const formDatab = new FormData(formEle);
  
        // Fetch request
        fetch(
          "https://script.google.com/macros/s/AKfycbw57-I5PYOqmJ-Ks7OqSBZzx30GKLWL3I7yA09qYwgTsh86focuFvcg1ILuCLGOX03sdg/exec",
          {
            method: "POST",
            body: formDatab,
          }
        )
          .then((res) => res.json())
          .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          showToast("Form submitted successfully!", "#4CAF50");
          resetForm();
        })
        .catch((error) => {
          console.error("Submission Error:", error);
          showToast("Form submitted successfully!", "#4CAF50");
          resetForm();

        });
      };
      const showToast = (message, backgroundColor) => {
      Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          background: backgroundColor,
        },
        stopOnFocus: true,
      }).showToast();
    };

    const resetForm = () => {
      formData.value = {
        Surname: '',
        OtherNames: '',
        Email: '',
        State: '',
        PhoneNumber: ''
      };
    };

  
      return {
        formData,
        handleSubmit
      };
    }
  };
  </script>
  
  <style scoped>
  .btn{
    width: 100px;
  
  }
  .submit{
    background: linear-gradient(to right, rgb(15, 197, 239) 0%, rgb(141, 216, 22) 100%);
    color: white;
  }
  .submit:hover{
    background: linear-gradient(to right, rgb(141, 216, 22) 0%, rgb(15, 197, 239) 100%);
  }
  .btn:hover{
    background: linear-gradient(to right, rgb(15, 197, 239) 0%, rgb(141, 216, 22) 100%);
    color: white;
  }
  /* Add your styles here */
  input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.no-spinner {
  -moz-appearance: textfield; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
}
  </style>
<!--  -->