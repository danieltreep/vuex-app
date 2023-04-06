<template >
    <div>
        <h2>Countries via API - stored in Vuex store</h2>
        <button @click="fetchCountries()">Fetch countries</button>
        <button @click="clearCountries()">Clear countries</button>

        <div v-if="!loading"><h3>Loading...</h3></div>

        <div v-if="error"><h3>Oh no! Error</h3><div>{{ errorList }}</div></div>

        <ul v-if="countries && countries.length">
            <li v-for="(country) in countries" :key="country.name"
                @click="getCountry(country.name.official)">
                <span class="imgFlag">
                    {{country.flag}}
                </span>
                <h4>Name: {{country.name.official}}</h4>
                <p v-if="country.capital">Capital: {{ country.capital[0] }}</p>
                <p>Population: {{ country.population }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'CountriesView',
    methods: {
        fetchCountries() {
            this.$store.dispatch('countries/fetchCountries')
        },
        clearCountries() {
            this.$store.dispatch('countries/clearCountries');
        },
        getCountry(name) {
            this.$router.push({
                name: 'country-detail',
                params: {
                    name: name
                }
            })
        }
    },
    computed: {
        countries() {
            return this.$store.state.countries.countries;
        },
        loading() {
            return this.$store.state.countries.loadingStatus === 'notLoading';
        },
        error() {
            return this.$store.state.countries.errors.length > 0;
        },
        errorList() {
            return this.$store.state.countries.errors;
        }
    }
}
</script>
<style >
    .imgFlag {
        max-width: 80px;
        float: left;
    }
</style>