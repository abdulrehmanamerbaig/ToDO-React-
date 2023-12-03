
import './Header.css'

function Header(){
    return (
        <header className=' overflow-hidden '>
            <div className="design position-absolute z-3 circle-1"></div>
            <div className="design position-absolute z-3 circle-2"></div>
            <div className="design2 position-absolute circle-3"></div>
            <div className="design2 position-absolute circle-4"></div>
            <h2 className=' z-3'>My Tasks</h2>
        </header>
    )
}

export default Header