import SectionHeaders from "./SectionHeaders";
import SectionHeader from "./SectionHeaders";
import MenuItem from "./menu/MenuItem";

export default function HomeMenu(){
    return(
    <section className="text-center">
        <div className="text-center mb-4">
        <SectionHeaders 
        mainHeader={'Management And HOD'}/>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
    </section>
    );
}