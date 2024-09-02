<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid mx-md-5 my-2">
      <div>
        <img src="../assets/images/logo.png" alt="Logo" width="120px" />
        <img src="../assets/images/rcg.png" alt="RCG" width="60px" class="newimg" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="custom-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <div class="" id="navbarSupportedContent">
          <ul class="navbar-nav gap-2 me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" style="text-decoration: none">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" style="text-decoration: none">
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link" style="text-decoration: none">
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="sponsor" class="nav-link nav-tr" style="text-decoration: none">
                Sponsor a Student
              </router-link>
            </li>
            <li class="nav-item nav-nw">
              <router-link to="/register" class="nav-link" style="text-decoration: none">
                Register
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
nav {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}

.nav-tr {
  background-color: #65ff57;
  color: black;
  border-radius: 20px;
  font-weight: 700;
}

.nav-link {
  color: white;
}

.txt {
  color: white;
}

.nav-nw {
  background-color: #ffc107;
  border-radius: 20px;
  font-weight: 700;
  padding: 0 10px;
}

.newimg {
  margin-right: -200px;
}

.sticky {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1540px;
  background-color: #343a40;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  transition: top 0.3s;
}

/* Custom hamburger icon styles */
.custom-toggler-icon {
  display: inline-block;
  width: 30px;
  height: 3px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.custom-toggler-icon::before,
.custom-toggler-icon::after {
  content: "";
  width: 30px;
  height: 3px;
  background-color: white;
  position: absolute;
  left: 0;
  transition: all 0.3s ease-in-out;
}

.custom-toggler-icon::before {
  top: -10px;
}
.navbar-toggler:focus {
  outline: none; /* Removes the outline when focused */
  box-shadow: none; /* Removes any default box-shadow */
}
.custom-toggler-icon::after {
  top: 10px;
}

@media (max-width: 991.98px) {
  .navbar-toggler {
    display: block;
    border: none;
    outline: none;
  }

  .navbar-collapse {
    background-color: #343a40;
    position: absolute;
    padding: 0 20px;
    gap: 5px;
    top: 100px;
    left: 0;
    width: 100%;
    z-index: 1999;
  }
}

.navbar-nav {
  text-align: center;
}

.nav-item .nav-link:hover {
  color: #000;
}

.nav-link {
  color: white;
}
</style>
