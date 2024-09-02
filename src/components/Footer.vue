<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer>
        <div class="footer ">
            <div class="container gap-5 d-flex flex-column flex-md-row justify-content-between  ">
                <div class="col-md-5 text-white-50">
                    <h3>About US</h3>
                    <p class="">The School of Disciples which started in 1985 is co-ordinated by the Christ the
                         Redeemer’s Ministries, an evangelical arm of the Redeemed Christian Church of God. 
                         It is a school where Christians of all denominations learn how to be a true and genuine
                          disciples of Jesus Christ, how to study to show oneself approved unto God
                        </p>
                        <div class=" col-12 d-flex align-content-center  gap-3 text-white-50 foot">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-youtube"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                </div>
            </div>
                <div class="col-md-2 text-sm-start text-white-50">
                    <h4>Other Links</h4>
                    <ul class="list-group gap-2">
                        <li class="list-group">Home</li>
                        <li class="list-group">About</li>
                        <li class="list-group">Login</li>
                        <li class="list-group">Register</li>
                        <li class="list-group">Sponsor a student</li>
                    </ul>
                </div>
                <div class="col-md-4 text-sm-start text-white-50">
                    <h4>Contact Us</h4>
                    <div class="d-flex gap-2 align-self-center  align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"/>
                          </svg>
                          <p class="pt-3">0902536474894</p>
                    </div>
                    <div class="d-flex gap-2 align-self-center  align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                          </svg>
                           <p class="mt-3">SOD@gmail.com</p>
                    </div>
                    
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
                    </div>
                </div>
            </div>
            <hr class="text-white-50 container">
            <div class="row d-flex justify-content-center text-white-50">
                © 2024 All rights reserved
               </div>
        <!-- <div class="row">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        </div>
        
        <div class="row">
        <ul>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Career</a></li>
        </ul>
        </div>
        
        -->
        </div>
        </footer>
</template>

<script>
export default {

}
</script>

<style>
input{
    background: none;
}
.footer{
    background:#121921;
    padding:30px 0px;
    font-family: 'Play', sans-serif;
    }
    
    .footer .foot{
    width:100%;
    margin:1% 0%;
    padding:0.6% 0%;
    color:rgba(255, 255, 255, 0.7);
    font-size:0.8em;
    }
    
    .footer .foot a{
    text-decoration:none;
    color:gray;
    transition:0.5s;
    }
    
    .footer .foot a:hover{
    color:#fff;
    }
    
    .footer .foot ul{
    width:100%;
    }
    
    .footer .foot ul li{
    display:flex;
    margin:0px 30px;
    }
    
    .footer .foot a i{
    font-size:2em;
    margin:0% 1%;
    }
    
    @media (max-width:720px){
    .footer{
    text-align:left;
    padding:5%;
    }
    .footer .foot ul li{
    display:block;
    margin:10px 0px;
    text-align:left;
    }
    .footer .foot a i{
    margin:0% 3%;
    }
    }
</style>