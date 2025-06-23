const sidebar=()=>{
    const SidebarOption=[
        {label:"About", path:"/about"},
        {label:"Dashboard", path:"/dashboard"},
        {label:"Task", path:"/task"},
        {label:"Skill", path:"/skill"},
        {label:"Profile", path:"/profile"},
        {label:"Note", path:"/note"},
        {label:"Task", path:"/calender"},
        {label:"setting", path:"/setting"},
        {label:"Logout", path:"/logout"},
      

    ]
return(
    <>
{
    SidebarOption.map((item)=>{
       <Link
       key={item.path}
       to={item.path}
       >
{item.label}
       </Link>
    })

}
    
    </>
)

}

export default sidebar