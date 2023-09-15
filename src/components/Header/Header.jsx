import profile from "../../assets/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 mx-4 border-b-2 mb-8">
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={profile}></img>
        </div>
    );
};

export default Header;