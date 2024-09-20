function DaysUntilNewYear() {
    //Текущая дата
    let CurrentTime = new Date();
    
    //Дата следующего нового года
    let NewYearDate = new Date(CurrentTime.getFullYear() + 1, 0, 1);

    //Количество оставшихся дней до нового года
    let RemainingDays = Math.ceil((NewYearDate - CurrentTime) / (1000 * 60 * 60 *24));

    console.log('Дней до нового года: ' + RemainingDays);
}

DaysUntilNewYear();