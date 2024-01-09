import Button from "./Button";

const ButtonList=()=>{

    
    const list = ["All", "Live", "Gaming", "Soccer", "Cooking", "Cricket","Kapil Sharma","Soccer","Dinning"];

    return (
        <div className="flex justify-evenly">
        {list.map((name) => <Button key={name} name={name} />)}
    </div>
    );

}
export default ButtonList;