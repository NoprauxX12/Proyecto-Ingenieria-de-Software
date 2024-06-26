/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';

const ContractList = ({handler, estimates, userData})=>{
    const [selected, setSelected] = useState("");
    const [state, setState]= useState("6");
    

    return(<>
        <div style={{ padding: '0.23rem', borderBottom: '1px solid #ddd', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowY: estimates.length > 0 ? 'auto' : 'hidden' }}>
                    <h2 style={{ margin: '0', fontSize: '1.8rem', color: '#333', fontFamily: 'Comfortaa, sans-serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Servicios</h2>
                    <select onChange={(e)=>{
                        setState(e.target.value);
                    }} id="" className="form-control" style={{width: "35%"}}>
                        <option value="6">En curso</option>
                        <option value="7">Finalizados</option>
                    </select>
            <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '2px', backgroundColor: '#EEE',boxShadow: "box-shadow: 4px 0 4px -2px rgba(0, 0, 0, 0.8)" }}></div>
                </div>
            <div id="estimatesList">
                {estimates.map(estimate => (<>
                    {state==="6"? (<>
                        {(estimate.state===5 || estimate.state===6) && (<>
                            <div key={estimate.id} onClick={() => {
                                    handler(estimate.id, estimate.user, estimate.state);
                                    setSelected(estimate.id);
                                    }} style={{backgroundColor: estimate.id===selected? "#EEE":"#fff", cursor: 'pointer', padding: '0.5rem', borderRadius: '0.5rem', borderBottom: "1px solid #EEE", boxSshadow: "box-shadow: 0 0 10px rgba(0, 0, 0, 0.9)"}}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
                                            {estimate.profilePhoto ? (<>
                                                <img src={`data:image/jpeg;base64,${estimate.profilePhoto}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile" />
                                            </>):(<>
                                                <img src='/images/profiledf.png' alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </>)}
                                            </div>
                                    <div style={{ fontFamily: 'Comfortaa, sans-serif', fontWeight: 'bold' }}>{estimate.name}</div>
                                    {((parseInt(estimate.user)!== parseInt(userData.user) && (estimate.state===1 || estimate.state===3)) ||  estimate.msg>0) &&(<>
                                        <div style={{width: "1.5em", height: "1.5em", borderRadius: "50%", backgroundColor: "#55ACEE", marginLeft: "2.3em", textAlign: "center"}}><p style={{color: "#fff", fontWeight: "bold"}}>{parseInt(estimate.msg)>0 ? estimate.msg: ""}</p></div>
                                    </>)}  </div>
                                <p style={{marginLeft: "1em", marginTop: "0.3em"}}>{estimate.description.slice(0,28)}...</p>
                            </div>
                    </>)}
                    </>):(<>
                        {estimate.state===parseInt(state)&& (<>
                            <div key={estimate.id} onClick={() => {
                                    handler(estimate.id, estimate.user, estimate.state);
                                    setSelected(estimate.id);
                                    }} style={{backgroundColor: estimate.id===selected? "#EEE":"#fff", cursor: 'pointer', padding: '0.5rem', borderRadius: '0.5rem', borderBottom: "1px solid #EEE", boxSshadow: "box-shadow: 0 0 10px rgba(0, 0, 0, 0.9)"}}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
                                            {estimate.profilePhoto ? (<>
                                                <img src={`data:image/jpeg;base64,${estimate.profilePhoto}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile" />
                                            </>):(<>
                                                <img src='/images/profiledf.png' alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </>)}
                                            </div>
                                    <div style={{ fontFamily: 'Comfortaa, sans-serif', fontWeight: 'bold' }}>{estimate.name}</div>
                                    {((parseInt(estimate.user)!== parseInt(userData.user) && (estimate.state===1 || estimate.state===3)) ||  estimate.msg>0) &&(<>
                                        <div style={{width: "1.5em", height: "1.5em", borderRadius: "50%", backgroundColor: "#55ACEE", marginLeft: "2.3em", textAlign: "center"}}><p style={{color: "#fff", fontWeight: "bold"}}>{parseInt(estimate.msg)>0 ? estimate.msg: ""}</p></div>
                                    </>)}  </div>
                                <p style={{marginLeft: "1em", marginTop: "0.3em"}}>{estimate.description.slice(0,28)}...</p>
                            </div>
                        </>)}
                    </>)}
                    
                </>
            ))}
        </div>
    </>);
}

export default ContractList;
