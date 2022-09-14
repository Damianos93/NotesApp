# WithS
 HomeWorkAssignment

All the styles have been done in the <style></style> section that is being given by Vue. I could have done it in a seperate file with better naming conventions
and making the code DRY'er but I have decided to make everything in every component so that it can be seen that I know how to do it that way.
The icons of sorting and the danger button are not exactly the same as I have the free account icons from fontawesome and thats the only way I know how to add icons for the time being.

The main application page is the App.vue
There are 3 components: NewNote,Notes,StatisticsSection.

In order to create new notes and show all the current notes that you may have from static code or API I have created a v-for to loop through all my items.
Then I am sending the whole array there to manipulate the data and the checkboxes.

In the statistics-section I have taken the whole object as well and in order to show the Total ( which is New+Completed+NotCompleted ).
All the new notes that are being added are by default "Not Completed". That can be changed to new or completed but I have left it like that in order 
to see the changes on the screen in real time. In the pdf that you have sent me from your side the statistics section did not include the "New" information.
If needed I can add that very easily.

There is a sorting computed property for the whole heading of every heading. E.g. if you click wherever in the ID part or Title or Content or Status the sorting is going to be done from a-z or 1 to 1+. The sorting does not work the opposite way if you click the button again.

About the add a note section I created a variable in the App.vue called submitted that is initially false. If you click on any check box or the add button then
this turns to true and the whole Add section is being shown. If you click cancel or no to the question do you want to delete this note then submitted turns to false and the add note section is hidden. If you want to add notes you have to write something on both fields otherwise nothing happens. In the beggining in the props I wasnt sending the whole array ( API ) but everything differently. On the v-for i was saying item in APIarray and then sending item.id , item.title, item.status etc. then 
on the Notes file I was creating the props like: props:{id:{type:Number,required:true}} etc. But I couldnt check all the boxes and send the info like that so I started sending the whole object.

There is one thing I could not finish and that is deleting a specific item from a checkbox. I tried many different ways and in my code I have left some commented out code and the code that is not quite working for you to see. The current implementation which is a double loop works very weirdly. The chosen items are not exactly being deleted as they are chosen but very bad and wrongly. If you choose the top checkbox ( which selects and unselects all other chechboxes ( I dont know If you wanted me to add that functionallity as you didn't write so but I thought you would expect it) ) first of all it makes the submitted flip to true or false and the add note section appears or goes away respectively then it selects all boxes and if you press delete then it deletes all.
