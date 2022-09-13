<template>
    <section id="flex">
        <div id="leftSided">
            <h3 id="blackText">Add note</h3>
        </div>
        <form @submit.prevent>
            <input v-model="enteredTitle" type="text" placeholder="Add title"  />
            <input placeholder="Add content" v-model="enteredContent"  />
            <div>
                <button @click="saveNote">Save</button>
                <button @click="cancelAction">Cancel</button>
            </div>

        </form>
    </section>

</template>


<script>
export default {
    props: ["selected"],
    emits: ["save-note", "cancel-action"],
    data() {
        return {
            enteredTitle: "",
            enteredContent: "",
        }
    },
    methods: {
        saveNote() {
            if (this.enteredTitle.length > 0 && this.enteredContent.length > 0) {

                this.$emit("save-note", this.enteredTitle, this.enteredContent,)
            }
            this.enteredTitle = ""
            this.enteredContent = ""

        },
        cancelAction() {
            this.$emit("cancel-action")
        },
    }
}
</script>

<style>
#flex {
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;
    width: 70vh;
  
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.59);


}



#blackText {
    color: black;
    margin-top: 5vh;
}

form {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: space-around;
    height: 30vh;
}

form button:nth-of-type(1) {
    background-color: #00689D;
    color: #f2f2f2;
    padding: 8px 55px;
    border-radius: 3px;
    border: none;

}

form button:nth-of-type(2) {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    color: rgb(5, 93, 215);
    padding: 6px 55px;
    border-radius: 3px;
}

input:nth-of-type(1) {
    padding: 10px 0px;
}

input:nth-of-type(2) {
    padding: 30px 0px;
}

#leftSided {
    text-align: left;
    width: 80%;
}
</style>