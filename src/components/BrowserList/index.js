const BrowserList = props =>{
    const {listDetails,deleteHistory} = props
    const {id,timeAccessed,logoUrl,title,domainUrl} = listDetails
    const onDelete = () =>(
        deleteHistory(id)
    )
    return (
        <li>
         <p>{timeAccessed}</p>
         <img src={logoUrl} alt={title}/>
         <p>{title}</p>
         <a href={domainUrl}>{domainUrl}</a>
         <button type="button" onClick={onDelete}>
           <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" />
         </button>
        </li>
    )
}
export default BrowserList