import qrimage from "qr-image";
import inquirer from "inquirer";
import fs from "fs";
inquirer
.prompt([
    {
        message:"please enter your URL",
        name:"URL",
    }
])
.then((answer)=>{
    const url = answer.URL;
    console.log(url);
    var qrImage = qrimage.image(url,{type:'png'});
    qrImage.pipe(fs.createWriteStream("website_URL.png"));
    fs.writeFile("URLText.txt",url,(error)=>{
        if (error) throw error;
        console.log("file sucessfully written");
    })
})



