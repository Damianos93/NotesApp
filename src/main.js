import { createApp } from 'vue'
import App from './App.vue'
import NewNote from "./components/NewNote.vue"
import notes from "./components/Notes.vue"
import Statistics from "./components/StatisticsSection.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import  { fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const app=createApp(App)

.component('fa', FontAwesomeIcon)
app.component("new-note",NewNote)
app.component("notes",notes)
app.component("stats-sect",Statistics)

app.mount('#app')
