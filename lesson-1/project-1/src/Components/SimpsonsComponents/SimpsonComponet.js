import './css/style.css'
 function SimpsonComponet(props) {

     let {itemName, pic, itemDescription} = props;
     let classNameItem = 'card'
    return (
        <div>

            <div className={classNameItem}>
                <h1>The Simpsons</h1>

                <h2>{itemName}</h2>

                <img src={pic} height={300} alt=""/>

                <h4>{itemDescription}</h4>
            </div>

        </div>
    );
}

 export default SimpsonComponet;