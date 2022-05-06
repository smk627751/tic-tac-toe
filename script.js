let boxes = document.querySelectorAll('.box');
let data = ["O","X"];
let slider = document.querySelector('.slider');
let audio = document.getElementById('audio')
function slide()
{
    slider.style.left = localStorage.getItem("index")*30+"px"
}
slide();
boxes.forEach(box  =>
{
    box.onclick = () =>
    {
        audio.play()
        localStorage.index;
        if(localStorage.getItem("index") == 0)
        {
            localStorage.setItem("index","1");
        }
        else
        {
            localStorage.setItem("index","0");
        }
        slider.style.left = localStorage.index*30+"px"
        if(box.textContent == '')
        {
            box.textContent = data[localStorage.index];
            box.setAttribute("value",localStorage.index);
            box.classList.add('active');
            box.onclick = () =>{};
        } 
        check();
        if(box.textContent == "O")
        {
            box.style.color = "rgb(14, 167, 96)"
        }
        else
        {
            box.style.color = "rgb(233 22 22)"
        }
    }
})
/*--------------------------------------------------------------------------------------------*/
let contain = document.querySelector('.container')
let start = document.querySelector('h1')
let ind = document.querySelector('.ind')
start.onclick = contain.onclick = () =>
{
    audio.play()
    contain.classList.remove('shrink')
    boxes.forEach(box =>
        {
          box.classList.add('in')
        })
    start.style.display="none"
    ind.style.opacity ="100%"
}

/*------------------------------------------------------------------------------------------------*/

let prompt = document.querySelector('.prompt-section');
let msg = document.getElementById('msg');
let flag = [];
//validating../
function check()
{
    let box = document.querySelectorAll('.box');
    let val = [];
    box.forEach(x => {
        val.push(x.getAttribute("value"))
    })
    //console.log(val)
    
    if(val[0] == val[1] && val[1] == val[2])
    {
        if(val[0] != '')
        {
            console.log(`${data[val[0]]} Winner`)
            msg.textContent = `${data[val[0]]} Winner`
            prompt.classList.add('visible');
        }
    }

    else if(val[3] == val[4] && val[4] == val[5])
    {
        if(val[3] != '')
        {
            console.log(`${data[val[3]]} Winner`)
            msg.textContent = `${data[val[3]]} Winner`
            prompt.classList.add('visible'); 
        }
    }

    else if(val[6] == val[7] && val[7] == val[8])
    {
        if(val[6] != '')
        {
            console.log(`${data[val[6]]} Winner`)
            msg.textContent = `${data[val[6]]} Winner`
            prompt.classList.add('visible');
        }
    }

    else if(val[0] == val[3] && val[3] == val[6])
    {
        if(val[0] != '')
        {
            console.log(`${data[val[0]]} Winner`)
            msg.textContent = `${data[val[0]]} Winner`
            prompt.classList.add('visible');
        }
    }

    else if(val[1] == val[4] && val[4] == val[7])
    {
        if(val[1] != '')
        {
            console.log(`${data[val[1]]} Winner`)
            msg.textContent = `${data[val[1]]} Winner`
            prompt.classList.add('visible');
        }
    }

    else if(val[2] == val[5] && val[5] == val[8])
    {
        if(val[2] != '')
        {
            console.log(`${data[val[2]]} Winner`)
            msg.textContent = `${data[val[2]]} Winner`
            prompt.classList.add('visible');
        }
    }

    else if(val[0] == val[4] && val[4] == val[8])
    {
        if(val[0] != '')
        {
            console.log(`${data[val[0]]} Winner`)
            msg.textContent = `${data[val[0]]} Winner`
            prompt.classList.add('visible');
        }
    }

    else if(val[2] == val[4] && val[4] == val[6])
    {
        if(val[2] != '')
        {
            console.log(`${data[val[2]]} Winner`)
            msg.textContent = `${data[val[2]]} Winner`
            prompt.classList.add('visible');
        }
    }
    else
    {
        flag.push(1)
    }
    //console.log(flag)
    let sum = 0;
    flag.forEach(x =>
        {
            sum+=x
        })
    //console.log(sum)
    let count = 0;
    val.forEach(x => 
        {
            if(x != '')
            count++;
        })
        if(count == 9)
        {
            if(sum >= 3)
            {
                msg.textContent = "Match Draw"
                msg.style.fontSize = "2em"
                prompt.classList.add('visible')
            }
        }
}

//------------------------------------------------//
document.addEventListener("dblclick", (e) =>
{
    e.preventDefault()
    document.documentElement.requestFullscreen().catch((e) => 
    {
        console.log(e)
    })
})
