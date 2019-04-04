<template>

  <div id="XRP" class="block last getXrp" @click="$emit('chooseXRP')">
    <div class="asd">
      <div class="blockimg">
        <div>
          <img src="https://endotech.io/img/coinicon/XRP.png">
        </div>
        <div class="text">
          XRP
        </div>
      </div>

      <div class="blockul">
        <ul>
          <li>USD: {{info.XRP.USD}}</li>
          <li>UAH: {{info.XRP.UAH}}</li>
          <li>RUB: {{info.XRP.RUB}}</li>
        </ul>
      </div>
    </div>
  </div>



</template>

<script>
  export default {
    data() {
      return {
        info: null
      }
    },
    mounted() {
      axios
        .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,UAH,RUB')
        .then(response => (this.info = response.data));
    }
  }
</script>


<style>
  .last{margin-right: 0px;}

  .block{
    width: 32%;
    float: left;
  }
  .block:hover{
    background-color: #008080;
  }
  .blockimg{
    width: 30%;
    height: 100%;
    float: left;
  }
  .block{
    height: 150px;
    padding-top: 20px;
    background-color: #0d2f52;
  }
  img{
    display: block;
    width: 50%;
    margin: 10px auto;
    margin-bottom: 5px;
  }
  .text{text-align: center; color: #85c44c;}
  .blockul{
    width: 70%;
    height: 100%;
    float: left;
  }
  ul{
    box-sizing: border-box;
    list-style-position: outside;
    height: 100%;
    padding: 10px;
    margin: 0px;
  }
  li{
    list-style-type: none;
    margin-bottom: 7px;
    color: #84a7ea;
    font-weight: bold;
  }
  .blockul span{
    font-weight: normal;
  }
</style>
