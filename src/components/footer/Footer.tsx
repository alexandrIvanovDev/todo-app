import cl from './Footer.module.scss'

export const Footer = () => {
    return (
        <>
            <div className={cl.footer}>Double-click to edit a todo</div>
            <div className={cl.footer}>Drag and drop to reorder list</div>
        </>
    )
}