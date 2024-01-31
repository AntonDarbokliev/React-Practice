import { useCallback, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemsContext } from "../../contexts/items"
import { Item } from "../../types/item"
import styles from './ItemDetails.module.scss'


export const ItemDetails = () => {
    
    const [item, setItem ] = useState<Item>()
    const [imageSlide, setImageSlide] = useState(0)
    const urlParams = useParams()
    const { getItems } = useContext(ItemsContext) 

    useEffect(() => {
        const currentItems = getItems().find(x => x._id === Number(urlParams.itemId))
        setItem(currentItems)
    },[getItems,urlParams.itemId])


    const showImage =  useCallback(() => {
        const div = document.querySelector('.images-slide')
        const divArr = (div?.children) as HTMLCollectionOf<HTMLImageElement>
            if(divArr.length > 0){
                
                for(const img of divArr){
                    img.style.display = 'none'; 
                }
                divArr[imageSlide].style.display = 'block'
            }
            
    },[imageSlide])

    useEffect(() => {
        showImage()
    },[showImage,item])
    
    
    function changeImage(bool: 'next' | 'previous') {
        if(bool === 'next'){
            console.log('Going next',imageSlide)
            setImageSlide(value => value += 1)
        }else if(bool === 'previous') {
            setImageSlide(value => value -= 1)
            console.log("Going previous: ", imageSlide)
        }
        showImage()
    }

    return (
    <>
    <div className={styles["item-details"]}>
        <div className={styles["info"]}>
            <h1>{item?.name}</h1>
            <h4>{item?.type}</h4>
            <div className="materials">
                {item?.materials.map(material => {
                    return <p>-{material}</p>
                })}
            </div>
            <h2>${item?.price}</h2>
            
            {/* <button>Add to Cart</button> */}
        </div>
        <div className={`images-slide ${styles['images-slide']}`}>
            {item?.images.map(image => {
                return (
                    <img key={image} src={image} alt="Clothing Image" className={styles["image-slide"]} />
                    )
                })}
        </div>
   </div>
        <button disabled={imageSlide <= 0} onClick={() => changeImage('previous')}>previous</button>
        <button disabled={imageSlide >= (item?.images.length ?? 3) - 1} onClick={() => changeImage('next')}>next</button>
    </>
    
    )
}