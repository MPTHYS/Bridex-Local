import React from 'react'

function HistoryTable(props) {
    const {title, row1,row2,row3,row4,row5, row6, empty}=props
    return (
        <section className="history-private">
        <div className="container">
        <div className="table-history">
            <h4>{title}</h4>
            <div className="table-history-data">
                <div style={{flex:"1"}}>{row1}</div>
                <div style={{flex:"1"}}>{row2}</div>
                <div style={{flex:"3"}}>{row3}</div>
                <div style={{flex:"2"}}>{row4}</div>
                <div style={{flex:"2"}}>{row5}</div>
                <div style={{flex:"2"}}>{row6}</div>
            </div>
            <div style={{minHeight:'290px'}} className='table-history-empty'>{empty}</div>
        </div>
        </div>
     </section>
    )
}

export default HistoryTable
