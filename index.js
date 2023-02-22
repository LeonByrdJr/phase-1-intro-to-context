// Your code here


function createEmployeeRecord(employeeRecord){
const employeeObj = {firstName: employeeRecord[0],
familyName: employeeRecord[1],
title: employeeRecord[2],
payPerHour: employeeRecord[3],
timeInEvents: [],
timeOutEvents: []}
    return employeeObj
}

function createEmployeeRecords(employeeRecords){
const employeeArrObj = employeeRecords.map(employeeRecord => createEmployeeRecord(employeeRecord))
return employeeArrObj
}

function createTimeInEvent(employeeRecord, dateStamp){
    const hour = dateStamp.split(" ")[1]
    const date = dateStamp.split(" ")[0]
    const timeInEvent = {type: 'TimeIn', hour: parseInt(hour), date: date}
employeeRecord.timeInEvents.push(timeInEvent)
return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp){
    const hour = dateStamp.split(" ")[1]
    const date = dateStamp.split(" ")[0]
    const timeOutEvent = {type: 'TimeOut', hour: parseInt(hour), date: date}
employeeRecord.timeOutEvents.push(timeOutEvent)
return employeeRecord
}

function hoursWorkedOnDate(employeeRecord){
const timeIn = employeeRecord.timeInEvents[0].hour
const timeOut = employeeRecord.timeOutEvents[0].hour
const hoursWorked = parseInt((timeOut - timeIn) / 100)
return hoursWorked
}

function wagesEarnedOnDate(employeeRecord){
const timeIn = employeeRecord.timeInEvents[0].hour
const timeOut = employeeRecord.timeOutEvents[0].hour
const hoursWorked = parseInt((timeOut - timeIn) / 100)
const wages = hoursWorked * employeeRecord.payPerHour
return wages
}

function allWagesFor(employeeRecord){
const timeIn1 = employeeRecord.timeInEvents[0].hour
const timeIn2 = employeeRecord.timeInEvents[1].hour
const timeOut1 = employeeRecord.timeOutEvents[0].hour
const timeOut2 = employeeRecord.timeOutEvents[1].hour
const day1 = (timeOut1 - timeIn1)/100
const day2 = (timeOut2 - timeIn2)/100
const allHours = (day1 + day2)
const allWages = allHours * employeeRecord.payPerHour
return allWages
}

function calculatePayroll(employeeRecord){
console.log(employeeRecord)
}



