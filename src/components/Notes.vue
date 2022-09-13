<template>
    <tr class="whiteBackground">
        <td id="blueColor"><input type="checkbox" @click="selectAllBoxes" v-model="selected" :value="information.id"/> {{information.id}}</td>
        <td >{{information.title}}</td>
        <td >{{information.content}}</td>
        <td >{{information.status}}</td>
    </tr>
</template>


<script>
export default {
    emits:["selected","selectAllBoxes"],
    props: ["information"],
    data() {
        return {
            selected:[]
        }
    },
    methods: {
        selectBox(){
            this.$emit("selected",this.selected.id)
        },
        selectAllBoxes(){
            this.$emit("selectAllBoxes",this.selected.id)
        }
    }
}
</script>

<style>
   .whiteBackground{
    background-color: white;
    margin: 0;
   }
   #blueColor{
    color:rgb(21, 21, 246);
    font-weight: bold;
   }
   td{
    padding: 10px;
   }
</style>