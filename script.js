function calculator()
        {
            var first = parseInt(document.getElementById("first").value);
        var second = parseInt(document.getElementById("second").value);
        var operation = document.getElementById("op").value;
        var results = document.getElementById("results");
            if(isNaN(first)&&isNaN(second))
                {
                    alert("enter valid numbers");
                }
            else if(isNaN(first)||isNaN(second))
                {
                    alert("enter valid values");
                }
            else 
            {
               
        switch (operation) {
            case '+':
            var x = first + second;
            p=document.getElementById("results").innerHTML="the addition of given numbers is "+x;

            break;
            case '-':
                var x;
                x = first - second;
                p=document.getElementById("results").innerHTML="the subtraction of given numbers is "+x;
                break;
            case '*':
                var x;
                x = first * second;
                p=document.getElementById("results").innerHTML="the multiplication of given numbers is "+x;

                break;
            case '/':
                var x;
                 x = first / second;
                 p=document.getElementById("results").innerHTML="the division of given numbers is "+x;

                break;
            default:
                alert("Select an operation.");
                break;
        }
            }
        }