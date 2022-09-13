## 1 - Description of the Idea
The idea here is to collect data from Google Trends between certain period of time.
The program will collect all data using the keyword 'bitcoin' between a initial day
(fixed as '2015-01-01') and the final day that is the day the program will run. 

It was used two 3rd party libraries to finish the task of collecting:
(1) g-trends: responsible for collect the data from Google Trends;
(2) objects-to-csv: responsible for write the files with the data collected;

Google Trends provides the periodicity of the searched data depending on the range of dates
that is being asked for, for some months, it will be returned in records of days, for more months
of few years, it will be returned in records of weeks, and for more years it will be returned
in records of months.

The data collected will be written to CSV files, separated by the ranges of dates that are 
being asked for.

## 2 - Amount of time spent on finishing the task
I took two to three hours to finish the tasks. Searching for better solutions, studying the
libraries, developing and testing.

## 3 - Different ways tried to solve the problem
At first, I thought that would be necessary some web-scrapping solution. But, searching a little
more, it was easy to find a library that could help with the development.

## 4 - Reasons of using the current approach
The library 'G-Trends' showed to be a good solution for the task, since is easy to use and provides
enough tools for what is proposed.

## 5 - Execution
After download the source code, is necessary to install 'Node.js' in the computer, if is not already
installed. Opening a command prompt at the folder of the project, executes the command:
```
npm install
```
To install the related libraries.

And run the program, using the following command (also in the folder of the project):
```
node index.js
```

Obs.:
Is necessary to be logged in on a Google Account and also provides read and write permissions on 
the project folder.






