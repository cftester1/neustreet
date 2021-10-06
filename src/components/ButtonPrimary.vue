<template>
    <q-btn
        square
        :label="buttonName"
        :ripple="false" 
        color="accent"
        class="NS_input__button"
    />
</template>

<script>

export default {
    name: 'ButtonPrimary',
    props: {
        buttonName: String,
    }
}
</script>

<style lang="scss" scoped>

.btn-text {
    font-family: "montserrat-semi-bold";
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    font-size: 15.5px;
}
</style>
