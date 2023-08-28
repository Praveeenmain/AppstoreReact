import './index.css'
const AppItem=(props)=>{
    const{Appdetails}=props
    const{ appName,imageUrl}=Appdetails
    return(
        <li className="App-Item-Card">
           
           <img  className="App-img" src={imageUrl} alt={appName}/>
           <p>{appName}</p>
          
        </li>
    )
}
export default AppItem