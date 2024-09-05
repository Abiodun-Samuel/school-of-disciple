<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container d-flex justify-content-center align-items-center mt-5 mb-5">
        <div class="card" style="width: 32rem;">
            <div class="card-header">
                <h4 class="mt-3">Register and Start Learning</h4>
            </div>
      <div>
        <form @submit.prevent="handleSubmit" class="form mx-4 my-3">
            <div class="mb-3">
                <label for="surname" class="form-label">Surname</label>
                <input v-model="formData.Surname" placeholder="Your Name" name="Surname" class="form-control" type="text" />
            </div>
            <div class="mb-3">
                <label for="otherNames" class="form-label">Other Names</label>
                <input v-model="formData.OtherNames" placeholder="Your Other Names" class="form-control" name="OtherNames" type="text" />

            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="formData.Email" placeholder="Your Email" name="Email" type="text" class="form-control"  required>

            </div>
            <div class="mb-3">
                <label for="phoneNumber" class="form-label">Phone Number</label>
                <input v-model="formData.PhoneNumber" placeholder="Your Phone Number" class="form-control no-spinner" name="PhoneNumber" type="number" />
            </div>
            <div class="mb-3">
                <label for="state" class="form-label">State</label>
                <select v-model="formData.State" placeholder="Your State" class="form-select" name="State" type="text" >
                   <option  value="" disabled>--Select Student Type--</option>
                    <option  value="Home within(Nigeria)">Home within(Nigeria)</option>
                    <option value="Foreign(Outside the country)">Foreign(Outside the country)</option>
                </select> 
            </div>
          <button type="submit">Submit</button>
        </form>
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
          "https://script.google.com/macros/s/AKfycbwUXV2yEhEYFCMOyDYZKOQ8gOx2Qv6GhsgH35YQPYSNjZLHMtCOXXVI4Yq9Gr8PtJcd6w/exec",
          {
            method: "POST",
            body: formDatab,
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            Toastify({
            text: "Form submitted successfully!",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "#4CAF50", // Change color as needed
            stopOnFocus: true, // Prevents dismissing of toast on hover
          }).showToast()  

          formData.value = {
            Surname: '',
            Email: '',
            OtherNames: '',
            State: '',
            PhoneNumber: ''
          };
        })
          .catch((error) => {
            Toastify({
            text: "Error submitting form!",
            duration: 3000,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "#f44336", // Change color as needed
            stopOnFocus: true, // Prevents dismissing of toast on hover
          }).showToast();
            console.log(error);
          });
      };
  
      return {
        formData,
        handleSubmit
      };
    }
  };
  </script>
  
  <style scoped>
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
  