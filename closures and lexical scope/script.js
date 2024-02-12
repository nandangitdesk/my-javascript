   function init() {
        let name = "Mozilla"; 
        function displayName() {
            console.log(name); 
        }
        displayName();
    }
    init();


    // function outerFunc (){
    //     let username = "Nandan";
    //     console.log(password);
    //     function innerFunc(){
    //         let password = 12345
    //         console.log("username:", username);
    //     }
    //     innerFunc()
    //     function innerTwoFunc(){
    //       console.log(password);
    //     }
    //     innerTwoFunc()
    // }
    // outerFunc()



       function makeFunc() {
        const name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc();

    
    function clickHandler(color){
        // document.body.style.backgroundColor = `${color}`

        return function(){
            document.body.style.backgroundColor = `${color}`
        }
    }

    document.getElementById('orange').onclick = clickHandler("orange")
    document.getElementById('green').onclick = clickHandler("green")