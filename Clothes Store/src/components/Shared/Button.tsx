import styles from './Button.module.scss'

interface Props {
    text: string,
    onClick?: () => void
}

export const Button:React.FC<Props> = ({text, onClick}) => {
    return (
        <button className={styles["button"]} onClick={() => {
            if(onClick){
                return onClick()
            }
        }}>{text}</button>
    )
}