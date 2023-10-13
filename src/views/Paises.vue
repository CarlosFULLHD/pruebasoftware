<template>
    <div v-if="country">
      <h1>Seleccion de PAISES - COUNTRY</h1>
        <div class="form-group">
          <label for="id">Paises </label>

          <select id="id" v-model="country.id">
            <option
              v-for="country in labels"
              :key="country.id"
              :value="country.id"
            >
              {{ country.name }}
            </option>
          </select>
        </div>

        <h1>Seleccion de DEPARTAMENTOS - STATE</h1>
        <div class="form-group">
          <label for="id">Departamentos </label>

          <select id="id" v-model="state.id">
            <option
              v-for="state in states"
              :key="state.countryId"
              :value="state.countryId"
            >
              {{ state.name }}
            </option>
          </select>
        </div>

        <h1>Seleccion de CIUDADES - CITy</h1>
        <div class="form-group">
          <label for="id">Ciudades </label>

          <select id="id" v-model="city.id">
            <option
              v-for="city in cities"
              :key="city.stateId"
              :value="city.stateId"
            >
              {{ city.name }}
            </option>
          </select>
        </div>
    </div>
    <div v-else>
      <p>Loading details...</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        country: {
          id: "",
          name: ""
        },
        state:[],
        city:[]
      };
    },

    methods: {
      fetchCOUNTRY() {
        fetch(`http://localhost:8080/api/v1/country`)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            this.country = data;
            console.log("Data country", data);
          })
          .catch((error) => {
            console.error("Error fetching Country:", error);
          });
      },
      fetchSTATE() {
        fetch(`http://localhost:8080/api/v1/state/country/${this.id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            this.labels = data;
            console.log("state:", data);
          })
          .catch((error) => {
            console.error("Error fetching state:", error);
          });
      },
      fetchCITY() {
        fetch(`GET http://localhost:8080/api/v1/city/state/${this.id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            this.country = data;
            console.log("Data city", data);
          })
          .catch((error) => {
            console.error("Error fetching city:", error);
          });
      },

    },
  };
  </script>
  
  <style scoped>
  input {
    margin: 5px;
  }
  button {
    margin-top: 15px;
  }
  </style>
