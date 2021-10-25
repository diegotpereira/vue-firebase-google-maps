<template>
  <div class="driver-view">
    <section class="top-bar">
      <div v-if="user">{{user.email}}</div>
      <div>Driver</div>
      <button class="ui button red" @click="signOutButtonPressed">Signout</button>
    </section>

    <section ref="map" class="map"></section>

    <section class="bottom-bar">
      <div class="latLngLabel">{{lat}}, {{lng}}</div>
      <button class="ui button green" @click="startLocationUpdates">
        <i class="circle dot outline icon large"></i>
        Start Location
      </button>

      <button class="ui button red" @click="stopLocationUpdates">
        <i class="circle dot outline icon large"></i>
        Stop Location
      </button>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
    data() {
        return {
            user: null,
        };
    },
     mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    });
  },
 methods: {
    signOutButtonPressed() {
        
    },
    startLocationUpdates() {},
    stopLocationUpdates() {}
 }
}
</script>


<style>
.driver-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.top-bar {
  height: 100px;
  text-align: center;
  background: white;
}
.map {
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.1);
}
.bottom-bar {
  padding: 20px 0px;
  text-align: center;
  background: white;
}
</style>