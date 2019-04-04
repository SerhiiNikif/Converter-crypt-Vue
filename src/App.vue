<template>

  <div class="training">

    <BlockBtc
      @chooseBTC = "chooseBTC"
    ></BlockBtc>

    <BlockEth
      @chooseETH = "chooseETH"
    ></BlockEth>

    <BlockXrp
      @chooseXRP = "chooseXRP"
    ></BlockXrp>

    <div class="clearfix"></div>
    <Calculation></Calculation>

    <div class="calculation">
      <h2>Selected coin: {{ coin }} </h2>

      <div class="blockinput">
        <div class="vol">Volume:</div>
        <input type="text" class="inp" v-model="inputVal">
        <div class="clearfix"></div>
      </div>

      <div class="blockbutton">
        <button class="uah" @click="toUan">UAN</button>
        <button class="usd" @click="toUsd">USD</button>
        <button class="rub" @click="toRub">RUB</button>
      </div>

      <div class="result">{{ message }}</div>


    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        info: null,
        message: '',
        inputVal: '',
        arr: null,
        coin: '',
        UAH: 'UAH',
        USD: 'USD',
        RUB: 'RUB'
      }
    },
    mounted() {
      axios
        .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,UAH,RUB')
        .then(response => (this.info = response.data));
    },
    methods: {
      chooseBTC: function () {
        this.coin = 'BTC';
        this.arr = this.info.BTC;
        this.message = null;
      },
      chooseETH: function () {
        this.coin = 'ETH';
        this.arr = this.info.ETH;
        this.message = null;
      },
      chooseXRP: function() {
        this.coin = 'XRP';
        this.arr = this.info.XRP;
        this.message = null;
      },
      toUan: function () {
        let res = this.inputVal * this.arr.UAH;
        this.message = this.inputVal + ' ' + this.coin + ' will be ' + res.toFixed(2) + ' in ' + this.UAH;
      },
      toUsd: function () {
        let res = this.inputVal * this.arr.USD;
        this.message = this.inputVal + ' ' + this.coin + ' will be ' + res.toFixed(2) + ' in ' + this.USD;
      },
      toRub: function () {
        let res = this.inputVal * this.arr.RUB;
        this.message = this.inputVal + ' ' + this.coin + ' will be ' + res.toFixed(2) + ' in ' + this.RUB;
      }
    }
  }
</script>

<style>
  body{
    background-color: #05152e;
    margin: 0px;
  }
  .training{
    width: 70%;
    height: 100%;
    margin: 70px auto;
    background-color: #05152e;
    color: green;
  }

</style>
