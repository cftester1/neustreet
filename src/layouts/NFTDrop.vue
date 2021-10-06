<template>
  <q-layout class="bg-black">
    <q-page-container class="page-content">
      <div class="video-wrapper" v-if="isApproved">
        <video
          src="../assets/nft.mp4"
          class="video-player"
          style=""
          autoplay
          loop
          muted
          playsinline
        ></video>
      </div>
      <div class="error-wrap" v-if="!isApproved">
        <h1>Ooops!</h1>
        <p>Wrong address</p>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      isApproved: false,
      NFTCodes: [
        "0x9528db4B6Ebf23985D7F19D5817B2bE0d89657Ee",
        "0x9417f4a75c618Be94b0c2791db6BBf9d9C79524c",
        "0x9286Ccb241f16Acbc419137af97aa3D5949Ff7Ad",
        "0x7606Ba33992d5526C442087368ed7ec3D2415eCA",
        "0x622FbD77711a2B492E874D6D41109D3f9820B4F7",
        "0x746fDF396F249aB5cb61ec91D47E0fE0cED9E412",
        "0x783E35dF31d3e61d96Ec87aa63f2de0C5970c09E",
        "0x823B4b04a4d70ce763508262F88099fEF096C74D",
        "0x882B17a502Afbd93f840E70fbD9577aeeb446917",
        "0x2391AfdAE0503eee9B01b05480739b7be4CB0Dde",
        "0x2752a8E26107dbcF0f347f735F794B6E5FC18115",
        "0x607D7D54ea25a964173774c68CB78eEf35bB3752",
        "0x441f6d7280c21ceEe4502103c030439b445FC665",
        "0x478c138E75BCEAf6a17cAA1790997399E3D36918",
        "0x560A06E794CeBd8535EEcD85059F3095170Cb2bA",
        "0x325c6AAe2A771034d475ED177Dd004aefd17f585",
        "0x175dd903F3eC1F3FC2815fA290A3C7d3c0d96783",
        "0x110b1695340B4a48d2Ad164f0b3fD62Bf80ff6A8",
        "0x94dd322228E46724CfC0F7dD4F914204f4f83B41",
        "0x93F91C467bCad69Dddc9272478443E60C3fFC0C5",
        "0x88DCf4e84568314cd62845a558530090Ec34768E",
        "0x00e31499dA0020b86611948a705AA5c437e1E857",
        "0x00E080AAeCD4BAe5Fee268DA4C457185eFC2E54f",
        "0x00E8B9707D9ECB5F12A2F0C931d4D0Ccdc6fc62b",
        "0x00DD519875efaAEa8f8df274E9bf88203644b708",
        "0x00Cb407f09Bc5125225726BD054d502524b2b880",
        "0x00Cb3F2EfeD58Da617AA602341b2EaFd3CDeA407",
        "0x00C98a9249f9962eB722AFC3318be816fC1d3C4d",
        "0x00ba623D3970428dd49935726E086C1Ebb1D0EE3",
        "0x00b191B0FcA6D84cD50725FEb0A38c77c5fc9403"
      ]
    };
  },
  mounted() {
    const id = this.$route.params.id;
    if (this.NFTCodes.includes(id)) {
      this.isApproved = true;
    }
  }
};
</script>

<style scoped>
.video-wrapper {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #edebed;
}

.error-wrap {
  color: #fff;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.error-wrap h1 {
  font-size: 50px;
  font-family: montserrat-semi-bold;
  line-height: 50px;
}

.error-wrap p {
  font-size: 20px;
  font-family: montserrat-medium;
  line-height: 20px;
}
</style>
