var names = ["Fmaily Book","Ashoak gera", "Mr Sanjeev gera", "Tejas Sardana", "Divyanshi Gera", "Mrs Noori Gera"];
    var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
  var i=0;
  function family(){
    document.getElementById("one").innerHTML=names[i];
    document.getElementById("family_img").src=images[i];
    i++;
    if(i==6){
      i=0;
    }}