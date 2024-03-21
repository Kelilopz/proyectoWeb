




/* .item{
    background: var(--color-shadow);
    border-radius: 5px;
} */
/* .container{
    background: var(--color-negro);
    border: 0px solid gray;
    border-radius: 25px;

} */
/* .container div{
    gap: 9vh;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
} */

main h1{
    display: flex;
    align-items: center;
    margin-left: 1em;
    padding: 1.5em;
    height: 5vw;
    font-size: 3em;
    text-shadow: 0 3px 10px var(--color-primary);
    text-transform: uppercase;
    color: var(--color-shadow);
}
.h1{
    display: flex;
}
.h1 button{
    padding: 2em;
}
header{
    background-color: var(--color-body);
    box-shadow: 0 0 10px var(--color-tertiary);
    padding: 0.5em;
    height: 100vh;
    grid-area: banner;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
}
.menu img{
   
    border: .1em solid var(--color-tertiary);
    border-radius: 100%;
    background-color:  var(--color-tertiary);
    width: 3vw;

}
.menu ul li button{
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 100%;
    width: 150%;


}
.menu ul li button:hover{
    border: 2px solid white;
    cursor: pointer;
    color: black;
    background-color: orange;
}

.menu ul li{
    display: flex;
    /* background: yellow; */
    margin-top: 1em;
    align-items: center;
}

.menu ul li a{
    /* background: red; */
    font-weight: 600;
    margin-left: 0.4em;
    color: var(--color-primary);
}
.home img{
    width: 2.9em;
}
.titulo{
    display: flex;
    flex: 1;
    font-size: 1.2em;
    align-items: center;
    justify-content: center;
    color: var(--color-tertiary);
    
}
.menu{
    display: flex;
    /* background: red; */
    flex: 3;
    justify-content: center;
    align-items: center;
    font-size:1em;
    gap: 2vh;
}

.carrito{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
}
.carrito i{
    font-size: 3em;
    color: var(--color-primary);
}
.carrito a{
    font-size: 1.2em;
    color: var(--color-primary);
}
.carrito button{
    margin-left: 0.3em;
    font-size: 1.2em;
}
.copy{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
.copy a, .copy i{
    color: var(--color-primary);
}


.abajo{
    background: red;

    display: flex;
    flex: 1;
}

