console.log("########### Which Data Structure to Use ############");

console.log(`
    ############# SOURCE OF DATA ############
    1) From the program itself : Data written into the program / source code
    2) From the UI : From user input or by user
    3) From external sources : Data fetched or get by API

    these three are the sources of data. But It has to store some where.
    i) And Datstructure Comes here.Like where to and how to store.
    ii) There are 4 built in datastructure in javascript. [Array,Object,Set,Map].And From this datastructure,now we have to decide which datastructure do I need to use.

    ########## DATA-STRUCTURE CHOOSING WAY ###########

    1) Simple List : For simple list of data we can use [Array or Set]
    2) Key/Value Pairs : If we need key or value or both then we can use [Object or Map]
      
    ######### Array VS Sets ##########
    1) Array : i) Use when we need ordered list of values (might contain duplicates)
              ii) Use when we need to manipulate data

    2) Sets: i) Use when need to work with unique values
            ii) Use when high performance is really important. Because set is 10x time faster than arrays
           iii) Used to remove duplicate values from arrays


    ######### Object VS Maps ##########
    1) Objects : i) More traditional key/value store
                ii) Easier to write and access values with dot (.) and square braces []
               iii) Use when need to use function as properties
                iv) Use when working with JSON (can convert to map)


    2) Maps : i) Better Performance
             ii) Keys can have any data type (Where object key's must be string)
            iii) Easy to iterate
             iv) Easy to compute size

              v) Use when we simply need to map key to values
             vi) Use when we need keys that are not strings

Recommanded to use MAP from now

`);