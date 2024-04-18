export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div>
            <img src="/us.jpg" className="h-auto w-auto rounded-full" alt="hod"/>

            </div>
            
            <h4 className="font-semibold text-xl my-3">Chancellor</h4>
            <p className="text-gray-500 text-sm">lorem ibhrfhruf iferfrbf ifhrefrfbbuf3urfh 3ufrufgrf  </p>
            <button className=" mt-4 bg-primary text-white rounded-full px-8 py-2">Know More</button>
            </div>
    );
}