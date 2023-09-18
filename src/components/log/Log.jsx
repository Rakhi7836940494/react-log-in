import React, {useState} from 'react'
import styles from './Log.module.css'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
 

const Log = () => {
  const [email, setEmail]=useState("")
  const [password, setPassword] = useState("")
  const [showpassword, setShowpassword] = useState(false)
  const [showpasswordError, setShowPasswordError] = useState(false) 

  const submithandle=(e)=>{
    e.preventDefault();
    if (password.length<6){
        setShowPasswordError(true);
    }
    else{
      setShowPasswordError(false);
    }

  }
  return (
    <>
    <form className={styles.form} onSubmit={submithandle}>
    <h1>🔒Log in🔒</h1>
    <div id={styles.input}>
      <div className={styles.box} id={styles.box1}>
          <EmailIcon className={styles.icon} />
          <input className={styles.input1} type="text" name="email" placeholder="Enter email..." required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className={styles.box} id={styles.box2}>
          <LockIcon className={styles.icon}/>
          <input className={styles.input} type={showpassword ? "text" :  "password"} name="password" placeholder="Enter password..." required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          {!showpassword ? <VisibilityIcon className={styles.icon} onClick={()=>setShowpassword(!showpassword)}/> :  <VisibilityOffIcon className={styles.icon} onClick={()=>setShowpassword(!showpassword)}/>}
      </div>
      { showpasswordError &&  <p id={styles.passwordError}>password must be greater than 5 characters</p>}
        
    </div>
    
    <button type="submit">Log in</button>
    
    </form>                                                              

    </>
  )
}

export default Log;