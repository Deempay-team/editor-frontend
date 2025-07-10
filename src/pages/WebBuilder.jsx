import  SideBar from "../section/web-builder/SideBar"
import TopBar from "../section/web-builder/TopBar"
import RightBar from "../section/web-builder/RightBar"
import ContentSection from "../section/web-builder/ContectSection"

export default function WebBuilder(){
    return(
        <>
        <div className="flex bg-gray-100 font-sans text-gray-900">
           <SideBar/>
           <div className="h-screen flex-1 flex flex-col">
             <TopBar />
             <ContentSection />
           </div>
           <RightBar />
        </div>
        </>
    )
}