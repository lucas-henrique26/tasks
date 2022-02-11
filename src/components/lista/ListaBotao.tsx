interface ListaBotaoProps {
    selecionado?: boolean
    className?: string
    children: any
    onClick: (event: any) => void
}

export default function ListaBotao(props: ListaBotaoProps) {
    const borda = props.selecionado ? 
        'border-b-4 border-purple-400' : ''
    
    return (
        <button onClick={props.onClick} className={`
            text-gray-500 font-semibold hover:text-black
            focus:outline-none ${borda} ${props.className}
        `}>
            {props.children}
        </button>
    )
}