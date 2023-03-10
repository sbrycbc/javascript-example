const pageViews = [7,4,2,9,5,4,2,20,8];

/* for(let i=0; i<= pageViews.length; i++){
    console.log("index:", i, "views", pageViews[i]);
} */

for (let i=0; i<= pageViews.length; i++){
    const currentViews = pageViews[i];
  
    let output ="";
for (let j = 1; j < currentViews; j++){
    output = output + "=";
}
console.log("index:", i, "views", currentViews, output);
}
