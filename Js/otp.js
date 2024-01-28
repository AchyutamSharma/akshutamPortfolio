
// let oldText = document.getElementById("otpDisplay").innerText = " ";

let tryStyle = document.querySelector("#otpDisplay");


function otpgenerator(){

    let num = '0123456789';
    let otp = []; 
    for (let i = 1; i <= 4; i++) {
        otp += num[Math.floor(Math.random()*10)]
        
      }      
    return otp;
    }
    document.getElementById('btn-1').addEventListener('click', function() {
      let generatedOTP = otpgenerator();
      document.getElementById('otpDisplay').innerText = ` ${generatedOTP}`; // if you change here ID it show otp 
      // inside the div box but in Only one box 
      });

  document.getElementById('btn-2').addEventListener('click', function() {
  
    document.getElementById("otpDisplay").innerText = " ";
  });
  
  // document.getElementById('otpDisplay').innerText = `${oldText}`;











/*


x*y/z = 60
z = 5;
y =25'
x = 

x*x*x  * (y)2 / xyz = 625;
y = 25;
z = 1;
x =  ?;

x*x*x * (625)/xyz = 625;

x*x*x * 



y + 2x + 3z = 25

2x +2y+2z = 320;
2(x)+2(x)+2(x) = 320
2(xyz) = 320;
xyz = 320/2;
xyz = 160

*/
