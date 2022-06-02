import React from 'react'

function Alert(prop) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    prop.alert && <div className={`alert alert-${prop.alert.b} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(prop.alert.b)}</strong> : {prop.alert.a}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert    