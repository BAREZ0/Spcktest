var code, getIt, errorMessage;

getIt = document.getElementById("get");
errorMessage = document.getElementById("P-For-Errors");

getIt.addEventListener("click", callLinks);

function callLinks (){
  code = document.getElementById("code").value;

  switch (code){
    case "1":
      window.location.href = "#"
      break;

      
          case "2":
      window.location.href = "#";
      break;

      
      
      
      
      

      case "":
        errorMessage.innerHTML = "تکایە ژمارەکە بنووسە";
        errorMessage.style = "text-align:center;font-size:25px;color: semibold;font-family: myFirstFont ;";
        break;
  
      default:
        errorMessage.innerHTML = "ئەم ژمارەیە تۆمار نەکراوە";
        errorMessage.style = "text-align:center;font-size:25px;color: semibold;font-family: myFirstFont ;";
        break;
  
    }
  }