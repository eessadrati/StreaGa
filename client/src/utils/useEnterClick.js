

const useEnterClick = (e,callback) => {
    if(e.key==="Enter"){
        e.preventDefault()
       callback()
       e.target.blur()
       e.target.focus()
     }
};

export default useEnterClick;