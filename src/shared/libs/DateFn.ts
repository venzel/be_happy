import { format } from 'date-fns'

class DateFn {
    public static formatDate(date: Date): string {
        const dateFortatted = format(date, "dd/MM/yyyy 'at' HH:mm'h'")

        return dateFortatted
    }
}

const formatDate = DateFn.formatDate

export { formatDate }
