<template>
<div>
  <NavBar></NavBar>

  <footers></footers>

</div>



</template>

<script>
  import NavBar from "../common/NavBar";
  import footers from "../common/footers";
    export default {
        name: "teachers",
      components: {
          NavBar:NavBar,
          footers:footers

      }
    }
</script>

<style scoped>

</style>
