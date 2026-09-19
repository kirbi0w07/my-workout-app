import { CalendarProvider, WeekCalendar } from "react-native-calendars";

const HomeWeekCalendar = () => {
    return (
        <CalendarProvider
            style={{ marginTop: 10 }}
            date="2026-08-27"
            onDateChanged={(date) => {
                console.log(date);
            }}
        >
            <WeekCalendar />
        </CalendarProvider>
    )
}

export default HomeWeekCalendar