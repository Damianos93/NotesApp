<template>
  <main class="container">
    <stats-sect :information="information"></stats-sect>
    <div>
      <table>
        <tr class="tableHeadings">
          <th @click="sortedArrayId">
            <div><input type="checkbox" @click="selectAllBoxes" /> <span>ID</span>
              <fa icon="fa-sort" class="icons" />
            </div>
          </th>
          <th @click="sortedArrayTitle">
            <div> Title
              <fa icon="fa-sort" class="icons" />
            </div>
          </th>
          <th @click="sortedArrayContent">
            <div>Content
              <fa icon="fa-sort" class="icons" />
            </div>
          </th>
          <th @click="sortedArrayStatus">
            <div> Status
              <fa icon="fa-sort" class="icons" />
            </div>
          </th>
        </tr>
        <notes v-for="info in information" :key="info.id" :information="info" :selectedInfo="selected"
          @selected="selectedBox" >
        </notes>
        <!-- @selectAllBoxes="deleteNote" -->
      </table>
      <button class="blueBackground" @click="submitNote">Add</button>
    </div>
    <footer>
      <new-note v-if="submitted" @cancel-action="cancelAction" @save-note="addNewNote"></new-note>
      <article v-if="submitted">
        <div>
          <fa icon="triangle-exclamation" /> Do you want to delete this note?
        </div>
        <div class="buttons"><button @click="cancelAction">No</button>
          <button @click="deleteNote">Yes</button>
        </div>
      </article>
    </footer>
  </main>
</template>


<script>
export default {
  data() {
    return {
      submitted: false,
      information: [{
        id: 1,
        title: "delectus aut autem",
        content: "Lorem ipsum",
        status: "New"
      },
      {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        content: "Lorem ipsum",
        status: "Completed"
      },
      {
        id: 3,
        title: "fugiat veniam minus",
        content: "Lorem ipsum",
        status: "Not completed"
      }],
      allSelected: false,
      selected: [],
    }
  },
  methods: {
   
    
    submitNote() {
      this.submitted = !this.submitted
    },
    addNewNote(title, content) {
      const newNote = {
        id: this.information.length + 1,
        title: title,
        content: content,
        status: "Not completed"
      }
      this.information.push(newNote)
    },
    cancelAction() {
      this.submitted = false
      this.selected = []
    },
    deleteNote() {
      // let newArr=this.information.filter(item => {
      //   return !this.selected.includes(item.id)})
      // console.log(newArr)
            // this.information.splice(i, 1)

      for (let i = 0; i < this.information.length; i++) {
        for (let j = 0; j < this.selected.length; j++) {
          if (i === j) {
            if(this.allSelected){
              this.information=[]
              this.selected=[]
              this.submitted=false
            }
            console.log(`i=${i} and j=${j}`)
            this.information.splice(i+1 , 1)
          }
        }
      }
    }
    ,
    selectAllBoxes() {
      this.submitted = true
      this.allSelected = !this.allSelected
      if (this.allSelected) {
        for (let i in this.information) {
          this.selected.push(this.information[i].id)
        }
      } else {
        this.selected = []

      }

    },
    selectedBox(selectedId) {
      this.submitted = true
      this.selected.push(selectedId)
    },

  },
  computed: {
    sortedArrayTitle() {
      let sortedTitles = this.information;
      sortedTitles = sortedTitles.sort((a, b) => {
        let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })
    },
    sortedArrayContent() {
      let sortedContent = this.information;
      sortedContent = sortedContent.sort((a, b) => {
        let fa = a.content.toLowerCase(), fb = b.content.toLowerCase();
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })
    },
    sortedArrayStatus() {
      let sortedStatus = this.information;
      sortedStatus = sortedStatus.sort((a, b) => {
        let fa = a.status.toLowerCase(), fb = b.status.toLowerCase();
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      })
    },
    sortedArrayId() {
      this.information.sort((a, b) => {
        return a.id - b.id
      })
    },

  }
}

</script>

<style>
body {
  background-color: rgb(248, 248, 248);
  font-family: 'Open Sans', sans-serif;
}

.tableHeadings {
  background-color: #989898;
  text-align: left;
  color: white;

}


table {
  width: 100%;
  margin-top: 4vh;
}



.container {
  margin-left: 4vw;
  margin-right: 25vw;
}

.blueBackground {
  display: block;
  margin-left: auto;
  margin-right: 0;
  background-color: #00689D;
  color: #f2f2f2;
  padding: 8px 55px;
  border-radius: 3px;
  margin-top: 15px;
  border: none;

}

button {
  cursor: pointer;
  font-weight: bold;

}

tr div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}

footer {
  width: 110%;
  display: flex;
  justify-content: space-between;
}

footer>article {
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  text-align: left;
  width: 50%;
  background-color: red;
  padding: 5px 0px;
  margin-left: 50px;
  color: white;
  border-radius: 6px;
}

footer>article {
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
}


.buttons button:nth-last-of-type(1) {
  margin-left: 20px;
  background-color: white;
  color: red;
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
}

.buttons button:nth-last-of-type(2) {
  margin-left: 20px;
  background-color: red;
  color: white;
  padding: 10px 30px;
  border-color: white;
  border-radius: 5px;
  border: 1px solid;
}
</style>