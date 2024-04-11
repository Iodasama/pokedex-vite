import {Link} from "react-router-dom";

const ChineseHeader = () => {

    const projectTitle = "Pokemon Build Project X"
    
    return (
    
        <header className="App-header">
        
            
        <p>{projectTitle}</p>
        <img src= "https://archives.bulbagarden.net/media/upload/d/d1/Pok%C3%A9mon_Gotta_Catch_%27Em_All_TW_volume_1.png" className="App-logo" alt="logo" />
        <nav>
            <ul>
                <Link to = "/">Home</Link>
                <Link to="/list100" > First 100 Pokes </Link>
                
            </ul>

        </nav>
        
        
        </header> 


    
    )}
    
    export default ChineseHeader;

   
