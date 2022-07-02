import Cols from './Cols'
export default function ReactFragment()
{
    return(
        <div>
            <h1>Table View</h1>
            <table>
                <tbody>
                    <tr key={0}>
                        <Cols />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}