import css from './Transactions.module.css'

const TransactionHistory = ({ items }) => {
    return (
    <table className={css.container}>
        <thead>
            <tr className={css.tableRowEl}>
                <th className={css.tableHeader} >Type</th>
                <th className={css.tableHeader}>Amount</th>
                <th className={css.tableHeader}>Currency</th>
            </tr>
        </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr className={css.tableRow} key={id}>
                            <td className={css.tableData}>{type}</td>
                            <td className={css.tableData}>{amount}</td>
                            <td className={css.tableData}>{currency}</td>
                        </tr>
                    )
                })}
        </tbody>
    </table>
    )
}

export default TransactionHistory;