<template>
    <section id="boxShadow">
        <div>
            <h3>Total</h3>
            <div class="bigger">{{information.length}}</div>
        </div>
        <div>
            <h3>Completed</h3>
            <div class="bigger">{{completed}}</div>
        </div>
        <div>
            <h3>Not Completed</h3>
            <div class="bigger">{{notCompleted}}</div>
        </div>
    </section>
</template>



<script>
export default {
    props: ["information"],
    data() {
        return {
        }
    },
    computed: {
        completed() {
            return (this.information.filter(note => note.status === "Completed").length);
        },
        notCompleted() {
            return (this.information.filter(note => note.status === "Not completed").length);
        }
    }

}
</script>

<style>
section {
    background: white;
    width: 55%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 3vh;
}
#boxShadow{
box-shadow: 0px 3px 8px -3px rgba(0,0,0,0.75);


}

.bigger {
    text-align: left;
    margin-top: -20px;
    font-size: 2em;
}

h3 {
    color: gray;

}
</style>