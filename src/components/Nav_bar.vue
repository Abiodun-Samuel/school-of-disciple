<template>
  <nav class="navbar  navbar-expand-md ">
    <div class="container-md mx-md-5  my-2 mt-4">
      <div>
        <img src="../assets/images/logo.png" alt="Logo" width="120px" class="imag" />
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
        <div class="d-flex  justify-content-md-between navMenu   align-items-md-center " id="navbarSupportedContent">
          <ul class="navbar-nav gap-2 me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="navlink" style="text-decoration: none">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="navlink" style="text-decoration: none">
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="navlink" style="text-decoration: none">
                Get Started
              </router-link>
            </li>
          
          </ul>
          <div class="d-flex gap-3 align-content-center mx-md-2">
            <svg xmlns="http://www.w3.org/2000/svg"  width="22" height="22" fill="rgba(255, 255, 255, .7)" class="bi bi-facebook " viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgba(255, 255, 255, .7)" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgba(255, 255, 255, .7)" class="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script se>
</script>

<style scoped>
nav {
  background-color: transparent;
  color: white;
}
.imag{
  margin-left: -20px;
}
.navMenu{
  width: 58%;
}

.navlink {
  display: flex;
  color: rgba(255, 255, 255, .7);
  gap: 10px;
  margin-right: 30px;
}
.navlink:hover{
  color:white;
}
svg{
  cursor: pointer;
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

@media (max-width: 768.98px) {
  .navbar-toggler {
    display: block;
    border: none;
    outline: none;
  }
  .navMenu{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
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
  .custom-toggler-icon{
    margin-left: 60px;
  }
}

.navbar-nav {
  text-align: center;
}

.nav-item .nav-link:hover {
  color: #000;
}


.nav-link {
  font-size: 17px;
  font-weight: 500;
  letter-spacing: .02em;
  color: rgba(255, 255, 255, .7);
}
</style>
