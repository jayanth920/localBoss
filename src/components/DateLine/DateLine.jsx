import './DateLine.css';

export default function DateLine() {
    const date = new Date();

    // Format the date with custom spacing
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }); // "Tuesday"
    const month = date.toLocaleDateString('en-US', { month: 'long' }); // "July"
    const day = date.getDate(); // "13"
    const year = date.getFullYear(); // "1971"

    const space1 = <>&nbsp;</>
    const space4 = <>&nbsp;&nbsp;&nbsp;&nbsp;</>

    // Create a formatted string with custom spaces
    const formattedDate = `${weekday}, ${month} ${day}, ${year}`;

    return (
        <div className="dataLine">
            <p>{weekday},{space4}{month}{space1}{day},{space4}{year}</p>
        </div>
    );
}
