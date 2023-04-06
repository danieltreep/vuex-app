<template >
    <div v-if="country">
        <h2>details for {{ country.name.official }} from store</h2>
        <table>
            <tr>
                <td>flag</td>
                <td>{{ country.flag }}</td>
            </tr>
            <tr v-if="country.capital">
                <td>Capital</td>
                <td>{{ country.capital[0]}}</td>
            </tr>
            <tr>
                <td>Population</td>
                <td>{{ country.population}}</td>
            </tr>
            <tr>
                <td>region / subregion</td>
                <td>{{ country.region}} / {{ country.subregion }}</td>
            </tr>
            <tr>
                <td>Timezones</td>
                <td>{{ country.timezones[0] }}</td>
            </tr>
            <tr>
                <td>International calling code</td>
                <td>{{ country.idd.root}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'CountryDetail',
    created() {
        this.name = this.$route.params.name
    },
    computed: {
        country() {      
            return this.$store.getters['countries/getCountry'](this.name);
        }
    }
}
</script>
<style lang="">
    
</style>