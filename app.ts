/*Task #15 : Changing Guest list :You just heard that one of our Guest 
make the dinner ,so you need to send out a new set of invitations,You w
think of some one else to invite.

* Start with your program from Exercise 14. Add a print statement at th
program stating the name of the guest who can't make it.
*Modify your list , replacing the name of the guest who can't make it w
of the new person you are inviting .
Print a second set of invitation messages , one for each person who is 
list*/

let Guest_List : string[] = [ "Abid", "Sabtain", "Zohair"];
for ( let i=0; i < Guest_List.length; i++){
   console.log(`Dear ${Guest_List[i]}, \nYou are invited to dinner! \n`)
}
console.log(`"Unluckily" ${Guest_List[1]} , can't come to dinner"`);

Guest_List[1]="Nayer";

console.log(`"\nAlternate List of Guest"\n`);

for ( let j=0; j < Guest_List.length; j++){
    console.log(`Dear ${Guest_List[j]}, \nYou are invited to dinner"`);
}