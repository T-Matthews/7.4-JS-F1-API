//makes API call
let getDriverData = async (season,round) =>{
    try {
        let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        return response.data
    } catch{
        return round
    }
    
} 
//uses data from api call
let loadDrivers = async (season,round) =>{

    let data = await getDriverData(season,round)
    if (typeof data === "object"){
    console.log(data)
    console.log('HELLO')
    data1 = data.MRData.StandingsTable.StandingsLists[0]
    console.log(data1)
    let datatable=`
<table id="theDataTable">
  <tr class = "tablerow" >
    <th style = "text-decoration-underline" class = "tablehead">Driver</th>
    <th class = "tablehead">Position</th>
    <th class = "tablehead">Points</th>
    <th class = "tablehead">Constructor</th>
    <th class = "tablehead">Nationality</th>
  </tr>
  <tr class = "tablerow">
    <td class = "tablecol">${data1.DriverStandings[0].Driver.givenName} ${data1.DriverStandings[0].Driver.familyName}</td>
    <td class = "tablecol">${data1.DriverStandings[0].position}</td>
    <td class = "tablecol">${data1.DriverStandings[0].points}</td>
    <td class = "tablecol">${data1.DriverStandings[0].Constructors[0].name}</td>
    <td class = "tablecol">${data1.DriverStandings[0].Driver.nationality}</td>
  </tr>
  <tr class = "tablerow">
  <td class = "tablecol">${data1.DriverStandings[1].Driver.givenName} ${data1.DriverStandings[1].Driver.familyName}</td>
  <td class = "tablecol">${data1.DriverStandings[1].position}</td>
  <td class = "tablecol">${data1.DriverStandings[1].points}</td>
  <td class = "tablecol">${data1.DriverStandings[1].Constructors[0].name}</td>
  <td class = "tablecol">${data1.DriverStandings[1].Driver.nationality}</td>
</tr>
<tr class = "tablerow">
<td class = "tablecol">${data1.DriverStandings[2].Driver.givenName} ${data1.DriverStandings[2].Driver.familyName}</td>
<td class = "tablecol">${data1.DriverStandings[2].position}</td>
<td class = "tablecol">${data1.DriverStandings[2].points}</td>
<td class = "tablecol">${data1.DriverStandings[2].Constructors[0].name}</td>
<td class = "tablecol">${data1.DriverStandings[2].Driver.nationality}</td>
</tr>
<tr class = "tablerow">
<td class = "tablecol">${data1.DriverStandings[3].Driver.givenName} ${data1.DriverStandings[3].Driver.familyName}</td>
<td class = "tablecol">${data1.DriverStandings[3].position}</td>
<td class = "tablecol">${data1.DriverStandings[3].points}</td>
<td class = "tablecol">${data1.DriverStandings[3].Constructors[0].name}</td>
<td class = "tablecol">${data1.DriverStandings[3].Driver.nationality}</td>
</tr>
<tr class = "tablerow">
<td class = "tablecol">${data1.DriverStandings[4].Driver.givenName} ${data1.DriverStandings[4].Driver.familyName}</td>
<td class = "tablecol">${data1.DriverStandings[4].position}</td>
<td class = "tablecol">${data1.DriverStandings[4].points}</td>
<td class = "tablecol">${data1.DriverStandings[4].Constructors[0].name}</td>
<td class = "tablecol">${data1.DriverStandings[4].Driver.nationality}</td>
</tr>
<tr class = "tablerow">
<td class = "tablecol">${data1.DriverStandings[5].Driver.givenName} ${data1.DriverStandings[5].Driver.familyName}</td>
<td class = "tablecol">${data1.DriverStandings[5].position}</td>
<td class = "tablecol">${data1.DriverStandings[5].points}</td>
<td class = "tablecol">${data1.DriverStandings[5].Constructors[0].name}</td>
<td class = "tablecol">${data1.DriverStandings[5].Driver.nationality}</td>
</tr>
<tr class = "tablerow">
<td class = "tablecol">${data1.DriverStandings[6].Driver.givenName} ${data1.DriverStandings[6].Driver.familyName}</td>
<td class = "tablecol">${data1.DriverStandings[6].position}</td>
<td class = "tablecol">${data1.DriverStandings[6].points}</td>
<td class = "tablecol">${data1.DriverStandings[6].Constructors[0].name}</td>
<td class = "tablecol">${data1.DriverStandings[6].Driver.nationality}</td>
</tr>

</table>`



document.getElementById('contentr').insertAdjacentHTML("afterbegin",datatable)
event.preventDefault();
}
else {
    let errors = document.getElementById('#errors')
    errors.innerHtml = `Please check your input, year:YYYY, round: XX`
    errors.hidden = false
}
}

//uses form submit to activate this series of steps
let form = document.querySelector('#f1form')

form.addEventListener('submit',event =>{
    event.preventDefault();
    let driverSeason = event.path[0][0].value
    let driverRound = event.path[0][1].value
    console.log(driverSeason)
    console.log(driverRound)
    loadDrivers(driverSeason,driverRound)
    form.reset()

})

