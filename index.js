const { ExploreTrendRequest } = require('g-trends')
const objToCSV = require('objects-to-csv');

var keyword = 'bitcoin'
var iniDate = '2015-01-01'


/*  
    Google Trends provides the information daily, weekly and monthly, depending on how long
    is the range of data that is being collected.
*/

function setDateRanges(iniDate, periodicity='weekly')  {
    var condition = false
    var dateRanges = []
    var index=0
    var finDate = new Date(Date.now())

    if(periodicity == 'weekly') {
        periodicity=12
    } else {
        periodicity=6
    }

    var initialDate = new Date(Date.parse(iniDate))
    initialDate.setDate(initialDate.getDate() + 1)
    while(!condition) {
        let finalDate = new Date(initialDate)
        finalDate.setMonth(finalDate.getMonth() + periodicity)
        finalDate.setDate(finalDate.getDate() - 1)
        
        dateRanges[index] = {
            initialDate: initialDate.getFullYear()+'-'+(initialDate.getMonth()+1)+'-'+initialDate.getDate(),
            finalDate: finalDate.getFullYear()+'-'+(finalDate.getMonth()+1)+'-'+finalDate.getDate()
        }
    
        initialDate = new Date(finalDate)
        initialDate.setDate(initialDate.getDate() + 1)
    
        index++
        if(finalDate > finDate) 
            condition=true
    }

    return dateRanges
}

function collectData(keyword, dateRanges, fileName) {
    for(let i=0; i<dateRanges.length; i++) {
        const newExplorer = new ExploreTrendRequest()
        newExplorer.addKeyword(keyword)
            .between(dateRanges[i].initialDate, dateRanges[i].finalDate)
            .download().then( file => {
                const fileToCSV = new objToCSV(file)
                return fileToCSV.toDisk(`./csv/${fileName}-${dateRanges[i].initialDate}_to_${dateRanges[i].finalDate}.csv`)
            })
    } 
}

collectData(keyword, setDateRanges(iniDate, 'daily'), 'daily')

collectData(keyword, setDateRanges(iniDate), 'weekly')
