import reactLogo from '../assets/react.svg'

export function Header(){
    return(
        <header className="p-5 flex justify-center ">
            <h1 className="text-center text-4xl">Boutique d'iphone en <span className='text-blue-400 bold'>React JS</span></h1>
            <img src={reactLogo}></img>


        </header>
    )
}