<template>
    <tr class="whiteBackground">
        <td id="blueColor"><input type="checkbox" @click="selectBox" v-model="selectedInfo" :value="information.id" />
            {{information.id}}</td>
        <td>{{information.title}}</td>
        <td>{{information.content}}</td>
        <td>{{information.status}}</td>
    </tr>
</template>


<script>
export default {
    emits: ["selected", ],
    props: ["information", "selectedInfo"],
    data() {
        return {

        }
    },
    methods: {
        selectBox() {
            this.$emit("selected", this.information.id)
        },
       
    }
}
</script>

<style>
.whiteBackground {
    background-color: white;
    margin: 0;
}

#blueColor {
    color: rgb(21, 21, 246);
    font-weight: bold;
}

td {
    padding: 10px;
}
</style>