function inputForm ({className ,id , label, type}){
    return (
        <div className={className}>
            <label form={id}>{label}</label>
            <input 
                type={type}
                id={id}
            />
        </div>
    )
}
export default inputForm