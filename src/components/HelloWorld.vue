<template>
  <div class="container-fluid " >
    <div class="topnav" id="myTopnav"  >
      <a href="#home" class="active" style="color:black"><font face="impact" color="green">CoronaInfo</font></a>

      <a href="" style="color:black" id="textAbout" data-toggle="modal" data-target="#AboutModal">About</a>
      <a
        href="javascript:void(0);"
        style="font-size:15px;color:black"
        class="icon"
        @click="myFunction()"
      >&#9776;</a>
    </div>

    <!-- modal about -->
    <div class="modal fade" id="AboutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">ABOUT</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          
        </button>
      </div>
      <div class="modal-body">
        <p>Virus Corona saat ini sedang melanda Negara Indonesia nyaris setiap harinya korban semakin banyak pertambah, dan maka dari itu 
            kita sebagai manusia harus menjaga kebersihan dan selalu mencuci tangan
          </p>
          <p>Tujuan saya membuat web ini agar kita dapat mengkontrol berapa banyak orang yang sudah terkena dan yang sembuh, mudah mudahan ini bermanfaat
            kita semua
          </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>
    <div class="row mt-5">
      <div class="col-md-12">
        <div
          class="card"
          style="background: rgb(12,198,236);background: radial-gradient(circle, rgba(12,198,236,1) 0%, rgba(70,123,252,0.8018557764902836) 100%)
          ;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
          <h2 class="text-center" style="color:white">Corona Info</h2>
          <div class="card-body" style="color:white">
            <span>
              <h4>
                Mari pantau Corona melalui online dan Lindungi keluarga, rekan-rekan, saudara juga diri Anda dari penyebaran virus corona Maka dari itu Jaga selalu kesehatan anda ,Pola hidup anda dan Jangan lupa untuk mencuci tangan tiap saat,
                Karena penyebaran Corona tidak memandang umur
              </h4>
            </span>
            <span>Update Terakhir : {{new Date(info.updated) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mt-5">
        <div class="card" id="coronainfo" style="background: rgb(255,0,0);
background: radial-gradient(circle, rgba(255,0,0,0.8662815467984069) 0%, rgba(249,111,25,0.9139005944174545) 100%);">
          <h3>Total Kasus</h3>
          <div class="card-body">
            <span style="color:black"><h4>{{formatPrice(info.cases)}} Orang</h4></span>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-5">
        <div class="card" id="coronainfo" style="background: rgb(17,246,23);
background: radial-gradient(circle, rgba(17,246,23,0.8242647400757178) 0%, rgba(154,249,25,0.8046568969384629) 100%);">
          <h3>Total Sembuh</h3>
          <div class="card-body">
            <span style="color:black"><h4>{{formatPrice(info.recovered)}} Orang</h4></span>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-5">
        <div class="card" id="coronainfo" style="background: rgb(255,231,7);
background: radial-gradient(circle, rgba(255,231,7,0.7990546560421043) 0%, rgba(244,249,25,0.7878501742493873) 100%);">
          <h3>Total Meninggal</h3>
          <div class="card-body">
            <span style="color:black"><h4>{{formatPrice(info.deaths)}} Orang</h4></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="card">
          <h3 class="text-center">Statistik Kasus Virus Corona Global</h3>
          <div class="card-body">
              <div class="table-responsive">
                  <table class="table table-hover" style="width:100%" id="coronanegara">
                    <thead>
                      <tr>
                        <th scope="col">NO</th>
                        <th scope="col">Negara</th>
                        <th scope="col">Total Kasus</th>
                        <th scope="col">Total Sembuh</th>
                        <th scope="col">Total Meninggal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(cnd,index) in CoronaNegara" :key="cnd.id">
                        <td scope="row">{{index +1}}</td>
                        <td>{{cnd.country}}</td>
                        <td>{{formatPrice(cnd.cases)}}</td>
                        <td>{{formatPrice(cnd.recovered)}}</td>
                        <td>{{formatPrice(cnd.deaths)}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="text-center mt-5">
  <font size="5"><p>Data provided by <a href="https://www.worldometers.info/coronavirus/">Worldometers</a></p></font>
  <font size="5"><p>© 2020 By <a href="https://www.instagram.com/luizadaaam/"><font face="impact" color="green" >LuizAdam</font></a>.</p></font>
</footer>
  </div>
</template>

<script>
/*eslint-env jquery*/

import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      info: {},
      CoronaNegara:{},
      Cni:{},
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories:[]
        }
      },
      series: [
        {
          name: "namanegara",
          data: []
        }
      ]
    };
  },
  created(){
    this.Negara();
    this.CoronaIndo()
  },
  methods: {
    async Negara(){
      await axios
      .get("https://corona.lmao.ninja/countries")
      .then(response => {
      this.CoronaNegara = response.data
      $(document).ready(function() {
    $('#coronanegara').DataTable();
} );
      
    //  for (let i = 0; i < this.CoronaNegara.length; i++) {
    //   this.dataku.push(this.CoronaNegara[i].cases)
    //   this.series.data = this.dataku
        
    //   }
      });
       
      // console.log(this.series.data)
    },
    async CoronaIndo(){
      await axios
      .get("https://corona.lmao.ninja/countries/indonesia")
      .then(response => {
      this.Cni = response.data
      // console.log(this.Cni)
      $(document).ready(function() {
    $('#coronaindo').DataTable();
} );
      });
       
    },

    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    
  },

  mounted() {
    axios
      .get("https://corona.lmao.ninja/all")
      .then(response => (this.info = response.data));
      // setTimeout(function () {
      //         $('#coronanegara').DataTable()
      //       }, 1000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topnav {
  overflow: hidden;
  background-color: #ffffff;
  /* border: 1px solid; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#coronainfo {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.active {
  background-color: #ffffff;
  color: white;
}

.topnav .icon {
  display: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

#textAbout{
  float:right
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.topnav a:hover,
.dropdown:hover .dropbtn {
  background-color: #ffffff;
  color: white;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child),
  .dropdown .dropbtn {
    display: none;
    float: left;
  }
  #textAbout{
    float:left;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {
    float: none;
  }
  .topnav.responsive .dropdown-content {
    position: relative;
  }
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
