/*wap to create a game of Snake , water and gun. 
the game should ask you to enter S,W or G.
 The computer should ask you to enter S,W or G. 
 It should be able to randomly generate S,W or G and declare win or loss using alert.
 Use confirm and prompt whenever required.*/


 let user = prompt("Enter S,W or G ")
 let comp1 = Math.floor(Math.random()*3);
 let comp = ["S","W","G"][cpu1]


const match = (cpu,user)=>
{
    if(comp == user)   //generated word of comp and our entered letter
    {
        return "MATCH IS TIED!!";
    }
    else if(comp == "S" && user == "W")
    {
        return "comp";
    }
    else if(comp == "W" && user =="G")
    {
        return "comp";
    }
    else if(comp =="S" && user =="G")
    {
        return "user";
    }
    else if(comp == "G" && user == "S")
    {
        return "comp";
    }
    else if(comp == "W" && user == "S" )
    {
        return "user";
    }
    else if(comp = "G" && user == "W")
    {
        return "user"
    }

}

let result = match(comp,user)
document.write('CPU:',{comp},'and user:',{user}, '/n the winner:',{result},)    

