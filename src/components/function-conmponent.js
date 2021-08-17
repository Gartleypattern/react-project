import 'bootstrap/dist/css/bootstrap.min.css';


const User = (props) => {
    return (
        <div className='container text-center pt-4'>
            <p><strong>name : </strong>{props.name}</p>
            <p><strong>age : </strong>{props.age}</p>
        </div>
    );
}


export default User;